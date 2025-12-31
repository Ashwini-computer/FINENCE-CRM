// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search, Filter, Eye, Shield, ShieldOff, Download } from 'lucide-react';

// const UsersPage: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   const users = [
//     {
//       id: '1',
//       name: 'John Doe',
//       email: 'john.doe@email.com',
//       phone: '+91 9876543210',
//       status: 'verified',
//       cibilScore: 750,
//       joinDate: '2024-01-15',
//       lastLogin: '2024-01-20',
//       totalApplications: 3,
//       approvedAmount: '₹15,00,000'
//     },
//     {
//       id: '2',
//       name: 'Jane Smith',
//       email: 'jane.smith@email.com',
//       phone: '+91 9876543211',
//       status: 'pending',
//       cibilScore: 680,
//       joinDate: '2024-01-18',
//       lastLogin: '2024-01-19',
//       totalApplications: 1,
//       approvedAmount: '₹0'
//     },
//     {
//       id: '3',
//       name: 'Mike Johnson',
//       email: 'mike.johnson@email.com',
//       phone: '+91 9876543212',
//       status: 'verified',
//       cibilScore: 720,
//       joinDate: '2024-01-12',
//       lastLogin: '2024-01-20',
//       totalApplications: 2,
//       approvedAmount: '₹8,00,000'
//     },
//     {
//       id: '4',
//       name: 'Sarah Wilson',
//       email: 'sarah.wilson@email.com',
//       phone: '+91 9876543213',
//       status: 'blocked',
//       cibilScore: 620,
//       joinDate: '2024-01-10',
//       lastLogin: '2024-01-18',
//       totalApplications: 4,
//       approvedAmount: '₹5,00,000'
//     }
//   ];

//   const filteredUsers = users.filter(user => {
//     const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          user.phone.includes(searchTerm);
//     const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
//     return matchesSearch && matchesStatus;
//   });

//   const getStatusBadge = (status: string) => {
//     const colors = {
//       verified: 'bg-green-100 text-green-800',
//       pending: 'bg-yellow-100 text-yellow-800',
//       blocked: 'bg-red-100 text-red-800'
//     };
//     return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
//   };

//   const getCibilScoreColor = (score: number) => {
//     if (score >= 750) return 'text-green-600';
//     if (score >= 650) return 'text-yellow-600';
//     return 'text-red-600';
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
//           <p className="text-gray-600 mt-1">Manage and monitor all platform users</p>
//         </div>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
//           <Download className="w-4 h-4" />
//           <span>Export Users</span>
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
//           <div className="relative flex-1 max-w-md">
//             <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search users by name, email, or phone..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <Filter className="w-4 h-4 text-gray-500" />
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="all">All Status</option>
//                 <option value="verified">Verified</option>
//                 <option value="pending">Pending</option>
//                 <option value="blocked">Blocked</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Users Table */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">User</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Contact</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">CIBIL Score</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Applications</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Approved Amount</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredUsers.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50 transition-colors">
//                   <td className="py-4 px-6">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
//                         <span className="text-white font-medium text-sm">
//                           {user.name.split(' ').map(n => n[0]).join('')}
//                         </span>
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{user.name}</p>
//                         <p className="text-sm text-gray-500">Joined {user.joinDate}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-4 px-6">
//                     <div>
//                       <p className="text-sm text-gray-900">{user.email}</p>
//                       <p className="text-sm text-gray-500">{user.phone}</p>
//                     </div>
//                   </td>
//                   <td className="py-4 px-6">
//                     <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(user.status)}`}>
//                       {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <span className={`font-semibold ${getCibilScoreColor(user.cibilScore)}`}>
//                       {user.cibilScore}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <span className="text-gray-900">{user.totalApplications}</span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <span className="font-medium text-gray-900">{user.approvedAmount}</span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <div className="flex items-center space-x-2">
//                       <Link
//                         to={`/admin/users/${user.id}`}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                       >
//                         <Eye className="w-4 h-4" />
//                       </Link>
//                       {user.status !== 'blocked' ? (
//                         <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
//                           <ShieldOff className="w-4 h-4" />
//                         </button>
//                       ) : (
//                         <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
//                           <Shield className="w-4 h-4" />
//                         </button>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredUsers.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No users found matching your criteria</p>
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-between">
//         <p className="text-sm text-gray-700">
//           Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
//           <span className="font-medium">{users.length}</span> results
//         </p>
//         <div className="flex items-center space-x-2">
//           <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
//             Previous
//           </button>
//           <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg">1</button>
//           <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UsersPage;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Search, Filter, Eye, Shield, ShieldOff, Download } from "lucide-react";

// interface User {
//   _id: string;
//   name?: string;
//   email?: string;
//   mobile?: string;
//   status?: "verified" | "pending" | "blocked";
//   createdAt: string;
// }

// const UsersPage: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");

//   /* ================= FETCH USERS ================= */
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin/users")
//       .then((res) => setUsers(res.data))
//       .catch((err) => console.error("Failed to fetch users", err)); 
//   }, []);

//   /* ================= FILTER ================= */
//   const filteredUsers = users.filter((user) => {
//     const matchesSearch =
//       (user.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (user.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (user.mobile || "").includes(searchTerm);

//     const matchesStatus =
//       statusFilter === "all" || user.status === statusFilter;

//     return matchesSearch && matchesStatus;
//   });

