import {
    TypographyMuted,
    TypographySmall,
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyH4BlueColor,
    TypographyList2,
    BoldList
} from '@/custom/Typography';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import EMICalculatorDefault from "@/components/EMI/EMICalculatorDefault"

const homeLoanTopics = [
    "Home Loan Rates",
    "EMI Calculator",
    "Processing Fees",
    "Eligibility Criteria",
    "Documents Required for Home Loan",
    "Types of Home Loan",
    "Benefits of Home Loan",
    "Common Causes of Home Loan Rejections",
    "Tax Benefits on Home Loan",
    "How to Apply for a Home Loan",
    "FAQs"
];

const homeLoanInterestRates = [
    { bank: "State Bank of India", interestRate: "8.00% – 9.15%" },
    { bank: "HDFC Bank Limited", interestRate: "8.70% onwards" },
    { bank: "Bajaj Housing Finance", interestRate: "7.99% onwards" },
    { bank: "ICICI Bank", interestRate: "8.75% onwards" },
    { bank: "Axis Bank", interestRate: "8.75% – 12.80%" },
    { bank: "Federal Bank", interestRate: "8.55% onwards" },
    { bank: "Punjab National Bank", interestRate: "8.00% – 9.85%" },
    { bank: "Kotak Mahindra Bank", interestRate: "8.65% onwards" },
    { bank: "Bank of Baroda", interestRate: "8.40% – 10.65%" },
    { bank: "Canara Bank", interestRate: "7.90% – 10.75%" },
    { bank: "IDFC First Bank", interestRate: "8.85% onwards" },
    { bank: "IDBI Bank", interestRate: "8.40% onwards" },
    { bank: "Punjab & Sind Bank", interestRate: "8.05% – 11.25%" },
    { bank: "RBL Bank", interestRate: "9.00% onwards" },
    { bank: "LIC Housing Finance", interestRate: "8.25% onwards" },
    { bank: "Tata Capital Housing Finance", interestRate: "8.75% onwards" },
    { bank: "PNB Housing Finance", interestRate: "8.50% – 14.50%" },
    { bank: "Sammaan Capital", interestRate: "8.75% onwards" },
    { bank: "Aditya Birla Capital", interestRate: "8.60% onwards" },
    { bank: "India Shelter Finance", interestRate: "11.59% onwards" },
    { bank: "L&T Finance Limited", interestRate: "8.65% onwards" },
    { bank: "Godrej Housing Finance", interestRate: "8.55% onwards" },
    { bank: "Home First Finance", interestRate: "11.90% onwards" },
    { bank: "Easy Home Finance", interestRate: "8.99% onwards" },
    { bank: "Piramal Capital Housing Finance", interestRate: "9.50% onwards" },
    { bank: "Cholamandalam Investment and Finance", interestRate: "10.50% onwards" }
];

const moreHomeLoanInterestRates = [
    { bank: "Bank of India", interestRate: "8.00% – 10.60%" },
    { bank: "Indian Overseas Bank", interestRate: "7.90% onwards" },
    { bank: "Indian Bank", interestRate: "8.25% – 9.65%" },
    { bank: "Bank of Maharashtra", interestRate: "7.85% – 10.65%" },
    { bank: "Union Bank of India", interestRate: "7.85% – 10.40%" },
    { bank: "Central Bank of India", interestRate: "7.85% – 9.45%" },
    { bank: "UCO Bank", interestRate: "8.30% onwards" },
    { bank: "Bandhan Bank", interestRate: "8.91% – 15.00%" },
    { bank: "South Indian Bank", interestRate: "8.50% onwards" },
    { bank: "Karnataka Bank", interestRate: "8.94% – 11.06%" },
    { bank: "Karur Vysya Bank", interestRate: "8.45% – 11.40%" },
    { bank: "Dhanlaxmi Bank", interestRate: "8.75% onwards" },
    { bank: "Tamilnad Mercantile Bank", interestRate: "8.60% – 9.80%" },
    { bank: "Repco Home Finance", interestRate: "9.60% onwards" },
    { bank: "GIC Housing Finance", interestRate: "8.80% onwards" },
    { bank: "ICICI Home Finance", interestRate: "9.30% onwards" },
    { bank: "HSBC India", interestRate: "8.40% onwards" },
    { bank: "Standard Chartered Bank", interestRate: "8.95% onwards" }
];

