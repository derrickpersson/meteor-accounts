import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";

import "./login.html";
import "jquery-validation";

if (Meteor.isClient) {

    Template.login.onCreated(function loginOnCreated() {
        jQuery(function(){ BasePagesLogin.init(); });
    });

    Template.login.events({
        'submit form'(event) {
            event.preventDefault();
            const username = event.target["login-username"].value;
            const password = event.target["login-password"].value;
            Meteor.loginWithPassword(
                username,
                password, 
                function(error) {
                    if(error){
                        console.error(error);
                    }
            });
        },
        
        'change .form-control'(event) {
            if(event.target.value) {
                $('.form-control').parent().addClass('open');
            } else {
                $('.form-control').parent().removeClass('open');
            }
        }
    })
}

const BasePagesLogin = function() {
    // Init Login Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    const initValidationLogin = function(){
        jQuery('.js-validation-login').validate({
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
                'login-username': {
                    required: true,
                    minlength: 3
                },
                'login-password': {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                'login-username': {
                    required: 'Please enter a username',
                    minlength: 'Your username must consist of at least 3 characters'
                },
                'login-password': {
                    required: 'Please provide a password',
                    minlength: 'Your password must be at least 5 characters long'
                }
            }
        });
    };

    return {
        init: function () {
            // Init Login Form Validation
            initValidationLogin();
        }
    };
}();