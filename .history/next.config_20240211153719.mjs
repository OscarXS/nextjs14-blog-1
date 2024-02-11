/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cd.sanity'
            }
        ]
    }
};

export default nextConfig;
