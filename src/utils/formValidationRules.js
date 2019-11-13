export const validate = values => {
    let errors = {};
    if (!values.first_name) {
        errors.first_name = 'first_name address is required';
    }

    console.log(errors, 'errors');
    return errors;
};
