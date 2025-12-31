// routes/publicRoutes.js
import { Route, Navigate } from "react-router-dom";

import Landing from "@/components/layout/Landing";
import SignInForm from "@/components/pages/SignInForm";
import PersonalLoanPage from "@/components/pages/personal-loan/PersonalLoanPage";
import PersonalLoanApply from "@/components/pages/personal-loan/PersonalLoanApply";
import PersonalLoanEMICalulator from "@/components/pages/personal-loan/PersonalLoanEMICalulator";
import BusinessLoanApply from "@/components/pages/bussiness-loan/BusinessLoanApply";
import BusinessLoanPage from "@/components/pages/bussiness-loan/BusinessLoanPage";
import HomeLoanPage from "@/components/pages/home-loan/HomeLoanPage";
import HomeLoanEMICalculator from "@/components/pages/home-loan/HomeLoanEMICalculator";
import LoanAgainstProperty from "@/components/pages/loan-against-property/LoanAgainstProperty";
import LoanAgainstEMICalculator from "@/components/pages/loan-against-property/LoanAgainstEMICalculator";
import ContactUs from "@/components/pages/contact-us/ContactUs";
import AboutUs from "@/components/pages/AboutUs";
import CreaditCardPage from "@/components/pages/credit-card/CreaditCardPage";
import SbiCreditCard from "@/components/pages/credit-card/sbi/SbiCreditCard";
import HdfcCreditCard from "@/components/pages/credit-card/hdfc/HdfcCreditCard";
import AxisCreditCard from "@/components/pages/credit-card/Axis/AxisCreditCard";
import BestCreditCard from "@/components/pages/credit-card/BestCreditCard/BestCreditCard";
import CarLoanPage from "@/components/pages/car-loan/CarLoanPage";
import CibilScoreByPan from "@/components/pages/credit-report/CibilScoreByPan";
import CibilScoreByPersonalLoan from "@/components/pages/credit-report/CibilScoreByPersonal";
import CibilScoreBySbi from "@/components/pages/credit-report/CibilScoreBySbi";
import ImproveCibilScore from "@/components/pages/credit-report/ImproveCibilScore";
import FDCalculator from "@/components/pages/FD/FDCalculator";
import AadharCard from "@/components/pages/learn/AadharCard";
import NotFoundPage from "../components/pages/NotFoundPage";
import TdsReturnPage from "../components/pages/ca-advocate-services/return/TdsReturnPage";
import PfReturnPage from "../components/pages/ca-advocate-services/return/PfReturnPage";
import IncomeTaxReturnPage from "../components/pages/ca-advocate-services/return/IncomeTaxReturnPage";
import TdsReturnRevisionPage from "../components/pages/ca-advocate-services/return/TdsReturnRevisionPage";
import EsiReturnPage from "../components/pages/ca-advocate-services/return/EsiReturnPage";
import CompanyAnnualFilingPage from "../components/pages/ca-advocate-services/annual-filing/CompanyAnnualFilingPage";
import LlpAnnualFilingPage from "../components/pages/ca-advocate-services/annual-filing/LlpAnnualFilingPage";
import RocAnnualFFPLCompanyPage from "../components/pages/ca-advocate-services/annual-filing/RocAnnualFFPLCompanyPage";
import GstReturnPage from "../components/pages/ca-advocate-services/return/GstReturnPage";
import RocAnnualFsection8Page from "../components/pages/ca-advocate-services/annual-filing/RocAnnualFsection8Page";
import NidhiCompanyAnnualFilingPage from "../components/pages/ca-advocate-services/annual-filing/NidhiCompanyAnnualFilingPage";
import OpcAnnualFillingPage from "../components/pages/ca-advocate-services/annual-filing/OpcAnnualFillingPage";
import { RocAnnualFsection8 } from "../components/pages/ca-advocate-services/annual-filing/RocAnnualFsection8Description";
import RocAnnualComplianceForProducerCompanyPage from "../components/pages/ca-advocate-services/annual-filing/RocAnnualComplianceForProducerCompanyPage";
import AnnualFilingForTrustPage from "../components/pages/ca-advocate-services/annual-filing/AnnualFilingForTrustPage";
import GstRegistrationPage from "../components/pages/ca-advocate-services/registration/tax-registration/GstRegistrationPage";
import PanApplicationPage from "../components/pages/ca-advocate-services/registration/tax-registration/PanApplicationPage";
import GstModificationPage from "../components/pages/ca-advocate-services/registration/tax-registration/GstModificationPage";
import TanApplicationPage from "../components/pages/ca-advocate-services/registration/tax-registration/TanApplicationPage";
import IecRegistrationPage from "../components/pages/ca-advocate-services/registration/tax-registration/other-registration/IecRegistrationPage";
import IceModificationPage from "../components/pages/ca-advocate-services/registration/tax-registration/other-registration/IceModificationPage";
import EsiRegistrationPage from "../components/pages/ca-advocate-services/registration/tax-registration/other-registration/EsiRegistrationPage";
import DigitalSignaturePage from "../components/pages/ca-advocate-services/registration/tax-registration/other-registration/DigitalSignaturePage";
import DinApplicationPage from "../components/pages/ca-advocate-services/registration/tax-registration/other-registration/DinApplicationPage";
import EpfRegistrationPage from "../components/pages/ca-advocate-services/registration/tax-registration/other-registration/EpfRegistrationPage";
import SsiMsmeRegistrationPage from "../components/pages/ca-advocate-services/registration/tax-registration/other-registration/SsiMsmeRegistrationPage";
import AddAdirectorPartnerPage from "../components/pages/ca-advocate-services/compliances/change-services/AddAdirectorPartnerPage";
import AddRemoveApartnerInLlpPage from "../components/pages/ca-advocate-services/compliances/change-services/AddRemoveApartnerInLlpPage";
import ChangeRegisterOfficeAddressPage from "../components/pages/ca-advocate-services/compliances/change-services/ChangeRegisterOfficeAddressPage";
import InvitationSlide from "../components/home/InvitationSlide";

