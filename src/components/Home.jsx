import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Navbar */}
      <div className="flex justify-end p-4 bg-white shadow">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Modern Websites with React & Tailwind
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Fast, responsive, and beautiful UI components for your next project.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition cursor-pointer">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">⚡ Fast Development</h3>
            <p className="text-gray-600">
              Build UI quickly with utility-first Tailwind CSS classes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">📱 Fully Responsive</h3>
            <p className="text-gray-600">
              Looks great on mobile, tablet, and desktop screens.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">🎨 Modern Design</h3>
            <p className="text-gray-600">
              Clean and professional design with minimal effort.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© 2026 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
