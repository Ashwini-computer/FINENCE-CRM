import {
  TypographySmall,
  TypographyH2BlueColor,
  TypographyPBlueColor,
  TypographyH4BlueColor,
  TypographyList2,
  BoldList,
} from "@/custom/Typography";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const loanInterestRates = [
  { id: "hdfc-bank", name: "HDFC Bank", interestRate: "10.90% - 24.00% p.a." },
  { id: "axis-bank", name: "Axis Bank", interestRate: "11.25% p.a. onwards" },
  {
    id: "icici-bank",
    name: "ICICI Bank",
    interestRate: "10.85% - 16.65% p.a.",
  },
  {
    id: "kotak-mahindra-bank",
    name: "Kotak Mahindra Bank",
    interestRate: "10.99% - 16.99% p.a.",
  },
  {
    id: "indusind-bank",
    name: "IndusInd Bank",
    interestRate: "10.49% p.a. onwards",
  },
  {
    id: "idfc-first-bank",
    name: "IDFC FIRST Bank",
    interestRate: "10.99% p.a. onwards",
  },
  {
    id: "federal-bank",
    name: "Federal Bank",
    interestRate: "12.00% - 22.50% p.a.",
  },
  { id: "dbs-bank", name: "DBS Bank", interestRate: "10.99% - 30% p.a." },
  { id: "yes-bank", name: "YES Bank", interestRate: "11.25% - 21% p.a." },
  {
    id: "tata-capital",
    name: "Tata Capital",
    interestRate: "11.99% - 29.99% p.a.",
  },
  {
    id: "aditya-birla-finance",
    name: "Aditya Birla Finance",
    interestRate: "10.99% p.a. onwards",
  },
  {
    id: "lt-finance",
    name: "L&T Finance",
    interestRate: "11.00% p.a. onwards",
  },
  {
    id: "hero-fincorp",
    name: "Hero Fincorp",
    interestRate: "19.75% - 37.75% p.a.",
  },
  {
    id: "piramal-finance",
    name: "Piramal Finance",
    interestRate: "12.90% p.a. onwards",
  },
  {
    id: "hdb-financial-services",
    name: "HDB Financial Services",
    interestRate: "10% - 35% p.a.",
  },
  {
    id: "poonawalla-fincorp",
    name: "Poonawalla Fincorp",
    interestRate: "18% - 36% p.a.",
  },
  {
    id: "smfg-india-credit",
    name: "SMFG India Credit",
    interestRate: "13% p.a. onwards",
  },
  { id: "moneyview", name: "Moneyview", interestRate: "14% - 36% p.a." },
  { id: "paysense", name: "PaySense", interestRate: "1.4% - 2.3% p.m." },
  {
    id: "incred-financial",
    name: "InCred Financial Services",
    interestRate: "13.99% p.a. onwards",
  },
];

const eligibilityCriteria = [
  {
    title: "Age",
    value: "18 - 60 years",
  },
  {
    title: "Salary (Salaried Customers)",
    value: "At least ₹15,000 per month",
  },
  {
    title: "Income (Self-Employed Customers)",
    value: "At least ₹5 lakh per annum",
  },
  {
    title: "Credit Score",
    value: "Preferably 750 and above for higher approval chances",
  },
  {
    title: "Employment Stability",
    value: "Minimum 1 year (may vary by lender)",
  },
  {
    title: "Business Continuity",
    value: "Minimum 3 years (may vary by lender)",
  },
  {
    title: "Employment Type",
    value: "Salaried with government, PSU, MNCs or reputed corporates",
  },
];

