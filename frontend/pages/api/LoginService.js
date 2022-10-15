const baseURL = process.env.baseURL;

const LoginService = {
    login: async data => {
        try {
            let response = await fetch(`${baseURL}/login`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
};

export default LoginService;
