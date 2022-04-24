/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    title: "Lifetechfacts Get Into Tech Program",
    titleDescription: "The best tech/coding mentorship program for you"
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
