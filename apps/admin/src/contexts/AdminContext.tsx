import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminStats {
  totalUsers: number;
  totalApplications: number;
  approvedApplications: number;
  pendingApplications: number;
  totalPartners: number;
  averageCibilScore: number;
}

interface AdminContextType {
  stats: AdminStats;
  updateStats: (newStats: Partial<AdminStats>) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 12847,
    totalApplications: 4532,
    approvedApplications: 3201,
    pendingApplications: 1331,
    totalPartners: 28,
    averageCibilScore: 745
  });

  const updateStats = (newStats: Partial<AdminStats>) => {
    setStats(prev => ({ ...prev, ...newStats }));
  };

  const value = {
    stats,
    updateStats
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};