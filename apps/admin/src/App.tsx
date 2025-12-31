import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AdminProvider } from './contexts/AdminContext';
import PrivateRoute from './components/PrivateRoute';
import AdminLayout from './components/layout/AdminLayout';
import AdminLoginPage from './pages/AdminLoginPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import KYCPage from './pages/KYCPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ProductsPage from './pages/ProductsPage';
import PartnersPage from './pages/PartnersPage';
import OffersPage from './pages/OffersPage';
import CreditImprovementPage from './pages/CreditImprovementPage';
import LoanTransferPage from './pages/LoanTransferPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import AddUserPage from './pages/AddUser';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <Router>
          <Routes>
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin/*"
              element={
                <PrivateRoute>
                  <AdminLayout>
                    <Routes>
                      <Route path="dashboard" element={<DashboardPage />} />
                      <Route path="users" element={<UsersPage />} />
                      <Route path="users/:id" element={<UserDetailPage />} />
                      <Route path="kyc" element={<KYCPage />} />
                      <Route path="applications" element={<ApplicationsPage />} />
                      <Route path="products" element={<ProductsPage />} />
                      <Route path="partners" element={<PartnersPage />} />
                      <Route path="offers" element={<OffersPage />} />
                      <Route path="credit-improvement" element={<CreditImprovementPage />} />
                      <Route path="loan-transfers" element={<LoanTransferPage />} />
                      <Route path="notifications" element={<NotificationsPage />} />
                      <Route path="settings" element={<SettingsPage />} />
                      <Route path="addUser" element={<AddUserPage />}/>
                       <Route path="/users/:id" element={<UserProfilePage />} />
                     <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                    </Routes>
                  </AdminLayout>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/admin/login" replace />} />
          </Routes>
        </Router>
      </AdminProvider>
    </AuthProvider>
  );
}

export default App;