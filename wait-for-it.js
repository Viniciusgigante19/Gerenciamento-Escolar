// initNode/wait-for-postgres.js
import net from "net";

export async function waitForPostgres(host = process.env.POSTGRES_HOST || "localhost", port = parseInt(process.env.POSTGRES_PORT || "5432", 10)) {
  const maxAttempts = 30;
  const retryInterval = 1000;
  let attempts = 0;

  return new Promise((resolve, reject) => {
    function tryConnect() {
      const socket = new net.Socket();

      socket.setTimeout(retryInterval);
      socket.once("error", handleError);
      socket.once("timeout", handleError);

      socket.connect(port, host, () => {
        console.log(`✅ Postgres está pronto em ${host}:${port}`);
        socket.end();
        resolve();
      });

      function handleError() {
        socket.destroy();
        attempts++;
        if (attempts >= maxAttempts) {
          reject(new Error(`❌ Falha ao conectar ao Postgres em ${host}:${port}`));
          return;
        }
        console.log(`⏳ Esperando Postgres em ${host}:${port}... (${attempts})`);
        setTimeout(tryConnect, retryInterval);
      }
    }

    tryConnect();
  });
}
