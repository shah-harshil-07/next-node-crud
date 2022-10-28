/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		baseURL: 'http://127.0.0.1:3001'
	},
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true
			}
		]
	},
    rewrites: async () => {
        return [
            {
                source: '/users/add',
                destination: '/users/add-edit-user'
            },
            {
                source: '/users/edit',
                destination: '/users/add-edit-user'
            }
        ]
    }
}

module.exports = nextConfig