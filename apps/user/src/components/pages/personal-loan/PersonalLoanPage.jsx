import PageLayout from "@/components/layout/PageLayout";
import { FiStar } from "react-icons/fi";
import { TypographyMuted, TypographyH3 } from "@/custom/Typography";
import HeroLoginCard from "../HeroSectionPages";
import { Bot, Handshake, QrCode, Signature } from "lucide-react";
import { OffersCards } from "../../OffersCards";
import PersonalLoanDescription from "./PersonalLoanDescription";
import EmiCalculator from "../../EMI/EmiCalculator";

export const loanOffers = [
  {
    id: "hdfc-bank",
    img: "/banks/symbol/hdfc.png",
    name: "HDFC Bank",
    highlights: [
      "10 Second Disbursal*",
      "100% Digital Process*",
      "Quick Disbursal",
    ],
    max_loan: "Upto ₹40L",
    interest_rate: "10.9% - 24%",
    tenure: "Upto 6 Years",
    processing_fee: "6500",
  },
  {
    id: "axis-bank",
    name: "Axis Bank",
    highlights: ["Low Processing fee"],
    max_loan: "Upto ₹10L",
    interest_rate: "11.25% - 22%",
    tenure: "Upto 5 Years",
    processing_fee: "Upto 2%",
  },
  {
    id: "kotak-mahindra-bank",
    img: "/banks/symbol/kotak.png",
    name: "Kotak Mahindra Bank",
    highlights: ["Lowest Income requirement", "100% Digital Process*"],
    max_loan: "Upto ₹35L",
    interest_rate: "10.99% - 16.9%",
    tenure: "Upto 6 Years",
    processing_fee: "Upto 5%",
  },
  {
    id: "idfc-first-bank",
    name: "IDFC FIRST Bank",
    img: "/banks/symbol/idfc.png",
    highlights: ["Max Loan Amount", "100% Digital Process*"],
    max_loan: "Upto ₹10L",
    interest_rate: "10.99% - 23.99%",
    tenure: "Upto 5 Years",
    processing_fee: "Upto 2%",
  },
  {
    id: "icici-bank",
    name: "ICICI Bank",
    img: "/banks/symbol/icici.png",
    highlights: ["100% Digital Process*", "Quick Disbursal"],
    max_loan: "Upto ₹50L",
    interest_rate: "10.85% - 16.65%",
    tenure: "1-6 Years",
    processing_fee: "Upto 2%",
  },
  {
    id: "yes-bank",
    name: "Yes Bank",
    img: "/banks/symbol/yes.png",
    highlights: ["100% Digital Process*", "Quick Disbursal"],
    max_loan: "Upto ₹40L",
    interest_rate: "11.25% - 21%",
    tenure: "Upto 5 Years",
    processing_fee: "0% - 2.5%",
  },
  {
    id: "tata-capital",
    name: "Tata Capital Limited",
    img: "/banks/symbol/tataFederal.png",
    highlights: ["100% Digital Process*"],
    max_loan: "Upto ₹50L",
    interest_rate: "11.99% - 35%",
    tenure: "Upto 7 Years",
    processing_fee: "Upto 4%",
  },
  {
    id: "indusind-bank",
    name: "IndusInd Bank",
    img: "/banks/symbol/indusind.png",
    highlights: ["Lowest Income requirement", "Quick Disbursal"],
    max_loan: "Upto ₹50L",
    interest_rate: "10.49% - 26%",
    tenure: "1-7 Years",
    processing_fee: "Upto 4%",
  },
  {
    id: "federal-bank",
    name: "Federal Bank",
    img: "/banks/symbol/federal.png",
    highlights: ["Lowest Income requirement", "100% Digital Process*"],
    max_loan: "Upto ₹5L",
    interest_rate: "12% - 22.5%",
    tenure: "1-4 Years",
    processing_fee: "1.5% - 2.5%",
  },
  {
    id: "rbl-bank",
    name: "RBL Bank",
    img: "/banks/symbol/rbl.png",
    highlights: ["100% Digital Process*", "Quick Disbursal"],
    max_loan: "Upto ₹5L",
    interest_rate: "18% - 26%",
    tenure: "Upto 3 Years",
    processing_fee: "Upto 2%",
  },
];

