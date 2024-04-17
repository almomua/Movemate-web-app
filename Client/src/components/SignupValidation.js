function validation(values) {

    let errors = {};

    if (!values.name) {
        errors.name = "User name is required";
    }else{
        errors.name=""
    }

    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (!/.{8,}/.test(values.password)) {
        errors.password = "Password must be 8 or more characters";
    }else if (!/\d/.test(values.password)) {
        errors.password = "Password must contain atleast 1 number";
    } else if (!/[!@#$%&?]/g.test(values.password)) {
        errors.password = "Password must contain atleast 1 special character";
    } else if (!/[A-Z]/g.test(values.password)) {
        errors.password = "Password must contain atleast 1 capitol letter";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Please confirm your password.";
    }  else if (String(values.confirmPassword).trim() !== String(values.password).trim()) {
        errors.confirmPassword = "Password confirmation doesn't match.";
    }else {
            errors.confirmPassword = ""; // Reset error message if passwords match
        }

    return errors;
}
export default validation;