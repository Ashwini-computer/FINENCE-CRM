import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyList2,
    TypographySmall,
    TypographyH4BlueColor,
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
import PageLayout from "@/components/layout/PageLayout";
import EMICalculatorDefault from "@/components/EMI/EMICalculatorDefault";

const fdCalculatorBenefits = [
    {
        title: "Easy to use",
        value:
            "Using an online FD interest calculator for FD maturity and interest computation is easy. Users are usually required to enter a few basic details such as the principal amount, FD tenure and compounding frequency (quarterly, half-yearly and annual compounding) in the online calculator to get results.",
    },
    {
        title: "Know the maturity amount",
        value:
            "Before investing in an FD scheme, prospective depositors should know the expected amount in advance so as to determine whether the investment scheme will serve their investment goals at maturity or not.",
    },
    {
        title: "Accurate calculation",
        value:
            "Using an online fixed deposit calculator for calculating FD interest amount and maturity amount saves depositors from complex calculations and eliminates the risk of error caused due to miscalculations.",
    },
    {
        title: "Make comparisons for FD selection",
        value:
            "FD interest rates vary across banks and NBFCs/HFCs. Using a fixed deposit calculator can help depositors calculate and compare maturity amounts and interest income after considering FD features like tenure, interest rate, payout option and compounding frequency (quarterly, half-yearly, annual compounding) offered by various banks and NBFCs/HFCs. This would further help depositors choose the optimum FD scheme after considering the above-mentioned FD schemes.",
    },
];

const fdCalculatorBenefits2 = [
    {
        title: "Easy to use",
        value:
            "Using an online FD interest calculator for FD maturity and interest computation is easy. Users are usually required to enter a few basic details such as the principal amount, FD tenure and compounding frequency (quarterly, half-yearly and annual compounding) in the online calculator to get results.",
    },
    {
        title: "Know the maturity amount",
        value:
            "Before investing in an FD scheme, prospective depositors should know the expected amount in advance so as to determine whether the investment scheme will serve their investment goals at maturity or not.",
    },
    {
        title: "Accurate calculation",
        value:
            "Using an online fixed deposit calculator for calculating FD interest amount and maturity amount saves depositors from complex calculations and eliminates the risk of error caused due to miscalculations.",
    },
    {
        title: "Make comparisons for FD selection",
        value:
            "FD interest rates vary across banks and NBFCs/HFCs. Using a fixed deposit calculator can help depositors calculate and compare maturity amounts and interest income after considering FD features like tenure, interest rate, payout option and compounding frequency (quarterly, half-yearly, annual compounding) offered by various banks and NBFCs/HFCs. This would further help depositors choose the optimum FD scheme after considering the above-mentioned FD schemes.",
    },
    {
        title: "Simple Interest Calculation Example",
        value:
            "SI = Simple Interest\n\nP = Principal (amount invested)\n\nR = Rate of Interest (in %)\n\nT = Tenure (time for which deposit is kept in FD account)\n\nFor example, if a sum of Rs 10,000 is invested for 3 years at 10% p.a. then at the time of maturity,\n\nSI = 10,000*10*3/100 = Rs 3,000\n\nMaturity Amount = Rs 13,000\n\nAlso Check: Which bank/NBFC provides the highest FD interest rate in India?",
    },
];

