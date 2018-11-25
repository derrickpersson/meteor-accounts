import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
    Accounts.validateNewUser((user) => {
        if(user.username && user.username.length >= 3) {
            return true;
        } else {
            throw new Meteor.Error(403, 'Your username must consist of at least 3 characters');
        }
    });

    Accounts.validateNewUser((user) => {
        if(user.email) {
            return true;
        } else {
            throw new Meteor.Error(403, 'Your email must not be blank');
        }
    });

    Accounts.onCreateUser((options, user) => {
        if ( options.terms ){
            const customizedUser = Object.assign({ terms: options.terms }, user);
            if(options.profile) {
                customizedUser.profile = options.profile;
            }
            return customizedUser;
        } else {
            throw new Meteor.Error(403, 'You must accept terms and conditions');
        }
    });
}