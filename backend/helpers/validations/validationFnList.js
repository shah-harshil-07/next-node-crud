const validationFnList = {
    required: data => {
        return (data && data.length > 0) ? true : false;
    }
}

module.exports = validationFnList;
