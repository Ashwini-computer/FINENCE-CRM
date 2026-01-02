import React, { useState } from 'react';
import { Search, Filter, Eye, Check, X, Car, ArrowRightLeft } from 'lucide-react';

/* ---------------- TYPES ---------------- */

type Status = 'pending' | 'approved' | 'rejected';

interface BaseApplication {
  id: string;
  userId: string;
  userName: string;
  email: string;
  status: Status;
  appliedDate: string;
  documents: string[];
}

interface BalanceTransferApplication extends BaseApplication {
  currentLender: string;
  currentBalance: string;
  currentRate: string;
  newLender: string;
  newRate: string;
  requestedAmount: string;
  monthlySavings: string;
}

interface LoanAgainstCarApplication extends BaseApplication {
  carModel: string;
  carValue: string;
  requestedAmount: string;
  loanToValue: string;
  interestRate: string;
  tenure: string;
}

/* ---------------- COMPONENT ---------------- */

const LoanTransferPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'balance_transfer' | 'loan_against_car'>(
    'balance_transfer'
  );

  /* ---------------- DATA ---------------- */

  const balanceTransferApplications: BalanceTransferApplication[] = [
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
      documents: ['Current Loan Statement', 'Salary Slip', 'Bank Statement'],
    },
  ];

  const loanAgainstCarApplications: LoanAgainstCarApplication[] = [
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
      documents: ['RC Copy', 'Insurance Papers'],
    },
  ];

  /* ---------------- FILTERING ---------------- */

  const filterCommon = <T extends BaseApplication>(apps: T[]) =>
    apps.filter(app => {
      const matchesSearch =
        app.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

  const filteredBalanceTransfers = filterCommon(balanceTransferApplications);
  const filteredLoanAgainstCar = filterCommon(loanAgainstCarApplications);

  /* ---------------- HELPERS ---------------- */

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
    }
  };

  /* ---------------- RENDER ---------------- */

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Loan Transfer Management</h1>

      {/* Tabs */}
      <div className="flex gap-6 border-b">
        <button
          onClick={() => setActiveTab('balance_transfer')}
          className={activeTab === 'balance_transfer' ? 'text-blue-600 border-b-2' : ''}
        >
          <ArrowRightLeft className="inline w-4 h-4 mr-1" />
          Balance Transfer
        </button>

        <button
          onClick={() => setActiveTab('loan_against_car')}
          className={activeTab === 'loan_against_car' ? 'text-blue-600 border-b-2' : ''}
        >
          <Car className="inline w-4 h-4 mr-1" />
          Loan Against Car
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4">
        <input
          className="border px-3 py-2 rounded"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as any)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {/* TABLES */}
      {activeTab === 'balance_transfer' &&
        filteredBalanceTransfers.map(app => (
          <div key={app.id} className="p-4 border rounded">
            <p>{app.userName} → {app.newLender}</p>
            <span className={getStatusBadge(app.status)}>{app.status}</span>
          </div>
        ))}

      {activeTab === 'loan_against_car' &&
        filteredLoanAgainstCar.map(app => (
          <div key={app.id} className="p-4 border rounded">
            <p>{app.userName} → {app.carModel}</p>
            <span className={getStatusBadge(app.status)}>{app.status}</span>
          </div>
        ))}
    </div>
  );
};

export default LoanTransferPage;
