import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyList2,
    TypographySmall,
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
import PageLayout from '@/components/layout/PageLayout';
import EmiCalculator from '@/components/EMI/EmiCalculator';
import EmiTable from '@/components/EMI/EmiTable';
import { useContextFile } from '@/context/contextFile';
import { Link } from 'react-router-dom';

const bankInterestRates = [
    { name: "State Bank of India", interestRate: "9.75–11.05" },
    { name: "Bank of Baroda", interestRate: "9.70–18.35" },
    { name: "PNB Housing Finance", interestRate: "9.24–15.00" },
    { name: "IDFC First Bank", interestRate: "9.25 onwards" },
    { name: "HDFC Bank Limited", interestRate: "9.50–13.30" },
    { name: "L&T Finance", interestRate: "9.50 onwards" },
    { name: "LIC Housing Finance", interestRate: "9.25–11.55" },
    { name: "ICICI Bank", interestRate: "10.85–12.50" },
    { name: "Tata Capital Housing Finance", interestRate: "9.00 onwards" },
    { name: "Axis Bank", interestRate: "10.50–10.95" },
    { name: "Kotak Mahindra Bank", interestRate: "9.50 onwards" },
];

const data = [
    {
        title: "Principal amount",
        value: "The amount for the loan against property availed from the bank or the financial institution depends on the property that is mortgaged. Thus, the bigger the loan amount, the higher the EMIs."
    },
    {
        title: "Tenure",
        value: "The loan tenure for a mortgage loan depends on the borrower’s current age and the retirement age. Longer the loan tenure, the smaller the EMIs."
    },
    {
        title: "Rate of interest",
        value: "The most critical factor that determines the ability and the ease to repay the loan is the interest rate. A higher interest rate can prevent from taking a larger loan amount or can create a situation for a longer tenure. In contrast, a lower interest rate helps to avail a larger loan amount and increases the possibility of easy prepayment. The interest rate also depends on the type of property to be mortgaged, the borrower’s profile and his/her credit score. Different banks and housing finance institutions offer different interest rates which keep changing from time to time. The rate can be floating, where it may change during the loan tenure, or fixed, where it remains the same during the entire tenure."
    }
];

const data2 = [
    {
        title: "Instant results",
        value: "Loan against property calculator helps to stay away from tedious calculations."
    },
    {
        title: "Easy-to-use",
        value: "This tool is easy to use. Just feed in the details about the loan to see the results."
    },
    {
        title: "Different combinations",
        value: "Try different combinations of the principal amount, interest rate and tenure to get an EMI that suits the need and pocket. EMI can be calculated numerous times."
    },
    {
        title: "24*7 Access",
        value: "This calculator can be used any time of the day on the Financesbazar website. It also provides the break-up of the total payment in the form of Amortization Schedule."
    }
];


