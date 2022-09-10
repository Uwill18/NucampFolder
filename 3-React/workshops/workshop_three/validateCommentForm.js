export const validateCommentForm = (values) => {
    const errors = {};

    //Learned if there are different properties, do not chain else if
    //sepearte ifs, and/or chain ifs respective to if the same property is being compared
    //otherwise the code does not show

    if (!values.rating) {
        errors.rating = 'Required';
    }
     if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters.';
    } else if (values.author.length >  15) {
        errors.author = 'Must be 15 characters or less';
    }
    return errors;

}