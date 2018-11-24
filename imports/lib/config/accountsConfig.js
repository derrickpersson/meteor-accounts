AccountsTemplates.configure({
    defaultState: "signUp",
    hideSignInLink: true,
    hideSignUpLink: true,
    negativeValidation: true,
    positiveValidation: true,
    negativeFeedback: true,
    positiveFeedback: true,
});

AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayname: "username",
        required: true,
        minLength: 3,
        errStr: "Please enter a username"
    }

])