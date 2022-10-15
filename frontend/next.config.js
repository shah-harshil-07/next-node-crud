/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		baseURL: 'http://127.0.0.1:3001'
	},
	swcMinify: true,
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
