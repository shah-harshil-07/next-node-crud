const { ObjectId } = require('mongodb');
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
            errorResponse.meta.statusCode = "500";
            errorResponse.meta.message = "Internal Server Error.";
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
            errorResponse.meta.statusCode = "500";
            errorResponse.meta.message = "Internal Server Error.";
            res.send(errorResponse);
        }
    },

    showUser: async (req, res) => {
        const id = req.params.id;
        let errorResponse = responseTemplate.error;

        try {
            const collection = database.collection('users');

            if (id.length === 24) {
                const user = await collection.findOne({ _id: ObjectId(id) });

                if (user) {
                    let successResponse = responseTemplate.success;
                    successResponse.meta.message = "User found.";
                    successResponse.data = user;
                    res.send(successResponse);
                } else {
                    errorResponse.meta.message = "User not found."
                    res.send(errorResponse);
                }
            } else {
                errorResponse.meta.message = "User not found."
                res.send(errorResponse);
            }
        } catch (err) {
            errorResponse.meta.statusCode = "500";
            errorResponse.meta.message = "Internal Server Error.";
            res.send(errorResponse);
        }
    },

    updateUser: async (req, res) => {
        const id = req.params.id;
        const requestData = req.body;
        let errorResponse = responseTemplate.error;

        try {
            const collection = database.collection('users');

            if (id.length === 24) {
                const user = await collection.findOne({ _id: ObjectId(id) });

                if (user) {
                    const data = await collection.updateOne(
                        { _id: ObjectId(id) },
                        {
                            $set: {
                                name: requestData.name,
                                email: requestData.email,
                                password: requestData.password
                            }
                        }
                    );

                    let successResponse = responseTemplate.success;
                    successResponse.meta.message = "User data updated successfully";
                    successResponse.data = data;
                    res.send(successResponse);
                } else {
                    errorResponse.meta.message = "User not found."
                    res.send(errorResponse);
                }
            } else {
                errorResponse.meta.message = "User not found."
                res.send(errorResponse);
            }
        } catch (err) {
            errorResponse.meta.statusCode = "500";
            errorResponse.meta.message = "Internal Server Error.";
            res.send(errorResponse);
        }
    }
}

module.exports = UserController;