const fdRatesByBank = [
    {
        bank: "North East Small Finance Bank",
        highestRate: 9.0,
        oneYear: 7.0,
        threeYear: 9.0,
        fiveYear: 6.25,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Unity Small Finance Bank",
        highestRate: 8.6,
        oneYear: 7.25,
        threeYear: 8.15,
        fiveYear: 8.15,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Suryoday Small Finance Bank",
        highestRate: 8.6,
        oneYear: 8.25,
        threeYear: 8.25,
        fiveYear: 8.6,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Utkarsh Small Finance Bank",
        highestRate: 8.5,
        oneYear: 8.0,
        threeYear: 8.5,
        fiveYear: 7.75,
        seniorCitizenRate: 0.6,
    },
    {
        bank: "Shivalik Small Finance Bank",
        highestRate: 8.3,
        oneYear: 6.0,
        threeYear: 7.5,
        fiveYear: 6.5,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Jana Small Finance Bank",
        highestRate: 8.25,
        oneYear: 7.5,
        threeYear: 8.25,
        fiveYear: 8.2,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Ujjivan Small Finance Bank",
        highestRate: 8.25,
        oneYear: 8.1,
        threeYear: 7.2,
        fiveYear: 7.2,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Equitas Small Finance Bank",
        highestRate: 8.05,
        oneYear: 7.9,
        threeYear: 7.75,
        fiveYear: 7.25,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Bandhan Bank",
        highestRate: 8.05,
        oneYear: 8.05,
        threeYear: 7.25,
        fiveYear: 5.85,
        seniorCitizenRate: "0.50-0.75",
    },
    {
        bank: "SBM Bank",
        highestRate: 8.05,
        oneYear: 7.05,
        threeYear: 7.3,
        fiveYear: 7.75,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "DCB Bank",
        highestRate: 8.0,
        oneYear: 7.1,
        threeYear: 7.5,
        fiveYear: 7.4,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "RBL Bank",
        highestRate: 8.0,
        oneYear: 7.5,
        threeYear: 7.5,
        fiveYear: 7.1,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "AU Small Finance Bank",
        highestRate: 7.75,
        oneYear: 7.0,
        threeYear: 7.5,
        fiveYear: 7.25,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "ESAF Small Finance Bank",
        highestRate: 7.75,
        oneYear: 5.0,
        threeYear: 6.25,
        fiveYear: 6.0,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Induslnd Bank",
        highestRate: 7.75,
        oneYear: 7.75,
        threeYear: 7.25,
        fiveYear: 7.25,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "YES Bank",
        highestRate: 7.5,
        oneYear: 7.0,
        threeYear: 7.5,
        fiveYear: 7.5,
        seniorCitizenRate: "0.50-0.75",
    },
    {
        bank: "IDFC FIRST Bank",
        highestRate: 7.5,
        oneYear: 6.5,
        threeYear: 6.5,
        fiveYear: 6.25,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Central Bank of India",
        highestRate: 7.5,
        oneYear: 6.85,
        threeYear: 6.75,
        fiveYear: 6.75,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Federal Bank",
        highestRate: 7.5,
        oneYear: 7.0,
        threeYear: 7.1,
        fiveYear: 7.1,
        seniorCitizenRate: 0.5,
    },
    {
        bank: "Bank of Maharashtra",
        highestRate: 7.45,
        oneYear: 6.75,
        threeYear: 6.5,
        fiveYear: 6.5,
        seniorCitizenRate: 0.5,
    },
];

