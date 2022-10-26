const validationFnList = {
    required: data => {
        return data ? true : false;
    },
    textOnly: data => {
        const regex = new RegExp("[^a-zA-Z\\s]");
        return !regex.test(data);
    },
    email: data => {
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g
        return regex.test(data);
    },
    strongPassword: data => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
        return regex.test(data);
    }
}

module.exports = validationFnList;
