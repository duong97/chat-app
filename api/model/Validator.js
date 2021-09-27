const Joi = require('joi');
const config = require('./../bin/config');
const defaultSuccessResponse = config.defaultSuccessResponse;

// validate username
// valid username return status 1, otherwise return 0
// valid username has only alplanumeric and dot, underscore. length from 4 to 40 characters
module.exports.validateUsername = data => {
    // data: expected username
    const pattern = /^[a-zA-Z0-9_.]{4,40}$/;
    // Joi schema for validate username
    const schema = Joi.object({
        username: Joi.string().required().regex(pattern)
    });
    let validateResult = schema.validate(data);
    if(validateResult.error){
        let errorDetail = validateResult.error.details[0]; // validated errors: required, min lenght ...
        let message = errorDetail.message;
        if(errorDetail.type==='string.pattern.base'){
            // username contain special characters
            message = 'Username should have alphanumeric, dot, underscore only and length from 4 - 40 characters';
        }
        return {status: 0, message}
    }
    return defaultSuccessResponse;
}

// validate password
// valid password return status 1, otherwise return 0
// valid password has min length is 6 characters
module.exports.validatePassword = data => {
    // data: expected password and passwordRepeat
    // schema for validate password
    const schema = Joi.object({
        password: Joi.string().min(6).required(),
        passwordRepeat: Joi.string().required()
    });
    let validateResult = schema.validate(data);
    if(validateResult.error){
        let message = validateResult.error.details[0].message;
        return {status: 0, message}
    }
    if(data.password !== data.passwordRepeat){
        // password repeat is different from password
        return {status: 0, message: "Password must be same as repeat"}
    }
    return defaultSuccessResponse;
}