export const getPublicRoutes = () => (
  <>
    <Route path="/" element={<Landing />} />
    <Route path="/sign-in" element={<SignInForm />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/personal-loan" element={<PersonalLoanPage />} />
    <Route path="/personal-loan/apply" element={<PersonalLoanApply />} />
    <Route
      path="/personal-loan-emi-calculator"
      element={<PersonalLoanEMICalulator />}
    />
    <Route path="/business-loan" element={<BusinessLoanPage />} />
    <Route path="/business-loan/apply" element={<BusinessLoanApply />} />
    <Route path="/loan-against-property" element={<LoanAgainstProperty />} />
    <Route
      path="/loan-against-property-emi-calculator"
      element={<LoanAgainstEMICalculator />}
    />
    <Route path="/home-loan" element={<HomeLoanPage />} />
    <Route
      path="/home-loan-emi-calculator"
      element={<HomeLoanEMICalculator />}
    />
    <Route path="/loan-against-car" element={<CarLoanPage />} />
    <Route path="/credit-cards" element={<CreaditCardPage />} />
    <Route path="/fd-fixed-deposit-calculator" element={<FDCalculator />} />
    <Route
      path="/cibil-report/how-to-check-cibil-score-by-pan-card"
      element={<CibilScoreByPan />}
    />
    <Route
      path="/cibil-report/cibil-score-for-personal-loan"
      element={<CibilScoreByPersonalLoan />}
    />
    <Route
      path="/cibil-report/cibil-score-sbi-loans"
      element={<CibilScoreBySbi />}
    />
    <Route
      path="/cibil-report/ways-to-improve-your-cibil-score"
      element={<ImproveCibilScore />}
    />
    <Route path="/sbi-bank/credit-card" element={<SbiCreditCard />} />
    <Route path="/hdfc-bank/credit-card" element={<HdfcCreditCard />} />
    <Route path="/axis-bank/credit-card" element={<AxisCreditCard />} />
    <Route
      path="/credit-card/25-best-credit-cards-india"
      element={<BestCreditCard />}
    />
    <Route path="/aadhar-card" element={<AadharCard />} />

    {/*Registration routes */}

    <Route
      path="/caservices/gst-registration"
      element={<GstRegistrationPage />}
    />

    <Route
      path="/caservices/pan-application"
      element={<PanApplicationPage />}
    />

    <Route
      path="/caservices/gst-modification"
      element={<GstModificationPage />}
    />
    <Route
      path="/caservices/tan-application"
      element={<TanApplicationPage />}
    />
    <Route
      path="/caservices/iec-registration"
      element={<IecRegistrationPage />}
    />
    <Route
      path="/caservices/iec-modification"
      element={<IceModificationPage />}
    />
    <Route
      path="/caservices/esi-registration"
      element={<EsiRegistrationPage />}
    />
    <Route
      path="/caservices/digital-signature"
      element={<DigitalSignaturePage />}
    />
    <Route
      path="/caservices/din-application"
      element={<DinApplicationPage />}
    />
    <Route
      path="/caservices/epf-registration"
      element={<EpfRegistrationPage />}
    />
    <Route
      path="/caservices/ssi-msme-registration"
      element={<SsiMsmeRegistrationPage />}
    />

    {/* Return Routes */}

    <Route path="/caservices/gst-return" element={<GstReturnPage />} />
    <Route path="/caservices/tds-return" element={<TdsReturnPage />} />
    <Route path="/caservices/pf-return" element={<PfReturnPage />} />
    <Route
      path="/caservices/income-tax-returns"
      element={<IncomeTaxReturnPage />}
    />
    <Route
      path="/caservices/tds-returns-revision"
      element={<TdsReturnRevisionPage />}
    />
    <Route path="/caservices/esi-returns" element={<EsiReturnPage />} />
    <Route
      path="/caservices/company-annual-filing"
      element={<CompanyAnnualFilingPage />}
    />
    <Route
      path="/caservices/llp-annual-filing"
      element={<LlpAnnualFilingPage />}
    />
    <Route
      path="/caservices/roc-annual-filing-for-public-limited-company"
      element={<RocAnnualFFPLCompanyPage />}
    />
    <Route
      path="/caservices/opc-annual-filing"
      element={<OpcAnnualFillingPage />}
    />
    <Route
      path="/caservices/roc-annual-filing-for-section-8-company"
      element={<RocAnnualFsection8Page />}
    />
    <Route
      path="/caservices/nidhi-company-annual-filing"
      element={<NidhiCompanyAnnualFilingPage />}
    />
    <Route
      path="/caservices/roc-annual-compliance-for-producer-company"
      element={<RocAnnualComplianceForProducerCompanyPage />}
    />
    <Route
      path="/caservices/annual-filing-for-trust"
      element={<AnnualFilingForTrustPage />}
    />

    {/* Compliances routes */}
    <Route
      path="/caservices/add-a-director-partner"
      element={<AddAdirectorPartnerPage />}
    />
    <Route
      path="/caservices/add-remove-a-partner-in-llp"
      element={<AddRemoveApartnerInLlpPage />}
    />
    <Route
      path="/caservices/change-registered-office-address"
      element={<ChangeRegisterOfficeAddressPage />}
    />
    <Route
      path="/image"
      element={<InvitationSlide />}
    />

    <Route path="*" element={<NotFoundPage />} />
    {/* for development change in actual production */}
  </>
);
