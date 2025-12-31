// import React, { useState } from 'react';
// import { Search, Filter, Eye, Check, X, Download, Calendar } from 'lucide-react';

// const ApplicationsPage: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [typeFilter, setTypeFilter] = useState('all');
//   const [statusFilter, setStatusFilter] = useState('all');

//   const applications = [
//     {
//       id: '1',
//       userId: '1',
//       userName: 'John Doe',
//       email: 'john.doe@email.com',
//       productType: 'Personal Loan',
//       productName: 'HDFC Personal Loan',
//       amount: '₹5,00,000',
//       interestRate: '11.5%',
//       tenure: '24 months',
//       status: 'approved',
//       appliedDate: '2024-01-15',
//       approvedDate: '2024-01-17',
//       partner: 'HDFC Bank',
//       cibilScore: 750,
//       monthlyIncome: '₹85,000'
//     },
//     {
//       id: '2',
//       userId: '2',
//       userName: 'Jane Smith',
//       email: 'jane.smith@email.com',
//       productType: 'Credit Card',
//       productName: 'ICICI Platinum Credit Card',
//       amount: '₹2,00,000',
//       interestRate: '3.5%/month',
//       tenure: 'Revolving',
//       status: 'pending',
//       appliedDate: '2024-01-18',
//       approvedDate: null,
//       partner: 'ICICI Bank',
//       cibilScore: 680,
//       monthlyIncome: '₹60,000'
//     },
//     {
//       id: '3',
//       userId: '3',
//       userName: 'Mike Johnson',
//       email: 'mike.johnson@email.com',
//       productType: 'Home Loan',
//       productName: 'SBI Home Loan',
//       amount: '₹50,00,000',
//       interestRate: '8.75%',
//       tenure: '20 years',
//       status: 'rejected',
//       appliedDate: '2024-01-12',
//       approvedDate: '2024-01-14',
//       partner: 'SBI',
//       cibilScore: 620,
//       monthlyIncome: '₹75,000'
//     },
//     {
//       id: '4',
//       userId: '4',
//       userName: 'Sarah Wilson',
//       email: 'sarah.wilson@email.com',
//       productType: 'Business Loan',
//       productName: 'Axis Business Loan',
//       amount: '₹15,00,000',
//       interestRate: '12.5%',
//       tenure: '36 months',
//       status: 'pending',
//       appliedDate: '2024-01-20',
//       approvedDate: null,
//       partner: 'Axis Bank',
//       cibilScore: 720,
//       monthlyIncome: '₹1,20,000'
//     }
//   ];

//   const filteredApplications = applications.filter(app => {
//     const matchesSearch = app.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          app.productName.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = typeFilter === 'all' || app.productType.toLowerCase().includes(typeFilter.toLowerCase());
//     const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
//     return matchesSearch && matchesType && matchesStatus;
//   });

//   const getStatusBadge = (status: string) => {
//     const colors = {
//       pending: 'bg-yellow-100 text-yellow-800',
//       approved: 'bg-green-100 text-green-800',
//       rejected: 'bg-red-100 text-red-800'
//     };
//     return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
//   };

//   const handleApprove = (id: string) => {
//     console.log('Approving application:', id);
//     // Implement approval logic
//   };

//   const handleReject = (id: string) => {
//     console.log('Rejecting application:', id);
//     // Implement rejection logic
//   };

