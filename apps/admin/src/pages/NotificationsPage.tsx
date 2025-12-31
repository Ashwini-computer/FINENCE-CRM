import React, { useState } from 'react';
import { Search, Filter, Bell, CheckCircle, AlertCircle, Info, Settings } from 'lucide-react';

const NotificationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('logs');

  const notificationLogs = [
    {
      id: '1',
      type: 'loan_approval',
      title: 'Loan Application Approved',
      message: 'Personal loan application for John Doe has been approved for ₹5,00,000',
      user: 'John Doe',
      timestamp: '2024-01-20 14:30:00',
      status: 'sent',
      channels: ['email', 'sms'],
      priority: 'high'
    },
    {
      id: '2',
      type: 'user_registration',
      title: 'New User Registration',
      message: 'New user Jane Smith has registered on the platform',
      user: 'Jane Smith',
      timestamp: '2024-01-20 13:45:00',
      status: 'sent',
      channels: ['email'],
      priority: 'medium'
    },
    {
      id: '3',
      type: 'kyc_request',
      title: 'KYC Verification Required',
      message: 'KYC documents submitted by Mike Johnson require verification',
      user: 'Mike Johnson',
      timestamp: '2024-01-20 12:15:00',
      status: 'pending',
      channels: ['email'],
      priority: 'high'
    },
    {
      id: '4',
      type: 'payment_reminder',
      title: 'Payment Due Reminder',
      message: 'EMI payment due for Sarah Wilson in 3 days',
      user: 'Sarah Wilson',
      timestamp: '2024-01-20 10:00:00',
      status: 'sent',
      channels: ['email', 'sms'],
      priority: 'medium'
    },
    {
      id: '5',
      type: 'system_alert',
      title: 'System Maintenance',
      message: 'Scheduled maintenance window from 2 AM to 4 AM',
      user: 'All Users',
      timestamp: '2024-01-19 18:00:00',
      status: 'sent',
      channels: ['email', 'push'],
      priority: 'low'
    }
  ];

  const notificationSettings = {
    email: {
      enabled: true,
      types: {
        loan_approval: true,
        user_registration: true,
        kyc_request: true,
        payment_reminder: true,
        system_alert: false
      }
    },
    sms: {
      enabled: true,
      types: {
        loan_approval: true,
        user_registration: false,
        kyc_request: false,
        payment_reminder: true,
        system_alert: false
      }
    },
    push: {
      enabled: false,
      types: {
        loan_approval: false,
        user_registration: false,
        kyc_request: false,
        payment_reminder: false,
        system_alert: true
      }
    }
  };

  const filteredLogs = notificationLogs.filter(log => {
    const matchesSearch = log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || log.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    const icons = {
      loan_approval: CheckCircle,
      user_registration: Info,
      kyc_request: AlertCircle,
      payment_reminder: Bell,
      system_alert: Settings
    };
    return icons[type as keyof typeof icons] || Info;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      loan_approval: 'text-green-600 bg-green-100',
      user_registration: 'text-blue-600 bg-blue-100',
      kyc_request: 'text-yellow-600 bg-yellow-100',
      payment_reminder: 'text-orange-600 bg-orange-100',
      system_alert: 'text-gray-600 bg-gray-100'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      sent: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-gray-100 text-gray-800'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const NotificationLogs = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="loan_approval">Loan Approvals</option>
                <option value="user_registration">User Registrations</option>
                <option value="kyc_request">KYC Requests</option>
                <option value="payment_reminder">Payment Reminders</option>
                <option value="system_alert">System Alerts</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Logs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Notifications</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredLogs.map((log) => {
            const IconComponent = getTypeIcon(log.type);
            return (
              <div key={log.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${getTypeColor(log.type)}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{log.title}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityBadge(log.priority)}`}>
                          {log.priority}
                        </span>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(log.status)}`}>
                          {log.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{log.message}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>User: {log.user}</span>
                        <span>•</span>
                        <span>{log.timestamp}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {log.channels.map((channel, index) => (
                          <span key={index} className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No notifications found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Channel Settings</h3>
        
        <div className="space-y-8">
          {Object.entries(notificationSettings).map(([channel, config]) => (
            <div key={channel} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900 capitalize">{channel}</h4>
                  <p className="text-sm text-gray-500">
                    Configure {channel} notification preferences
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={config.enabled}
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="space-y-3">
                {Object.entries(config.types).map(([type, enabled]) => (
                  <div key={type} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 capitalize">
                      {type.replace('_', ' ')}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-1">Monitor notification logs and configure settings</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Sent', value: notificationLogs.filter(n => n.status === 'sent').length, color: 'green' },
          { label: 'Pending', value: notificationLogs.filter(n => n.status === 'pending').length, color: 'yellow' },
          { label: 'High Priority', value: notificationLogs.filter(n => n.priority === 'high').length, color: 'red' },
          { label: 'Today', value: notificationLogs.filter(n => n.timestamp.includes('2024-01-20')).length, color: 'blue' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 text-${stat.color}-600`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('logs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'logs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Notification Logs
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'logs' ? <NotificationLogs /> : <NotificationSettings />}
    </div>
  );
};

export default NotificationsPage;