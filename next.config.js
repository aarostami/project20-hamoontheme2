/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/project20-hamoontheme2',
	/* env: {
		PUBLIC_URL: '/',
	}, */
	images: {
		unoptimized: true
	},
	//distDir: 'dist',
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		// ignoreBuildErrors: true
	}
}

module.exports = nextConfig