export default function LoanAgainstEMICalculator() {
    const { EMITableData } = useContextFile();
    return (
        <PageLayout>
            <div className="max-w-5xl mx-auto sm:py-8 px-6">

                <>
                    <TypographyH2BlueColor>
                        Loan Against Property EMI Calculator
                    </TypographyH2BlueColor>
                    <EmiCalculator
                        headline="Calculate Loan EMI"
                    />
                    <EmiTable data={EMITableData} />
                    <TypographyPBlueColor className="bg-blue-100 p-2 rounded">
                        * The EMI calculation is based on interest rate input provided by the user and for illustrative purposes only.
                    </TypographyPBlueColor>

                    <TypographyPBlueColor>
                        Loan Against Property EMI Calculator is an online tool that calculates the monthly instalments to be paid towards the loan amount. The calculator gives accurate results on the basis of relevant details, such as loan amount, interest rate and loan tenure.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        Better financial planning and a practical assessment of repayment capability are important to stay away from any kind of financial turmoil. Thus, an EMI calculator provides a better picture of the situation while availing a Loan Against Property (LAP). EMI stands for Equated Monthly Instalment. Financesbazar’s Loan Against Property EMI Calculator helps to measure the loan repayment capability by calculating the monthly instalments to be paid. It also gives a break-up of the total payment in the form of an Amortization Schedule. This schedule is the tabular presentation of the periodic loan payment, principal amount and interest rate.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        Compare Loan Against Property Interest Rates Offered by Various Banks & HFCs in India
                    </TypographyH2BlueColor>
                    <Table className="border mt-6 border-black text-center">
                        <TableCaption></TableCaption>
                        <TableHeader>
                            <TableRow className="border border-black">
                                <TableHead className="border-r border-black font-semibold text-center" >Name of the Lender</TableHead>
                                <TableHead className="font-semibold text-center">Interest Rates (p.a.)</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bankInterestRates?.map((option, index) => (
                                <TableRow key={index} className="border border-black">
                                    <TableCell className="text-blue-800 cursor-pointer border-r whitespace-normal break-words border-black">{option?.name}</TableCell>
                                    <TableCell>{option?.interestRate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>

                <>
                    <TypographyH2BlueColor>
                        What is Loan Against Property?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        A Loan Against Property or Mortgage Loan is a type of secured loan sanctioned against both commercial and residential properties owned by the borrower. The lender or the financial institution keeps this property as collateral till the loan is fully repaid. Both salaried and non-salaried individuals are eligible for a mortgage loan. The loan amount received under the mortgage loan can be used for various purposes like starting a business, buying a property, footing medical bills, meeting wedding-related expenses, paying education fees, etc. The loan to be repaid is distributed over a period in the form of Equated Monthly Instalment (EMI) so that repayment does not become a burden on the borrower.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        What is Loan Against Property EMI?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        An EMI is the fixed monthly amount, comprising the principal amount and the interest, that the borrower pays until the loan is fully repaid. Initially, a big portion of the EMI consists of the interest amount. Later, a bigger chunk is devoted to a principal payment. Knowing the EMI in advance helps in deciding the loan amount to be taken as per the financial situation. An important factor that helps to decide the repayment amount is the interest rate offered on Loan Against Property. The rate varies for different banks and financial institutions.
                    </TypographyPBlueColor>
                    <TypographySmall>
                        Also Read:<Link to="" className='text-blue-800 cursor-pointer'> Documents Required for Availing Loan Against Property</Link>
                    </TypographySmall>
                </>

                <>
                    <TypographyH2BlueColor>
                        Factors Affecting LAP EMI Calculation
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        The 3 important factors that help to decide the EMIs are:
                    </TypographyPBlueColor>
                    <BoldList
                        items={data}
                    />
                    <TypographySmall>
                        Also Read:<Link to="" className='text-blue-800 cursor-pointer'> All You Need to Know About Fixed Interest Rate and Floating Interest Rate</Link>
                    </TypographySmall>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Use Financesbazar LAP EMI Calculator
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Financesbazar Loan Against Property EMI Calculator uses details like principal amount, interest rate and loan tenure to calculate the EMI amount. Follow the below-mentioned steps to calculate the EMI:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={[
                            "Enter the principal amount of the loan that you wish to borrow",
                            "Enter the rate of interest that has been offered by the provider",
                            "Enter the tenure over which you would like to repay the borrowed amount"
                        ]}
                    />
                    <TypographyPBlueColor>
                        Once all the details are provided, the payable EMI amount will show up. You can check the EMI amount for different tenures to find the one that suits your pocket.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        What are the Benefits of Using the Financesbazar LAP EMI Calculator?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Loan Against Property EMI Calculator on Financesbazar.com is a free tool that lets you calculate the monthly instalment you need to pay for your loan. It helps you to make a wiser decision while applying for a LAP. Some of the benefits of using Financesbazar’s LAP EMI Calculator are:
                    </TypographyPBlueColor>
                    <BoldList
                        items={data2}
                    />
                    <TypographySmall>
                        Also Check:<Link to="/home-loan-emi-calculator" className='text-blue-800 cursor-pointer'>Home Loan EMI Calculatory</Link>
                    </TypographySmall>
                </>

            </div>
        </PageLayout>
    )
}