const documentRequirements = [
  {
    requirement: "Proof of Identity",
    salaried: "Passport, Voter ID, Driving License, Aadhaar Card or PAN Card",
    selfEmployed:
      "Passport, Voter ID, Driving License, Aadhaar Card or PAN Card",
  },
  {
    requirement: "Proof of Residence",
    salaried: "Aadhaar Card, Voter ID, Passport or Utility Bills",
    selfEmployed: "Aadhaar Card, Voter ID, Passport or Utility Bills",
  },
  {
    requirement: "Proof of Income",
    salaried: "Salary Slips, Bank Statements, Form 16",
    selfEmployed:
      "Previous Years’ ITR, P&L Statement and Balance Sheet, Bank Statements",
  },
];

const loanCharges = [
  {
    title: "Loan Processing Fees",
    value: "0.5% to 4% of loan amount",
  },
  {
    title: "Prepayment/Part-prepayment/Foreclosure Charges",
    value:
      "For Floating Rate: Nil\nFor Fixed Rate: Usually around 2% - 5% on the principal outstanding",
  },
  {
    title: "Loan Cancellation",
    value: "Usually around Rs 3,000",
  },
  {
    title: "Stamp Duty Charges",
    value: "As per actuals",
  },
  {
    title: "Legal Fees",
    value: "As per actuals",
  },
  {
    title: "Penal Charges",
    value: "Usually @ 2% per month; 24% p.a.",
  },
  {
    title: "EMI/Cheque Bounce",
    value: "Around Rs 400 per bounce",
  },
];

const applicationSteps = [
  {
    title: "Step 1",
    value: "Enter your mobile number in the application form",
  },
  {
    title: "Step 2",
    value: "Provide your personal details",
  },
  {
    title: "Step 3",
    value: "Enter OTP to verify your mobile number",
  },
  {
    title: "Step 4",
    value: "Select the loan purpose and loan amount",
  },
  {
    title: "Step 5",
    value: "Compare offers and apply for the best-suited loan",
  },
];

const loanFeaturesList = [
  {
    title: "Collateral-free loan",
    value: "No security or collateral required for approval",
  },
  {
    title: "No end-use restriction",
    value: "Use the loan amount for any personal financial requirement",
  },
  {
    title: "High loan amount",
    value:
      "Loan amount of up to Rs. 40 lakh, which can exceed depending on lenders' discretion",
  },
  {
    title: "Flexible repayment",
    value:
      "Repayment tenure up to 60 months, which may exceed on case-by-case basis",
  },
  {
    title: "Top-up facility",
    value:
      "Top up loans for additional requirements are offered by many lenders",
  },
  {
    title: "Minimal documentation",
    value: "Basic KYC and income proofs are usually sufficient",
  },
  {
    title: "Quick disbursals",
    value: "Funds disbursed quickly, often within 24-48 hours of approval",
  },
];

const emiFactors = [
  {
    title: "Principal Amount",
    value:
      "An increase in the principal amount leads to an increase in your EMI, provided the values for loan tenure and interest rate remain unchanged.",
  },
  {
    title: "Interest Rate",
    value:
      "Personal loan EMIs increase with every increment in the interest rates.",
  },
  {
    title: "Tenure",
    value:
      "Choosing a longer tenure on your loans results in lower EMIs. However, it also leads to higher overall interest cost on the loan.",
  },
];

const thingsBefore = [
  {
    title:
      "Many banks and NBFCs offer pre-approved instant personal loan offers to their existing customers",
    value:
      "Many lenders provide pre-approved offers to their select existing customers based on their credit profiles. Such pre-approved offers feature quick disbursals and require minimal to no documentation. Many lenders also offer lower interest rates to their existing customers.",
  },
  {
    title:
      "Having a higher credit score increases your chances of loan approval at lower interest rates",
    value:
      "Banks and NBFCs prefer sanctioning personal loans to those having higher credit scores of 750 and above. Many lenders also set lower interest rates for such applicants. Having higher credit scores also increases an individual’s eligibility for pre-approved loan offers.",
  },
  {
    title: "Increase your EMI affordability by choosing longer tenure",
    value:
      "Longer tenure leads to lower EMIs. Hence, consumers wanting to increase their EMI affordability can select longer tenures and/or lower loan amounts when making the loan application.",
  },
  {
    title:
      "No charges are levied on prepaying or foreclosing floating rate personal loans",
    value:
      "RBI has barred banks and NBFCs from levying prepayment/foreclosure charges on floating rate personal loan. In the case of fixed rate, lenders can choose to levy these charges.",
  },
  {
    title:
      "Making multiple loan applications within a short span might reduce your chances of loan approval",
    value:
      "Lenders fetch credit reports of every loan applicant as part of their loan evaluation process. Such lender-initiated credit report requests are known as hard enquiries. Having multiple hard enquiries within a short period can lead to a sudden decline in your credit score, thus, reducing your chances of availing personal loan.",
  },
];

