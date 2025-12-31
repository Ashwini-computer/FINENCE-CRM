import { useState } from "react";
import { OffersCards } from "../OffersCards";
import { sbiCreditCardProps } from "./credit-card/CreditCardJSONData";
import { CreditCard } from "./credit-card/CreditCards";
export default function OfferPage() {
  const [activeTab, setActiveTab] = useState("personal-loan");
  const loanOffers = [
    {
      id: 'hdfc-bank',
      img: "/banks/symbol/hdfc.png",
      name: 'HDFC Bank',
      highlights: ['10 Second Disbursal*', '100% Digital Process*', 'Quick Disbursal'],
      max_loan: 'Upto ₹40L',
      interest_rate: '10.9% - 24%',
      tenure: 'Upto 6 Years',
      processing_fee: '6500',
    },
    {
      id: 'axis-bank',
      name: 'Axis Bank',
      highlights: ['Low Processing fee'],
      max_loan: 'Upto ₹10L',
      interest_rate: '11.25% - 22%',
      tenure: 'Upto 5 Years',
      processing_fee: 'Upto 2%',
    },
    {
      id: 'kotak-mahindra-bank',
      img: "/banks/symbol/kotak.png",
      name: 'Kotak Mahindra Bank',
      highlights: ['Lowest Income requirement', '100% Digital Process*'],
      max_loan: 'Upto ₹35L',
      interest_rate: '10.99% - 16.9%',
      tenure: 'Upto 6 Years',
      processing_fee: 'Upto 5%',
    },
    {
      id: 'idfc-first-bank',
      name: 'IDFC FIRST Bank',
      img: "/banks/symbol/idfc.png",
      highlights: ['Max Loan Amount', '100% Digital Process*'],
      max_loan: 'Upto ₹10L',
      interest_rate: '10.99% - 23.99%',
      tenure: 'Upto 5 Years',
      processing_fee: 'Upto 2%',
    },
    {
      id: 'icici-bank',
      name: 'ICICI Bank',
      img: "/banks/symbol/icici.png",
      highlights: ['100% Digital Process*', 'Quick Disbursal'],
      max_loan: 'Upto ₹50L',
      interest_rate: '10.85% - 16.65%',
      tenure: '1-6 Years',
      processing_fee: 'Upto 2%',
    },
    {
      id: 'yes-bank',
      name: 'Yes Bank',
      img: "/banks/symbol/yes.png",
      highlights: ['100% Digital Process*', 'Quick Disbursal'],
      max_loan: 'Upto ₹40L',
      interest_rate: '11.25% - 21%',
      tenure: 'Upto 5 Years',
      processing_fee: '0% - 2.5%',
    },
    {
      id: 'tata-capital',
      name: 'Tata Capital Limited',
      img: "/banks/symbol/tataFederal.png",
      highlights: ['100% Digital Process*'],
      max_loan: 'Upto ₹50L',
      interest_rate: '11.99% - 35%',
      tenure: 'Upto 7 Years',
      processing_fee: 'Upto 4%',
    },
    {
      id: 'indusind-bank',
      name: 'IndusInd Bank',
      img: "/banks/symbol/indusind.png",
      highlights: ['Lowest Income requirement', 'Quick Disbursal'],
      max_loan: 'Upto ₹50L',
      interest_rate: '10.49% - 26%',
      tenure: '1-7 Years',
      processing_fee: 'Upto 4%',
    },
    {
      id: 'federal-bank',
      name: 'Federal Bank',
      img: "/banks/symbol/federal.png",
      highlights: ['Lowest Income requirement', '100% Digital Process*'],
      max_loan: 'Upto ₹5L',
      interest_rate: '12% - 22.5%',
      tenure: '1-4 Years',
      processing_fee: '1.5% - 2.5%',
    },
    {
      id: 'rbl-bank',
      name: 'RBL Bank',
      img: "/banks/symbol/rbl.png",
      highlights: ['100% Digital Process*', 'Quick Disbursal'],
      max_loan: 'Upto ₹5L',
      interest_rate: '18% - 26%',
      tenure: 'Upto 3 Years',
      processing_fee: 'Upto 2%',
    }
  ];
  const partnerCategories = [
    { id: "personal-loan", name: "Personal Loan" },
    { id: "credit-card", name: "Credit Card" },
    { id: "home-loan", name: "Best Home Loan Offers For You !" },
  ];

  const loanOffersdummy = [
  {
    id: 'hdfc-bank',
    img: "/banks/symbol/hdfc.png",
    name: 'HDFC Bank',
    highlights: ['10 Second Disbursal*', '100% Digital Process*', 'Quick Disbursal'],
    max_loan: 'Upto ₹40L',
    interest_rate: '10.9% - 24%',
    tenure: 'Upto 6 Years',
    processing_fee: '6500',
    catEligibility: ['Upper A', 'Lower A', 'Upper B'],
  },
  {
    id: 'axis-bank',
    name: 'Axis Bank',
    highlights: ['Low Processing fee'],
    max_loan: 'Upto ₹10L',
    interest_rate: '11.25% - 22%',
    tenure: 'Upto 5 Years',
    processing_fee: 'Upto 2%',
    catEligibility: ['Upper A', 'Lower A', 'Upper B', 'Lower B'],
  },
  {
    id: 'kotak-mahindra-bank',
    img: "/banks/symbol/kotak.png",
    name: 'Kotak Mahindra Bank',
    highlights: ['Lowest Income requirement', '100% Digital Process*'],
    max_loan: 'Upto ₹35L',
    interest_rate: '10.99% - 16.9%',
    tenure: 'Upto 6 Years',
    processing_fee: 'Upto 5%',
    catEligibility: ['Upper A', 'Lower A'],
  },
  {
    id: 'idfc-first-bank',
    name: 'IDFC FIRST Bank',
    img: "/banks/symbol/idfc.png",
    highlights: ['Max Loan Amount', '100% Digital Process*'],
    max_loan: 'Upto ₹10L',
    interest_rate: '10.99% - 23.99%',
    tenure: 'Upto 5 Years',
    processing_fee: 'Upto 2%',
    catEligibility: ['Upper A', 'Lower A', 'Upper B', 'Lower B'],
  },
  {
    id: 'icici-bank',
    name: 'ICICI Bank',
    img: "/banks/symbol/icici.png",
    highlights: ['100% Digital Process*', 'Quick Disbursal'],
    max_loan: 'Upto ₹50L',
    interest_rate: '10.85% - 16.65%',
    tenure: '1-6 Years',
    processing_fee: 'Upto 2%',
    catEligibility: ['Upper A', 'Lower A'],
  },
  {
    id: 'yes-bank',
    name: 'Yes Bank',
    img: "/banks/symbol/yes.png",
    highlights: ['100% Digital Process*', 'Quick Disbursal'],
    max_loan: 'Upto ₹40L',
    interest_rate: '11.25% - 21%',
    tenure: 'Upto 5 Years',
    processing_fee: '0% - 2.5%',
    catEligibility: ['Lower A', 'Upper B', 'Lower B'],
  },
  {
    id: 'tata-capital',
    name: 'Tata Capital Limited',
    img: "/banks/symbol/tataFederal.png",
    highlights: ['100% Digital Process*'],
    max_loan: 'Upto ₹50L',
    interest_rate: '11.99% - 35%',
    tenure: 'Upto 7 Years',
    processing_fee: 'Upto 4%',
    catEligibility: ['Upper B', 'Lower B', 'Upper C'],
  },
  {
    id: 'indusind-bank',
    name: 'IndusInd Bank',
    img: "/banks/symbol/indusind.png",
    highlights: ['Lowest Income requirement', 'Quick Disbursal'],
    max_loan: 'Upto ₹50L',
    interest_rate: '10.49% - 26%',
    tenure: '1-7 Years',
    processing_fee: 'Upto 4%',
    catEligibility: ['Lower A', 'Upper B', 'Lower B'],
  },
  {
    id: 'federal-bank',
    name: 'Federal Bank',
    img: "/banks/symbol/federal.png",
    highlights: ['Lowest Income requirement', '100% Digital Process*'],
    max_loan: 'Upto ₹5L',
    interest_rate: '12% - 22.5%',
    tenure: '1-4 Years',
    processing_fee: '1.5% - 2.5%',
    catEligibility: ['Upper B', 'Lower B', 'Upper C'],
  },
  {
    id: 'rbl-bank',
    name: 'RBL Bank',
    img: "/banks/symbol/rbl.png",
    highlights: ['100% Digital Process*', 'Quick Disbursal'],
    max_loan: 'Upto ₹5L',
    interest_rate: '18% - 26%',
    tenure: 'Upto 3 Years',
    processing_fee: 'Upto 2%',
    catEligibility: ['Lower B', 'Upper C', 'Lower C'],
  }
];


  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex items-center gap-4 mb-2 overflow-x-auto scrollbar-hide pb-2">
        {partnerCategories.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveTab(option.id)}
            className={`whitespace-nowrap ${activeTab === option.id ? 'bg-primary text-white border-none' : 'text-primary'} sm:text-sm text-xs font-semibold border border-primary cursor-pointer sm:px-4 px-2 py-1 rounded-sm`}
          >
            {option.name}
          </button>
        ))}
      </div>


      {/* Section Content */}
      <div className="max-w-2xl">
        {activeTab === "personal-loan" && (
          <OffersCards
            offers={loanOffers}
            loanType="personal"
            headline="Find Best Personal Loan Offers"
            buttontext="Apply"
            className="bg-white" // for card bg change
          />
        )}
        {activeTab === "credit-card" && (
          <div className="grid gap-4 mt-8">
            {sbiCreditCardProps.map((card, idx) => (
              <CreditCard 
              buttontext="Apply"
              key={idx} {...card}/>
            ))}
          </div>

        )}
        {activeTab === "home" && (
          <OffersCards
            offers={loanOffers}
            loanType="home-loan"
            headline="Find Best Home Loan Offers"
            buttontext="Apply"
            className="bg-white" // for card bg change

          />
        )}
      </div>
    </div>
  );
}
