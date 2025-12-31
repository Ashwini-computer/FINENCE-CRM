import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Calendar, Target, Percent } from 'lucide-react';

const OffersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const offers = [
    {
      id: '1',
      title: 'New Year Personal Loan Offer',
      description: 'Get personal loans at reduced interest rates for new customers',
      discountType: 'Interest Rate',
      discountValue: '1.5% off',
      validFrom: '2024-01-01',
      validTo: '2024-01-31',
      targetAudience: 'New Customers',
      applicableProducts: ['Personal Loan'],
      minAmount: '₹1,00,000',
      maxAmount: '₹10,00,000',
      status: 'active',
      usageCount: 245,
      maxUsage: 500,
      createdDate: '2023-12-15'
    },
    {
      id: '2',
      title: 'Premium Credit Card Cashback',
      description: 'Earn 5% cashback on all purchases for first 3 months',
      discountType: 'Cashback',
      discountValue: '5%',
      validFrom: '2024-01-15',
      validTo: '2024-04-15',
      targetAudience: 'Premium Customers',
      applicableProducts: ['Credit Card'],
      minAmount: '₹50,000',
      maxAmount: '₹5,00,000',
      status: 'active',
      usageCount: 89,
      maxUsage: 200,
      createdDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'Home Loan Festival Offer',
      description: 'Special home loan rates during festival season',
      discountType: 'Processing Fee',
      discountValue: '100% waiver',
      validFrom: '2023-10-01',
      validTo: '2023-11-30',
      targetAudience: 'All Customers',
      applicableProducts: ['Home Loan'],
      minAmount: '₹10,00,000',
      maxAmount: '₹2,00,00,000',
      status: 'expired',
      usageCount: 156,
      maxUsage: 300,
      createdDate: '2023-09-15'
    },
    {
      id: '4',
      title: 'Business Loan Quick Approval',
      description: 'Get business loans approved within 24 hours',
      discountType: 'Processing Time',
      discountValue: '24 hours',
      validFrom: '2024-02-01',
      validTo: '2024-02-29',
      targetAudience: 'Business Owners',
      applicableProducts: ['Business Loan'],
      minAmount: '₹2,00,000',
      maxAmount: '₹50,00,000',
      status: 'scheduled',
      usageCount: 0,
      maxUsage: 100,
      createdDate: '2024-01-20'
    }
  ];

  const filteredOffers = offers.filter(offer => {
    return offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           offer.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
           offer.targetAudience.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800',
      scheduled: 'bg-blue-100 text-blue-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const AddOfferModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Create New Offer</h3>
          <button
            onClick={() => setShowAddModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Offer Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter offer title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Enter offer description"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select discount type</option>
                <option value="Interest Rate">Interest Rate</option>
                <option value="Processing Fee">Processing Fee</option>
                <option value="Cashback">Cashback</option>
                <option value="Processing Time">Processing Time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Value</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 1.5% off, 100% waiver"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Valid From</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Valid To</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select target audience</option>
                <option value="All Customers">All Customers</option>
                <option value="New Customers">New Customers</option>
                <option value="Premium Customers">Premium Customers</option>
                <option value="Business Owners">Business Owners</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Usage</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Maximum number of uses"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Amount</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., ₹1,00,000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Amount</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., ₹10,00,000"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Applicable Products</label>
            <div className="space-y-2">
              {['Personal Loan', 'Home Loan', 'Business Loan', 'Credit Card'].map((product) => (
                <label key={product} className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">{product}</span>
                </label>
              ))}
            </div>
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
              Create Offer
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
          <h1 className="text-3xl font-bold text-gray-900">Offers Management</h1>
          <p className="text-gray-600 mt-1">Create and manage promotional offers for your products</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create Offer</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Offers', value: offers.length, color: 'blue' },
          { label: 'Active Offers', value: offers.filter(o => o.status === 'active').length, color: 'green' },
          { label: 'Scheduled Offers', value: offers.filter(o => o.status === 'scheduled').length, color: 'indigo' },
          { label: 'Total Usage', value: offers.reduce((sum, o) => sum + o.usageCount, 0), color: 'purple' }
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
            placeholder="Search offers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOffers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{offer.description}</p>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(offer.status)}`}>
                {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Percent className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">{offer.discountType}</p>
                  <p className="text-sm font-medium text-gray-900">{offer.discountValue}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-xs text-gray-500">Target</p>
                  <p className="text-sm font-medium text-gray-900">{offer.targetAudience}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{offer.validFrom} to {offer.validTo}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Usage</span>
                <span className="text-gray-900">{offer.usageCount} / {offer.maxUsage}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(offer.usageCount / offer.maxUsage) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Amount Range</p>
                <p className="text-sm font-medium text-gray-900">{offer.minAmount} - {offer.maxAmount}</p>
              </div>
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

            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-1">
                {offer.applicableProducts.map((product, index) => (
                  <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredOffers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No offers found matching your search</p>
        </div>
      )}

      {/* Add Offer Modal */}
      {showAddModal && <AddOfferModal />}
    </div>
  );
};

export default OffersPage;