'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* Phần mở đầu */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I'm Thai Hoang</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Exploring the full stack from intelligent algorithms to embedded systems, and all the way down to custom hardware.
        </p>
      </div>

      {/* Phần 1: AI/Software */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/ai-ml.png" // Đặt file ảnh vào public/images
          alt="AI & Machine Learning"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold">AI & Machine Learning</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Starting from intelligent algorithms: Linear Regression, Object Detection, Model Training using Python, Scikit-learn, and TensorFlow.
            AI is the brain that powers smart decisions in real-world applications.
          </p>
        </div>
      </div>

      {/* Phần 2: Embedded/IoT */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <Image
          src="/images/embedded.png"
          alt="Embedded IoT"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold">Embedded & IoT</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Deploying AI models on microcontrollers, peripheral devices, interacting with sensors and real-time systems.
            This is where the AI gets connected to the physical world.
          </p>
        </div>
      </div>

      {/* Phần 3: Hardware – FPGA & ASIC */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/chip.png"
          alt="FPGA and ASIC"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold">FPGA & ASIC Design</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Going deeper into the hardware: designing digital logic using Verilog, synthesizing to FPGA boards, and eventually learning how to build custom ICs (ASIC) for ultimate optimization and performance.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 space-x-4">
        <Link href="/projects" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Explore Projects
        </Link>
        <Link href="/blog" className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
          Read Blog
        </Link>
      </div>
    </section>
  );
}
