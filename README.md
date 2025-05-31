Prerequisites:

install postgres on your computer (choose port 5432 and super username postgres password postgres)
in pg_hba.conf, change the connections to trust.
resart the service of postgres.
use psql shell and run CREATE DATABASE toran_db;

create .env file with these details (located next to src folder):
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=toran_db

for dependenices:
npm i

start backend with this command:
npx ts-node-dev src/index.ts

to clean data:
npx ts-node-dev src/clean-db.ts
