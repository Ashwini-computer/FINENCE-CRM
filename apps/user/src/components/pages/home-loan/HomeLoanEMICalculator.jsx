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

const homeLoanCharges = [
    {
        title: "Cheque/NACH/SI bounce charges",
        value: "Applicable when a home loan EMI payment fails due to insufficient account balance or closure of the account used for EMI payments. Usually a fixed charge levied each time an automated EMI deduction fails."
    },
    {
        title: "Late payment charges",
        value: "This charge can either be a fixed amount or a percentage of the unpaid amount."
    },
    {
        title: "Penal interest charges",
        value: "Applicable on the unpaid EMI amount for home loan. Usually a fixed percentage amount payable per month on the principal unpaid till the due EMI is paid."
    }
];

const homeLoanEMIAffects = [
    {
        title: "Step-up or Step-down Loans",
        value: "In step-up loans, EMIs gradually increase over the tenure. In step-down loans, EMIs decrease over time."
    },
    {
        title: "Partly Disbursed Loan",
        value: "In partly disbursed loans, pre-EMIs increase with each subsequent disbursement."
    },
    {
        title: "Loan Prepayment",
        value: "Prepaying your home loan can help reduce either your EMI for the same tenure or the tenure for the same EMI. Reducing tenure is more beneficial due to lower total interest payout."
    },
    {
        title: "Floating Interest Rate Changes",
        value: "When the benchmark rate changes, the floating interest rate changes as well. If the rate increases, lenders may extend the tenure. If the tenure exceeds limits, they may increase the EMI."
    }
];

const homeLoanFactors = [
    {
        title: "Loan Amount",
        value: "Higher the amount borrowed, the higher will be your home loan EMI, provided the tenure and the interest rate remain fixed."
    },
    {
        title: "Interest Rate",
        value: "Higher home loan rate leads to higher home loan EMI as well as the total interest cost."
    },
    {
        title: "Loan Tenure",
        value: "Longer tenure leads to lower EMI but higher total interest payable as compared to a shorter tenure for the same loan."
    }
];


export default function HomeLoanEMICalculator() {
    const { EMITableData } = useContextFile();
    return (
        <PageLayout>
            <div className="max-w-5xl mx-auto sm:py-8 px-6">

                <>
                    <TypographyH2BlueColor>
                        Home Loan EMI Calculator
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Home loan EMI calculator calculates your EMI instantly on the basis of your prospective loan amount, interest rate and loan tenure. The online home loan EMI calculator also displays total interest payable, total principal payable and amortization schedule to help you understand and plan your home loan repayment better after considering your repayment capacity.
                    </TypographyPBlueColor>
                    <EmiCalculator headline="Home Loan EMI Calculator" />
                    <EmiTable data={EMITableData} />
                    <TypographyPBlueColor className="bg-blue-100 p-2 rounded">
                        * The EMI calculation is based on interest rate input provided by the user and for illustrative purposes only.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        Benefits of Using Home Loan EMI Calculator
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        With Home Loan EMI Calculator, you can know your monthly installments before applying for a housing loan, which in turn will help you decide:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={[
                            "How much you can afford to borrow on your home loan",
                            "Whether you should go for a long-term or a short-term home loan",
                            "How much should you contribute towards your home down payment",
                            "How to plan out your finances to ensure timely loan repayments"
                        ]}
                    />
                </>

                <>
                    <TypographyH4BlueColor>
                        Home Loan EMI Calculation Formula
                    </TypographyH4BlueColor>
                    <TypographyPBlueColor>
                        Consumers can calculate their home loan EMIs manually using the home loan EMI calculation formula, which is: <span className='font-semibold'> EMI = [P x R x (1+R)^N]/[(1+R)^N-1], </span>, where:
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        <span className='font-semibold'> P </span>= Principal amount
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        <span className='font-semibold'> R </span>= Interest rate (per month)
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        <span className='font-semibold'> N </span>= Number of monthly instalments/loan tenure in months
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        Consumers can avoid manual calculations, which are time-consuming and prone to error, by using Financesbazar’s online Home Loan EMI Calculator. The calculator is simple to use and provides rapid, accurate results. Users only need to enter the loan amount, interest rate, and duration to obtain the EMI amount, as well as the total interest cost and amount payable.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        Charges Applicable on Missing Home Loan Installment(s)
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        If due to some reason, you do not pay home loan EMI(s) on time, you might have to pay these home loan charges over and above the actual EMI payable:
                    </TypographyPBlueColor>
                    <BoldList
                        items={homeLoanCharges}
                    />
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Reduce Home Loan EMI?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        If you are searching for ways to lower your home loan EMI payments, consider the following practices to reduce your home loan EMI burden:
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        Make Part Prepayments Whenever Possible
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        When you make a part prepayment, you pay a portion of the outstanding principal early, which in turn gives you an option to either reduce home loan EMI or tenure. Choose lower housing loan EMI only when you are striving to make loan payments in full.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        A home loan generally has a lock-in of about one year after which you can fully or partially prepay the home loan amount. Also, unlike before, banks and NBFCs cannot levy foreclosure charges/ prepayment penalties on floating rate housing loans sanctioned to individuals, for purposes other than business.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        Opt for Home Loan Balance Transfer
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        You can transfer your outstanding loan amount to lenders offering lower home loan interest rates, longer loan tenure, or both. However, before going for a home loan balance transfer, do a cost-benefit analysis using calculator to ensure that your interest savings outweigh the transfer costs. Also, use an online home loan EMI calculator to know exactly how much your EMI’s can go down on a lower home loan rate.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        Can Your Home Loan EMI Amount Change During the Loan Tenure?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Yes, even though your housing loan EMI is usually a fixed amount, it can change during the loan tenure but under certain circumstances, listed as below:
                    </TypographyPBlueColor>
                    <BoldList
                        items={homeLoanEMIAffects}
                    />
                </>

                <>
                    <TypographyH2BlueColor>
                        Factors that Affect Home Loan EMI
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Factors affecting your home loan EMI are:
                    </TypographyPBlueColor>
                    <BoldList
                        items={homeLoanFactors}
                    />
                    <>
                        <Table className="border border-black">
                            <TableCaption></TableCaption>
                            <TableHeader>
                                <TableRow className="border border-black">
                                    <TableHead colSpan={2} className="text-center font-semibold">
                                        Related Articles
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-center text-blue-800">
                                <TableRow className="border border-black">
                                    <TableCell className="border border-black">HDFC Home Loan EMI Calculator</TableCell>
                                    <TableCell>ICICI Home Loan EMI Calculator</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell className="border border-black">SBI Home Loan EMI Calculator</TableCell>
                                    <TableCell>Axis Bank Home Loan EMI Calculator</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell className="border border-black">Yes Bank Home Loan EMI Calculator</TableCell>
                                    <TableCell>Central Bank of India Home Loan EMI Calculator</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </>
                </>

                <>
                    <TypographyH2BlueColor>
                        FAQs on Personal loan EMI Calculator
                    </TypographyH2BlueColor>

                    <>
                        <TypographyH4BlueColor>
                            FAQs on Home Loan EMI Calculator
                        </TypographyH4BlueColor>

                        <>
                            <TypographyH4BlueColor>
                                What is home loan EMI?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                EMI or Equated Monthly Instalment is the set amount paid by home loan borrowers to the lender on a set day every month. It consists of two components- the principal component and the interest component. Home loan applicants can calculate their home loan EMI and the total interest cost using housing loan EMI calculator for various home loan interest rates and tenures.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What is a home loan EMI calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Home loan EMI calculator is an online tool used for calculating EMI and total interest payable on a home loan. While using the tool, users can select a wide range of combinations of loan amount, interest rate and tenure to determine the optimum tenure and EMI based on their repayment capacity.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How loan amount affects the home loan EMI?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Your home loan EMI is a function of your home loan amount, interest rate and tenure. Higher home loan amount would result in higher EMI as would higher interest rate. On the contrary, opting for longer loan tenure reduces the home loan EMI. Note that many banks/HFCs charge higher interest rate for bigger loan amounts. Thus, opting for a higher home loan amount can also increase your interest rate and EMI’s.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How much salary is required for a Rs 25 lakh home loan?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Lenders use multiplier method and EMI/NMI ratio for determining the eligible loan amount for a home loan applicant, both of which involve the applicant’s monthly income. As the factors used for calculating the maximum loan amount eligibility can vary widely across lenders, you should either visit the bank/HFC branch or use the online home loan eligibility calculators of the respective lenders to find the salary required for availing Rs 25 lakh home loan.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What is the EMI for a Rs. 20 lakh home loan?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The calculation of EMI on a Rs. 20 lakh home loan would depend on its loan tenure and interest rate. Hence, use an online home loan EMI calculator to calculate your EMI for different tenure and interest rate values.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Is a home loan EMI calculator accurate?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Online home loan EMI calculators offered by lenders usually give accurate results to the users, subject to some negligible variation in their results due to the use of approximation. However, if in doubt, users can use Financesbazar’s home loan EMI calculator for accurate results.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Is Financesbazar Home Loan EMI Calculator free to use?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The Home Loan EMI Calculator available at Financesbazar.com is free to be used anytime.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What is flexible and fixed home loan EMI?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Flexible or variable housing loan EMI may change anytime throughout the loan tenure with the change in its floating home loan interest rates. Fixed rate home loan EMI, on the other hand, remains fixed for the entire loan period as its fixed rate of interest does not fluctuate during the loan tenure.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How many times can I use the Financesbazar Home Loan EMI Calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Consumers can use Financesbazar’s Home Loan EMI Calculator as many times as they require.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How much is the EMI for a Rs. 30 lakh home loan?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                EMI calculation on a Rs. 30 lakh home loan would depend on its loan tenure and interest rate. Thus, use online home loan EMI calculator to calculate your EMI for various combinations of interest rates and tenures.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What are the tax benefits of paying home loan EMI?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Home loan EMI comprises both interest and principal components. The repayment of principal component in a financial year would qualify for tax deductions of up to Rs 1.5 lakh under Section 80C of Income Tax Act whereas the interest component repaid in a financial year would qualify for tax deduction of up to Rs 2 lakh under Section 24(b) of the IT Act.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Is GST applicable to home loan EMI?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                No, GST (Goods and Services Tax) does not apply to home loan EMI. However, it is applicable on several other home loan charges such as processing fees, late payment charges, and prepayment charges.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How does paying home loan EMI help in reducing tax obligations?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                To reduce the home loan burden and to encourage more people to buy and invest in properties, the Government of India offers a host of home loan tax benefits. Section 80C of the Income Tax Act, 1961, allows home loan borrowers to claim tax deductions of up to Rs. 1.5 lakh on the principal amount repaid through your home loan EMI annually. As per Section 24b of the Income Tax Act, you can claim tax deductions of up to Rs. 2 lakh on the home loan interest paid during the financial year.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What if the home loan EMI is not paid?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Non-payment of home loan EMI will incur you late fees, penal interest. It will also lead to a drop in your credit score, thereby reducing your credit card and home loan eligibility. If your housing loan EMI’s remain unpaid for 90 days, your loan will be marked as a Non-Performing Asset (NPA) and the lender would start the process of recovering the dues as allowed within the framework of the SARFAESI Act, 2002.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What is the EMI for a Rs. 50 lakh home loan?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The EMI on a Rs. 50 lakh home loan would be calculated based on the loan tenure and interest rate. For this reason, one must use an online home loan EMI calculator to know EMI for varied loan interest rates and tenures.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How much is the EMI for a Rs. 75 lakh home loan?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Loan tenure and interest rate influences the EMI of a Rs. 75 lakh home loan. Therefore, you should use online home loan EMI calculators to determine their optimum EMI value against different sets of interest rates and tenures.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How can I pay my home loan EMI?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                To pay your home loan EMI’s, you can:
                            </TypographyPBlueColor>
                            <TypographyList2
                                items={[
                                    "Issue Standard Instructions (SI) to your bank",
                                    "Submit post-dated cheques to your lender",
                                    "Opt for direct deduction of monthly installments by your employer"
                                ]}
                            />
                            <TypographyPBlueColor>
                                <span className='font-semibold'> Note: </span> The different Home loan EMI payment options mentioned above may or may not be available with all the lenders.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                When will my home loan EMI be due?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Home loan EMIs for ready to move in properties start from the month subsequent to the month in which the loan amount is disbursed whereas EMI payments of home loans availed for under-construction properties usually start after the entire loan amount is disbursed.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                For home loans availed for under-construction properties, some lenders may also require their home loan borrowers to pay pre-EMIs, i.e. service the interest component, till the full disbursal of loan amount.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How home loan prepayments impact your home loan EMIs?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Making part-prepayment would either lead to a reduction in housing loan EMI or in the loan tenure depending what you opt for. Choosing a shorter tenure would lead to lower interest cost than the EMI reduction option. Opt for the EMI reduction option only if you want to reduce your housing loan EMI burden. Or else opt for tenure reduction.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What is the EMI for a Rs 1 crore home loan for 30 years?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Besides loan amount and tenure, the EMI calculation of Rs. 1 crore home loan also depends on the interest rates. Hence, to determine the optimum EMI value against different set of interest rates and tenures, use an online home loan EMI calculator.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Does home loan EMI change with the increase in home loan interest rates?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Increased home loan interest rates would impact your home loan EMI only from the date of interest rate reset date set by your lender. Till then, you would continue to pay your housing loan EMI on the basis of your older rates. When the interest rate for the existing home loan increases, you can choose to increase either the loan tenure or EMI with the consent of your lender.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                However, if the revised loan tenure exceeds the maximum period permitted, then your lender may increase your EMI. Note that opting for longer loan tenure would lead to higher interest cost than opting for higher EMI.
                            </TypographyPBlueColor>
                        </>
                    </>

                </>

            </div>

        </PageLayout>
    )
}
