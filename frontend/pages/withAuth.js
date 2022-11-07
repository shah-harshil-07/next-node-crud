import { useRouter } from 'next/router';

const withAuth = WrappedComponent => {
    return props => {
        if (typeof window !== 'undefined') {
            const router = useRouter();
            const accessToken = localStorage.getItem('accessToken');

            if (!accessToken) {
                router.push('/');
                return null;
            }

            return <WrappedComponent {...props} />
        }

        return null;
    }
}

export default withAuth;