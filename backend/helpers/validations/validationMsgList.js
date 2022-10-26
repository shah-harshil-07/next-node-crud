const validationMsgList = {
    required: field => {
        return `${field} is required.`;
    },
    textOnly: field => {
        return `only letters and whitespace characters are allowed in ${field}`;
    },
    email: field => {
        return `${field} must contain valid email address`;
    },
    strongPassword: field => {
        return `${field} must have atleast 8 characters, one uppercase letter, one lowercase letter, one number and one special character.`;
    }
}

module.exports = validationMsgList;
