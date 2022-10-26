const database = require('../db');
const responseTemplate = require('../helpers/responseTemplate');
const runValidationProcess = require('../helpers/validations/runValidationProcess');
const { user } = require('../helpers/validations/validationParamList');

const UserController = {
    listUsers: async (_, res) => {
        try {
            const collection = database.collection('users');
            const users = await collection.find({}).toArray();

            if (users) {
                let successResponse = responseTemplate.success;
                successResponse.data = users;
                successResponse.meta.message = "List of users fetched successfully.";
                res.send(successResponse);
            }
        } catch (err) {
            let errorResponse = responseTemplate.error;
            errorResponse.meta.message = "500 Internal Server Error.";
            res.send(errorResponse);
        }
    },

    createUser: async (req, res) => {
        const requestData = req.body;
        let errorResponse = responseTemplate.error;

        const errorArray = runValidationProcess(requestData, user.create);
        if (errorArray.length > 0) {
            errorResponse.meta.messageCode = "VALIDATION_ERROR";
            errorResponse.meta.message = errorArray[0];
            res.send(errorResponse);
            return;
        }
        
        try {
            const collection = database.collection('users');
            const data = await collection.insertOne(requestData);

            let successResponse = responseTemplate.success;
            successResponse.meta.message = "User data added successfully";
            successResponse.data = data;
            res.send(successResponse);
        } catch (err) {
            let errorResponse = responseTemplate.error;
            errorResponse.meta.message = "500 Internal Server Error.";
            res.send(errorResponse);
        }
    }
}

module.exports = UserController;
