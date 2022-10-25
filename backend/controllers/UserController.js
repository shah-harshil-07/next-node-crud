const database = require('../db');
const responseTemplate = require('../helpers/responseTemplate');

const UserController = {
    listUsers: async (req, res) => {
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
    }
}

module.exports = UserController;
