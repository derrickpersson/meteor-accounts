import { Meteor } from "meteor/meteor";

Router.route("/", function() {
    if (!!Meteor.userId()) {
        this.render("userDashboard");
    } else {
        this.redirect("register");
    }
});

Router.route("/register", function() {
    if (!Meteor.userId()) {
        this.render("register");
    } else {
        this.redirect("/");
    }
});

Router.route("/login", function() {
    if (!Meteor.userId()) {
        this.render("login");
    } else {
        this.redirect("/");
    }
});