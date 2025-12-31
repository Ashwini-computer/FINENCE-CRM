import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  FileText,
  Package,
  Handshake,
  Tag,
  TrendingUp,
  ArrowRightLeft,
  Settings,
  Bell,
  LogOut,
  Banknote,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const navItems = [
    { path: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin/users", icon: Users, label: "Users" },
    { path: "/admin/kyc", icon: ShieldCheck, label: "KYC Verifications" },
    { path: "/admin/applications", icon: FileText, label: "Applications" },
    { path: "/admin/products", icon: Package, label: "Products" },
    { path: "/admin/partners", icon: Handshake, label: "Partners" },
    { path: "/admin/offers", icon: Tag, label: "Offers" },
    {
      path: "/admin/credit-improvement",
      icon: TrendingUp,
      label: "Credit Improvement",
    },
    {
      path: "/admin/loan-transfers",
      icon: ArrowRightLeft,
      label: "Loan Transfers",
    },
    { path: "/admin/notifications", icon: Bell, label: "Notifications" },
    { path: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="bg-white w-64 min-h-screen shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Banknote className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Finances Bazar</h1>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="mt-6 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-3 rounded-lg mb-1 transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 text-blue-700 border-r-4 border-blue-500"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-6 w-fit left-3 right-3 ">
        <button
          onClick={handleLogout}
          className="flex items-center  space-x-3 px-3 py-3 rounded-lg w-full text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