const homeLoanCharges = [
    { feeType: "Processing Fee", details: "1% – 2% of loan amount" },
    { feeType: "Foreclosure/Prepayment Charges", details: "For floating rate: Nil\nFor fixed rate: Around 2% – 4% on the principal outstanding" },
    { feeType: "Overdue Charges on EMI", details: "2% per month of the unpaid EMI" },
    { feeType: "EMI Bounce Charges", details: "Around Rs 400" },
    { feeType: "Legal Fee", details: "As per Actuals" }
];

const homeLoanEligibilityCriteria = [
    { title: "Nationality", value: "Indian Residents, Non-Resident Indians (NRIs), and Persons of Indian Origin (PIOs)" },
    { title: "Credit Score", value: "Preferably 730 and above" },
    { title: "Minimum Age", value: "18 years with some lenders setting the minimum age of 21 years" },
    { title: "Maximum Age", value: "Usually 70 years at the time of loan maturity with some lenders extending the tenure till 75 years of age" },
    { title: "Work Experience", value: "At least 2 years (for salaried)" },
    { title: "Business Continuity", value: "At least 3 years (for self-employed)" },
    { title: "Minimum Salary", value: "At least Rs. 25,000 per month (varies across lenders & locations)" },
    { title: "Loan Amount", value: "Up to 90% of property value" }
];

const homeLoanDocumentsRequired = [
    {
        title: "Proof of Identity",
        value: "PAN card, Passport, Aadhaar Card, Voter ID Card or Driving License"
    },
    {
        title: "Proof of Residence",
        value: "Bank Passbook, Voter ID Card, Ration Card, Passport, Utility Bills or LIC Policy Receipt"
    },
    {
        title: "Proof of Income for Salaried",
        value: "Form 16, Salary Slips, ITR of past 3 years, Investment Proofs (if any)"
    },
    {
        title: "Proof of Income for Self-Employed",
        value: "Business License Details, Proof of Business Address, ITR of last 3 years, Balance Sheet and Profit & Loss Account Statement of the Company/Firm"
    },
    {
        title: "Property-related Documents",
        value: "NOC from Society/Builder, detailed estimate of the cost of construction of the house, registered sale deed, allotment letter and an approved copy of the building plan."
    },
    {
        title: "Other Documents",
        value: "If any previous loan from other lenders, then loan a/c statement for the last 1 year."
    }
];

const typesOfHomeLoans = [
    {
        title: "Home Purchase Loan",
        value: "Offered for buying ready-to-move-in properties, under-construction properties and pre-owned homes/resale properties. Helps you buy a residential plot and build a house on it within a given time frame."
    },
    {
        title: "Composite Loan",
        value: "Can be availed for buying a plot and building a house on it. The first disbursement is made towards plot purchase. Subsequent payments depend on the stages of construction of the house."
    },
    {
        title: "Home Construction Loan",
        value: "Offered to individuals for house construction. The disbursements depend on the stages of construction of the house."
    },
    {
        title: "Home Renovation/Improvement Loan",
        value: "For meeting home renovation costs of an existing house. The interest rate is usually the same as a regular home loan."
    },
    {
        title: "Home Extension Loan",
        value: "For those requiring funds to extend or add more space to their existing house. Lenders usually lend 75% – 90% of the construction estimate depending on the loan amount and LTV ratio."
    },
    {
        title: "Bridge Loan",
        value: "A short-term home loan suitable for individuals planning to buy a new house with the sale proceeds of their existing house."
    },
    {
        title: "Interest Saver Loan",
        value: "A home loan overdraft wherein the borrowers’ home loan account is linked to their bank account. Extra deposits in the bank account are considered as prepayment towards the loan, saving interest."
    },
    {
        title: "Step Up Loan",
        value: "Allows borrowers to pay lower EMIs during the initial years and increase EMI amounts over time. Suitable for young professionals starting their careers."
    }
];