const loanMistakesToAvoid = [
  {
    title: "Not checking your credit scores",
    value:
      "Applicants having credit scores preferably of 750 and above tend to have greater financial discipline, which reduces the credit risk of lenders. This increases the chances of availing personal loans and at lower interest rates. Thus, before making the loan application, applicants should check their credit scores and (if needed) take appropriate steps to improve their scores.",
  },
  {
    title: "Not contacting your existing lenders",
    value:
      "Many banks and NBFCs offer concessional interest rates on personal loans to their existing customers. Some even offer pre-approved personal loans to their select customers based on their credit profiles. Therefore, when looking for personal loans, one should first approach the banks or NBFCs with whom they already have deposits and/or loans and credit cards accounts.",
  },
  {
    title: "Not factoring in your repayment capacity",
    value:
      "Lenders usually prefer sanctioning personal loans to those having their total EMIs, including that of the proposed loan, within 50-55% of their monthly income. Those exceeding this limit should select a longer repayment period on their proposed personal loans to increase their chances of loan approval.",
  },
  {
    title: "Applying with multiple lenders in a short span",
    value:
      "Applying for personal loans directly with multiple lenders in a short span will lead to hard enquiries, which can cause your credit scores to drop. Reduced credit score will lower your chances of availing personal loans. Instead, use online financial marketplaces like FinancesBazar to compare personal loan options without affecting your credit score.",
  },
  {
    title: "Not considering prepayment charges and related terms",
    value:
      "Prepaying or foreclosing personal loans availed at fixed interest rates can attract prepayment charges of up to 5% of the outstanding loan amount from your lenders. However, RBI bars lenders from charging prepayment charges on personal loans availed at floating interest rates. Many lenders also limit their fixed rate personal loan borrowers from prepaying their personal loans until a specific number of EMIs are paid. Hence, those wanting to keep their part prepayment or foreclosure options open, should also look into these charges and their related terms when looking at personal loan offers.",
  },
];

const loanTypesComparison = [
  {
    title: "Disbursal Speed",
    value:
      "Disbursed in a few minutes or seconds (Pre-approved) vs Usually takes 2-4 days’ time for loan disbursal (Regular)",
  },
  {
    title: "Customer Eligibility",
    value:
      "Usually pre-approved and offered to select existing customers having good credit profiles (Pre-approved) vs Offered to new individuals as well as existing customers (Regular)",
  },
  {
    title: "Loan Amount Availability",
    value:
      "Can avail only till the sanctioned loan amount (Pre-approved) vs Can avail higher loan amounts based on their repayment capacity (Regular)",
  },
];

const hdfcBankLoanDetails = [
  { title: "Interest Rate", value: "10.90% p.a. onwards" },
  { title: "Loan Amount", value: "Up to Rs 40 lakh" },
  { title: "Tenure", value: "Up to 6 years" },
  { title: "Minimum Salary", value: "Rs 25,000 per month" },
  { title: "Age", value: "21-60 years" },
  { title: "Credit Score", value: "At least 650" },
  { title: "Processing Fee", value: "Up to Rs 6,500" },
];

