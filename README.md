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











Features/Bugs:

* Better organization of the frontend and backend (clean up the code and improve it both visually and functionally).

* Prevent users (except admin) from editing other users' events.

* Change the calendar font to be consistent with the menu and overall site forms — all should use the same font.

* Improve the design of the created requests.

* Remove the "your name" field in Join and redesign it better.

* Remove the "You have joined the shift" alert and replace it with a styled message instead.

* Improve the design of the "My Requests" form (both the form itself and the requests that are created).

* Fix background gaps so scrolling doesn’t reveal empty sections in the background.

* Fix the issue where the icon shrinks when there’s a number in the counter.

* Improve the design of the approval card for the admin.

* Remove the admin approval alert.

* In the About section, check the issue with the title.

Add to Join (Shift Pickup Functionality):

* The idea is that a user can take a shift from someone else once they choose this option.

* The shift pickup request will be sent directly to the admin for approval.

* Once approved, the name of the user who joined will replace the proposed date in the original request.