const homeLoanBenefits = [
    {
        title: "Enabling Home Ownership Sooner",
        value: "Home prices in India are usually much higher than an individual’s annual disposable income, making it difficult to buy a house with savings alone. A home loan helps buy a dream home sooner without exhausting all savings, allowing better financial planning."
    },
    {
        title: "Longer Repayment Period",
        value: "Home loans offer longer repayment tenures, often up to 30 years, making EMIs more affordable by spreading out the repayment over many months—unlike personal loans with shorter terms."
    },
    {
        title: "Lower Interest Rates",
        value: "Home loan interest rates (starting from 8.30% p.a.) are generally lower than personal loans (starting from 10.49% p.a.). Some banks also offer additional concessions (e.g., 0.05%) to women applicants, reducing overall loan cost."
    },
    {
        title: "Tax Benefits",
        value: "Under Section 80C, borrowers can claim up to Rs. 1.5 lakh deduction on principal repayment. Section 24(b) offers up to Rs. 2 lakh deduction on interest paid. Not applicable under the new tax regime."
    },
    {
        title: "No Prepayment Charges",
        value: "Most floating rate home loans have zero prepayment or foreclosure charges. Fixed rate loans may also waive these charges if paid from the borrower’s own sources."
    },
    {
        title: "Interest-Only Home Loans",
        value: "Some lenders offer schemes where only interest is paid during the initial years. EMI begins later. Suitable for those living on rent or buying under-construction properties and expecting future income growth."
    }
];

const reasonsForHomeLoanRejection = [
    {
        title: "Low Credit Score",
        value: "A credit score represents your past credit behavior. A low score indicates poor financial discipline, making lenders view you as a risky borrower. Applicants with scores of 730 or above have better approval chances."
    },
    {
        title: "Low Loan Repayment Capacity",
        value: "Lenders prefer borrowers whose total EMIs (including the proposed loan) stay within 50–55% of their monthly income. Exceeding this limit reduces loan approval chances."
    },
    {
        title: "Issues Related to Property",
        value: "Loan can be rejected if the property doesn’t meet lender’s criteria like legal status, title clarity, construction age, or authorization by local authorities. Disputed or unauthorized properties are often declined."
    },
    {
        title: "Multiple Credit Applications in Short Span",
        value: "Frequent hard enquiries for credit reports can lower your credit score. Multiple such enquiries in a short period can signal credit hunger and reduce loan eligibility."
    },
    {
        title: "Ineligible Occupation Profile",
        value: "Applicants whose jobs or employers are not on the lender’s preferred list may face loan rejection, regardless of income or credit score."
    }
];

const doAndDontsHomeLoan = [
    {
        title: "Keep your credit score at 730 or above",
        value: "Apply for home loan without checking your credit score"
    },
    {
        title: "Limit your total EMI obligations within 50-60% of your net monthly income",
        value: "Use emergency fund for making higher down payment"
    },
    {
        title: "Compare home loan offers from various lenders",
        value: "Apply with multiple lenders within a short span"
    },
    {
        title: "Try making larger down payment to reduce LTV ratio",
        value: "Forgo existing investments for making higher down payment"
    },
    {
        title: "Add a co-applicant for higher loan eligibility",
        value: "Plan EMI payments without considering the monthly contributions you need to make towards your crucial financial goals"
    }
];

const homeLoanTips = [
    "Build/maintain your credit score at 730 or above",
    "Check for any inaccuracies in your credit report",
    "Add an earning member of your family as a co-applicant",
    "Contribute more towards home down payment",
    "Compare housing loan offers of various banks and HFCs before making the loan deal",
    "Avoid making multiple loan applications within a short span of time",
    "Ensure your total EMI obligations (including the proposed home loan EMI) are within 55-60% of your net monthly income"
];

const loanApplicationSteps = [
    { title: "Step 1", value: "Enter your mobile number in the application form" },
    { title: "Step 2", value: "Enter OTP to verify your mobile number" },
    { title: "Step 3", value: "Share details related to your loan requirements" },
    { title: "Step 4", value: "Provide your personal details" },
    { title: "Step 5", value: "Compare offers and apply for the best-suited loan" }
];

