import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'vi'],  // các ngôn ngữ hỗ trợ
    defaultLocale: 'en',    // ngôn ngữ mặc định
  },
};

export default nextConfig;