export default function FDCalculator() {
    return (
        <PageLayout>
            <div className="max-w-5xl mx-auto sm:py-8 px-6">
                <>
                    <EMICalculatorDefault
                        headline="Fixed Deposit Calculator"
                        paragraph="A Fixed Deposit (FD) Calculator calculates the FD maturity value and interest income based on principal amount, FD interest rates and tenure. Online FD calculators of some banks additionally allow users to calculate their FD interest income based on the interest payout options (monthly, quarterly, half-yearly, yearly and reinvestment). Some online FD calculators also allow users to calculate their FD interest income on simple interest basis for short-term FDs."
                        inputHeading="FD Calculator"
                        outputHeading="FD Calculator"
                    />
                </>

                <>
                    <TypographyH2BlueColor>
                        How Can a Fixed Deposit Calculator Help You?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Using a fixed deposit calculator can benefit depositors in the
                        following ways:
                    </TypographyPBlueColor>
                    <BoldList items={fdCalculatorBenefits} />
                </>

                <>
                    <TypographyH2BlueColor>
                        How is Fixed Deposit Interest Calculated?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        There are two methods of calculation of interest on a fixed deposit,
                        viz. Simple Interest and Compound Interest.
                    </TypographyPBlueColor>

                    <>
                        <TypographyH4BlueColor>
                            What is Simple Interest?
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Simple interest is the interest earned on an investment at a
                            pre-decided rate of interest for a specific period of time. It is
                            calculated by multiplying the principal amount, the rate of
                            interest per annum and the time for which the money is lent in
                            years.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Simple Interest Formula:{" "}
                            <span className="font-semibold"> SI = P x R x T/ 100 </span>Where,
                        </TypographyPBlueColor>
                        <BoldList items={fdCalculatorBenefits2} />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Top 20 Scheduled Banks based on FD Rates
                        </TypographyH4BlueColor>
                        <Table className="border mt-6 border-black">
                            <TableCaption></TableCaption>
                            <TableHeader>
                                <TableRow className="border border-black">
                                    <TableHead className="border-r border-black font-semibold text-center">
                                        Banks
                                    </TableHead>
                                    <TableHead className="border-r border-black font-semibold whitespace-normal break-words text-center">
                                        Highest FD rate (% p.a.)
                                    </TableHead>
                                    <TableHead className="border-r border-black font-semibold whitespace-normal break-words text-center">
                                        1-year FD rate (% p.a.)
                                    </TableHead>
                                    <TableHead className="border-r border-black font-semibold whitespace-normal break-words text-center">
                                        3-year FD rate (% p.a.)
                                    </TableHead>
                                    <TableHead className="border-r border-black font-semibold whitespace-normal break-words text-center">
                                        5-year
                                        FD rate
                                        (% p.a.)
                                    </TableHead>
                                    <TableHead className="font-semibold whitespace-normal break-words">
                                        Additional
                                        interest rate
                                        for senior citizens
                                        (% p.a.)
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    fdRatesByBank?.map((option, index) => (
                                        <TableRow key={index} className="border border-black">
                                            <TableCell className="text-blue-800 border-r border-black">
                                                {option?.bank}
                                            </TableCell>
                                            <TableCell className="text-center border-r border-black">
                                                {option?.highestRate}
                                            </TableCell>
                                            <TableCell className="text-center border-r border-black">
                                                {option?.oneYear}
                                            </TableCell>
                                            <TableCell className="text-center border-r border-black">
                                                {option?.threeYear}
                                            </TableCell>
                                            <TableCell className="text-center border-r border-black">
                                                {option?.fiveYear}
                                            </TableCell>
                                            <TableCell className="text-center">{option?.seniorCitizenRate}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                        <TypographyPBlueColor>
                            The rates are updated as of <span className="font-semibold"> 7 April 2025 </span>
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            How to Use Financesbazar’s Fixed Deposit Calculator?
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            To use Financesbazar Fixed Deposit Calculator, follow these steps:
                        </TypographyPBlueColor>
                        <TypographyList2
                            items={[
                                "Enter the deposit amount",
                                "Enter the interest rate",
                                "Enter the tenure in months or years (the period for which you want FD to be active)",
                                "Click the “Calculate” button to get the estimated maturity amount and total interest amount"
                            ]}
                        />
                        <TypographyPBlueColor>
                            <span className="font-semibold">Note: </span> The FD maturity amount would depend on the deposit amount, FD rates, tenure and type of FD chosen, i.e., cumulative FD and non-cumulative FD.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Under non-cumulative FD, lenders usually offer a quarterly interest pay-out option for all tenures wherein the interest is credited quarterly to the current/savings account of the depositor. Depending on the lenders, depositors can also opt for monthly, half-yearly and annual interest pay-out options of various FD tenures. In the case of the cumulative FD option, the interest component remains invested till the FD maturity.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Monthly interest plans are ideal for retired individuals or for depositors who need a fixed monthly income to meet their daily expenses. The reinvestment or cumulative investment option would help the depositor benefit from the power of compounding, as the interest component remains invested in the FD and starts generating interest income on its own.
                        </TypographyPBlueColor>

                        <>
                            <TypographyH4BlueColor>
                                What is Compound Interest?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Compound interest is the interest earned on principal as well as interests. It is calculated by multiplying the principal amount with the interest rate raised to the number of periods in years for which the interest will be compounded.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                Formula for Compound Interest: <span className="font-semibold">A = P (1+r/n) ^ (n * t)</span> where,
                            </TypographyPBlueColor>
                            <BoldList
                                items={[
                                    {
                                        title: "A",
                                        value: "Maturity Amount"
                                    },
                                    {
                                        title: "P",
                                        value: "Principal amount"
                                    },
                                    {
                                        title: "r",
                                        value: "Rate of Interest (in decimals)"
                                    },
                                    {
                                        title: "n",
                                        value: "Number of compounding in a year"
                                    },
                                    {
                                        title: "t",
                                        value: "Number of years"
                                    }
                                ]}
                            />
                            <TypographyPBlueColor>
                                For example, if a sum of Rs 10,000 is invested for 3 years at a 10% compound interest rate (quarterly compounding), then at the time of maturity,
                            </TypographyPBlueColor>
                            <BoldList
                                items={[
                                    {
                                        title: "A",
                                        value: "10,000 {1 + (0.1/4)} ^ (4 * 3)"
                                    },
                                    {
                                        title: "A",
                                        value: "10,000 (1 + 0.025) ^ (12)"
                                    },
                                    {
                                        title: "A",
                                        value: "10,000 (1.025) ^ (12) = Rs. 13,449 (approximately)"
                                    },
                                    {
                                        title: "Compound Interest (CI) Earned over 3 years",
                                        value: "Maturity Amount – Principal Amount"
                                    },
                                    {
                                        title: "CI",
                                        value: "13,449 – 10,000 = Rs. 3,449"
                                    }
                                ]}
                            />
                        </>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            FAQs on Fixed Deposit Calculator
                        </TypographyH2BlueColor>

                        <>
                            <TypographyH4BlueColor>
                                How is the interest on a fixed deposit calculated?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The calculation of your FD interest income would primarily depend on the deposit amount, tenure, interest rates and the FD type you opt for such as cumulative FD or non-cumulative FD with monthly, quarterly, half-yearly or yearly payout. You can use an online FD rate calculator to calculate the interest on your fixed deposit and enter the deposit amount, interest rate and tenure to give the results.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What is the formula to determine the fixed deposit maturity amount?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                There are two methods of calculating FD interest, Simple Interest and Compound Interest. Based on these interest calculation methods, we can arrive at the FD maturity amount. The formula for calculating FD maturity amount using Simple Interest and Compound Interest is A = P + (P x R x T/100) and A = P + P (1 + R / 100) T – 1, respectively, where:
                            </TypographyPBlueColor>
                            <TypographyList2
                                items={[
                                    "A is the maturity amount",
                                    "P is the principal amount",
                                    " R is the rate of interest (p.a.)",
                                    "T is the tenure (in years)"
                                ]}
                            />
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Can we calculate monthly interest for Rs 10 lakh FD in a fixed deposit calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The monthly interest on Rs 10 lakh FD would depend on the booked FD rate and tenure. Yes, consumers can use an online fixed deposit calculator to determine monthly interest on their FDs by selecting the monthly payout option in the calculator and adding the desired deposit amount, FD interest rate and tenure.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Can we calculate monthly interest for Rs 1 lakh fixed deposit in the calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The calculation of monthly interest on your Rs 1 lakh fixed deposit would depend on the FD tenure and booked FD rate. Individuals can use an online fixed deposit interest rate calculator to calculate monthly interest on their FDs simply by choosing the monthly payout option in the tool and adding values for deposit amount, FD rate and tenure.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Can we calculate monthly interest for Rs 1 crore FD in fixed deposit interest calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The calculation of monthly interest on Rs 1 crore FD will depend on the booked FD interest rate and tenure. Depositors can use fixed deposit calculator to estimate the monthly accrued interest on their FDs by choosing the monthly payout option and entering values the deposit amount, FD rate and tenure.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Can we calculate monthly Interest for Rs 30 lakh FD in online FD calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Banks calculate monthly interest on Rs 30 lakh fixed deposit based on the booked FD rate and tenure. Individuals can use an online fixed deposit calculator to calculate monthly interest on their FDs simply by choosing the monthly payout option in the tool and adding values for deposit amount, FD rate and tenure.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Can we calculate monthly interest for Rs 5 lakh fixed deposit in FD return calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                The monthly interest on Rs 5 lakh FD will be as per the FD tenure and the booked FD rate. To determine the monthly interest on your FD, you can use an online calculator, wherein you will have to select the monthly payout option in the tool and add the desired deposit amount, FD rate and tenure.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Why is the principal amount and the fixed deposit maturity amount of my fixed deposit the same?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                When your fixed deposit is booked with the quarterly or monthly interest payout option, the accrued interest is paid at monthly or quarterly intervals. That is why the maturity amount remains the same as the principal amount.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How is the interest on a bank FD calculated?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Usually, the interest for FD with a tenure of 6 months or lower is calculated using simple interest method. The compound interest method is used for FDs with a tenure of more than 6 months. When going for monthly interest payout, banks mostly calculate interest on discounted rates.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                How does an fixed deposit calculator help in financial planning?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Using a fixed deposit calculator makes it easier for depositors to ascertain their FD maturity amount and interest payout beforehand, thereby, helping them align their FD investment with their financial goals and cash flow requirements. For example, using online calculators for FD maturity calculation will help investors determine whether the maturity amount will be sufficient to meet their financial goals. Those using online calculators for FD interest calculation will be able to determine whether the interest income received on opting for payout option would meet their cash flow requirements.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Are there separate FD deposit calculators for different banks?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Banks usually have customised online FD calculators on their websites. These calculators usually fetch their respective bank’s FD card rates as per the customer type and tenure chosen. However, prospective depositors can use online FD calculators like that of Financesbazar to get a fair idea of the FD interest amount and maturity value based on the interest rate, deposit amount and tenure.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                What are the details required to use a fixed deposit calculator?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Deposit amount, tenure of the deposit as well as the prevailing FD rates are required to use a fixed deposit calculator.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Is it free to use the fixed deposit calculator at Financesbazar.com?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Yes. The calculator available at Financesbazar.com is free to be used anytime.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Is there a different fixed deposit calculator for senior citizens and tax saving FD schemes?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                No, there is no separate fixed deposit calculator for senior citizens or tax saving FD schemes. The tool requires only the deposit amount, tenure and the fixed deposit interest rates to calculate the maturity amount.
                            </TypographyPBlueColor>
                        </>

                    </>

                </>
            </div>
        </PageLayout>
    );
}
