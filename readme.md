# Simple Meteor Account

### Getting Started


if you have Meteor installed:
```bash
git clone git@github.com:derrickpersson/meteor-accounts.git
cd meteor-accounts
npm install
meteor
```

View the application @ `http://localhost:3000/`

If you need to install Meteor please see [meteor.com](https://www.meteor.com/install)

### Details

* Built with Meteor - using the standard Blaze UI
* jQuery for form validation & animation/responsive styles
* Uses Meteor's iron router for routes
* Accounts feature implements Meteor's accounts-password package

### Routes

![Dashboard](https://github.com/derrickpersson/meteor-accounts/master/client/assets/img/photos/userDashboard.png "Users' Dashboard")
`/` - Home, displays 'userDashboard' template if logged in, else redirects to `/register`

![Register](https://github.com/derrickpersson/meteor-accounts/master/client/assets/img/photos/register.png "Registration Page")
`/register` - Registration page

![Login](https://github.com/derrickpersson/meteor-accounts/master/client/assets/img/photos/login.png "Login Page")
`/login` - Login page for returning users

### Future Improvements & Struggles

* Adding additional test cases
    * Test the UI templates to ensure they render correctly

* Improve the UI
    * Struggled to get the 'login' icon to load properly
    * Introduce the 'terms and conditions' modal

* Improve the functionality
    * Implement a 'forgot password' feature