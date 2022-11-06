const baseURL = process.env.baseURL;

const UserService = {
    list: async () => {
        try {
            let response = await fetch(`${baseURL}/users/list`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('authToken')}`,
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
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            });
            response = await response.json();
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    show: async userId => {
        try {
            let response = await fetch(`${baseURL}/user/show/${userId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            });
            response = await response.json();
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    update: async (userId, userData) => {
        try {
            let response = await fetch(`${baseURL}/user/update/${userId}`, {
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            });
            response = await response.json();
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    delete: async userId => {
        try {
            let response = await fetch(`${baseURL}/user/delete/${userId}`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('authToken')}`,
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
