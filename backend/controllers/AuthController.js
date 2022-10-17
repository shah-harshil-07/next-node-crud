const database = require('../db');
const responseTemplate = require('../helpers/responseTemplate');
const runValidationProcess = require('../helpers/validations/runValidationProcess');
const { auth } = require('../helpers/validations/validationParamList');

const controller = {
    login: async (req, res) => {
        const requestData = req.body;
        let errorResponse = responseTemplate.error;

        const errorArray = runValidationProcess(requestData, auth.login);
        if (errorArray.length > 0) {
            errorResponse.meta.messageCode = "VALIDATION_ERROR";
            errorResponse.meta.message = errorArray[0];
            res.send(errorResponse);
            return;
        }

        try {
            const collection = database.collection("users");
            const user = await collection.findOne({email: requestData.email, password: requestData.password});            

            if (user) {
                let successResponse = responseTemplate.success;
                successResponse.data = user;
                successResponse.meta.message = "User data fetched successfully.";
                res.send(successResponse);
            } else {
                errorResponse.meta.message = "Invalid credentials.";
                res.send(errorResponse);
            }
        } catch (err) {
            errorResponse.meta.message = "500 Internal Server Error.";
            res.send(errorResponse);
        }
    }
}

module.exports = controller;
