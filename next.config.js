/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    title: "Lifetechfacts Mentorship/Training Program",
    titleDescription: "The best, beginner-friendly, and afforable tech/coding mentorship program for you"
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
