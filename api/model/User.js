const md5 = require('md5');
const jwt = require('jsonwebtoken');
var initModels = require("./../models/init-models");
var models = initModels();
const User = models.users;
const Validator = require('./Validator');
const config = require('./../bin/config');
const defaultSuccessResponse = config.defaultSuccessResponse;
const defaultFailureResponse = config.defaultFailureResponse;

module.exports.User = User;

var getByUsername = async username => {
    let validateResult = Validator.validateUsername({username});
    if (!validateResult.error) {
        return await User.findOne({where: {username}});
    }
    return null;
}

var register = async req => {
    let data = req.body; // expect username, password, passwordRepeat

    // validate username
    let validateUsername = Validator.validateUsername({username: data.username});
    if (!validateUsername.isSuccess) {
        return validateUsername;
    }

    // validate password
    let validatePassword = Validator.validatePassword({password: data.password, passwordRepeat: data.passwordRepeat});
    if (!validatePassword.isSuccess) {
        return validatePassword;
    }

    // check if username is exists
    let mUser = await getByUsername(data.username);
    if (mUser) {
        return {status: 0, message: "User exists!"}
    }

    // create new user
    let secretKey = process.env.API_SECRET_KEY;
    let password = md5(data.password); // password hash md5
    let newUser = await User.create({username: data.username, password});

    // update token back
    let id = newUser.dataValues.id;
    let username = newUser.dataValues.username;
    let token = jwt.sign({username, id}, secretKey);
    await User.update({token}, {where: {id}});
    let result = defaultSuccessResponse;
    result.user = {id, username, token};
    return result;
}

var login = async (req) => {
    let username = req.body.username;
    let password = req.body.password;
    let mUser = await getByUsername(username);
    if (mUser && mUser.password === md5(password)) {
        let result = defaultSuccessResponse;
        result.token = mUser.token;
        return result;
    }
    let result = defaultFailureResponse;
    result.message = 'Wrong username or password';
    return result;
}

module.exports.getByUsername = getByUsername;
module.exports.register = register;
module.exports.login = login;