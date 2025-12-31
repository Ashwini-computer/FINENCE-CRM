import {
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
import PageLayout from '@/components/layout/PageLayout';
import EMICalculatorDefault from "@/components/EMI/EMICalculatorDefault"

const lendersComparison = [
    {
        lender: "HDFC Bank",
        interestRate: "10.90-24.00",
        emi5L: "10,834-14,384",
        emi1L: "2,167-2,877"
    },
    {
        lender: "Tata Capital",
        interestRate: "11.99 onwards",
        emi5L: "11,120 onwards",
        emi1L: "2,224 onwards"
    },
    {
        lender: "ICICI Bank",
        interestRate: "10.85-16.65",
        emi5L: "10,834-12,332",
        emi1L: "2,167-2,466"
    },
    {
        lender: "Bank of Baroda",
        interestRate: "10.90-18.30",
        emi5L: "10,846-12,778",
        emi1L: "2,169-2,556"
    },
    {
        lender: "Axis Bank",
        interestRate: "11.25 onwards",
        emi5L: "10,896 onwards",
        emi1L: "2,179 onwards"
    },
    {
        lender: "Kotak Mahindra Bank",
        interestRate: "10.99-16.99",
        emi5L: "10,869-12,424",
        emi1L: "2,174-2,485"
    },
    {
        lender: "Bank of India",
        interestRate: "11.60-16.20",
        emi5L: "11,021-12,212",
        emi1L: "2,204-2,442"
    },
    {
        lender: "Canara Bank",
        interestRate: "10.45-15.90",
        emi5L: "10,722-12,132",
        emi1L: "2,147-2,426"
    },
    {
        lender: "HSBC",
        interestRate: "10.15-16.00",
        emi5L: "10,660-12,159",
        emi1L: "2,132-2,432"
    },
    {
        lender: "Federal Bank",
        interestRate: "12.00-22.50",
        emi5L: "11,122-13,952",
        emi1L: "2,224-2,790"
    },
    {
        lender: "Union Bank of India",
        interestRate: "11.10-15.20",
        emi5L: "10,896-11,948",
        emi1L: "2,179-2,390"
    },
    {
        lender: "Punjab & Sind Bank",
        interestRate: "10.35-13.40",
        emi5L: "10,710-11,479",
        emi1L: "2,142-2,296"
    },
    {
        lender: "South Indian Bank",
        interestRate: "12.60-20.35",
        emi5L: "11,338-13,317",
        emi1L: "2,268-2,663"
    },
    {
        lender: "UCO Bank",
        interestRate: "10.95-13.95",
        emi5L: "11,236-11,621",
        emi1L: "2,172-2,324"
    },
    {
        lender: "IDFC First Bank",
        interestRate: "10.99 onwards",
        emi5L: "10,869 onwards",
        emi1L: "2,174 onwards"
    },
    {
        lender: "Bank of Maharashtra",
        interestRate: "9.50-14.30",
        emi5L: "10,501-11,686",
        emi1L: "2,100-2,342"
    },
    {
        lender: "Indian Overseas Bank",
        interestRate: "10.50 onwards",
        emi5L: "10,747 onwards",
        emi1L: "2,149 onwards"
    },
    {
        lender: "Karnataka Bank",
        interestRate: "13.87",
        emi5L: "11,562",
        emi1L: "2,312"
    },
    {
        lender: "IndusInd Bank",
        interestRate: "10.49 onwards",
        emi5L: "10,744 onwards",
        emi1L: "2,149 onwards"
    }
];

export default function PersonalLoanEMICalulator() {
    return (

        <PageLayout>
            <div className="max-w-5xl mx-auto sm:py-8 px-6">
                <>
                    <EMICalculatorDefault
                        headline="Personal Loan EMI Calculator"
                        paragraph="Looking for a personal loan but unsure about the EMIs? Use Financesbazar's Personal Loan EMI Calculator to quickly find out how much you need to pay every month for your personal loan. This simple calculator also displays the total interest payable, total principal payable and amortization schedule based on the loan amount, interest rate and the tenure you choose."
                        inputHeading="Personal Loan EMI Calculator"
                        outputHeading='Personal Loan EMI Calculator'
                    />
                </>

                <>
                    <Table className="border border-black mt-10">
                        <TableCaption></TableCaption>
                        <TableHeader>
                            <TableRow className="border border-black text-center">
                                <TableHead className="font-semibold border border-black">Home Loan Details</TableHead>
                                <TableHead className="font-semibold border border-black">Interest rate (% p.a.)</TableHead>
                                <TableHead className="font-semibold border border-black">EMI (Rs.) Loan Amt. – Rs. 5 lakh Tenure – 5 years</TableHead>
                                <TableHead className="font-semibold">EMI (Rs.) Loan Amt. – Rs. 1 lakh Tenure – 5 years</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                lendersComparison?.map((option, index) => (
                                    <TableRow className="border border-black">
                                        <TableCell className="border border-black">{option?.lender}</TableCell>
                                        <TableCell className="border border-black text-center">{option?.interestRate}</TableCell>
                                        <TableCell className="border border-black text-center">{option?.emi5L}</TableCell>
                                        <TableCell className="border border-black text-center">{option?.emi1L}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                    <TypographyPBlueColor className="italic">
                        <span className='font-semibold'>Note: </span> Interest rates as of 17 April 2025
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        Why Should You Use a Personal Loan EMI Calculator?
                    </TypographyH2BlueColor>
                    <TypographySmall className="italic mt-3">
                        Using a personal loan EMI calculator before applying for the loan helps you get an estimate of the EMIs, thereby, helping you to:
                    </TypographySmall>
                    <TypographyList2
                        items={[
                            "Check your EMI affordability",
                            "Determine the optimum loan tenure for comfortable repayments",
                            "Plan your finances more efficiently to ensure timely loan repayments"
                        ]}
                    />
                </>

                <>
                    <TypographyH2BlueColor>
                        What Causes Your Personal EMIs to Increase or Decrease?
                    </TypographyH2BlueColor>
                    <TypographySmall className="italic mt-3">
                        Key factors affecting your EMI amount includes:
                    </TypographySmall>
                    <BoldList
                        items={[
                            {
                                title: "Loan Amount",
                                value: "Higher the loan amount, higher will be your EMI if interest rate and tenure remain the same."
                            },
                            {
                                title: "Interest Rate",
                                value: "An increase in the interest rate increases your EMI and the overall interest cost."
                            },
                            {
                                title: "Tenure",
                                value: "Opting for a longer tenure reduces EMI burden but increases the total interest paid over time."
                            }
                        ]}
                    />
                </>

                <>
                    <TypographyH2BlueColor>
                        Ways to Reduce Your Personal Loan EMI Burden
                    </TypographyH2BlueColor>
                    <TypographySmall className="italic mt-3">
                        Worried about high EMIs? Here are two practical options you can consider to ease your monthly burden:
                    </TypographySmall>
                    <>
                        <TypographyH4BlueColor>
                            Make prepayments whenever possible:
                        </TypographyH4BlueColor>
                        <TypographyList2
                            items={[
                                "Paying a portion of your loan early, gives you a choice to either reduce EMI or tenure.",
                                "Go for lower EMIs only when you are struggling to repay your existing EMIs.",
                                "If not, tenure reduction is wiser choice as it will help you save more on your loan’s overall interest cost."
                            ]}
                        />
                        <TypographyPBlueColor className="italic">
                            <span className='font-bold'> Note:</span> Personal loans usually have a lock-in of one year after which you can make partial or full loan prepayments. Depending on the lender, prepayments may also incur prepayment charges.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Transfer your personal loan:
                        </TypographyH4BlueColor>
                        <TypographyList2
                            items={[
                                "You can also consider transferring your personal loan to another lender offering lower interest rates. Some lenders may also offer you better terms like longer tenures, higher loan amount, etc. through personal loan balance transfer.",
                                "Before opting for this facility, do a detailed cost-benefit analysis to ensure the amount you save on the interest is significantly higher than the costs* incurred during the loan transfer. In such a case, use our online personal loan EMI calculator to check how much you can save by reducing your EMIs before you opt for the balance transfer.",
                            ]}
                        />
                        <TypographyPBlueColor className="italic">
                            * Your existing lender may charge prepayment/foreclosure fees if the loan was availed at fixed interest rates. Additionally, the new lender may charge processing fee, administrative fee, etc. on the transferred loan.
                        </TypographyPBlueColor>
                    </>
                </>

                <>
                    <TypographyH2BlueColor>
                        Can my personal loan EMI change during the loan tenure?
                    </TypographyH2BlueColor>
                    <TypographySmall className="italic mt-3">
                        Yes, even though your personal loan EMI is usually a fixed amount, it can change during the loan tenure under certain circumstances:
                    </TypographySmall>
                    <BoldList
                        items={[
                            {
                                title: "In Case of Loan Prepayment",
                                value: "After prepaying your personal loan, you can either reduce EMIs for the same tenure or reduce the tenure for the same EMIs. Reducing EMIs helps ease financial strain, while reducing tenure saves on total interest paid."
                            },
                            {
                                title: "In Case of Rate Change in Floating Interest Rate",
                                value: "If your loan is on a floating rate, changes in the external benchmark rates by the lender will cause your interest rate to fluctuate accordingly, impacting your EMI or tenure."
                            }
                        ]}
                    />
                    <TypographyPBlueColor>
                        In case of an increase in the floating interest rate, if the borrower permits, the lender may extend the loan tenure while keeping the EMIs same. In case the new tenure goes beyond the maximum period permitted, then the lender may increase your EMI.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        What if you miss paying your personal loan EMI(s)?
                    </TypographyH2BlueColor>
                    <TypographySmall className="italic mt-3">
                        Missing your personal loan EMI(s) doesn’t just affect your credit score – you might have to pay these charges over and above the actual EMI payable:
                    </TypographySmall>
                    <BoldList
                        items={[
                            {
                                title: "Penal Interest Charges",
                                value: "Also known as 'overdue interest charges', these are levied on overdue EMIs until the date of their repayment."
                            },
                            {
                                title: "Cheque/NACH/SI Bounce Charges",
                                value: "These are fixed charges applied when EMI payments fail due to insufficient funds or closure of the payment account. Applicable each time a post-dated cheque or auto-debit mandate bounces."
                            }
                        ]}
                    />

                    <>
                        <Table className="border border-black">
                            <TableCaption></TableCaption>
                            <TableHeader>
                                <TableRow className="border border-black">
                                    <TableHead colSpan={2} className="text-center font-semibold">
                                        Compare EMIs Across Various Loan Amounts
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="text-center">
                                <TableRow className="border border-black">
                                    <TableCell className="border border-black">Rs 5 Lakh Personal Loan EMI</TableCell>
                                    <TableCell>Rs 2 Lakh Personal Loan EMI</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell className="border border-black">Rs 3 Lakh Personal Loan EMI</TableCell>
                                    <TableCell>Rs 10 Lakh Personal Loan EMI</TableCell>
                                </TableRow>
                                <TableRow className="border border-black">
                                    <TableCell className="border border-black">Rs 15 Lakh Personal Loan EMI</TableCell>
                                    <TableCell>Rs 50000 Lakh Personal Loan EMI</TableCell>
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
                            How accurate is a personal loan EMI calculator?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            A personal loan EMI calculator gives highly accurate estimates based on the inputs you provide – loan amount, interest rate, and tenure. However, the final EMI may vary slightly due to lender-specific processing fees or rounding-off methods.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can EMI calculators be used for floating rate personal loans?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Yes, you can use EMI calculators for floating-rate personal loans. However, since floating interest rates change with the change in its linked benchmark rates, the calculator will only provide an approximate EMI based on the interest rate entered by the user in the calculator.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is the best tenure to keep EMI affordable?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            A longer tenure usually means lower EMIs, making it easier on your monthly budget. But keep in mind – it also increases your overall interest payout. Try to strike a balance between a manageable EMI and total interest cost.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Will prepayments reduce my monthly EMI?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Yes, if your lender allows it, you can reduce your EMI by making a part prepayment. Alternatively, you can choose to reduce your tenure instead, which helps save more on interest in the long run.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How to calculate EMI manually for a personal loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            You can calculate EMI using this formula: <span className='font-semibold'> EMI = [P x R x (1+R)^N] / [(1+R)^N – 1] </span>, where:
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            <span className='font-semibold'> P </span>= Loan Amount;
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            <span className='font-semibold'> R </span>= Monthly Interest Rate (Annual rate/12/100);
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            <span className='font-semibold'> N </span>= Loan Tenure (in months)
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            As manual calculations can be tedious and prone to errors, using an online personal loan EMI calculator would be a much easier and faster way to get accurate results.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can I compare EMIs of different banks using the calculator?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Can I compare EMIs of different banks using the calculator?
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Is EMI the same as interest?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Not quite. EMI includes both the principal repayment and the interest on your loan. So, it’s a combined monthly payment, not just the interest amount.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Why is EMI different for different banks?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            EMIs vary across banks mainly due to the differences in their interest rates, processing fees, and loan tenures offered.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What is the EMI for ₹2 lakh personal loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            It depends on the interest rate and tenure. For example, at 11% p.a. for 5 years, your EMI would be around ₹4,350. Use our calculator to get an exact figure based on your preferred terms.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Which bank offers the lowest EMI on personal loans?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Banks offering the lowest interest rates will have the lowest EMIs. As of now, banks like Bank of Maharashtra are offering competitive interest rates on personal loans. Use our personal loan EMI calculator to calculate EMIs across varying loan amounts, interest rates and tenures to find the best option.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can I reduce my EMI after taking the loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Yes, by either making a prepayment or opting for a loan balance transfer to a lender offering a lower interest rate or longer tenure.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What happens if I prepay my personal loan?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Prepaying reduces your outstanding balance, which can lower your EMI or loan tenure. However, check if your lender charges prepayment penalties.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Is GST applicable on personal loan EMI?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            No, GST is not charged on your EMI. But it is applicable on processing fees and other service charges levied by the lender.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can I change my loan tenure after disbursal?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Changing tenure after disbursal is rare but possible in some cases, such as during loan restructuring or balance transfer. Contact your lender to check if they offer this option.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How much EMI for ₹10 lakh personal loan for 5 years?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            At 11% interest, EMI would be approximately ₹21,750. Try our EMI calculator to customize this based on your actual rate and tenure.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How does interest rate affect personal loan EMI?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Higher interest rates lead to higher EMIs and vice versa. Even a small difference in rate can significantly affect your monthly payout and overall cost.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Can I use an EMI calculator for balance transfer loans?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Yes, and it’s a smart move! It helps you estimate potential savings and compare EMIs between your current loan and the new offer.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            What happens if I miss a personal loan EMI?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            You may incur penal charges, late payment fees, and your credit score might take a hit. It’s best to set auto-debit mandates or reminders to avoid missing payments.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How to reduce my personal loan EMI without increasing the loan tenure?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The best option is to make part-prepayments. This reduces the principal, and you can ask your lender to recalculate the EMI without changing the tenure.
                        </TypographyPBlueColor>
                    </>
                </>

            </div>
        </PageLayout >

    )
}