const iciciBankLoanDetails = [
  { title: "Interest Rate", value: "10.85% p.a. onwards" },
  { title: "Loan Amount", value: "Up to Rs 50 lakh" },
  { title: "Tenure", value: "1 to 6 years" },
  { title: "Minimum Salary", value: "Rs 30,000 per month" },
  {
    title: "Age",
    value: "20 to 58 years for salaried, 23 to 65 years for self-employed",
  },
  { title: "Processing Fee", value: "Up to 2% of loan amount" },
];

const axisBankLoanDetails = [
  { title: "Interest Rate", value: "11.25% p.a. onwards" },
  { title: "Loan Amount", value: "Up to Rs 10 lakh" },
  { title: "Tenure", value: "6 months to 5 years" },
  { title: "Age", value: "21 to 60 years" },
  { title: "Minimum Monthly Salary", value: "Rs 15,000" },
  { title: "Processing Fee", value: "Up to 2%" },
];

const kotakMahindraBankLoanDetails = [
  { title: "Interest Rate", value: "10.99% p.a. onwards" },
  { title: "Loan Amount", value: "Up to Rs 35 lakh" },
  { title: "Tenure", value: "Up to 6 years" },
  { title: "Credit Score", value: "At least 730" },
  { title: "Age", value: "21-60 years" },
  {
    title: "Minimum Monthly Salary",
    value:
      "Corporate Borrowers - Rs 25,000, Non-corporate Borrowers - Rs 30,000",
  },
  { title: "Processing Fees", value: "Up to 5% of loan amount" },
];

const indusIndBankLoanDetails = [
  { title: "Interest Rate", value: "10.49% p.a. onwards" },
  { title: "Loan Amount", value: "Up to Rs 50 lakh" },
  { title: "Tenure", value: "1 to 5 years" },
  {
    title: "Age",
    value: "Salaried - 21 to 60 years, Self-employed - 25 to 65 years",
  },
  {
    title: "Processing Fee",
    value: "Up to 3.5% of the sanctioned loan amount",
  },
  { title: "Minimum Salary", value: "Rs 25,000 per month" },
];

const personalLoanTips = [
  {
    title: "Avoid Sacrificing Investments",
    value:
      "Do not sacrifice existing investments or contributions meant for financial goals for higher EMI payments.",
  },
  {
    title: "EMI/NMI Ratio",
    value:
      "Banks/NBFCs prefer applicants whose EMI/NMI ratio does not exceed 55%-60% of their monthly income.",
  },
  {
    title: "Check Offers with Existing Lenders",
    value:
      "Review personal loan offers from banks/NBFCs with which you have existing deposit, loan, or credit card accounts.",
  },
  {
    title: "Compare Online",
    value:
      "Visit online financial marketplaces like FinancesBazar to compare loan interest rates & features.",
  },
  {
    title: "Check Loan Tenure",
    value:
      "Ensure the loan tenure offered by lenders suits your repayment capacity.",
  },
  {
    title: "Compare Fees",
    value: "Compare processing/admin/login fees charged by various lenders.",
  },
  {
    title: "Compare Prepayment Charges",
    value:
      "Evaluate prepayment/foreclosure charges and restrictions across different banks/NBFCs.",
  },
  {
    title: "Turnaround Time",
    value:
      "Check if the loan disbursement turnaround time aligns with your needs.",
  },
];

