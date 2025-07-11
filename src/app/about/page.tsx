export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">About Me – 5W1H</h1>

      {/* WHO */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">👤 Who am I?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          My name is Thai Hoang.        
          I’m deeply passionate about science, technology, and how they can be combined to create smart, real-world systems.
        </p>
      </div>

      {/* WHAT */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">What am I doing?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          I'm studying and building projects that span across AI algorithms, embedded systems, and hardware-level design using FPGAs and ASIC design flow.
        </p>
      </div>

      {/* WHY */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Why this direction?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Because I believe true intelligence in systems comes when software and hardware are tightly coupled.
          I want to create solutions that are smart, efficient, and deeply integrated — not just apps, but systems that feel alive.
        </p>
      </div>

      {/* WHEN */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">When did I start?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          I began learning embedded systems during my first year of university. Over time, my curiosity led me from simple Arduino projects
          to full-stack AI pipelines and down into hardware-level design with Verilog and FPGA.
        </p>
      </div>

      {/* WHERE */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Where do I learn & build?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          I study at university, but most of my learning comes from open-source platforms like GitHub, online courses,
          YouTube channels, and through hands-on personal projects.
        </p>
      </div>

      {/* HOW */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">How do I work & learn?</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          I follow a project-based approach: from setting a goal → learning theory → experimenting → building → testing → documenting.
          Most of my projects are shared openly, and I love combining microcontrollers, sensors, machine learning models, and even custom digital logic.
        </p>
      </div>
    </section>
  );
}