//   /* ================= HELPERS ================= */
//   const getStatusBadge = (status?: string) => {
//     const colors: any = {
//       verified: "bg-green-100 text-green-800",
//       pending: "bg-yellow-100 text-yellow-800",
//       blocked: "bg-red-100 text-red-800",
//     };
//     return colors[status || "pending"] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className="space-y-6">
//       {/* ================= HEADER ================= */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">
//             User Management
//           </h1>
//           <p className="text-gray-600 mt-1">
//             Manage and monitor all platform users
//           </p>
//         </div>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
//           <Download className="w-4 h-4" />
//           <span>Export Users</span>
//         </button>
//       </div>

//       {/* ================= FILTERS ================= */}
//       <div className="bg-white rounded-xl shadow-sm border p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div className="relative flex-1 max-w-md">
//             <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by name, email or mobile..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex items-center gap-2">
//             <Filter className="w-4 h-4 text-gray-500" />
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="border rounded-lg px-3 py-2"
//             >
//               <option value="all">All Status</option>
//               <option value="verified">Verified</option>
//               <option value="pending">Pending</option>
//               <option value="blocked">Blocked</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* ================= TABLE ================= */}
//       <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b">
//               <tr>
//                 <th className="text-left py-4 px-6">User</th>
//                 <th className="text-left py-4 px-6">Contact</th>
//                 <th className="text-left py-4 px-6">Status</th>
//                 <th className="text-left py-4 px-6">Joined</th>
//                 <th className="text-left py-4 px-6">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y">
//               {filteredUsers.map((user) => (
//                 <tr key={user._id} className="hover:bg-gray-50">
//                   <td className="py-4 px-6">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
//                         {(user.name || "U")[0]}
//                       </div>
//                       <div>
//                         <p className="font-medium">
//                           {user.name || "No Name"}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           Joined{" "}
//                           {new Date(user.createdAt).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="py-4 px-6">
//                     <p className="text-sm">{user.email || "-"}</p>
//                     <p className="text-sm text-gray-500">
//                       {user.mobile}
//                     </p>
//                   </td>

//                   <td className="py-4 px-6">
//                     <span
//                       className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(
//                         user.status
//                       )}`}
//                     >
//                       {(user.status || "pending").toUpperCase()}
//                     </span>
//                   </td>

//                   <td className="py-4 px-6">
//                     {new Date(user.createdAt).toLocaleDateString()}
//                   </td>

//                   <td className="py-4 px-6">
//                     <div className="flex gap-2">
//                       <Link
//                         to={`/admin/users/${user._id}`}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
//                       >
//                         <Eye className="w-4 h-4" />
//                       </Link>

//                       {user.status !== "blocked" ? (
//                         <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
//                           <ShieldOff className="w-4 h-4" />
//                         </button>
//                       ) : (
//                         <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
//                           <Shield className="w-4 h-4" />
//                         </button>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredUsers.length === 0 && (
//           <div className="text-center py-12 text-gray-500">
//             No users found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UsersPage;







import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Shield,
  ShieldOff,
  Download,
  Loader,
  Plus,
} from 'lucide-react';
import axios from 'axios';
import AddUserModal from '../components/layout/AddUserModel';

/* ================= TYPES ================= */

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: 'verified' | 'pending' | 'blocked';
  cibilScore?: number;
  totalApplications: number;
  approvedAmount: number;
  createdAt: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalUsers: number;
  limit: number;
}

/* ================= COMPONENT ================= */

const UsersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    totalUsers: 0,
    limit: 10,
  });

  /* ================= FETCH USERS ================= */

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get('/api/users', {
        params: {
          search: searchTerm,
          status: statusFilter,
          page,
          limit: pagination.limit,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.data.success) {
        setUsers(response.data.data);
        setPagination(response.data.pagination);
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  /* ================= EFFECT ================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, statusFilter]);

  /* ================= ACTIONS ================= */

  const toggleUserStatus = async (userId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'blocked' ? 'verified' : 'blocked';

      await axios.patch(
        `/api/users/${userId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId ? { ...u, status: newStatus } : u
        )
      );
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to update user status');
    }
  };

  const exportUsers = async () => {
    try {
      const response = await axios.get('/api/users/export', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.download = `users_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      alert('Failed to export users');
    }
  };

  const handleUserAdded = () => {
    fetchUsers(pagination.currentPage);
    setIsModalOpen(false);
  };

  /* ================= HELPERS ================= */

  const getStatusBadge = (status: string) => {
    const map: Record<string, string> = {
      verified: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      blocked: 'bg-red-100 text-red-800',
    };
    return map[status] || 'bg-gray-100 text-gray-800';
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  /* ================= LOADER ================= */

  if (loading && users.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  /* ================= JSX ================= */

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold"></h1>
        <div className="flex gap-3">
          {/* <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={16} /> Add User
          </button>
          <button
            onClick={exportUsers}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Download size={16} /> Export
          </button> */}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-xl border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            {/* <tr>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Actions</th>
            </tr> */}
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="px-6 py-4">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">
                    Joined {formatDate(user.createdAt)}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded ${getStatusBadge(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {formatCurrency(user.approvedAmount)}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <Link to={`/admin/users/${user._id}`}>
                    <Eye size={16} />
                  </Link>
                  <button
                    onClick={() => toggleUserStatus(user._id, user.status)}
                  >
                    {user.status === 'blocked' ? (
                      <Shield size={16} />
                    ) : (
                      <ShieldOff size={16} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUserAdded={handleUserAdded}
      />
    </div>
  );
};

export default UsersPage;



