const database = require('./db');
const responseTemplate = require('./responseTemplate');

const controller = {
    login: async (req, res) => {
        const requestData = req.body;
        let response = responseTemplate;
        let errorResponse = response.error;

        if (!requestData.email || requestData.email.length === 0) {
            errorResponse.meta.message = "email is required.";
            res.send(errorResponse);
            return;
        }

        if (!requestData.password || requestData.password.length === 0) {
            errorResponse.meta.message = "password is required.";
            res.send(errorResponse);
            return;
        }

        try {
            const collection = database.collection("users");
            const user = await collection.findOne({email: requestData.email, password: requestData.password});            

            if (user) {
                let successResponse = response.success;
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
