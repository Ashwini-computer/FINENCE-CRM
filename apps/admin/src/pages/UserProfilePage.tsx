import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  cibilScore?: number;
  totalApplications: number;
  approvedAmount: number;
  createdAt: string;
}

const UserProfilePage: React.FC = () => {
  const { id } = useParams(); // 👈 user id from URL
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  /* =====================
     FETCH USER BY ID
  ====================== */

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('USER DETAILS:', res.data.data);
      setUser(res.data.data);
    } catch (error) {
      console.error('Failed to fetch user', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (!user) {
    return <p className="p-6">User not found</p>;
  }

  /* =====================
     UI
  ====================== */

  return (
    <div className="p-6 space-y-6">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-black"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* HEADER */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6">
        <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
          {user.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
            {user.status}
          </span>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <Mail size={16} /> {user.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> {user.phone}
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Mumbai, India
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">CIBIL Score</p>
          <p className="text-2xl font-bold text-green-600">
            {user.cibilScore ?? 'N/A'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Applications</p>
          <p className="text-2xl font-bold">
            {user.totalApplications}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Approved Amount</p>
          <p className="text-2xl font-bold text-blue-600">
            ₹{user.approvedAmount.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
