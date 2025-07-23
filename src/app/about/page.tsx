export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">About Me – 5W1H</h1>

      {/* WHO */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Who am I?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Toi là Thaihoang.
        </p>
      </div>

      {/* WHAT */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">What am I doing?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Tôi đang học đại học và nghiên cứu trên lab về các thuật toán AI, hệ thống nhúng và thiết kế phần cứng với FPGA và ASIC.
        </p>
      </div>

      {/* WHY */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Why this direction?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Vì toi tin rằng sức mạnh của hệ thống thông minh đến từ sự kết hợp chặt chẽ giữa software và hardware.
        </p>
      </div>

      {/* WHEN */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">When did I start?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Toi bắt đầu học về hệ thống nhúng từ năm nhất đại học. Qua thời gian, sự đam mê cùng với sự hướng dẫn từ một người thầy đã dẫn tôi từ các dự án nhúng đơn giản đến việc xử lý dữ liệu với AI và cuối cùng là tối ưu hóa với thiết kế phần cứng trên FPGA.
        </p>
      </div>

      {/* WHERE */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Where do I learn?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Tôi học trên trường đại học, nhưng phần lớn kiến thức đến từ việc tự học qua các các nền tảng mã nguồn mở như GitHub, các khóa học trực tuyến, các kênh YouTube và qua các dự án cá nhân cũng như trên lab.
        </p>
      </div>

      {/* HOW */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">How do I learn?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Tôi theo phương pháp học dựa trên dự án: đặt mục tiêu → học lý thuyết → xây dựng → kiểm thử → tạo documentation.
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Hầu hết các dự án cá nhân (ko có project của lab) của tôi đều được chia sẻ open source trên GitHub, vậy nên nếu bạn muốn tìm hiểu sâu hơn, hãy xem qua các repository của toi nhé ^^
        </p>
      </div>
    </section>
  );
}
