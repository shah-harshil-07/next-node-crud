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
    }
}

export default UserService;
