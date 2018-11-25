import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import "jquery-validation";

import "./register.html";


if (Meteor.isClient) {

    Template.register.onCreated(function registerOnCreated() {
        jQuery(function(){ BasePagesRegister.init(); });
    });

    Template.register.events({
        'submit form'(event) {
            event.preventDefault();
            const username = event.target["register-username"].value;
            const email = event.target["register-email"].value;
            const password = event.target["register-password"].value;
            const password2 = event.target["register-password2"].value;
            const terms = event.target["register-terms"].value;
            Meteor.call('user.insert', {
                username,
                email,
                password,
                password2,
                terms,
            }, function(error) {
                if(error){
                    console.error(error);
                }
            });
        }
    })
}

const BasePagesRegister = function() {
    // Init Register Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    const initValidationRegister = function(){
        jQuery('.js-validation-register').validate({
            errorClass: 'help-block text-right animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group > div').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('has-error');
                jQuery(e).closest('.help-block').remove();
            },
            rules: {
                'register-username': {
                    required: true,
                    minlength: 3
                },
                'register-email': {
                    required: true,
                    email: true
                },
                'register-password': {
                    required: true,
                    minlength: 5
                },
                'register-password2': {
                    required: true,
                    equalTo: '#register-password'
                },
                'register-terms': {
                    required: true
                }
            },
            messages: {
                'register-username': {
                    required: 'Please enter a username',
                    minlength: 'Your username must consist of at least 3 characters'
                },
                'register-email': 'Please enter a valid email address',
                'register-password': {
                    required: 'Please provide a password',
                    minlength: 'Your password must be at least 5 characters long'
                },
                'register-password2': {
                    required: 'Please provide a password',
                    minlength: 'Your password must be at least 5 characters long',
                    equalTo: 'Please enter the same password as above'
                },
                'register-terms': 'You must agree to the service terms!'
            }
        });
    };

    return {
        init: function () {
            // Init Register Form Validation
            initValidationRegister();
        }
    };
}();