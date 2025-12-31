import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-4 py-12 text-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-[#0f172a] shadow-2xl p-8 text-center">
        <div className="text-6xl font-bold text-blue-500">404</div>
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-5 py-2.5 text-white font-medium shadow-lg hover:opacity-90 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
