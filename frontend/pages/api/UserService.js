const baseURL = process.env.baseURL;

const UserService = {
    list: async () => {
        try {
            let response = await fetch(`${baseURL}/users/list`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            return response;
        } catch (err) {
            console.log(err);
        }
    },
    add: async userData => {
        try {
            let response = await fetch(`${baseURL}/user/create`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            return response;
        } catch (err) {
            
        }
    }
}

export default UserService;
