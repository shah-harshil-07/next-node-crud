import Login from "./login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = WrappedComponent => {
    return props => {
        const [userAuthenticated, setUserAuthenticated] = useState(false);
        const router = useRouter();

        useEffect(() => {
            if (window) {
                const authToken = localStorage.getItem('authToken');
                const _userAuthenticated = authToken ? true : false;
                setUserAuthenticated(_userAuthenticated);

                if (!_userAuthenticated) {
                    router.push('/login');
                }
            }
        }, []);

        return <>{userAuthenticated ? <WrappedComponent {...props} /> : <Login />}</>;
    }
}

export default withAuth;