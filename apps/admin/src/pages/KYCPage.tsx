import React, { useState } from 'react';
import { Search, Filter, Eye, Check, X, Download, FileText, Image } from 'lucide-react';

const KYCPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const kycApplications = [
    {
      id: '1',
      userId: '1',
      userName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 9876543210',
      panNumber: 'ABCDE1234F',
      aadhaarNumber: '1234-5678-9012',
      status: 'pending',
      submittedDate: '2024-01-20',
      documents: {
        panCard: 'pan_john_doe.pdf',
        aadhaarFront: 'aadhaar_front_john.jpg',
        aadhaarBack: 'aadhaar_back_john.jpg',
        selfie: 'selfie_john.jpg'
      }
    },
    {
      id: '2',
      userId: '2',
      userName: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+91 9876543211',
      panNumber: 'FGHIJ5678K',
      aadhaarNumber: '5678-9012-3456',
      status: 'approved',
      submittedDate: '2024-01-18',
      verifiedDate: '2024-01-19',
      documents: {
        panCard: 'pan_jane_smith.pdf',
        aadhaarFront: 'aadhaar_front_jane.jpg',
        aadhaarBack: 'aadhaar_back_jane.jpg',
        selfie: 'selfie_jane.jpg'
      }
    },
    {
      id: '3',
      userId: '3',
      userName: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+91 9876543212',
      panNumber: 'KLMNO9012P',
      aadhaarNumber: '9012-3456-7890',
      status: 'rejected',
      submittedDate: '2024-01-16',
      verifiedDate: '2024-01-17',
      rejectionReason: 'Document quality poor, please resubmit',
      documents: {
        panCard: 'pan_mike_johnson.pdf',
        aadhaarFront: 'aadhaar_front_mike.jpg',
        aadhaarBack: 'aadhaar_back_mike.jpg',
        selfie: 'selfie_mike.jpg'
      }
    }
  ];

  const filteredApplications = kycApplications.filter(app => {
    const matchesSearch = app.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.panNumber.toLowerCase().includes(searchTerm.toLowerCase());
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

  const handleApprove = (id: string) => {
    console.log('Approving KYC:', id);
    // Implement approval logic
  };

  const handleReject = (id: string) => {
    console.log('Rejecting KYC:', id);
    // Implement rejection logic
  };

  const DocumentViewer = ({ application }: { application: any }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentDoc, setCurrentDoc] = useState('');

    const viewDocument = (docName: string) => {
      setCurrentDoc(docName);
      setShowModal(true);
    };

    return (
      <>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => viewDocument('PAN Card')}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="View PAN Card"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => viewDocument('Aadhaar Front')}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="View Aadhaar Front"
          >
            <Image className="w-4 h-4" />
          </button>
          <button
            onClick={() => viewDocument('Aadhaar Back')}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="View Aadhaar Back"
          >
            <Image className="w-4 h-4" />
          </button>
          <button
            onClick={() => viewDocument('Selfie')}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="View Selfie"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{currentDoc} - {application.userName}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-600">Document preview would appear here</p>
                <p className="text-sm text-gray-500 mt-2">In a real application, this would show the actual document</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">KYC Verifications</h1>
          <p className="text-gray-600 mt-1">Review and verify user identity documents</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export KYC Data</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Applications', value: kycApplications.length, color: 'blue' },
          { label: 'Pending Review', value: kycApplications.filter(app => app.status === 'pending').length, color: 'yellow' },
          { label: 'Approved', value: kycApplications.filter(app => app.status === 'approved').length, color: 'green' },
          { label: 'Rejected', value: kycApplications.filter(app => app.status === 'rejected').length, color: 'red' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 text-${stat.color}-600`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or PAN..."
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

      {/* KYC Applications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">User</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">PAN Number</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Aadhaar Number</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Submitted Date</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Documents</th>
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
                    <span className="font-mono text-sm text-gray-900">{app.panNumber}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-gray-900">{app.aadhaarNumber}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(app.status)}`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-900">{app.submittedDate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <DocumentViewer application={app} />
                  </td>
                  <td className="py-4 px-6">
                    {app.status === 'pending' && (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleApprove(app.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(app.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {app.status === 'rejected' && app.rejectionReason && (
                      <div className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                        {app.rejectionReason}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No KYC applications found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KYCPage;