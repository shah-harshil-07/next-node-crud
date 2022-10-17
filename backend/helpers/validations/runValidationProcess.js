const validationFnList = require('./validationFnList');
const validationMsgList = require('./validationMsgList');

const runValidationProcess = (requestData, validationFields) => {
    const errorArray = [];

    for (const field in validationFields) {
        const validationParams = validationFields[field].split('|');

        for (let i = 0; i < validationParams.length; i++) {
            const validationFn = validationFnList[validationParams[i]];

            if (!validationFn(requestData[field])) {
                const messageFunc = validationMsgList[validationParams[i]];
                errorArray.push(messageFunc(field));
            }
        }
    }

    return errorArray;
}

module.exports = runValidationProcess;