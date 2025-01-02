import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-800 to-purple-700">
      <div className="text-white text-4xl font-bold mb-12">
        <h1>Welcome to the Dashboard</h1>
      </div>
      <div className="space-y-8">
        <Link
          href="/AdminDashboard"
          className="block w-64 h-32 bg-opacity-40 backdrop-blur-md bg-gray-800 text-xl font-semibold text-white rounded-lg shadow-lg hover:bg-black hover:scale-105 hover:translate-y-2 text-center flex items-center justify-center transition duration-300 ease-in-out"
        >
          Admin Dashboard
        </Link>
        <Link
          href="/UserDashboard"
          className="block w-64 h-32 bg-opacity-40 backdrop-blur-md bg-gray-800 text-xl font-semibold text-white rounded-lg shadow-lg hover:bg-black hover:scale-105 hover:translate-y-2 text-center flex items-center justify-center transition duration-300 ease-in-out"
        >
          User Dashboard
        </Link>
        <Link
          href="/CalendarView"
          className="block w-64 h-32 bg-opacity-40 backdrop-blur-md bg-gray-800 text-xl font-semibold text-white rounded-lg shadow-lg hover:bg-black hover:scale-105 hover:translate-y-2 text-center flex items-center justify-center transition duration-300 ease-in-out"
        >
          Calendar View
        </Link>
      </div>
    </div>
  );
}
