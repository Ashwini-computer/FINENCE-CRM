import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Building2, Phone, Mail } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const partners = [
    {
      id: '1',
      name: 'HDFC Bank',
      type: 'Bank',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      contactPerson: 'Rajesh Kumar',
      email: 'partnerships@hdfcbank.com',
      phone: '+91 22 6171 2000',
      address: 'HDFC Bank House, Senapati Bapat Marg, Lower Parel, Mumbai',
      productsCount: 8,
      status: 'active',
      joinedDate: '2023-06-15',
      commission: '2.5%'
    },
    {
      id: '2',
      name: 'ICICI Bank',
      type: 'Bank',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      contactPerson: 'Priya Sharma',
      email: 'corporate@icicibank.com',
      phone: '+91 22 2653 1414',
      address: 'ICICI Bank Towers, Bandra Kurla Complex, Mumbai',
      productsCount: 6,
      status: 'active',
      joinedDate: '2023-07-20',
      commission: '2.8%'
    },
    {
      id: '3',
      name: 'Bajaj Finserv',
      type: 'NBFC',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      contactPerson: 'Amit Patel',
      email: 'partnerships@bajajfinserv.in',
      phone: '+91 20 7157 6401',
      address: 'Bajaj Finserv Corporate Office, Pune',
      productsCount: 4,
      status: 'active',
      joinedDate: '2023-08-10',
      commission: '3.2%'
    },
    {
      id: '4',
      name: 'Kotak Mahindra Bank',
      type: 'Bank',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      contactPerson: 'Sneha Verma',
      email: 'business@kotak.com',
      phone: '+91 22 6298 7777',
      address: '27 BKC, C 27, G Block, Bandra Kurla Complex, Mumbai',
      productsCount: 3,
      status: 'inactive',
      joinedDate: '2023-05-25',
      commission: '2.2%'
    }
  ];

  const filteredPartners = partners.filter(partner => {
    return partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           partner.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
           partner.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const getTypeBadge = (type: string) => {
    return type === 'Bank' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-purple-100 text-purple-800';
  };

  const AddPartnerModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Add New Partner</h3>
          <button
            onClick={() => setShowAddModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Partner Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter partner name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select type</option>
                <option value="Bank">Bank</option>
                <option value="NBFC">NBFC</option>
                <option value="Insurance">Insurance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter contact person name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Commission (%)</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2.5%"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Enter complete address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Logo (URL)</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter logo URL"
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Partner
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Partner Management</h1>
          <p className="text-gray-600 mt-1">Manage banking and financial partners</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Partner</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Partners', value: partners.length, color: 'blue' },
          { label: 'Active Partners', value: partners.filter(p => p.status === 'active').length, color: 'green' },
          { label: 'Banks', value: partners.filter(p => p.type === 'Bank').length, color: 'indigo' },
          { label: 'NBFCs', value: partners.filter(p => p.type === 'NBFC').length, color: 'purple' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 text-${stat.color}-600`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="relative max-w-md">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search partners..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPartners.map((partner) => (
          <div key={partner.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeBadge(partner.type)}`}>
                    {partner.type}
                  </span>
                </div>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(partner.status)}`}>
                {partner.status.charAt(0).toUpperCase() + partner.status.slice(1)}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Building2 className="w-4 h-4" />
                <span>{partner.contactPerson}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="truncate">{partner.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{partner.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-600">Products</p>
                <p className="font-semibold text-gray-900">{partner.productsCount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Commission</p>
                <p className="font-semibold text-gray-900">{partner.commission}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">Joined {partner.joinedDate}</p>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPartners.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No partners found matching your search</p>
        </div>
      )}

      {/* Add Partner Modal */}
      {showAddModal && <AddPartnerModal />}
    </div>
  );
};

export default PartnersPage;