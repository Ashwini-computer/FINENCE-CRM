import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, Eye, MessageSquare } from 'lucide-react';

const CreditImprovementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [scoreFilter, setScoreFilter] = useState('all');

  const creditCases = [
    {
      id: '1',
      userId: '1',
      userName: 'John Doe',
      email: 'john.doe@email.com',
      currentScore: 650,
      previousScore: 620,
      targetScore: 750,
      improvement: 30,
      status: 'in_progress',
      enrolledDate: '2024-01-10',
      lastUpdated: '2024-01-18',
      suggestions: [
        'Pay all credit card bills on time',
        'Reduce credit utilization below 30%',
        'Avoid applying for new credit cards',
        'Check credit report for errors'
      ],
      recommendedProducts: [
        'Secured Credit Card',
        'Credit Builder Loan'
      ],
      monthlyProgress: [
        { month: 'Oct 2023', score: 620 },
        { month: 'Nov 2023', score: 635 },
        { month: 'Dec 2023', score: 645 },
        { month: 'Jan 2024', score: 650 }
      ]
    },
    {
      id: '2',
      userId: '2',
      userName: 'Jane Smith',
      email: 'jane.smith@email.com',
      currentScore: 720,
      previousScore: 680,
      targetScore: 800,
      improvement: 40,
      status: 'completed',
      enrolledDate: '2023-10-15',
      lastUpdated: '2024-01-15',
      suggestions: [
        'Maintain low credit utilization',
        'Keep old credit accounts open',
        'Monitor credit report regularly'
      ],
      recommendedProducts: [
        'Premium Credit Card',
        'Personal Loan'
      ],
      monthlyProgress: [
        { month: 'Oct 2023', score: 680 },
        { month: 'Nov 2023', score: 695 },
        { month: 'Dec 2023', score: 710 },
        { month: 'Jan 2024', score: 720 }
      ]
    },
    {
      id: '3',
      userId: '3',
      userName: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      currentScore: 580,
      previousScore: 590,
      targetScore: 700,
      improvement: -10,
      status: 'needs_attention',
      enrolledDate: '2023-12-01',
      lastUpdated: '2024-01-20',
      suggestions: [
        'Address overdue payments immediately',
        'Negotiate payment plans with creditors',
        'Consider debt consolidation',
        'Avoid closing old credit accounts'
      ],
      recommendedProducts: [
        'Debt Consolidation Loan',
        'Credit Counseling Service'
      ],
      monthlyProgress: [
        { month: 'Oct 2023', score: 590 },
        { month: 'Nov 2023', score: 585 },
        { month: 'Dec 2023', score: 582 },
        { month: 'Jan 2024', score: 580 }
      ]
    }
  ];

  const filteredCases = creditCases.filter(case_ => {
    const matchesSearch = case_.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesScore = scoreFilter === 'all' || 
                        (scoreFilter === 'poor' && case_.currentScore < 600) ||
                        (scoreFilter === 'fair' && case_.currentScore >= 600 && case_.currentScore < 700) ||
                        (scoreFilter === 'good' && case_.currentScore >= 700);
    return matchesSearch && matchesScore;
  });

  const getStatusBadge = (status: string) => {
    const colors = {
      in_progress: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      needs_attention: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-green-600';
    if (score >= 650) return 'text-yellow-600';
    return 'text-red-600';
  };

  const CaseDetailModal = ({ case_, onClose }: { case_: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Credit Improvement Case - {case_.userName}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Current Status</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Current Score</span>
                  <span className={`font-bold text-lg ${getScoreColor(case_.currentScore)}`}>
                    {case_.currentScore}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Target Score</span>
                  <span className="font-medium text-gray-900">{case_.targetScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Progress</span>
                  <div className="flex items-center space-x-2">
                    {case_.improvement > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`font-medium ${case_.improvement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {case_.improvement > 0 ? '+' : ''}{case_.improvement} points
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Improvement Suggestions</h4>
              <div className="space-y-2">
                {case_.suggestions.map((suggestion: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-700">{suggestion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Score Progress</h4>
              <div className="space-y-3">
                {case_.monthlyProgress.map((entry: any, index: number) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{entry.month}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-2 rounded-full"
                          style={{ width: `${(entry.score / 900) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`font-medium ${getScoreColor(entry.score)}`}>
                        {entry.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Recommended Products</h4>
              <div className="space-y-2">
                {case_.recommendedProducts.map((product: string, index: number) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-3">
                    <span className="text-sm font-medium text-blue-900">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Credit Improvement Cases</h1>
          <p className="text-gray-600 mt-1">Monitor and manage user credit score improvement journeys</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Cases', value: creditCases.length, color: 'blue' },
          { label: 'In Progress', value: creditCases.filter(c => c.status === 'in_progress').length, color: 'yellow' },
          { label: 'Completed', value: creditCases.filter(c => c.status === 'completed').length, color: 'green' },
          { label: 'Need Attention', value: creditCases.filter(c => c.status === 'needs_attention').length, color: 'red' }
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
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={scoreFilter}
                onChange={(e) => setScoreFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Scores</option>
                <option value="poor">Poor (&lt; 600)</option>
                <option value="fair">Fair (600-699)</option>
                <option value="good">Good (700+)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">User</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Current Score</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Target Score</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Progress</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Last Updated</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCases.map((case_) => (
                <tr key={case_.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {case_.userName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{case_.userName}</p>
                        <p className="text-sm text-gray-500">{case_.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`font-bold text-lg ${getScoreColor(case_.currentScore)}`}>
                      {case_.currentScore}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{case_.targetScore}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {case_.improvement > 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`font-medium ${case_.improvement > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {case_.improvement > 0 ? '+' : ''}{case_.improvement}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(case_.status)}`}>
                      {case_.status.replace('_', ' ').charAt(0).toUpperCase() + case_.status.replace('_', ' ').slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-900">{case_.lastUpdated}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedCase(case_)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No credit improvement cases found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <CaseDetailModal
          case_={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </div>
  );
};

export default CreditImprovementPage;