//   const ApplicationDetailModal = ({ application, onClose }: { application: any; onClose: () => void }) => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-xl font-bold text-gray-900">Application Details</h3>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <h4 className="font-semibold text-gray-900">User Information</h4>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Name:</span>
//                 <span className="text-gray-900">{application.userName}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Email:</span>
//                 <span className="text-gray-900">{application.email}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">CIBIL Score:</span>
//                 <span className="text-gray-900 font-medium">{application.cibilScore}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Monthly Income:</span>
//                 <span className="text-gray-900 font-medium">{application.monthlyIncome}</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             <h4 className="font-semibold text-gray-900">Loan Details</h4>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Product:</span>
//                 <span className="text-gray-900">{application.productName}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Amount:</span>
//                 <span className="text-gray-900 font-medium">{application.amount}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Interest Rate:</span>
//                 <span className="text-gray-900">{application.interestRate}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Tenure:</span>
//                 <span className="text-gray-900">{application.tenure}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Partner:</span>
//                 <span className="text-gray-900">{application.partner}</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-6 pt-6 border-t border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Applied on: {application.appliedDate}</p>
//               {application.approvedDate && (
//                 <p className="text-sm text-gray-600">Processed on: {application.approvedDate}</p>
//               )}
//             </div>
//             {application.status === 'pending' && (
//               <div className="flex space-x-3">
//                 <button
//                   onClick={() => handleReject(application.id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                 >
//                   Reject
//                 </button>
//                 <button
//                   onClick={() => handleApprove(application.id)}
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                 >
//                   Approve
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const [selectedApplication, setSelectedApplication] = useState(null);

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Application Management</h1>
//           <p className="text-gray-600 mt-1">Review and manage all loan and credit card applications</p>
//         </div>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
//           <Download className="w-4 h-4" />
//           <span>Export Applications</span>
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {[
//           { label: 'Total Applications', value: applications.length, color: 'blue' },
//           { label: 'Pending Review', value: applications.filter(app => app.status === 'pending').length, color: 'yellow' },
//           { label: 'Approved', value: applications.filter(app => app.status === 'approved').length, color: 'green' },
//           { label: 'Rejected', value: applications.filter(app => app.status === 'rejected').length, color: 'red' }
//         ].map((stat, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//             <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//             <p className={`text-2xl font-bold mt-2 text-${stat.color}-600`}>{stat.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
//           <div className="relative flex-1 max-w-md">
//             <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search applications..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <Filter className="w-4 h-4 text-gray-500" />
//               <select
//                 value={typeFilter}
//                 onChange={(e) => setTypeFilter(e.target.value)}
//                 className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="all">All Types</option>
//                 <option value="loan">Loans</option>
//                 <option value="credit">Credit Cards</option>
//               </select>
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//                 className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="all">All Status</option>
//                 <option value="pending">Pending</option>
//                 <option value="approved">Approved</option>
//                 <option value="rejected">Rejected</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Applications Table */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">User</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Product</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Amount</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Partner</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Applied Date</th>
//                 <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredApplications.map((app) => (
//                 <tr key={app.id} className="hover:bg-gray-50 transition-colors">
//                   <td className="py-4 px-6">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
//                         <span className="text-white font-medium text-sm">
//                           {app.userName.split(' ').map(n => n[0]).join('')}
//                         </span>
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{app.userName}</p>
//                         <p className="text-sm text-gray-500">CIBIL: {app.cibilScore}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-4 px-6">
//                     <div>
//                       <p className="font-medium text-gray-900">{app.productName}</p>
//                       <p className="text-sm text-gray-500">{app.productType}</p>
//                     </div>
//                   </td>
//                   <td className="py-4 px-6">
//                     <span className="font-semibold text-gray-900">{app.amount}</span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <span className="text-gray-900">{app.partner}</span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(app.status)}`}>
//                       {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <div className="flex items-center space-x-1 text-gray-900">
//                       <Calendar className="w-4 h-4 text-gray-400" />
//                       <span>{app.appliedDate}</span>
//                     </div>
//                   </td>
//                   <td className="py-4 px-6">
//                     <div className="flex items-center space-x-2">
//                       <button
//                         onClick={() => setSelectedApplication(app)}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                         title="View Details"
//                       >
//                         <Eye className="w-4 h-4" />
//                       </button>
//                       {app.status === 'pending' && (
//                         <>
//                           <button
//                             onClick={() => handleApprove(app.id)}
//                             className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
//                             title="Approve"
//                           >
//                             <Check className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() => handleReject(app.id)}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                             title="Reject"
//                           >
//                             <X className="w-4 h-4" />
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {filteredApplications.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No applications found matching your criteria</p>
//           </div>
//         )}
//       </div>

//       {/* Application Detail Modal */}
//       {selectedApplication && (
//         <ApplicationDetailModal
//           application={selectedApplication}
//           onClose={() => setSelectedApplication(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ApplicationsPage;





import React, { useEffect, useState } from "react";
import { Search, Eye, Calendar } from "lucide-react";
import axios from "axios";

/* ================= TYPES ================= */
interface Application {
  _id: string;
  user: string;
  product: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
  applied: string; // ISO string
}

/* ================= API ================= */
const api = axios.create({
  baseURL: "http://localhost:5000/api/applications",
});

/* ================= COMPONENT ================= */
const ApplicationsPage: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */
  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin");
      setApplications(res.data.data);
    } catch (err) {
      console.error("Failed to fetch applications", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  /* ================= FILTER ================= */
  const filteredApplications = applications.filter(app => {
    const matchSearch =
      app.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === "all" || app.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusColor = (status: string) => {
    if (status === "approved") return "bg-green-100 text-green-700";
    if (status === "rejected") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  if (loading) return <div className="p-10 text-center">Loading applications...</div>;

  /* ================= RENDER ================= */
  return (
    <div className="space-y-6 p-6">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Application Management</h1>
        <p className="text-gray-500">Admin review & approval panel</p>
      </div>

      {/* SEARCH & FILTER */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by user or product"
            className="pl-10 border rounded-lg px-4 py-2 w-full"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="border rounded-lg px-4 py-2"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Product</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Applied</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map(app => (
              <tr key={app._id} className="border-t">
                <td className="p-4">{app.user}</td>
                <td className="p-4">{app.product}</td>
                <td className="p-4 font-semibold">₹{app.amount.toLocaleString()}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColor(app.status)}`}>
                    {app.status}
                  </span>
                </td>
                <td className="p-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {new Date(app.applied).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => setSelectedApplication(app)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredApplications.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No applications found
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Application Details</h2>
            <div className="space-y-2 text-sm">
              <p><b>User:</b> {selectedApplication.user}</p>
              <p><b>Product:</b> {selectedApplication.product}</p>
              <p><b>Amount:</b> ₹{selectedApplication.amount.toLocaleString()}</p>
              <p><b>Status:</b> {selectedApplication.status}</p>
              <p><b>Applied:</b> {new Date(selectedApplication.applied).toLocaleDateString()}</p>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedApplication(null)}
                className="px-4 py-2 border rounded"
              >
                Close 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;
