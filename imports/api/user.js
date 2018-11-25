if (Meteor.isServer) {
    Accounts.validateNewUser((user) => {
        if(user.username && user.username.length >= 3) {
            return true;
        } else {
            throw new Meteor.Error(403, 'Your username must consist of at least 3 characters');
        }
    });

    // Accounts.validateNewUser((user) => {
    //     if (user.password && user.password >= 5){
    //         return true;
    //     } else {
    //         throw new Meteor.Error(403, 'Your password must be at least 5 characters long');
    //     }
    // });

    // Accounts.validateNewUser((user) => {
    //     if(user.password2 && user.password2 >= 5) {
    //         if(user.password2 === user.password){
    //             return true;
    //         } else {
    //             throw new Meteor.Error(403, 'Please enter the same password as above');
    //         }
    //     } else {
    //         throw new Meteor.Error(403, 'Your password must be at least 5 characters long');
    //     }
    // });
}