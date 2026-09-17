/** @type {import('next').NextConfig} */
const nextConfig = { 
  images:{
   formats: ['image/avif', 'image/webp'], 
    remotePatterns:[
    {
        protocol: 'https', 
        hostname: 'i.pinimg.com',
        port:'', 
        pathname:'/**'
    }
  ]
  },
  /* config options here */
   cacheComponents:true,
};

export default nextConfig;
