// routes/privateRoutes.js
import { Route, Navigate } from "react-router-dom";

// credit-report
import Dashboard from "@/components/dashboard/Dashboard";
import CreditHealthReportPlans from "@/components/dashboard/credit-report/CreditHealthReportPlans";
import CreditSummary from "@/components/dashboard/credit-report/CreditSummary";
import CreditScore from "@/components/dashboard/credit-report/CreditScore";
import ScoreHistory from "@/components/dashboard/credit-report/ScoreHistory";
import CreditScorePredictor from "@/components/dashboard/credit-report/CreditScorePredictor";
import ShowcreditcardSummary from "@/components/dashboard/ShowcreditcardSummary";
import CheckProceed from "@/components/pages/credit-report/CheckProceed";

import Profile from "@/components/dashboard/Profile";
import FAQs from "@/components/dashboard/support/FAQs";
import Preferences from "@/components/dashboard/support/Preferences";
import PrivateRoute from "./PrivateRoute";

import ApplyLoanApplicationHistory from "@/components/dashboard/loan-history/ApplyLoanApplicationHistory";

// loan-offers
import PersonalLoanOffers from "@/components/dashboard/personal-loan/PersonalLoanOffers";
import BussinessLoanOffers from "@/components/dashboard/bussiness-loan/BussinessLoanOffers";
import CreditCardsOffers from "@/components/dashboard/credit-card/CreditCardsOffers";
import HomeLoanOffers from "@/components/dashboard/home-loan/HomeLoanOffers";
import LoanDocumentForm from "@/components/pages/LoanDocumentForm";
import TimelineProgress from "@/components/pages/TimelineProgress";

export const getPrivateRoutes = () => (
  <>
    <Route path="/" element={<PrivateRoute />}>
      {/* Public Route */}
      <Route path="cibil-credit-report" element={<CheckProceed />} />

      {/* Private Dashboard Routes */}
      <Route path="myaccount" element={<Dashboard />}>
        {/* Dashboard Tabs */}
        <Route path="dashboard" element={<CreditScore />} />
        <Route path="profile" element={<Profile />} />
        <Route path="support" element={<FAQs />} />
        <Route path="support/preferences" element={<Preferences />} />

        {/* Credit Report Sub-Routes */}
        <Route path="dashboard/credit-report" element={<CreditSummary />} />
        <Route
          path="dashboard/credit-report/download-report"
          element={<CreditHealthReportPlans />}
        />
        <Route
          path="dashboard/credit-report/score-history"
          element={<ScoreHistory />}
        />
        <Route
          path="dashboard/credit-report/score-predictor"
          element={<CreditScorePredictor />}
        />
        <Route
          path="dashboard/credit-report/reportdetails"
          element={<ShowcreditcardSummary />}
        />

        {/* Product Offer Routes */}
        <Route
          path="products/personal-loan/offers"
          element={<PersonalLoanOffers />}
        />
        <Route
          path="products/business-loan/offers"
          element={<BussinessLoanOffers />}
        />
        <Route path="products/home-loan/offers" element={<HomeLoanOffers />} />
        <Route
          path="products/credit-card/offers"
          element={<CreditCardsOffers />}
        />

        {/* Loan Application Routes */}
        <Route
          path="loans/upload-document/:loanType"
          element={<LoanDocumentForm />}
        />
        <Route path="loans/apply/:loanType" element={<TimelineProgress />} />
        <Route
          path="loans/applied-Loan-History"
          element={<ApplyLoanApplicationHistory />}
        />

        {/* Redirect to dashboard by default */}
        <Route index element={<Navigate to="dashboard" replace />} />
      </Route>
    </Route>
  </>
);
