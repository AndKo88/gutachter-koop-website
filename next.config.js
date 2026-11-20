/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'files.manuscdn.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
};

nextConfig.redirects = async () => [
  { source: '/post/anhanger-vermietung-ludenscheid-partnerschaft-zwischen-gutachter-koop-und-aral-brugge', destination: '/blog', permanent: true },
  { source: '/post/ihr-unfallgegner-hat-eine-versicherung-sie-haben-jetzt-den-r5', destination: '/blog', permanent: true },
  { source: '/post/steinschlag-reparieren-oder-scheibe-austauschen', destination: '/blog', permanent: true },
];

module.exports = nextConfig;
