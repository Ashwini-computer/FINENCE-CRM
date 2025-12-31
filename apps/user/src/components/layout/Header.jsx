import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const mainNavItems = [
  {
    title: "All Products",
    items: [
      {
        title: "Loans",
        links: [
          { label: "Personal Loan", href: "/personal-loan" },
          { label: "Business Loan", href: "/business-loan" },
          { label: "Home Loan", href: "/home-loan" },
          { label: "Loan Against Property", href: "/loan-against-property" },
        ],
      },
      {
        title: "Other Products",
        links: [
          {
            label: "Credit Score",
            href: "/cibil-credit-report",
            badge: "Free",
          },
          { label: "Credit Card", href: "/credit-cards" },
        ],
      },
      {
        title: "Loan Transfer",
        links: [
          { label: "Personal Loan Balance Transfer", href: "/personal-loans" },
          {
            label: "Home Loan Balance Transfer",
            href: "/home-loan-balance-transfer",
          },
        ],
      },
    ],
  },
  {
    title: "CA & Advocate Services",
    items: [
      {
        title: "Registrations",
        suboptions: [
          {
            subtitle: "Tax Registration",
            links: [
              {
                label: "GST Registration",
                href: "/caservices/gst-registration",
              },
              {
                label: "GST Modification",
                href: "/caservices/gst-modification",
              },
              { label: "PAN Application", href: "/caservices/pan-application" },
              {
                label: "TAN Application",
                href: "/caservices/tan-application",
              },
            ],
          },
          {
            subtitle: "Other Registration",
            links: [
              {
                label: "IEC Registration",
                href: "/caservices/iec-registration",
              },
              {
                label: "IEC Modification",
                href: "/caservices/iec-modification",
              },
              {
                label: "ESIC Registration",
                href: "/caservices/esi-registration",
              },
              {
                label: "Digital Signature",
                href: "/caservices/digital-signature",
              },
              {
                label: "DIN Application",
                href: "/caservices/din-application",
              },
              {
                label: "EPF Registration",
                href: "/caservices/epf-registration",
              },
              {
                label: "SSI/MSME/Udyog Aadhar Registration",
                href: "/caservices/ssi-msme-registration",
              },
            ],
          },
        ],
      },
      {
        title: "Returns",
        suboptions: [
          {
            subtitle: "Return",
            links: [
              { label: "GST Returns", href: "/caservices/gst-return" },
              { label: "TDS Returns", href: "/caservices/tds-return" },
              { label: "PF Returns", href: "/caservices/pf-returns" },
              {
                label: "Income Tax Return",
                href: "/caservices/income-tax-returns",
              },
              {
                label: "TDS Returns Revision",
                href: "/caservices/tds-returns-revision",
              },
              { label: "ESI Return", href: "/caservices/esi-returns" },
            ],
          },
          {
            subtitle: "Annual Filings",
            links: [
              {
                label: "Private Limited Company Annual Filing",
                href: "/caservices/company-annual-filing",
              },
              {
                label: "LLP Annual Filing",
                href: "/caservices/llp-annual-filing",
              },
              {
                label: "Public Limited Company Annual Filing",
                href: "/caservices/roc-annual-filing-for-public-limited-company",
              },
              {
                label: "OPC Annual Filing",
                href: "/caservices/opc-annual-filing",
              },
              {
                label: "NPO/Section 8 Company Annual Filing",
                href: "/caservices/roc-annual-filing-for-section-8-company",
              },
              {
                label: "Nidhi Company Annual Filing",
                href: "/caservices/nidhi-company-annual-filing",
              },
              {
                label: "Producer Company Annual Filing",
                href: "/caservices/roc-annual-compliance-for-producer-company",
              },
              {
                label: "Trust Annual Filing",
                href: "/caservices/annual-filing-for-trust",
              },
            ],
          },
        ],
      },
      {
        title: "Compliances",
        suboptions: [
          {
            subtitle: "Change Services",
            links: [
              { label: "Add A Director", href: "#" },
              { label: "Removal/Resignation of Director", href: "#" },
              { label: "Add/Remove a Partner in LLP", href: "#" },
              { label: "Change in LLP Agreement", href: "#" },
              { label: "Change of Registered Office Address", href: "#" },
              { label: "Increase in Authorized Capital", href: "#" },
              { label: "Change in DIN", href: "#" },
              { label: "Surrender Your DIN", href: "#" },
              { label: "Appointment of Auditors", href: "#" },
              { label: "Share Transfer & Transmission", href: "#" },
              { label: "Company Name Change", href: "#" },
              { label: "LLP Name Change", href: "#" },
              { label: "MOA/AOA Amendment", href: "#" },
              { label: "MOA/AOA Printing", href: "#" },
            ],
          },
          {
            subtitle: "Closure",
            links: [
              { label: "Strike Off Company", href: "#" },
              { label: "Strike Off LLP", href: "#" },
              { label: "Dissolution of Firms", href: "#" },
              { label: "Strike Off OPC", href: "#" },
            ],
          },
          {
            subtitle: "Legal Drafting",
            links: [
              { label: "Download Library", href: "#" },
              { label: "Customized Drafting", href: "#" },
            ],
          },
          {
            subtitle: "Special",
            links: [
              {
                label: "GST LUT Letter of Undertaking",
                href: "#",
              },
              { label: "GST Cancellation", href: "#" },
              { label: "DIR 3 KYC", href: "#" },
              { label: "ROC Search Report", href: "#" },
              {
                label: "Commencement of Business (INC 20A) Filing",
                href: "#",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Learn & Resources",
    items: [
      {
        title: "Learn",
        links: [
          { label: "Aadhaar Card", href: "/aadhar-card" },
          { label: "PAN Card", href: "/pan-card" },
          { label: "PPF (Public Provident Fund)", href: "/saving-schemes/ppf" },
        ],
      },
      {
        title: "",
        links: [
          // { label: "Income Tax", href: "/tax/income-tax" },
          {
            label: "EPF (Employee Provident Fund)",
            href: "/saving-schemes/epf",
          },
          { label: "FAQs", href: "/faqs" },
          { label: "Banking", href: "/banking" },
        ],
      },
      {
        title: "Resources",
        links: [
          {
            label: "Credit Card Rewards Calculator",
            href: "/cards/rewards",
            badge: "New",
          },
          {
            label: "Personal Loan EMI Calculator",
            href: "/personal-loan-emi-calculator",
          },
          {
            label: "Home Loan EMI Calculator",
            href: "/home-loan-emi-calculator",
          },
          {
            label: "Loan Against Property EMI Calculator",
            href: "/loan-against-property-emi-calculator",
          },
          { label: "FD Calculator", href: "/fd-fixed-deposit-calculator" },
        ],
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    isSingle: true,
  },
  {
    title: "Carrier",
    href: "/carrier",
    isSingle: true,
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSheetOpen]);

  return (
    <header
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${
        isSheetOpen
          ? "bg-[#ffffff]"
          : isScrolled
          ? "bg-[#ffffff] border-b shadow-xl border-gray-200"
          : "bg-white/30"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-22">
          <div className="flex items-center gap-3">
            <div className="block lg:hidden">
              <MobileNav
                mainNavItems={mainNavItems}
                setIsSheetOpen={setIsSheetOpen}
                isSheetOpen={isSheetOpen}
              />
            </div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                loading="lazy"
                src="/logo.png"
                alt="logo"
                className="sm:w-40 w-28"
              />
            </Link>
          </div>
          <div className="lg:block hidden">
            <DesktopNav
              mainNavItems={mainNavItems}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
          </div>
          <div className="flex items-center">
            <Link to="/sign-in">
              <Button
                variant="outline"
                size="sm"
                className="flex sm:shadow bg-muted sm:bg-transparent shadow-none sm:border-primary text-primary hover:bg-primary hover:text-white"
              >
                <FiUser className="h-4 w-4 mr-1" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
