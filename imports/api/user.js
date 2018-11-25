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
        // TODO: validate terms and conditions checked
        return true;
    })

    Meteor.methods({
        'user.insert'(data, cb) {
            if ( (data.password && data.password.length < 5) || (data.password2 && data.password2.length < 5) && data.password !== data.password2 ) {
                throw new Meteor.Error(403, 'Please check your information and re-submit');
            }
            return Accounts.createUser(data, cb);
        }
    })
}