const loanFeatures = [
  {
    title: "Best Loan Deals",
    description: "Hand picked offers from 30+ lenders",
    icon: <Handshake size={14} />,
  },
  {
    title: "Instant Loan",
    description: "Money in Mins via Pre-Approved Loans",
    icon: <Bot size={14} />,
  },
  {
    title: "Digital Process",
    description: "Hassle free Contact-less processes",
    icon: <QrCode size={14} />,
  },
  {
    title: "Quick Approval",
    description: "Fast approval for your loan application",
    icon: <Signature size={14} />,
  },
];

export const creditStatus = [
  {
    title: "4.2/5",
    subtitle: "Ratings",
    icon: "stars",
  },
  {
    title: "45M+",
    subtitle: "Satisfied Customers",
  },
  {
    title: "65M+",
    subtitle: "Lending Partners",
  },
  {
    title: "800M+",
    subtitle: "Cities across India",
  },
];

const whyChooseData = [
  {
    img: "/product/money-icon-2.svg",
    text: (
      <>
        Compare & Choose the <strong>Best Offer</strong>
      </>
    ),
  },
  {
    img: "/product/pre-approved.svg",
    text: (
      <>
        Pre-approved Offers with <strong>Instant Disbursals</strong>
      </>
    ),
  },
  {
    img: "/product/meter-icon.svg",
    text: (
      <>
        Know Your <strong>Chances of Approval</strong>
      </>
    ),
  },
  {
    img: "/product/digital-process-icon.svg",
    text: (
      <>
        End-to-End <strong>Digital Process</strong>
      </>
    ),
  },
];

export default function PersonalLoanPage() {
  return (
    <PageLayout>
      <HeroLoginCard
        headline="  Personal Loan"
        description="Get a personal loan of up to Rs 40 lakh with interest rates starting at 10.5% p.a. Explore pre-approved offers from our partner lenders, featuring end-to-end digital processing and instant disbursals."
        cards={loanFeatures}
        navigateLink="/personal-loan/apply"
        loginSubHedline="Don't worry, this will not affect your credit score."
        ratingInfo={creditStatus}
        highlighterHedline={{
          rightText: "Check",
          highLighter: "Personal Loan",
          leftText: "Offers Online",
        }}
      />

      <EmiCalculator headline="Personal Loan EMI Calculator" />

      <div className="py-10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <OffersCards
              offers={loanOffers}
              headline="Find Best Personal Loan Offers"
              buttontext="Check Eligibility"
            />
          </div>
          <div className="lg:col-span-4 h-fit bg-primary/10 sm:p-10 p-6 rounded-md">
            <h2 className="sm:text-xl text-sm font-bold mb-6 text-center">
              Why Choose Financesbazar?
            </h2>
            <div className="flex items-center flex-wrap gap-4 sm:gap-8">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-6 justify-between text-wrap"
                >
                  <img
                    loading="lazy"
                    src={item.img}
                    alt="icon"
                    className="w-10 h-10 mb-4"
                  />
                  <TypographyMuted className="text-sm text-gray-700">
                    {item.text}
                  </TypographyMuted>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What is a Personal Loan */}
      <div className="py-12 bg-primary/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <TypographyH3 className="font-bold tracking-normal mb-4">
                What is a Personal Loan?
              </TypographyH3>
              <TypographyMuted className="leading-6 tracking-normal font-medium">
                Personal loan is a short to medium term loan, which consumers
                can avail to meet both personal and business needs other than
                speculative purposes. They are usually unsecured in nature as
                consumers do not need to pledge any collateral or security to
                avail them.
              </TypographyMuted>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FiStar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Personal loan - 5 Points</div>
                    <div className="text-sm text-gray-500">financesbazar</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">5:56</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PersonalLoanDescription />
    </PageLayout>
  );
}
