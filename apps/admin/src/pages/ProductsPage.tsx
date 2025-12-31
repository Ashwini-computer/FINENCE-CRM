import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const products = [
    {
      id: '1',
      name: 'HDFC Personal Loan',
      category: 'Personal Loan',
      interestRate: '11.5%',
      minAmount: '₹50,000',
      maxAmount: '₹40,00,000',
      tenure: '12-60 months',
      processingFee: '2.5%',
      partner: 'HDFC Bank',
      eligibility: 'Min salary ₹25,000, CIBIL > 650',
      status: 'active',
      createdDate: '2024-01-10'
    },
    {
      id: '2',
      name: 'ICICI Platinum Credit Card',
      category: 'Credit Card',
      interestRate: '3.5%/month',
      minAmount: '₹25,000',
      maxAmount: '₹10,00,000',
      tenure: 'Revolving',
      processingFee: '₹500',
      partner: 'ICICI Bank',
      eligibility: 'Min salary ₹30,000, CIBIL > 700',
      status: 'active',
      createdDate: '2024-01-08'
    },
    {
      id: '3',
      name: 'SBI Home Loan',
      category: 'Home Loan',
      interestRate: '8.75%',
      minAmount: '₹3,00,000',
      maxAmount: '₹10,00,00,000',
      tenure: '5-30 years',
      processingFee: '0.35%',
      partner: 'SBI',
      eligibility: 'Min salary ₹40,000, CIBIL > 700',
      status: 'active',
      createdDate: '2024-01-05'
    },
    {
      id: '4',
      name: 'Axis Business Loan',
      category: 'Business Loan',
      interestRate: '12.5%',
      minAmount: '₹1,00,000',
      maxAmount: '₹75,00,000',
      tenure: '12-84 months',
      processingFee: '2%',
      partner: 'Axis Bank',
      eligibility: 'Business vintage 2+ years, ITR filed',
      status: 'inactive',
      createdDate: '2024-01-03'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.partner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const AddProductModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Add New Product</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select category</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 11.5%"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Partner</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select partner</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="SBI">SBI</option>
                <option value="Axis Bank">Axis Bank</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Amount</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., ₹50,000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Amount</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., ₹40,00,000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tenure</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 12-60 months"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Processing Fee</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2.5%"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Eligibility Criteria</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Enter eligibility criteria"
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
              Add Product
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
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600 mt-1">Manage financial products and their configurations</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Products', value: products.length, color: 'blue' },
          { label: 'Active Products', value: products.filter(p => p.status === 'active').length, color: 'green' },
          { label: 'Personal Loans', value: products.filter(p => p.category === 'Personal Loan').length, color: 'indigo' },
          { label: 'Credit Cards', value: products.filter(p => p.category === 'Credit Card').length, color: 'purple' }
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
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Product</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Category</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Interest Rate</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Amount Range</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Partner</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-500">Added {product.createdDate}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-gray-900">{product.interestRate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm text-gray-900">{product.minAmount} - {product.maxAmount}</p>
                      <p className="text-xs text-gray-500">Tenure: {product.tenure}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-900">{product.partner}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(product.status)}`}>
                      {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && <AddProductModal />}
    </div>
  );
};

export default ProductsPage;