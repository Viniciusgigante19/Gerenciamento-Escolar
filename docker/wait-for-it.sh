#!/usr/bin/env bash
# wait-for-it.sh

set -e

host="$1"
shift

port=5432
if [[ $1 =~ ^[0-9]+$ ]]; then
  port=$1
  shift
fi

until pg_isready -h "$host" -p "$port"; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec "$@"
