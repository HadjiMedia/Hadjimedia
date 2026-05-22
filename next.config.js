/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-supabase-project.supabase.co'],
    // Add more domains as needed
  },
  // Increase body size limit for base64 image uploads
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
  },
};

module.exports = nextConfig;
