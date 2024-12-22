export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our App!</h1>
        <p className="text-gray-600 mt-4">Explore our features and enjoy your experience.</p>
        <div className="mt-6">
          <a
            href="/Login"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
