import React, { useState } from 'react';
import { Search, Filter, Eye, Check, X, Car, ArrowRightLeft } from 'lucide-react';

const LoanTransferPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('balance_transfer');

  const balanceTransferApplications = [
    {
      id: '1',
      userId: '1',
      userName: 'John Doe',
      email: 'john.doe@email.com',
      currentLender: 'HDFC Bank',
      currentBalance: '₹8,50,000',
      currentRate: '14.5%',
      newLender: 'SBI',
      newRate: '11.8%',
      requestedAmount: '₹8,50,000',
      monthlySavings: '₹2,850',
      status: 'pending',
      appliedDate: '2024-01-18',
      documents: ['Current Loan Statement', 'Salary Slip', 'Bank Statement']
    },
    {
      id: '2',
      userId: '2',
      userName: 'Jane Smith',
      email: 'jane.smith@email.com',
      currentLender: 'ICICI Bank',
      currentBalance: '₹12,00,000',
      currentRate: '13.2%',
      newLender: 'Axis Bank',
      newRate: '10.9%',
      requestedAmount: '₹12,00,000',
      monthlySavings: '₹3,200',
      status: 'approved',
      appliedDate: '2024-01-15',
      approvedDate: '2024-01-17',
      documents: ['Current Loan Statement', 'Salary Slip', 'Bank Statement', 'Property Papers']
    }
  ];

  const loanAgainstCarApplications = [
    {
      id: '1',
      userId: '3',
      userName: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      carModel: 'Honda City 2020',
      carValue: '₹8,50,000',
      requestedAmount: '₹6,00,000',
      loanToValue: '70%',
      interestRate: '12.5%',
      tenure: '36 months',
      status: 'pending',
      appliedDate: '2024-01-20',
      documents: ['RC Copy', 'Insurance Papers', 'Car Valuation Report', 'Income Proof']
    },
    {
      id: '2',
      userId: '4',
      userName: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      carModel: 'Maruti Swift 2019',
      carValue: '₹5,50,000',
      requestedAmount: '₹3,50,000',
      loanToValue: '64%',
      interestRate: '13.2%',
      tenure: '24 months',
      status: 'approved',
      appliedDate: '2024-01-16',
      approvedDate: '2024-01-18',
      documents: ['RC Copy', 'Insurance Papers', 'Car Valuation Report', 'Income Proof', 'Address Proof']
    }
  ];

  const currentApplications = activeTab === 'balance_transfer' ? balanceTransferApplications : loanAgainstCarApplications;

  const filteredApplications = currentApplications.filter(app => {
    const matchesSearch = app.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const BalanceTransferTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left py-4 px-6 font-medium text-gray-900">User</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Current Loan</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Transfer To</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Amount</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Savings</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredApplications.map((app) => (
            <tr key={app.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {app.userName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{app.userName}</p>
                    <p className="text-sm text-gray-500">{app.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div>
                  <p className="font-medium text-gray-900">{app.currentLender}</p>
                  <p className="text-sm text-gray-500">Balance: {app.currentBalance}</p>
                  <p className="text-sm text-red-600">Rate: {app.currentRate}</p>
                </div>
              </td>
              <td className="py-4 px-6">
                <div>
                  <p className="font-medium text-gray-900">{app.newLender}</p>
                  <p className="text-sm text-green-600">Rate: {app.newRate}</p>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="font-semibold text-gray-900">{app.requestedAmount}</span>
              </td>
              <td className="py-4 px-6">
                <span className="font-medium text-green-600">{app.monthlySavings}/month</span>
              </td>
              <td className="py-4 px-6">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(app.status)}`}>
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  {app.status === 'pending' && (
                    <>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Check className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const LoanAgainstCarTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left py-4 px-6 font-medium text-gray-900">User</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Car Details</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Loan Details</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">LTV</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
            <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredApplications.map((app) => (
            <tr key={app.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {app.userName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{app.userName}</p>
                    <p className="text-sm text-gray-500">{app.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div>
                  <p className="font-medium text-gray-900">{app.carModel}</p>
                  <p className="text-sm text-gray-500">Value: {app.carValue}</p>
                </div>
              </td>
              <td className="py-4 px-6">
                <div>
                  <p className="font-medium text-gray-900">{app.requestedAmount}</p>
                  <p className="text-sm text-gray-500">Rate: {app.interestRate}</p>
                  <p className="text-sm text-gray-500">Tenure: {app.tenure}</p>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="font-medium text-blue-600">{app.loanToValue}</span>
              </td>
              <td className="py-4 px-6">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(app.status)}`}>
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  {app.status === 'pending' && (
                    <>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Check className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Loan Transfer Management</h1>
          <p className="text-gray-600 mt-1">Manage balance transfers and loan against car applications</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('balance_transfer')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'balance_transfer'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <ArrowRightLeft className="w-4 h-4" />
                <span>Balance Transfer</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('loan_against_car')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'loan_against_car'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4" />
                <span>Loan Against Car</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Stats Cards */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Applications', value: currentApplications.length, color: 'blue' },
              { label: 'Pending Review', value: currentApplications.filter(app => app.status === 'pending').length, color: 'yellow' },
              { label: 'Approved', value: currentApplications.filter(app => app.status === 'approved').length, color: 'green' },
              { label: 'Rejected', value: currentApplications.filter(app => app.status === 'rejected').length, color: 'red' }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className={`text-xl font-bold mt-1 text-${stat.color}-600`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-hidden">
          {activeTab === 'balance_transfer' ? <BalanceTransferTable /> : <LoanAgainstCarTable />}
          
          {filteredApplications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No applications found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanTransferPage;