import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyH4BlueColor,
    TypographyList2,
    BoldList
} from '@/custom/Typography';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import EMICalculatorDefault from "@/components/EMI/EMICalculatorDefault"
import HeroLoginCard from "../HeroSectionPages";
import { creditStatus } from "@/components/pages/personal-loan/PersonalLoanPage";
import { ChartSpline, Handshake, Megaphone, ShieldAlert } from "lucide-react";

const bussinessFeatures = [
    {
        title: "Best Loan Deals",
        description: "Handpicked offers from 20+ lenders",
        icon: <Handshake size={14} className="text-accent font-extrabold" />
    },
    {
        title: "Unsecured Loan",
        description: "Term loan & OD facilities available",
        icon: <ShieldAlert size={14} className="text-accent font-extrabold" />
    },
    {
        title: "Expert Advice",
        description: "Guidance & Assistance",
        icon: <Megaphone size={14} className="text-accent font-extrabold" />
    },
    {
        title: "Top Up Facility",
        description: "Top up loan to get additional funds",
        icon: <ChartSpline size={14} className="text-accent font-extrabold" />
    }
];

const BusinessFeaturesBenefits = [
    "Most banks and NBFCs offer both secured and unsecured business loans.",
    "Business Loan interest rates vary across the lenders and are offered on the basis of credit profile of the applicant, nature of business, type of business loan offered and nature of collateral/security",
    "Existing business loan borrowers of many banks and NBFCs can avail top-up loans over and above their existing business loans.",
    "Many lenders also offer overdraft facilities to their existing business loan borrowers.",
    "Existing as well as new customers of some lenders can apply for pre-approved business loans with instant loan disbursal and minimal documentation.",
    "Many lenders offer concessional interest rates to women borrowers.",
    "Applicants can also apply for business loans through online mode with quick approval, minimal documentation and swift loan disbursal"
]

const loanEligibilityCriteria = [
    {
        title: "Age",
        value: "21 years at the time of loan application and 65 years at the time of loan maturity (may vary across lenders)"
    },
    {
        title: "Minimum Business Vintage",
        value: "3 years (may be 5 years for some lenders)"
    },
    {
        title: "Minimum Business Turnover",
        value: "Rs 90,000 to more than Rs 250 crore"
    },
    {
        title: "Credit Score",
        value: "700 or above (some lenders may offer business loans to applicants having lower credit scores)"
    },
    {
        title: "Minimum Income",
        value: "Rs 1 lakh p.a."
    },
    {
        title: "Eligible Entities",
        value: "Sole Proprietorship, Partnerships, Limited Liability Partnerships, Private Limited Companies, Public Limited Companies, etc."
    }
];

const requiredDocuments = [
    {
        title: "Requirements",
        value: "Self-employed Professionals/Non-Professionals"
    },
    {
        title: "Proof of Identity",
        value: "Passport, Voter ID, Driving License, Aadhaar Card or PAN Card"
    },
    {
        title: "Proof of Residence",
        value: "Aadhaar Card, Voter ID, Passport or Utility Bills"
    },
    {
        title: "Proof of Age",
        value: "Birth Certificate, PAN Card, Aadhaar Card, Passport, etc."
    },
    {
        title: "Proof of Income",
        value: [
            "Latest ITR along with income computation,",
            "B/S, P&L account statement for last 2 years certified by a CA",
            "Latest GST returns",
            "Bank statement for last 6 months"
        ]
    },
    {
        title: "Other Documents",
        value: [
            "A copy of company’s PAN",
            "Proof of ownership of residence or office",
            "Proof of business continuity",
            "Proof of business registration",
            "Certificate or declaration of sole proprietorship",
            "Deed copy of partnership",
            "Certified copy of MOA, AOA and Board Resolution",
            "Passport size photographs"
        ]
    }
];

