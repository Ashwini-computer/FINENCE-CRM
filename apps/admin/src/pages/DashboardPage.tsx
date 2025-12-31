import React from 'react';
import { useAdmin } from '../contexts/AdminContext';
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  Handshake,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const DashboardPage: React.FC = () => {
  const { stats } = useAdmin();

  const statusData = [
    { name: 'Approved', value: stats.approvedApplications, color: '#10B981' },
    { name: 'Pending', value: stats.pendingApplications, color: '#F59E0B' },
    { name: 'Rejected', value: stats.totalApplications - stats.approvedApplications - stats.pendingApplications, color: '#EF4444' }
  ];

  const monthlyData = [
    { month: 'Jan', applications: 320, approvals: 280 },
    { month: 'Feb', applications: 410, approvals: 350 },
    { month: 'Mar', applications: 380, approvals: 320 },
    { month: 'Apr', applications: 450, approvals: 390 },
    { month: 'May', applications: 520, approvals: 460 },
    { month: 'Jun', applications: 480, approvals: 420 }
  ];

  const cibilScoreData = [
    { range: '300-549', count: 1200, color: '#EF4444' },
    { range: '550-649', count: 2800, color: '#F59E0B' },
    { range: '650-749', count: 4500, color: '#10B981' },
    { range: '750-900', count: 4347, color: '#3B82F6' }
  ];

  const StatCard = ({ icon: Icon, title, value, change, changeType }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value.toLocaleString()}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {changeType === 'positive' ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              <span>{change}% from last month</span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Monitor your platform's key metrics and performance</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-2">
          <p className="text-sm text-gray-500">Last updated</p>
          <p className="text-sm font-medium text-gray-900">{new Date().toLocaleString()}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Users"
          value={stats.totalUsers}
          change={12.5}
          changeType="positive"
        />
        <StatCard
          icon={FileText}
          title="Total Applications"
          value={stats.totalApplications}
          change={8.2}
          changeType="positive"
        />
        <StatCard
          icon={CheckCircle}
          title="Approved Applications"
          value={stats.approvedApplications}
          change={15.1}
          changeType="positive"
        />
        <StatCard
          icon={Handshake}
          title="Active Partners"
          value={stats.totalPartners}
          change={3.7}
          changeType="positive"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Application Status Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value, 'Applications']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Application Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                name="Applications"
              />
              <Line
                type="monotone"
                dataKey="approvals"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                name="Approvals"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CIBIL Score Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">CIBIL Score Distribution</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={cibilScoreData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="range" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip formatter={(value) => [value, 'Users']} />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {cibilScoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { user: 'John Doe', action: 'applied for Personal Loan', amount: '₹5,00,000', time: '2 minutes ago' },
            { user: 'Jane Smith', action: 'KYC verification completed', amount: null, time: '15 minutes ago' },
            { user: 'Mike Johnson', action: 'Credit Card application approved', amount: '₹2,00,000', time: '1 hour ago' },
            { user: 'Sarah Wilson', action: 'Profile updated', amount: null, time: '2 hours ago' },
            { user: 'David Brown', action: 'Loan application rejected', amount: '₹10,00,000', time: '3 hours ago' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">
                    {activity.action}
                    {activity.amount && <span className="font-medium"> - {activity.amount}</span>}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;