
#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE "api-basic-app";

    GRANT ALL PRIVILEGES ON DATABASE "api-basic-app" TO root;

EOSQL