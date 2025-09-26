import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-200">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-md mx-auto flex justify-center items-center gap-6">
          <Link to="/" className="text-green-700 hover:text-green-800 font-semibold text-lg transition-colors duration-200">
            Home
          </Link>
          <Link to="/add" className="text-green-700 hover:text-green-800 font-semibold text-lg transition-colors duration-200">
            Novo estudo
          </Link>
        </div>
    </nav>