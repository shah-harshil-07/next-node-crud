const validationParamList = {
    auth: {
        login: {
            email: 'required',
            password: 'required',
        }
    },
    user: {
        create: {
            name: 'required|textOnly',
            email: 'required|email',
            password: 'required|strongPassword',
        },
        update: {
            name: 'required|textOnly',
            email: 'required|email',
            password: 'required|strongPassword',
        }
    },
}

module.exports = validationParamList;