const responseTemplate = {
    error: {
        meta: {
            status: false,
            statusCode: '200',
            messageCode: 'ERROR',
            message: ''
        },
        data: null
    },
    success: {
        meta: {
            status: true,
            statusCode: '200',
            messageCode: 'SUCCESS',
            message: ''
        },
        data: null
    }
}

module.exports = responseTemplate;