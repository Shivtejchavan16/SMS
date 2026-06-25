function About() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Our Student Management System
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering students, teachers, and administrators through
            innovative technology and seamless academic management.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          About Us
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">
          <p className="text-gray-600 text-lg leading-8">
            Our Student Management System is designed to simplify academic
            operations and improve communication between students,
            teachers, and administrators. The platform provides an
            efficient way to manage courses, examinations, student
            records, and academic activities in one place.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-indigo-600 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To provide a secure, reliable, and user-friendly platform
              that enhances learning, academic management, and student
              success.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-green-600 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To become a leading digital education platform that
              transforms the future of academic management through
              innovation and technology.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;