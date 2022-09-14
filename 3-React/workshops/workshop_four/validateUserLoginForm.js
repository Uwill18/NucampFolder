export const validateUserLoginForm = (values) => {
    const errors = {};

    //Learned if there are different properties, do not chain else if
    //sepearte ifs, and/or chain ifs respective to if the same property is being compared
    //otherwise the code does not show

    if (!values.username || !values.password) {
        errors.username = 'Required';
        errors.password = 'Required';
    }
     if (values.username.length < 6) {
        errors.username = 'Must be at least 6 characters.';
    } else if (values.username.length >  15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (values.password.length < 8) {
        errors.password = 'Must be at least 8 characters.';
    }
    return errors;

}