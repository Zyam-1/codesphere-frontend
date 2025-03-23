export default function AboutCompany() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-center lg:text-left">
      {/* Title */}
      <h2 className="text-3xl font-semibold">Short Story About Our Company</h2>

      {/* Underline */}
      <div className="w-16 h-1 bg-teal-500 mt-2 mx-auto lg:mx-0"></div>

      {/* Main Description */}
      <p className="mt-4 text-lg text-gray-700">
        Our company started with the mission to achieve outstanding results and
        creative solutions on all our projects. The past 2 years have brought
        combined expertise that has made our clients trust us through top-level
        work.
      </p>

      {/* Two-Column Layout for Additional Info */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-600">
        <p>
          Since our start, our top priority has been forming deep customer
          connections by knowing their requirements better than they do and
          giving them better service outcomes. Our dedication shines through
          each job as we have successfully delivered projects for over 150
          satisfied customers.
        </p>
        <p>
          Our organization at <span className="font-semibold">CodeSphere</span>{" "}
          transforms regularly to bring clients the best possible solutions. Our
          path moves forward because we love our work and put our full efforts
          into reaching our goal to help others.
        </p>
      </div>
    </section>
  );
}
