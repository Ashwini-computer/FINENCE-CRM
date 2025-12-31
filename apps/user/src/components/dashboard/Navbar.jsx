import { Button } from "@/components/ui/button";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";

export default function Navbar({ setSidebarOpen, user, handleLogout }) {
  return (
    <div className="w-full bg-white h-16 fixed top-0 left-0 z-50 shadow">
      <div className="max-w-6xl mx-auto h-full px-4 flex justify-between items-center">
        {/* Left - Toggle + Logo */}
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle Button (visible on small screens) */}
          <button
            className="sm:hidden p-2"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <RiMenu2Fill size={24} />
          </button>

          <div onClick={handleLogout} className="cursor-pointer">
            <img loading="lazy" src="/logo.png" alt="logo" className="w-32" />
          </div>
        </div>

        {/* Right - Profile */}
        <Link to="/myaccount/profile">
          <Button
            size="sm"
            variant="secondary"
            className="text-blue-950 px-6 flex gap-1 capitalize"
          >
            <RiUserLine />
            {user?.name?.split(" ")[0] || ""}
          </Button>
        </Link>
      </div>
    </div>
  );
}
