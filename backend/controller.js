const database = require('./db');

const controller = {
    login: async (req, res) => {
        const requestData = req.body;

        if (requestData.email && requestData.password) {
            try {
                const collection = database.collection("users");
    
                const user = await collection.findOne({email: requestData.email, password: requestData.password});
                res.send(user);
            } catch (err) {
                console.log(err);
            }
        } else {
            res.send("Validation Error");
        }
    }
}

module.exports = controller;
