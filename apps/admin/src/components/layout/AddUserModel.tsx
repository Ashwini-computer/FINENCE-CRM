import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Loader, Plus, X } from 'lucide-react';
import axios, { AxiosError } from 'axios';

/* =======================
   Types
======================= */

export type UserStatus = 'verified' | 'pending' | 'blocked';
export type UserRole = 'user' | 'admin';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  company: string;
  monthlyIncome: number;
  status: UserStatus;
  cibilScore: number | null;
  totalApplications: number;
  approvedAmount: number;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalUsers: number;
  limit: number;
}

interface UsersApiResponse {
  success: boolean;
  data: IUser[];
  pagination: Pagination;
}

interface ApiError {
  message: string;
}

interface NewUserFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  company: string;
  monthlyIncome: string;
  cibilScore: string;
  totalApplications: string;
  approvedAmount: string;
  status: UserStatus;
}

/* =======================
   Component
======================= */

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<NewUserFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    company: '',
    monthlyIncome: '',
    cibilScore: '',
    totalApplications: '',
    approvedAmount: '',
    status: 'pending',
  });

  /* =======================
     Fetch Users
  ======================= */

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get<UsersApiResponse>(
        'http://localhost:5000/api/users',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setUsers(res.data.data);
    } catch (err) {
      console.error('Fetch users failed', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* =======================
     Handlers
  ======================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Name, Email and Phone are required');
      return;
    }

    try {
      console.log('SENDING DATA:', formData);

      await axios.post(
        'http://localhost:5000/api/users',
        {
          ...formData,
          monthlyIncome: Number(formData.monthlyIncome) || 0,
          cibilScore: formData.cibilScore ? Number(formData.cibilScore) : null,
          totalApplications: Number(formData.totalApplications) || 0,
          approvedAmount: Number(formData.approvedAmount) || 0,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setIsModalOpen(false);
      fetchUsers();
    } catch (err) {
      const e = err as AxiosError<ApiError>;
      alert(e.response?.data?.message || 'Failed to create user');
    }
  };

  /* =======================
     UI
  ======================= */

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} /> Add User
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>CIBIL</th>
            <th>Apps</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.status}</td>
              <td>{u.cibilScore ?? 'N/A'}</td>
              <td>{u.totalApplications}</td>
              <td>₹{u.approvedAmount.toLocaleString()}</td>
              <td>
                <Link to={`/admin/users/${u._id}`}>
                  <Eye size={16} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 w-[500px] rounded space-y-3 relative">
            <button
              className="absolute top-3 right-3"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-bold">Add User</h2>

            <input name="name" placeholder="Name" onChange={handleChange} className="border w-full p-2" />
            <input name="email" placeholder="Email" onChange={handleChange} className="border w-full p-2" />
            <input name="phone" placeholder="Phone" onChange={handleChange} className="border w-full p-2" />
            <textarea name="address" placeholder="Address" onChange={handleChange} className="border w-full p-2" />
            <input name="occupation" placeholder="Occupation" onChange={handleChange} className="border w-full p-2" />
            <input name="company" placeholder="Company" onChange={handleChange} className="border w-full p-2" />
            <input name="monthlyIncome" placeholder="Monthly Income" onChange={handleChange} className="border w-full p-2" />
            <input name="cibilScore" placeholder="CIBIL Score" onChange={handleChange} className="border w-full p-2" />
            <input name="totalApplications" placeholder="Total Applications" onChange={handleChange} className="border w-full p-2" />
            <input name="approvedAmount" placeholder="Approved Amount" onChange={handleChange} className="border w-full p-2" />

            <div className="flex justify-end gap-2">
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
