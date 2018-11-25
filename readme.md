# Simple Meteor Account

### Getting Started

`git clone git@github.com:derrickpersson/meteor-accounts.git`
`cd meteor-accounts`
`npm install`
`meteor` or `npm start`

View the application @ `http://localhost:3000/`

### Details

* Built with Meteor - using the standard Blaze UI
* jQuery for form validation & animation/responsive styles
* Uses Meteor's iron router for routes
* Accounts feature implements Meteor's accounts-password package

### Routes

`/` - Home, displays 'userDashboard' template if logged in, else redirects to `/register`
`/register` - Registration page
`/login` - Login page for returning users

### Future Improvements & Struggles

* Adding additional test cases
    * Test the UI templates to ensure they render correctly

* Improve the UI
    * Struggled to get the 'login' icon to load properly
    * Introduce the 'terms and conditions' modal

* Improve the functionality
    * Implement a 'forgot password' feature