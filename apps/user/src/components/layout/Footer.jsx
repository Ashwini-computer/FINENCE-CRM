import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Footer data structure
const footerLinks = [
  {
    title: "Most Searched Links",
    links: [
      { label: "CIBIL", href: "/cibil-credit-report" },
      { label: "Credit Cards", href: "/credit-cards" },
      { label: "Personal Loan", href: "/personal-loan" },
      { label: "Business Loan", href: "/business-loan" },
      { label: "Home Loan", href: "/home-loan" },
    ],
  },
  {
    title: "CIBIL",
    links: [
      { label: "Credit Score", href: "/cibil-credit-report" },
      {
        label: "Check CIBIL Score by PAN Number",
        href: "/cibil-report/how-to-check-cibil-score-by-pan-card",
      },
      {
        label: "CIBIL Score for Personal Loan",
        href: "/cibil-report/cibil-score-for-personal-loan",
      },
      { label: "SBI CIBIL Score", href: "/cibil-report/cibil-score-sbi-loans" },
      {
        label: "How to Improve CIBIL Score",
        href: "/cibil-report/ways-to-improve-your-cibil-score",
      },
    ],
  },
  {
    title: "Credit Cards",
    links: [
      { label: "Credit Card", href: "/credit-cards" },
      { label: "SBI Credit Card", href: "/sbi-bank/credit-card" },
      { label: "HDFC Credit Card", href: "/hdfc-bank/credit-card" },
      { label: "Axis Bank Credit Card", href: "/axis-bank/credit-card" },
      {
        label: "Best Credit Cards",
        href: "/credit-card/25-best-credit-cards-india",
      },
    ],
  },
  {
    title: "Personal Loan",
    links: [
      {
        label: "Personal Loan Interest Rates",
        href: "/personal-loan/interest-rates",
      },
      { label: "SBI Personal Loan", href: "/sbi-bank/personal-loan" },
      { label: "HDFC Personal Loan", href: "/hdfc-bank/personal-loan" },
      { label: "Axis Bank Personal Loan", href: "/axis-bank/personal-loan" },
      {
        label: "Personal Loan Eligibility",
        href: "/personal-loan/eligibility-calculator",
      },
    ],
  },
  {
    title: "Business Loan",
    links: [
      {
        label: "Business Loan Interest Rates",
        href: "/business-loan/interest-rates",
      },
      { label: "SBI Business Loan", href: "/sbi-bank/business-loan" },
      { label: "MSME Loan", href: "/business-loan/msme-loan" },
      { label: "HDFC Business Loan", href: "/hdfc-bank/business-loan" },
      { label: "SBI Mudra Loan", href: "/sbi-bank/mudra-loan" },
    ],
  },
];

const paymentMethods = [
  { name: "Visa", logo: "visa" },
  { name: "Mastercard", logo: "mastercard" },
  { name: "RuPay", logo: "rupay" },
  { name: "American Express", logo: "maestro" },
  { name: "american-express", logo: "american-express" },
];

const socialLinks = [
  { name: "Facebook", icon: FiFacebook, href: "https://www.facebook.com" },
  { name: "Twitter", icon: FiTwitter, href: "https://www.twitter.com" },
  { name: "Instagram", icon: FiInstagram, href: "https://www.instagram.com" },
  { name: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com" },
  { name: "YouTube", icon: FiYoutube, href: "https://www.youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#213448] sm:py-12 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerLinks.map((section) => (
            <div key={section?.title} className="space-y-4">
              <h3 className="font-semibold uppercase tracking-wider">
                {section?.title}
              </h3>
              <ul className="sm:space-y-3 space-y-2">
                {section?.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs font-medium hover:text-accent text-gray-300"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="max-w-6xl mx-auto py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between sm:gap-10 items-center space-y-4 md:space-y-0">
            {/* Copyright & Disclaimer */}
            <div className="text-xs text-gray-400 text-center md:text-left">
              © 2025 Umbakrar Tech(India) Pvt Ltd. All rights reserved.
              <p className="mt-1">
                Disclaimer: All product information is summarized from publicly
                available sources. Please refer to issuer website for full
                details.
              </p>
            </div>

            <div className="flex sm:flex-warap-none flex-wrap gap-3 items-center justify-center md:justify-start">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white h-8 w-16 rounded p-1 flex items-center justify-center"
                >
                  <img
                    loading="lazy"
                    src={`/footer/${method.logo}.png`}
                    className="h-full object-contain"
                    alt={method.name}
                  />
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex space-x-3.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:scale-105 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
