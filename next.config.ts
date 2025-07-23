// next.config.ts

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // tắt lỗi eslint khi build trên Vercel
  },
};

export default nextConfig;