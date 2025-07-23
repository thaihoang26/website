'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* Phần mở đầu */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi... (^_^)</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Khám phá các project từ các thuật toán AI, hệ thống nhúng đến việc triển khai trên phần cứng máy tính.
        </p>
      </div>

      {/* AI */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/ai-ml.png"
          alt="AI"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold">AI, Machine Learning & Deep Learning</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Bắt đầu từ những thuật toán Machine Learning cơ bản như Linear Regression, K Means Clustering,... đến các mô hình Deep Learning phức tạp hơn như CNN và RNN.
            AI là bộ não của các ứng dụng thông minh, giúp máy tính hiểu và xử lý dữ liệu một cách hiệu quả.
          </p>
        </div>
      </div>

      {/* Embedded/IoT */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <Image
          src="/images/embedded.png"
          alt="Embedded"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold">Embedded & IoT</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Triển khai phần mềm trên các vi điều khiển, cảm biến và thiết bị IoT để tạo ra các ứng dụng thông minh.
            Đây là nơi AI kết nối với thế giới vật lý, từ việc thu thập dữ liệu đến điều khiển thiết bị.
          </p>
        </div>
      </div>

      {/* Hardware – FPGA & ASIC */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/chip.png"
          alt="IC"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold">IC Design</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Đi sâu vào phần cứng, thiết kế digital, analog IC và triển khai lên FPGA, với mục tiêu tối ưu hóa và hiệu năng.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 md:flex-nowrap md:space-x-4">
        <Link href="/projects" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Explore Projects
        </Link>
        <Link href="/blog" className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
          Read Blog
        </Link>
        <Link href="/about" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          About Me
        </Link>
        <Link href="/contact" className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
