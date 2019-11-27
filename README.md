# Voila Home Buying Tracker

The Voila Home Buying App is a mobile-first web application that guides home-buyers step-by-step through the process of purchasing a home. The application allows users to track exactly what step they are on, what is coming next, and what documents are needed in order to progress. These documents are all stored in one location: the Voila Vault, a personalized dropbox for the user. From the app, buyers can request showings, make offers, and schedule appraisals and inspections. Agents can upload all the relevant documents and manage multiple clients’ journeys in one place. Agents can also add, update, and remove additional clients, other agents or team members, and vendors such as insurance agents, inspectors, and so on.
​
## Built With
​
React, Redux, Redux-sagas, Express, Passport, PostgreSQL, Nodemailer, SweetAlerts2, and Material UI

for a full list of dependencies, please see the package.json file.
​
## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development purposes. See deployment for notes on how to deploy the project on a live system.
​
### Prerequisites
​
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
​

### Create database and table​s

* Create a datbase named 'voila'. If you would like to name your database something else, you will need to change `voila` to the name of your new database name in `server/modules/pool.js`
* See the database.sql files for the tables and initial data to set up your database. 

​
### Installing

* Open a new terminal window
* Navigate to the project directory path
* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* In a terminal window, type `npm run server`
* In another terminal window, type `npm run client`
* Navigate to `localhost:3000`
​
### Initial Setup - admin

This application is designed so that the main administrator is the one who creates all other users through the admin dashboard. To initialize an administrator for first log-in navagate to http://localhost:3000/#/register to register. For production code, remove the code in app.js that navigates to this register page. 

### Setting Up Nodemailer
* Steps for using Nodemailer to send email:
    - Make sure you have run `npm install`, "nodemailer" should be located in dependencies in package.json file
    - Add to your `.env` file:
        - EMAIL = (your email here) 
        - PASSWORD = (your email password here)
    - Note: `.env` file does not get pushed up to Github
    - This will authorize transporter object in `node.mailer.router.js` to send/receive email from your account (where you see process.env.EMAIL and process.env.PASSWORD)
    - With the way Google's email security works, you will need to go to this address [https://myaccount.google.com/lesssecureapps] and toggle "Allow less secure apps" to ON for your account in order to use Nodemailer. More information can be found here: [https://community.nodemailer.com/using-gmail/].
​
​
### Completed Features
​
- [x] Admin can create new clients and administrators
- [x] Admin can update and delete client and administrator information
- [x] Admin can add, update and delete vendors 
- [x] Admin can view each client's individual byuer journey and update step completion status
- [x] Buyer can view individualized buyer journey steps and whether or not each step is complete
- [x] Buyer can view vendor lists for inspection and insurance vendors
- [x] Buyer can add their individual insurance and inspection information when booked
- [x] Buyer can update home buying criteria, request showings and request to make an offer on a home
- [x] Admin will receive email when buyer updates buying criteria, requests showing or requests to make an offer
- [x] Admin can enter in details for final walk-through and closing day for buyer to view
- [x] Each user can update/change their password 
- [x] Buyer can view information about each step in the buying process

​
### Next Steps
​
Features that you would like to add at some point in the future.
​
- [ ] Add the Seller's journey
​
## Deployment
​
1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
7. In the deploy section, select manual deploy
​
## Authors
​
* Mike Lynch
* Khou Thao
* Ryan McCartan
* See Yang
* Naomi Price
​
​
## Acknowledgments
​
* Thank you to Prime Digital Academy for teaching us all we know and letting us soar. 




