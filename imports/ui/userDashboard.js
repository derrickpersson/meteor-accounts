import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

import "./userDashboard.html";

Template.userDashboard.events({
    'click #logout'(event){
        event.preventDefault();
        Meteor.logout();
    }
})