const homeLoanNewsUpdates = [
    "Single table to know home loan rates and terms of various companies",
    "Financesbazar to scale up home loan products; aims for 50% disbursal share",
    "Financesbazar expands into brick-and-mortar to boost secured lending",
    "Financesbazar Makes Shift to Secured Loans",
    "SBI, BoB offering home loans at 8.4%: Full list of existing loan rates"
];

export default function HomeLoanDescription() {
    return (
        <div className="max-w-3xl">

            <>
                <TypographyMuted className="text-[10px] mb-1 font-medium">
                    Updated: 22-04-2025 06:50:19 AM
                </TypographyMuted>
                <Table className="border border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead colSpan={2} className="text-center font-semibold">
                                Home Loan Details
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border border-black">
                            <TableCell className="border border-black">Interest Rate</TableCell>
                            <TableCell className="border border-black">
                                Starting from 7.90% p.a. at Financesbazar
                            </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border border-black">Maximum Loan Amount</TableCell>
                            <TableCell className="border border-black">
                                Depends on the credit profile of the applicant
                            </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border border-black">LTV Ratio</TableCell>
                            <TableCell className="border border-black whitespace-normal break-words">
                                Loans up to Rs. 30 lakh: Up to 90% of the property value<br />
                                Loans between Rs. 30 lakh & Rs. 75 lakh: Up to 80% of the property value<br />
                                Loans above Rs. 75 lakh: Up to 75% of the property value
                            </TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border border-black">Tenure</TableCell>
                            <TableCell className="border border-black">Up to 30 years</TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border border-black">Processing Fees</TableCell>
                            <TableCell className="border border-black">Up to 2% of the loan amount</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </>

            <div className="bg-muted border border-black p-4 mt-3">
                <TypographySmall>
                    On this Page:
                </TypographySmall>
                <TypographyList2
                    className="text-sm text-blue-800 cursor-pointer"
                    items={homeLoanTopics}
                />
            </div>

            <>
                <TypographyH2BlueColor>
                    Home Loan Interest Rates
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    Home loan interest rates offered to the applicants would depend on their credit scores, monthly income, loan amount, LTV ratio, job profile, employer’s profile, etc.
                </TypographyPBlueColor>
            </>

            <>
                <TypographyH4BlueColor>
                    Home Loan Interest Rates Offered by Partner Banks and HFCs
                </TypographyH4BlueColor>
                <Table className="border mt-6 border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead className="border-r border-black font-semibold" >Name of Lender</TableHead>
                            <TableHead className="font-semibold">Interest Rates (p.a.)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {homeLoanInterestRates?.map((option, index) => (
                            <TableRow key={index} className="border border-black">
                                <TableCell className="text-blue-800 border-r whitespace-normal break-words border-black">{option?.bank}</TableCell>
                                <TableCell>{option?.interestRate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TypographyMuted className="text-sm">
                    <span className="font-bold">Note:</span> Interest rates as of 17 April 2025
                </TypographyMuted>
            </>

            <>
                <TypographyH4BlueColor>
                    Interest Rates Offered by Other Banks & HFCs
                </TypographyH4BlueColor>
                <Table className="border mt-6 border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead className="border-r font-semibold border-black">Name of Lender</TableHead>
                            <TableHead className="font-semibold">Interest Rates (p.a.)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {moreHomeLoanInterestRates?.map((option, index) => (
                            <TableRow key={index} className="border border-black">
                                <TableCell className="text-blue-800 border-r whitespace-normal break-words border-black">{option?.bank}</TableCell>
                                <TableCell>{option?.interestRate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TypographyMuted className="text-sm">
                    <span className="font-bold">Note:</span> Interest rates as of 17 April 2025
                </TypographyMuted>
            </>

            <EMICalculatorDefault
                headline="Home Loan EMI Calculator"
                paragraph="Home loan EMI calculator helps individuals calculate EMIs and total interest cost payable on their home loans. They can use various combinations of interest rates, loan amounts and tenures to ascertain the optimum tenure and EMI after considering their loan repayment capacity."
                inputHeading="Home EMI Calculator"
                outputHeading="Home EMI Details"
            />

            <>
                <TypographyH2BlueColor>
                    Home Loan Fees & Charges
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    Home loan processing fees may vary widely based on lenders and credit profiles of loan applicants. To give a fair idea of the home loan fees and charges, read the table below:
                </TypographyPBlueColor>
                <Table className="border mt-6 border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead className="border-r border-black font-semibold">Particulars</TableHead>
                            <TableHead className="font-semibold">Charges</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {homeLoanCharges?.map((option, index) => (
                            <TableRow key={index} className="border border-black">
                                <TableCell className="border-r whitespace-normal break-words border-black">{option?.feeType}</TableCell>
                                <TableCell>{option?.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>

            <>
                <TypographyH2BlueColor>
                    Eligibility Criteria for Home Loan
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    Home loan eligibility differs across lending institutions and home loan schemes. However, a common set of housing loan eligibility criteria is given below:
                </TypographyPBlueColor>
                <BoldList
                    items={homeLoanEligibilityCriteria}
                />
                <TypographyPBlueColor>
                    <span className="font-bold">Note: </span>Apart from the above parameters, your home loan eligibility also depends on the property you are buying and the location of the property.
                </TypographyPBlueColor>

                <TypographyPBlueColor>
                    <span className="font-bold">Also Check: </span>Top 10 Tips to Consider before Availing a Home Loan
                </TypographyPBlueColor>
            </>

            <>
                <TypographyH2BlueColor>
                    Documents Required for Home Loan
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    Lenders require documents from their home loan applicants as a proof to establish their identity, place of residence, income and repayment capacity. These documents may vary across lenders based on the individual credit profile, property type, home loan type, etc. Given below are the key home loan documents that an applicant will need to furnish when applying for the loan.
                </TypographyPBlueColor>
                <Table className="border border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead className="border-r border-black font-semibold">Requirements</TableHead>
                            <TableHead className="font-semibold">Resident Indians</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {homeLoanDocumentsRequired?.map((option, index) => (
                            <TableRow key={index} className="border border-black text-sm">
                                <TableCell className="border-r border-black">{option?.title}</TableCell>
                                <TableCell className="opacity-85 whitespace-normal break-words">{option?.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>

            <>
                <TypographyH2BlueColor>
                    Types of Home Loans
                </TypographyH2BlueColor>
                <BoldList
                    items={typesOfHomeLoans}
                />
            </>

            <>
                <TypographyH2BlueColor>
                    Home Loan – Features and Benefits
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    Availing a home loan can help in the following ways:
                </TypographyPBlueColor>
                <BoldList
                    items={homeLoanBenefits}
                />
            </>

            <>
                <TypographyH2BlueColor>
                    Common Causes of Home Loan Rejections
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    Your home loan application can be rejected due to several reasons, some of them are listed as below:
                </TypographyPBlueColor>
                <BoldList
                    items={reasonsForHomeLoanRejection}
                />
            </>

            <>
                <TypographyH2BlueColor>
                    What tax benefits can I get on a home loan?
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    House loan borrowers can avail tax benefits under various sections of the Income Tax Act. These home loan tax benefits help borrowers save a substantial amount of money every year. Below are the tax benefits that you can get on your home loan EMI payments:
                </TypographyPBlueColor>
                <Table className="border mt-6 border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead className="border-r font-semibold border-black">Section of Income Tax Act</TableHead>
                            <TableHead className="font-semibold border-r border-black">Nature of Home Loan Tax Deduction</TableHead>
                            <TableHead className="font-semibold">Max. Tax Deductible Amt.</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border border-black">
                            <TableCell className="border-r whitespace-normal break-words border-black">Section 24(b)</TableCell>
                            <TableCell className="border-r border-black">Interest paid</TableCell>
                            <TableCell>Rs. 2 lakh</TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border-r whitespace-normal break-words border-black">Section 80C</TableCell>
                            <TableCell className="border-r border-black">Principal (including stamp duty and registration fee)</TableCell>
                            <TableCell>Rs. 1.5 lakh</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </>

            <>
                <TypographyH2BlueColor>
                    Dos & don’ts while applying for a home loan
                </TypographyH2BlueColor>
                <Table className="border mt-6 border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead className="border-r border-black font-semibold">Dos</TableHead>
                            <TableHead className="font-semibold">Don’ts</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {doAndDontsHomeLoan?.map((option, index) => (
                            <TableRow key={index} className="border border-black">
                                <TableCell className="border-r whitespace-normal break-words border-black">{option?.title}</TableCell>
                                <TableCell className="whitespace-normal break-words">{option?.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>

            <>
                <TypographyH2BlueColor>
                    What should I do if my loan application is rejected?
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    If your home loan application was rejected, follow these tips to improve your chances of approval next time you apply or a home loan:
                </TypographyPBlueColor>
                <TypographyList2 items={homeLoanTips} />
            </>

            <>
                <TypographyH2BlueColor>
                    What is the difference between a fixed rate and floating rate home loan?
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    In a fixed rate home loan, the interest rate applied at the time of loan disbursement remains constant throughout the loan period. You will be secured from interest rate increases during the loan term because the interest rates will remain constant. However, if lending rates fall at any time during the loan’s term, the fixed interest rates will remain unchanged, so you will not benefit from the lower EMI.
                </TypographyPBlueColor>
                <TypographyPBlueColor>
                    In a fixed rate home loan, the interest rate applicable at the time of loan disbursement remains constant throughout the loan tenure. You will be protected from interest rate hikes during the loan tenure as interest rates will remain constant. However, if lending rates fall at any time during the loan tenure, the fixed interest rates will remain unchanged, so you will not get the benefit of lower EMIs.
                </TypographyPBlueColor>
            </>

            <>
                <TypographyH2BlueColor>
                    Can I get a home loan for the entire property value?
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    No, you cannot take a home loan for the entire property value as the Reserve Bank of India (RBI) has limited the loan-to-value (LTV) ratio of housing loans. As per RBI guidelines, for loan amounts up to Rs 30 lakh, the LTV ratio can go up to 90% of the property value; for loan amounts above Rs 30 lakh and up to Rs 75 lakh, the LTV ratio limit is up to 80% of the property value and for loan amounts above Rs 75 lakh, the LTV ratio can go up to 75% of the property value.
                </TypographyPBlueColor>
                <TypographyPBlueColor>
                    This means that at least 10% of the remaining value has to be paid by the borrower as down payment. Subject to the caps set by the RBI on LTV ratios, banks/HFCs further fix the LTV ratio on the basis of the risk assessment and credit profile of the loan applicant. Those with lower creditworthiness are usually offered lower LTV ratio.
                </TypographyPBlueColor>
            </>

            <>
                <TypographyH2BlueColor>
                    How can I apply for a Home Loan online?
                </TypographyH2BlueColor>
                <TypographyPBlueColor>
                    Compare and apply for home loan offers in 5 simple steps:
                </TypographyPBlueColor>
                <BoldList
                    items={loanApplicationSteps}
                />
                <Table className="border mt-6 border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead colSpan={2} className="font-semibold text-center">Get Home Loan for Different Budgets</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-blue-800">
                        <TableRow className="border border-black">
                            <TableCell className="border-r border-black">10 Lakh Home Loan</TableCell>
                            <TableCell>20 Lakh Home Loan</TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border-r border-black">30 Lakh Home Loan</TableCell>
                            <TableCell>40 Lakh Home Loan</TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border-r border-black">60 Lakh Home Loan</TableCell>
                            <TableCell>1 Crore Home Loan</TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border-r border-black">Written by: Shamik Ghosh</TableCell>
                            <TableCell>Reviewed by: Sahil Arora</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </>

            <>
                <TypographyH2BlueColor>
                    Insights from Industry Experts
                </TypographyH2BlueColor>
                <TypographyList2
                    className="text-blue-800 cursor-pointer"
                    items={homeLoanNewsUpdates}
                />
                <Table className="border mt-6 border-black">
                    <TableCaption></TableCaption>
                    <TableHeader>
                        <TableRow className="border border-black">
                            <TableHead colSpan={2} className="font-semibold text-center">Home Loan for Top Cities in India</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-blue-800">
                        <TableRow className="border border-black">
                            <TableCell className="border-r border-black">Home Loan in New Delhi</TableCell>
                            <TableCell>Home Loan in Mumbai</TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border-r border-black">Home Loan in Bangalore</TableCell>
                            <TableCell>Home Loan in Pune</TableCell>
                        </TableRow>
                        <TableRow className="border border-black">
                            <TableCell className="border-r border-black">Home Loan in kolkata</TableCell>
                            <TableCell>Home Loan in hyderabad</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </>

            <>
                <TypographyH2BlueColor>
                    FAQs on Home Loan
                </TypographyH2BlueColor>

                <TypographyH4BlueColor>
                    What is a Home Loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    <span className="italic font-bold"> Home loan is a secured loan facility, which banks and HFCs offer for purchasing, constructing, renovating, repairing and extending an existing/ new residential property. </span>
                    The loan is backed by the underlying property till the loan repayment. In case of default by the borrower, the lender has the legal right to take the concerned property into possession and then auction the property to recover the unpaid loan amount.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What is the interest rate on a home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Currently, home loan interest rates start from 7.85% p.a. The final interest rate at which the bank or HFC will offer a home loan will depend on the applicant’s credit score, loan amount, employment profile, employer’s profile, LTV ratio, etc.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    How to avail a home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Consumers can avail home loans directly from the banks and HFCs. As many home loan lenders now-a-days facilitate online home loan application processes, consumers can consider applying for them through such lender’s official websites, mobile apps or internet banking platforms.Alternatively, consumers can also get a housing loan through online financial marketplaces to fetch home loan offers from multiple lenders from a single platform, depending on the consumers’ credit profiles.
                </TypographyPBlueColor>


                <TypographyH4BlueColor>
                    Who is eligible for a home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Home loan companies offer home loans to all resident and non-resident Indians. They can be salaried or self-employed professionals/non-professionals.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    How much home loan can I get on a 40,000 salary?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Home loan lenders determine applicants’ eligible loan amount based on the EMI/NMI ratio and LTV ratio, which vary as per the lender’s credit risk policy. To estimate the loan amount, consumers can use their lender’s home loan eligibility calculator on the website or explore online financial marketplaces like Financesbazar for maximum loan offers from different lenders
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What are the property documents required for home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    The property documents required to avail home loans may vary on a case-to-case basis. The documents for home loans availed for buying a new house will vary from the documents for home loans availed for house construction. For a detailed home loan document list.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Which bank is best for home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    For most consumers, choosing a lender with the lowest home loan interest rate is the key to saving on overall interest cost. However, apart from rates, factors such as loan tenure, amount, LTV ratio, processing fees, approval time and disbursement efficiency are important when looking for the best home loan provider.Instead of visiting lender websites in person, consumers can simplify their search by comparing rates, tenure, fees and more on online financial marketplaces such as Financesbazar.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What is the maximum home loan that I can get?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Some lenders use the Multiplier Method to determine your maximum home loan eligibility, which involves calculating the eligible loan amount using a predetermined multiple of an applicant’s monthly net income. They usually offer loan amounts of up to 72 times an applicant’s gross monthly income or 6 times their gross annual income (for non-salary applicants).Others use the EMI/NMI Ratio, which requires the applicant’s total EMI obligations to be within a predetermined proportion, typically 50-55% of their income. Some lenders combine both of these methods to determine the loan amount eligible for the applicant.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    How do lenders check the EMI affordability for their home loan applicants?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Lenders consider the repayment capacity of home loan applicants while evaluating their loan application and loan amount eligibility. Home loan lenders usually prefer to lend to home loan applicants whose total EMI including the proposed home loan EMI is within 50-60% of their monthly income. Hence, home loan applicants can use online home loan EMI calculators to find the optimal home loan amount and tenure based on their repayment capacity.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What home loan can I get with a poor credit score?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    It is difficult to say which home loan you will get with a low credit score as different lenders have different credit risk policies. Therefore, consumers with poor credit scores should visit online marketplaces like Financesbazar to check and compare home loan rates and other loan features such as tenure, processing fees and other related costs from different banks and HFCs.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    How much credit score should I have to get a housing loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Lenders prefer to approve home loans to applicants with a credit score of 730 and above because such high credit scores reflect responsible credit behavior and reduce the credit risk for lenders. This is why many lenders offer lower home loan rates to applicants with high credit scores. However, some lenders offer home loans at higher interest rates to applicants with low credit scores. Therefore, one must check their credit scores at regular intervals.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What is the EMI for Rs. 20 lakh home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    EMI calculation for a Rs. 20 lakh home loan would depend on the interest rate and tenure. Let’s assume the interest rate and tenure on your Rs. 20 lakh home loan is 8.50% p.a. and 20 years, respectively. In such a case, your home loan EMI would be Rs. 17,356. For calculating EMI based on other tenure and interest rate values, you can use a home loan EMI calculator.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Who can co-sign a home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Your spouse or blood relatives like your father, mother, siblings and children can co-sign a home loan with you. Also, all co-owners of the property must be co-applicants in a home loan.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Are there any prepayment charges in case of a house loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    In case of floating rate home loans, lenders do not charge pre-payment penalty as per RBI guidelines. However, lenders may charge prepayment penalty in case of prepayment of fixed rate home loans.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What is a home loan balance transfer?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Home loan balance transfer allows existing home loan borrowers to transfer their outstanding home loan to a new lender at lower interest rates and/or better loan terms. This facility is especially helpful for borrowers who had taken a home loan at higher interest rates but are now eligible for lower interest rates due to their improved credit profile or a reduction in market interest rates.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Can I take two home loans at the same time?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Yes, if the lender of your second home loan is satisfied with your repayment capacity, credit profile and features of the mortgaged property, you can avail a second home loan for another property.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    How long does it take to get a home loan sanctioned?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Generally, it takes 1 to 2 weeks for lenders to approve a home loan. However, this can vary considerably depending on the loan approval process of the banks/HFCs, the credit profile of the applicant and the features of the property to be purchased/constructed.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Can I prepay my outstanding housing loan amount?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Yes, you can prepay your home loan. If you have a floating rate home loan, no prepayment charges will be levied. However, in case of fixed rate home loans, lenders may levy a prepayment charge of around 2% to 4%.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Can I avail tax deductions on my home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Yes. Repayment of the principal amount will be eligible for tax deduction under section 80C of the Income Tax Act. Repayment of the interest component will be eligible for tax deduction under section 24(b) of the Income Tax Act.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Can I switch from a fixed rate to a floating rate during my home loan tenure?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Yes, most lenders offering home loans at both fixed and floating rates allow their existing home loan borrowers to convert their fixed rate loans into floating rate loans and vice versa, on the payment of conversion or switching fee.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What is the maximum home loan amount allowed under PMAY-G scheme?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Under Pradhan Mantri Awas Yojana-Gramin scheme, beneficiaries can avail a maximum home loan amount of up to Rs 70,000.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What is a home loan foreclosure charge?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Home loan foreclosure charge is a penalty that your home loan lender may levy when you pay off the loan before the end of the loan tenure. However, the Reserve Bank of India (RBI) has prohibited banks and Housing Finance Companies (HFCs) from charging foreclosure charges on floating rate home loans. Lenders offering home loans at fixed rates usually do not charge foreclosure fees when paid off from the borrower’s own fund sources.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What could be the hidden charges for home loans?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    As per the RBI guidelines on Fair Practices Code for Lenders, home loan application forms should include information about the fees/charges, if any. Lenders should also give the notice of any change in the terms and conditions including interest rates, service charges etc. in advance to the borrowers. Therefore, borrowers should always stay updated regarding the schedule of charges of their home loans.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    What is a home loan notice of intimation?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    A Notice of Intimation (NOI) is a document that serves to inform relevant statutory authorities regarding purchase of a house property or when a home loan is availed for the said house property. The issuance of this notice has been in effect since April 1, 2013, as a measure to combat property fraud, avoid duplicate registrations of the same property, and prevent multiple loans being taken out on a single home.
                </TypographyPBlueColor>

                <TypographyH4BlueColor>
                    Can I top up an ongoing home loan?
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Existing home loan borrowers can opt for home loan top-up facility to meet additional expenses related to home construction/ improvement/extension, purchase of a new house or taking care of any personal needs except for any speculative purposes. However, lenders will sanction top up home loans only after factoring in the credit profile and repayment history of the borrower.
                </TypographyPBlueColor>

            </>
        </div>
    )
}