const ThingsBusinessAbout = [
    {
        title: "Interest Rate",
        value: "Business Loan interest rates vary across the lenders. Applicants should check the interest rates offered by various lenders and opt for the one offering lowest interest rates to incur lower interest cost."
    },
    {
        title: "Turnaround Time",
        value: "Applicants should know the time taken by the bank or NBFC for the approval and disbursal of a business loan. Lenders disbursing the business loans in lesser time are usually preferred by the borrowers. The turnaround time would depend on the type of business loan scheme and the type of collateral pledged for."
    },
    {
        title: "Credit Score/Rating",
        value: "Applicants having a credit score of 700 and above usually have higher chances of availing business loans. Some lenders also offer business loans at lower interest rates to those having high credit score/rating."
    },
    {
        title: "Processing Charges",
        value: "Applicants should know the processing fees and other charges levied by the lender before applying for business loans."
    },
    {
        title: "Collateral",
        value: "Lenders usually offer business loans against collateral/security, such as hypothecation of stocks, book debts, mutual funds, immovable property, liquid security, commercial or construction equipment."
    }
];

const lenders = [
    { name: "HDFC Bank", interestRate: "10.75% – 22.50% p.a." },
    { name: "IIFL Finance", interestRate: "12.75% – 44% p.a." },
    { name: "FlexiLoans", interestRate: "1% per month onwards" },
    { name: "ZipLoan", interestRate: "1% – 1.5% per month (Flat)" },
    { name: "ICICI Bank", interestRate: "Up to 17% p.a." },
    { name: "Axis Bank", interestRate: "10.75% p.a. onwards" },
    { name: "Indifi Finance", interestRate: "1.5% per month onwards" },
    { name: "Kotak Mahindra Bank", interestRate: "16% p.a. onwards" },
    { name: "RBL Bank", interestRate: "18%-26% p.a." },
    { name: "Lendingkart Finance", interestRate: "1.25% per month onwards" },
    { name: "Tata Capital Finance", interestRate: "12% p.a. onwards" },
    { name: "NeoGrowth Finance", interestRate: "15%-40% p.a." },
    { name: "Hero FinCorp", interestRate: "Up to 26% p.a." }
];