export default function PersonalLoanDescription() {
  const [showAll, setShowAll] = useState(false);

  const visibleLoanInterestRates = showAll
    ? loanInterestRates
    : loanInterestRates.slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto sm:py-8 px-6">
      <>
        <TypographyH2BlueColor>
          Personal Loan Interest Rate
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          The interest rate offered on a personal loan is determined on the
          basis of the applicant’s credit profile and the lenders’ credit
          risk-based pricing model, cost of funds, etc. As the interest rate on
          a personal loan primarily influences the total borrowing cost, loan
          applicants must always look for the best interest rates available on
          their credit profile.
        </TypographyPBlueColor>
        <TypographyPBlueColor>
          For this, individuals should first check offers from lenders with whom
          they already have deposit(s), credit card(s) and/or loan account(s).
          Then, they should visit online financial marketplaces like
          FinancesBazar to compare interest rates offered by other banks and
          NBFCs.
        </TypographyPBlueColor>

        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="font-semibold text-center bg-primary/20"
              >
                Personal Loan Interest Rates 2025
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="font-semibold">Name of Lender</TableHead>
              <TableHead className="font-semibold">Interest Rates</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleLoanInterestRates?.map((option, index) => (
              <TableRow key={index}>
                <TableCell className="text-blue-800 border-r whitespace-normal break-words">
                  {option?.name}
                </TableCell>
                <TableCell>{option?.interestRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* See More / See Less Button */}
        <div className="text-center mt-4">
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll ? "See Less" : "See More"}
          </Button>
        </div>
      </>

      <>
        <TypographyH2BlueColor>
          Eligibility Criteria for Personal Loan
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          <Link className="text-blue-800">
            Personal loan eligibility criteria
          </Link>{" "}
          can vary from one lender to another due to their varying credit risk
          policies. It can also vary as per the loan variant and the occupation
          profile of the applicant. Here are some of the personal loan
          eligibility criteria used by most lenders:
        </TypographyPBlueColor>
        <BoldList items={eligibilityCriteria} />
      </>

      <>
        <TypographyH2BlueColor>
          Required Documents for Personal Loan
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          Personal loan lenders require documents from their applicants to
          establish their identity, income, loan repayment capacity and place of
          residence. These documents are more or less the same across lenders.
          Here are a few common set of documents that you will need to submit
          when applying for a personal loan:
        </TypographyPBlueColor>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold border-r">
                Requirements
              </TableHead>
              <TableHead className="font-semibold border-r">
                Salaried Individuals
              </TableHead>
              <TableHead className="font-semibold">
                Self-employed Professionals/Non-Professionals
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentRequirements?.map((option, index) => (
              <TableRow key={index}>
                <TableCell className="border-r whitespace-normal break-words">
                  {option?.requirement}
                </TableCell>
                <TableCell className="border-r whitespace-normal break-words">
                  {option?.salaried}
                </TableCell>
                <TableCell>{option?.selfEmployed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>

      <>
        <TypographyH2BlueColor>
          Processing Fees and Charges
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          While the fees and charges of personal loans can vary widely depending
          on lender and the credit profile of the loan applicants, the following
          table will give you a fair idea of the{" "}
          <Link className="text-blue-800 cursor-pointer" to="">
            {" "}
            personal loan fees and charges{" "}
          </Link>{" "}
          levied by the lenders:
        </TypographyPBlueColor>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader className="bg-primary/20">
            <TableRow>
              <TableHead className="font-semibold border-r">
                Particulars
              </TableHead>
              <TableHead className="font-semibold">Charges</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loanCharges?.map((option, index) => (
              <TableRow key={index}>
                <TableCell className="border-r whitespace-normal break-words">
                  {option?.title}
                </TableCell>
                <TableCell>{option?.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TypographyPBlueColor className="italic">
          Other fees and charges levied by the lenders include documentation
          charges, verification charges, duplicate statement charges and NOC
          certificate charges.
        </TypographyPBlueColor>
      </>

      <>
        <TypographyH4BlueColor>
          How to Get a Personal Loan with Zero Processing Fees
        </TypographyH4BlueColor>
        <TypographyPBlueColor>
          The personal loan processing fee charged by lenders can go up to 4% of
          the loan amount. However, some lenders waive off processing fees
          during special festive offers or promotional periods. Additionally,
          some lenders also waive off waivers or discounts in processing fees to
          their existing customers and/or applicants meeting predetermined
          cut-offs in terms of their credit score, income, occupation, etc.
          Thus, it is always a good idea to first approach the banks and/or
          NBFCs with whom you have your deposits, loans and/or credit card
          accounts. This should be followed by visiting online financial
          marketplaces like FinancesBazar to compare various personal loan
          processing fees offered by multiple lenders and then make the loan
          application.
        </TypographyPBlueColor>
        <TypographyPBlueColor>
          Apart from processing fees, loan applicants should also factor in the
          interest rates while comparing loan options. They should use online
          APR calculators to compare various personal loan options on the basis
          of their overall borrowing cost.
        </TypographyPBlueColor>
        <TypographyH4BlueColor>
          How Can I Apply for a Personal Loan Online?
        </TypographyH4BlueColor>
        <TypographyPBlueColor>
          Get up to ₹40 Lakh in 5 Simple Steps
        </TypographyPBlueColor>
        <BoldList items={applicationSteps} />
      </>

      <>
        <TypographyH2BlueColor>
          Features and Benefits of Personal Loan
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          Personal loan is a preferred credit option for financing lifestyle
          goals and fund shortages due to their easy accessibility, minimal
          documentation and quicker disbursals. Here are the key features and
          benefits of personal loans:
        </TypographyPBlueColor>
        <BoldList items={loanFeaturesList} />
      </>

      <>
        <TypographyH2BlueColor>
          How to Calculate EMI for Personal Loan?
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          You can calculate EMI on your personal loan using the formula:{" "}
          <TypographySmall className="font-semibold">
            {" "}
            EMI = [P x R x (1+R)^N]/[(1+R)^N-1],
          </TypographySmall>
        </TypographyPBlueColor>
        <TypographyList2
          items={[
            "‘R’ denotes the rate of interest",
            "‘P’ denotes the principal amount",
            "‘N’ denotes the loan tenure",
          ]}
        />
        <TypographyPBlueColor>
          As manual calculations can be time-consuming and prone to errors,
          using an online personal loan EMI calculator would be preferable. The
          calculator requires just a few basic details for EMI calculation,
          including interest rate, loan amount and tenure. Once the details are
          entered, the calculator will display the EMI, total interest amount
          and amortization schedule basis which you can compare various personal
          loan offers based on your loan repayment capacity.
        </TypographyPBlueColor>
      </>

      <>
        <TypographyH4BlueColor>
          Factors Affecting Personal Loan EMI
        </TypographyH4BlueColor>
        <TypographyPBlueColor>
          Three major factors that influence your personal loan EMIs are:
        </TypographyPBlueColor>
        <BoldList items={emiFactors} />
        <TypographySmall>
          Also Read:{" "}
          <span className="text-blue-800 italic cursor-pointer">
            What Happens If You Miss a Personal Loan EMI?
          </span>
        </TypographySmall>
      </>

      <>
        <TypographyH2BlueColor>
          5 Tips to Increase Your Chances of Availing a Personal Loan
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          The unsecured nature of personal loan increases credit risk for
          lenders as it leaves them with no collateral or security to compensate
          their losses in case of loan default. To mitigate this risk, banks and
          NBFCs factor in various aspects of their applicants’ credit profiles
          and follow strict eligibility policies when evaluating their loan
          applications. Those planning to avail personal loan can improve their
          chances of approval through these tips:
        </TypographyPBlueColor>
        <TypographyList2
          items={[
            "Maintain your credit/CIBIL score above 750",
            "Check for inaccuracies in your credit report, as they might adversely impact your credit score and thereby, reduce the chances of loan approval",
            "Compare the offers available from banks and NBFCs before finalising any loan deal",
            "Apply for the loan from a bank/NBFC where you have the highest chances of approval",
            "Avoid making multiple loan applications within a short period",
          ]}
        />
        <TypographySmall>
          Also Read:{" "}
          <span className="text-blue-800 italic cursor-pointer">
            {" "}
            CIBIL Score and Personal Loans: What’s the Connection?
          </span>
        </TypographySmall>
      </>

      <>
        <TypographyH2BlueColor>
          Things to Know Before You Apply for a Personal Loan
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          Before applying for a personal loan, here are a few things you should
          know:
        </TypographyPBlueColor>
        <BoldList items={thingsBefore} />
      </>

      <>
        <TypographyH4BlueColor>
          Mistakes to Avoid When Applying for a Personal Loan
        </TypographyH4BlueColor>
        <TypographyPBlueColor>
          When applying for a personal loan, avoid these common mistakes to
          improve your chances of approval:
        </TypographyPBlueColor>
        <BoldList items={loanMistakesToAvoid} />
      </>

      <>
        <TypographyH2BlueColor>
          Instant Personal Loan vs Regular Personal Loan
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          The differences between an instant personal loan and a regular
          personal loan are as below
        </TypographyPBlueColor>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader className="bg-primary/20">
            <TableRow>
              <TableHead className="font-semibold border-r">
                Instant Personal Loan
              </TableHead>
              <TableHead className="font-semibold">
                Regular Personal Loan
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loanTypesComparison?.map((option, index) => (
              <TableRow key={index}>
                <TableCell className="border-r">{option?.title}</TableCell>
                <TableCell className="whitespace-normal break-words">
                  {option?.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>

      <>
        <TypographyH2BlueColor>
          What is a Personal Loan Top-Up and How Does It Work?
        </TypographyH2BlueColor>
        <TypographyPBlueColor>
          A personal loan top-up is an additional loan amount offered to
          existing personal loan borrowers over and above their outstanding
          personal loan amount. Like personal loans, top up loans are unsecured
          and can be used to pay for various financial requirements. They are
          also faster and easier to avail than a new personal loan, as top-up
          loans are offered to borrowers who have already undergone the lender's
          checks for their existing personal loan, allowing them to get approved
          much quicker. Top up personal loans are usually offered to existing
          personal loan borrowers having satisfactory loan repayment history and
          having completed a specified number of EMIs.
        </TypographyPBlueColor>
      </>

      <div className="flex justify-between items-center flex-col sm:flex-row gap-6">
        <div>
          <TypographyH2BlueColor>
            What is the Maximum Personal Loan Amount You Can Get?
          </TypographyH2BlueColor>
          <TypographyPBlueColor>
            Personal loan offered by lenders can range anywhere between Rs
            10,000 and Rs 40 lakh. Some lenders may offer higher loan amounts,
            depending on their discretion and the applicant’s loan repayment
            capacity. Some banks and NBFCs use the Multiplier Method, wherein
            the eligible loan amount is calculated on the basis of a
            predetermined multiple (ranging between 10 and 24 times) of an
            applicant’s net monthly income.
          </TypographyPBlueColor>
          <TypographyPBlueColor>
            Other lenders use the EMI/NMI Ratio, wherein the EMI of the proposed
            loan cannot exceed a predetermined proportion of the applicant. Some
            lenders also use a combination of both of these methods to find the
            loan amount eligible of the applicant.
          </TypographyPBlueColor>
          <TypographyH2BlueColor>
            Personal Loan Insurance: Do You Really Need It?
          </TypographyH2BlueColor>
          <TypographyPBlueColor>
            Personal loan insurance can provide financial security by covering
            your outstanding loan repayments in case of unforeseen circumstances
            like death, serious illness or disability. However, purchasing this
            insurance is not mandatory while availing personal loan. If your
            existing life insurance policy already offers adequate coverage for
            loan repayment, you may not need to purchase additional loan
            protection policies.
          </TypographyPBlueColor>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            loading="lazy"
            src="/assets/avail-pl-banner.png"
            alt="avail-pl-banner"
            className="sm:w-full w-64"
          />
        </div>
      </div>

      <>
        <TypographyH2BlueColor>
          Best Banks for Personal Loan in India
        </TypographyH2BlueColor>
        <TypographyPBlueColor className="italic">
          Given below are a few personal loan schemes offered by some of the
          leading banks and NBFCs in India:
        </TypographyPBlueColor>

        <>
          <TypographyH4BlueColor>HDFC Bank</TypographyH4BlueColor>
          <TypographyPBlueColor>
            The interest rate of HDFC Bank personal loan starts from 10.90% p.a.
            The tenure of the scheme can go up to 6 years whereas the loan
            amount can go up to Rs 40 lakh. The bank also offers pre-approved
            loans with ‘10 second disbursal’ to its select existing customers
            based on their credit profiles.
          </TypographyPBlueColor>
          <BoldList items={hdfcBankLoanDetails} />
        </>

        <>
          <TypographyH4BlueColor>ICICI Bank</TypographyH4BlueColor>
          <TypographyPBlueColor>
            ICICI Bank extends personal loan to cater to the varied financial
            requirements of its borrowers. The bank also offers Fresher Funding,
            a special scheme for funding immediate and other financial
            requirements of younger salaried individuals. For its select
            existing customers, the bank offers overdraft facility, pre-approved
            offers and top up loan facility. Its pre-approved offers feature
            minimal documentation and 3-second disbursals.
          </TypographyPBlueColor>
          <BoldList items={iciciBankLoanDetails} />
        </>

        <>
          <TypographyH4BlueColor>Axis Bank</TypographyH4BlueColor>
          <TypographyPBlueColor>
            Axis Bank Personal Loan covers expenses related to wedding, home
            renovation, travel, medical emergency and much more. The bank also
            extends pre-approved offers to its select existing customers. Such
            offers have digital processing and instant approvals. Axis Bank has
            also collaborated with FinancesBazar to extend its select customers
            pre-qualified offers.
          </TypographyPBlueColor>
          <BoldList items={axisBankLoanDetails} />
        </>

        <>
          <TypographyH4BlueColor>Kotak Mahindra Bank</TypographyH4BlueColor>
          <TypographyPBlueColor>
            Kotak Mahindra Bank offers loans only to salaried individuals.
            Existing borrowers of other banks/NBFCs can avail balance transfer
            facility to transfer their outstanding loan to Kotak Mahindra Bank
            at lower interest rates. Those exercising balance transfer facility
            can also avail top up loans of up to 100% of their loan amount.
            Kotak Mahindra Bank also offers an overdraft facility, giving
            borrowers the flexibility of withdrawing their funds from their loan
            account anytime and repaying it as per their convenience.
          </TypographyPBlueColor>
          <BoldList items={kotakMahindraBankLoanDetails} />
        </>

        <>
          <TypographyH4BlueColor>IndusInd Bank</TypographyH4BlueColor>
          <TypographyPBlueColor>
            IndusInd Bank offers multiple personal loan schemes including
            wedding loan, home renovation loan, loan for medical expenses and
            loan for education. The bank also offers balance transfer facility
            to existing borrowers of other banks and NBFCs. For those requiring
            quick financing, the bank extends instant personal loan online with
            quick processing and loan approvals.
          </TypographyPBlueColor>
          <BoldList items={indusIndBankLoanDetails} />
        </>

        <>
          <TypographyH4BlueColor>
            Tips to Choose the Best Personal Loan
          </TypographyH4BlueColor>
          <TypographyPBlueColor>
            Personal loan applicants should not sacrifice their existing
            investments or monthly contributions meant for achieving critical
            financial goals for making higher EMI payments. Also, applicants
            should note that banks/NBFCs prefer to lend to those applicants
            whose EMI/NMI ratio does not exceed 55%-60% of their monthly income.
          </TypographyPBlueColor>
          <TypographyPBlueColor className="italic">
            The following are the key steps to take before applying for a
            personal loan:
          </TypographyPBlueColor>
          <BoldList items={personalLoanTips} />
        </>
      </>
    </div>
  );
}
