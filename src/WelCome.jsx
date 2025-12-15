export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">Welcome 👋</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          We're glad you're here! This is a simple welcome page built with React and Tailwind CSS.
        </p>
        <button className="px-6 py-3 rounded-2xl bg-gray-800 text-white hover:bg-gray-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