export default function BusinessLoanPage() {

    return (
        <PageLayout>

            <HeroLoginCard
                headline="Business Loan"
                description="Get a business loan of up to Rs 1 crore at an interest rate starting from 14.99% p.a. for the tenures of up to 4 years. Explore secured and unsecured options from 20+ partner lenders."
                cards={bussinessFeatures}
                navigateLink="/business-loan/apply"
                loginSubHedline="Don't worry, this will not affect your credit score."
                ratingInfo={creditStatus}
                highlighterHedline={{
                    rightText: "Check",
                    highLighter: "Business Loan",
                    leftText: "Offers Online",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 my-8">
                <div className="max-w-3xl">
                    <>
                        <TypographyH2BlueColor>
                            What is a Business Loan?
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Business loan is a credit facility offered to self-employed individuals, self-employed professionals, private companies and partnership firms, MSMEs, etc. for financing their working capital requirements, capital expenditure requirements and other business related activities.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Business Loan Interest Rate
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Business Loan interest rates may vary from lender to lender depending on the credit profile of the applicant, nature of the business, loan facility availed by the applicant and the type of collateral/security pledged by the borrower.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Business Loan Offered by Top Banks & NBFCs in India
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor className="italic">
                            Interest rates offered by top Business Loan lenders are mentioned below.
                        </TypographyPBlueColor>

                        <Table className="border border-black">
                            <TableHeader>
                                {/* Optional: Add headers here */}
                            </TableHeader>
                            <TableHeader>
                                <TableRow className="border border-black">
                                    <TableHead>Bank/NBFC/Fintech</TableHead>
                                    <TableHead className="border-l border-black">Interest Rates</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {lenders?.map((lender, index) => (
                                    <TableRow key={index} className="text-blue-800 border border-black">
                                        <TableCell>{lender?.name}</TableCell>
                                        <TableCell className="border-l border-black">{lender?.interestRate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TypographyPBlueColor>
                            <span className="font-bold">Note: </span> Business Loan Rates are updated as of 11th March 2025.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            HDFC Business Loan
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            HDFC Bank offers secured and unsecured business loans @ 10.75% p.a. onwards for loan amount of up to Rs 3 crore and for tenure of up to 7 years to self-employed individuals and business enterprises.
                        </TypographyPBlueColor>
                        <Table className="border border-black">
                            <TableHeader>
                                {/* Optional: Add headers here */}
                            </TableHeader>
                            <TableBody>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Interest Rate</TableCell>
                                    <TableCell className="border-l border-black">10.75% p.a. onwards</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Loan Amount</TableCell>
                                    <TableCell className="border-l border-black">Up to Rs 3 crore</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Tenure</TableCell>
                                    <TableCell className="border-l border-black">Up to 7 years</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Processing Fee</TableCell>
                                    <TableCell className="border-l border-black">Up to 2% of loan amount</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            ICICI Bank Business Loan
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            ICICI Bank offers both secured and unsecured business loans to importers, exporters, new entities, businesses not having audited financials, etc. ICICI business loan interest rates may go up to 17% p.a. for tenure of up to 7 years.
                        </TypographyPBlueColor>
                        <Table className="border border-black">
                            <TableBody>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Interest Rate</TableCell>
                                    <TableCell className="border-l border-black">Up to 17% p.a.</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Loan Amount</TableCell>
                                    <TableCell className="border-l border-black">Up to Rs 10 crore</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Tenure</TableCell>
                                    <TableCell className="border-l border-black">Up to 7 years</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Processing Fee</TableCell>
                                    <TableCell className="border-l border-black">Up to 2% of loan amount</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Axis Bank Business Loan
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Axis Bank business loan interest rates start from 10.75% p.a. onwards for tenure of up to 15 years. Prospective business loan borrowers of Axis Bank can borrow loan amounts of up to Rs 10 crore. The bank also offers bills of exchange and Letter of Credit to its business loan applicants.
                        </TypographyPBlueColor>
                        <Table className="border border-black">
                            <TableHeader>
                                {/* Optional: Add headers here */}
                            </TableHeader>
                            <TableBody>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Interest Rate</TableCell>
                                    <TableCell className="border-l border-black">10.75% p.a. onwards</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Loan Amount</TableCell>
                                    <TableCell className="border-l border-black">Up to Rs 10 crore</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Tenure</TableCell>
                                    <TableCell className="border-l border-black">Up to 15 years</TableCell>
                                </TableRow>
                                <TableRow className="opacity-95 border border-black">
                                    <TableCell>Processing Fee</TableCell>
                                    <TableCell className="border-l border-black">Up to 2% of loan amount</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </>

                    <EMICalculatorDefault
                        headline="Business Loan EMI Calculator"
                        paragraph="Applicants can use the Business Loan EMI Calculator given below to calculate the EMIs and total interest cost payable throughout the loan tenure depending on the interest rate, loan amount, and loan tenure offered by the lender."
                        inputHeading="Business EMI Calculator"
                        outputHeading="Business EMI Details"
                    />

                    <>
                        <TypographyH4BlueColor>
                            How to Calculate EMI for a Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Business loans availed in the form of term loans are repaid through EMIs. Thus, those planning to avail business loans can calculate EMIs using the formula as below:
                        </TypographyPBlueColor>

                        <ul className="grid gap-2 opacity-85 text-sm leading-7">
                            <li>EMI = [P x R x (1+R)^N]/[(1+R)^N-1],</li>
                            <li>where,</li>
                            <li>‘R’ denotes the rate of interest</li>
                            <li>‘P’ denotes the principal amount</li>
                            <li>‘N’ denotes the loan tenure</li>
                            <li>As manual calculations can be tedious and susceptible to errors, using an online business loan EMI calculator can be a faster and more reliable option for consumers.</li>
                        </ul>

                        <Table className="border border-black mt-6">
                            <TableHeader>
                                <TableHead colSpan={2} className="text-center text-blue-950 font-semibold">EMI Calculators</TableHead>
                            </TableHeader>
                            <TableBody className="text-blue-800">
                                <TableRow className="border border-black">
                                    <TableCell>HDFC Business Loan EMI Calculator</TableCell>
                                    <TableCell className="border-l border-black">ICICI Business Loan EMI Calculator</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell>SBI Business Loan EMI Calculator</TableCell>
                                    <TableCell className="border-l border-black">Canara Bank Business Loan EMI Calculator</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell>Axis Bank Business Loan EMI Calculator</TableCell>
                                    <TableCell className="border-l border-black">PNB Business Loan EMI Calculator</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            How to Get a Business Loan Online?
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Individuals, groups of individuals and entities can apply for a business loan online directly through the official website of banks and NBFCs. The interest rates, loan amount, margin, collateral requirements, guarantor requirements, fees and charges, eligibility and other features of business loans vary from lender to lender.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Therefore, applicants should visit online financial marketplaces like Financesbazar.com to compare the interest rates, loan amount and other features offered by various lenders and opt for the lender that best suits their eligibility.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Business Loan Fees and Charges
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Business loan lenders usually charge processing fees, prepayment charges, commitment charges, inspection charges, account service charges, penal interest and documentation charges from their business loan borrowers.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            However, the fees and charges levied on business loans vary widely across lenders.
                            <span className="font-bold italic">
                                Below-mentioned is an overall range of a few charges levied by the lenders on business loans.
                            </span>
                        </TypographyPBlueColor>

                        <Table className="border border-black mt-6">
                            <TableHeader>
                                <TableRow className="border border-black">
                                    <TableHead>Particulars</TableHead>
                                    <TableHead className="border-l border-black">Charges</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-blue-800">
                                <TableRow className="border border-black">
                                    <TableCell>Processing Fees</TableCell>
                                    <TableCell className="border-l border-black">Up to 6% of the loan amount</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell>Prepayment Charges</TableCell>
                                    <TableCell className="border-l border-black">Up to 5% of the outstanding principal</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell>Penal Interest</TableCell>
                                    <TableCell className="border-l border-black">2%-6% on the outstanding loan amount</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </>

                    <>
                        <TypographyH2BlueColor>
                            Business Loan – Features and Benefits
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Below-mentioned are the <span className="font-bold"> features of business loans offered by various lenders:</span>
                        </TypographyPBlueColor>

                        <TypographyList2
                            className="text-sm opacity-95 grid gap-1"
                            items={BusinessFeaturesBenefits}
                        />
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Eligibility Criteria for Business Loan
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Lenders usually set their business loan<span className="font-bold"> eligibility criteria based on the following factors:</span>
                        </TypographyPBlueColor>

                        <BoldList
                            className="text-sm opacity-95 grid gap-1"
                            items={loanEligibilityCriteria}
                        />
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Documents Required for Business Loan
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Applicants usually require the following documents for processing business loan applications.
                        </TypographyPBlueColor>

                        <Table className="border border-black">
                            <TableHeader>
                                {/* Optional: Add headers here */}
                            </TableHeader>
                            <TableBody>
                                {requiredDocuments?.map((required, index) => (
                                    <TableRow key={index} className="border border-black">
                                        <TableCell className="font-semibold text-sm">{required?.title}</TableCell>
                                        <TableCell className="border-l text-wrap text-blue-800 border-black">
                                            {Array.isArray(required?.value) ? (
                                                <ul className="list-disc pl-5">
                                                    {required.value.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                required?.value
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Types of Business Loans
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Lenders offer various business loan schemes to suit the varying operational and sector/industry-specific requirements of businesses. Hence, before making a choice, prospective borrowers should understand these schemes like their cost and repayment structures and how they align with the financial and operational requirements of their businesses.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Unsecured Term Loans
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            MSMEs can avail collateral-free loans to meet their business needs, such as expansion of operations, technology upgradation and meeting the cash flow requirements.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Secured Term Loans
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            These loans are offered against collateral like immovable property, existing business assets, financial instruments, etc.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Unsecured Overdraft Business Loan
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            An unsecured credit line wherein applicants can make withdrawals within a predetermined limit.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Secured Overdraft Business Loan
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Existing customers can avail this credit line to finance their business operations and cash flows by mortgaging their properties, financial instruments, etc.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Professional Loan
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            These loans are offered to self-employed professionals to finance their various profession-related requirements.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Bill Discounting
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            This credit facility allows businesses to raise finance by selling their invoices/receivables before their due dates to the lenders at a discount.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Machinery Finance
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            This credit facility allows businesses to finance their machinery/equipment purchases.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Purchase Financing
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Lenders offer this loan to manufacturers, traders and service providers to pay for the raw materials and trading goods purchased from the suppliers.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Working Capital Loans
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Proprietors/businesses can avail this credit facility to finance their various day-to-day requirements like raw material/stock purchases, payment of wages, etc.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Letter of Credit
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            This is a payment guarantee issued by the lender that enables the businesses operating in international trade to minimize their credit risk.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Personal Loan v/s Business Loan – Which one best suits your needs?
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Personal loan can be used for meeting both personal and business requirements, business loans can be used only for financing various business related activities like raising working capital, financing business expansion, etc. While personal loans are usually unsecured in nature, business loans can be both secured and unsecured in nature.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Personal loans are offered as term loans, where repayment is EMI-based, or as an overdraft facility. However, business loans are offered in the form of term loan facility, limit-based facilities like overdraft and cash credit accounts, bill discounting, non-fund based facilities like letter of credit and bank guarantee, etc.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Loan applicants planning to avail lesser loan amounts without collateral can apply for personal loans or unsecured business loans. Those having more complex requirements and/or greater repayment flexibility should opt for respective business loan schemes based on their requirements.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            5 Things To Know Before Applying For a Business Loan
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Applicants should know the following things before applying for a business loan:
                        </TypographyPBlueColor>
                        <BoldList
                            className="text-sm opacity-95 grid gap-1"
                            items={ThingsBusinessAbout}
                        />
                    </>

                    <>
                        <TypographyH2BlueColor>
                            FAQs on Business Loan
                        </TypographyH2BlueColor>
                        <TypographyH4BlueColor>
                            How to Apply for a Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Business loan applicants can apply for a business loan directly through the official website/app of banks and NBFCs or by visiting bank branches. Applicants can also visit online financial marketplaces like Financesbazar to compare the interest rates and other features offered by various lenders.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is the Interest Rate for a Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Business Loan interest rates would vary widely depending on the lender, the scheme opted for, the type of collateral pledged for and the subsidy provided to the applicant, if eligible, from the various government agencies. While most lenders have not publicly disclosed the interest rates applicable on their various business loan schemes, the interest rates usually start from 9% p.a. onwards minus the subsidies, if available.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Read: <Link>
                                Mudra Loan Interest Rates
                            </Link>
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Who is Eligible for a Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            MSMEs, Limited Liability Partnership Firms, Proprietors, self-employed professionals (CA, CS, doctors, architect), self-employed individuals, Private Limited Companies, Public Limited Companies, etc., are eligible for a business loan. However, the eligibility criteria would vary across lenders depending on the business loan schemes to be opted for.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What Documents are Required for a Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The documents required for business loan vary from lender to lender. However, the common documents required by the lenders while applying for business loan include KYC documents (Aadhar card, PAN card, Voter ID, Driving License, Passport), address proof (utility bills, telephone bills, electricity bill, sales agreement, registered lease deed, NREGA card), proof of residence or office ownership, business continuity proof, business registration proof, latest ITR alongwith income computation, certificate or declaration of sole proprietor, copy of partnership deed, certified copy of AOA, MOA and board resolution, etc.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Which Bank is Best for Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Business loan applicants usually consider the lenders offering the lowest interest rates for availing business loans as it would help them in saving the overall interest cost.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Apart from the business loan interest rates, applicants also consider various parameters, such as loan tenure, loan amount, margin, type and value of collaterals, charges, loan guarantee requirements, repayment period and the turnaround time for loan disbursal while looking for the best bank for business loans.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Instead of visiting the official websites of multiple lenders, applicants can make their search easier by visiting online financial marketplaces like Financesbazar to compare the business loan interest rates and other features offered by various lenders.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What can Business Loan be Used for?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Business loans can be used for meeting the business requirements including working capital requirements like purchasing inventories/raw materials, salaries/wages, rent, etc. and capital expenditure requirements like purchasing machinery and equipment, acquisition of other fixed assets and for carrying out other activities for business expansion.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How to get a small Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            You can get a small business loan through the official website of banks and NBFCs or by visiting bank branches. You can also visit online financial marketplaces like Financesbazar to compare the interest rates offered by various lenders.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is Margin Money in Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Margin money in a business loan refers to the amount that the borrower has to contribute from his own resources for financing goods or services through his business loan. The rest of the cost is financed through the loan proceeds.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            For example, assume that a borrower seeks to finance an equipment purchase of Rs 10 lakh through a business loan and the lender asks for a margin money of 25%. In this case, the bank will provide a loan of  Rs 7.5 lakh to purchase that equipment while the balance cost of that equipment, i.e. Rs 2.5 lakh has to be arranged by the borrower himself.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is the Minimum Credit Score Required to Apply for a Business loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The minimum credit score or credit rating required for availing a business loan may vary widely across lenders. In case of credit scores, individual applicants having a credit score of 700 and above may have a higher chance of availing business loans, especially the unsecured ones.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is an MSME Business loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            MSME loan is a credit facility offered to Micro, Small and Medium Enterprises to meet the business related financial requirements, such as business expansion and working capital requirements.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can I get a 2 crore business loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            You can get a business loan of Rs 2 crore depending on the nature of business, business vintage, credit score of the applicant and the type of collateral pledged by the borrower.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What are the Pre-closure and Part-prepayment Charges in Business Loans?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            For floating rate business loans, the lender does not levy any pre-closure or part-prepayment charges. The pre-closure charges for fixed rate business loans may vary from 0%-6% with a lock-in period of 12 months. The part-prepayment charges for fixed rate business loans may range up to 5%. Borrowers are not allowed to part-prepay their business loans within the first 6 months from the date of loan disbursement.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How to Choose the Ideal Repayment Tenure for Business Loans?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The optimum repayment for any business loan would depend on the expected future cash flows of the business and the repayment structure of that business loan.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Who is eligible for small business loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Self-employed individuals, self-employed professionals, partnership firms and MSMEs are eligible for availing small business loans.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can a salaried person apply for a Business Loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Business Loans are usually not offered to salaried individuals. However, salaried individuals can avail loans having no end-usage restriction, like personal loans and loan against securities, to finance their businesses. Salaried individuals who are existing home loan borrowers can avail also top-up home loans, if eligible, to fulfil their business related financial requirements.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Are there any foreclosure charges for closure of business loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Lenders usually charge foreclosure charges on preclosure of business loans. However, as per RBI regulations, lenders are not allowed to charge any foreclosure charges on business loans offered on floating rates to individual borrowers.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is the Impact of GST on Business Loans for New Businesses?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            GST is not levied on the interest component of any loans. However, the GST is levied on the various fees and charges incurred during the pre- and post-disbursal phase of a business loan.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can I get a business loan of Rs 50 Lakh?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The probability of getting a Rs 50 lakh business would depend on whether you match the eligibility conditions set by the lender. Some of the factors that lender may consider while approving a Rs 50 lakh business loan would include annual income, repayment capacity, existing debt, availability of collaterals (if required) and ability to provide margin (if required).
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is the minimum loan amount one can borrow for business purposes?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The minimum loan amount of business loans can vary widely depending on the lenders and the schemes offered. However, the lenders decide the loan amount eligibility of their applicants depending on the nature of business, repayment capacity, type of collateral pledged, business vintage, margin and annual income of the applicant.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What are the eligibility requirements for a business loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Lenders usually require their individual loan applicants to be at least 21 years old at the time of loan application and 65 years old at the time of loan maturity, with his/her minimum business vintage of 3 years. Apart from these, lenders also set certain specific eligibility conditions related to the credit score/credit rating of the business, minimum margin contribution, collaterals (if required), annual turnover, approvals/registration/licenses/certification, nature of business, IT/GST returns, etc.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What are the business loan options in India?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The various types of business loan schemes offered in India include secured business loan, cash credit, unsecured business loan, working capital loan, term loan, overdraft, letter of credit, bank guarantee, bill/invoice discounting, machinery/equipment finance, special MSME schemes, etc. All PSU banks and private sector banks and most of the banks belonging to other scheduled bank categories offer these business loan schemes to the businesses with varying eligibility conditions.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is the difference between a secured and unsecured business loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The major difference between a secured business loan and an unsecured business loan is that a secured business loan is backed by a collateral whereas no collateral is required for availing unsecured business loan.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How does a business loan differ from a personal loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Lenders offer personal loans to individuals to finance their personal as well as business requirements, except for speculative or illegal purposes. Business loans can only be availed for meeting various business-related requirements such as capital expenditure funding, purchasing raw material/stocks, raising working capital for financing day-to-day business operations, etc.
                        </TypographyPBlueColor>
                    </>

                </div>
            </div>
        </PageLayout >
    )
}
