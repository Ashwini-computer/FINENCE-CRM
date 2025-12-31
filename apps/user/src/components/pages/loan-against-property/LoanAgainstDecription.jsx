import {
    BoldList,
    TypographyH4BlueColor,
    TypographyList2,
    TypographyPBlueColor,
    TypographySmall
} from "@/custom/Typography";
import { Link } from "react-router-dom";

const loanAgainstPropertyBenefits = [
    {
        title: "Lower interest rates",
        value: "The secured nature of the loan reduces the lending risk of banks and NBFCs considerably, thereby, allowing them to offer the loan at lower interest rates."
    },
    {
        title: "No end use restrictions",
        value: "Loan proceeds can be used for any purpose such as for consolidating multiple high-interest debts, covering costs related to wedding and business expansion, except for any speculative activities."
    },
    {
        title: "Longer loan tenure",
        value: "Banks and NBFCs offer tenures of up to 25 years on loan against property, resulting in more affordable EMIs."
    },
    {
        title: "Higher loan amount",
        value: "Lenders usually finance up to 70% of the property value, resulting in higher loan amounts."
    },
    {
        title: "Higher chances of loan approval",
        value: "The loan is backed by any underlying property, thus, reducing lending risk for banks/NBFCs and increasing borrowers’ odds of availing the loan."
    },
    {
        title: "Overdraft facility",
        value: "Borrowers can also avail overdraft facility on this loan, giving them higher liquidity at lower interest cost."
    }
];

const eligibilityCriteria = [
    {
        title: "Residential Status",
        value: "Resident Indian and Non-resident Indian"
    },
    {
        title: "Minimum Age Limit",
        value: "18 years"
    },
    {
        title: "Maximum Age Limit",
        value: "70 years"
    },
    {
        title: "Employment Type",
        value: "Salaried, Self-employed Professional and Self-employed Non-Professional"
    },
    {
        title: "Minimum Salary",
        value: "At least Rs. 12,000 per month"
    },
    {
        title: "Net Annual Income",
        value: "At least Rs. 1.5 lakh p.a."
    },
    {
        title: "Work Experience",
        value: "At least 1 year in the current organization"
    },
    {
        title: "LTV Ratio",
        value: "Up to 85% of property value"
    },
    {
        title: "Credit Score",
        value: "Preferably 700 and above"
    },
    {
        title: "Property Type",
        value: "Residential, Commercial and Industrial properties are eligible to be pledged as collateral. Lenders will also consider the age and condition of the property before accepting the property as collateral."
    }
];

const applicationSteps = [
    {
        title: "Step 1",
        value: "Provide basic details such as your mobile number, loan amount, property location, employment type, etc."
    },
    {
        title: "Step 2",
        value: "Compare and apply from the list of offers."
    },
    {
        title: "Step 3",
        value: "Wait for the loan experts to get in touch with you."
    }
];

const loanBenefits = [
    "Interest rates lower than the rates offered on unsecured loan options",
    "Loan proceeds can be used to cover costs related to weddings, businesses, etc.",
    "Longer loan tenure of up to 25 years, leading to more affordable EMIs",
    "Bigger loan amounts as banks and HFCs usually finance up to 70% of the property value",
    "Higher chances of loan approval due to its secured nature",
    "Overdraft facility is available, thereby, leading to lower interest cost",
    "Consolidate multiple high-interest debts at lower interest rates"
];

export default function LoanAgainstDecription() {
    return (
        <div className="max-w-4xl sm:ml-20 sm:py-8 px-6">
            <>
                <TypographyH4BlueColor>
                    Loan Againt Property
                </TypographyH4BlueColor>
                <TypographyPBlueColor>
                    Loan Against Property (LAP), also known as mortgage loan, allows consumers to raise funds by leveraging their residential, commercial or industrial properties. Like unsecured personal loans, Loan against property (LAP) can also be availed for meeting both personal and business needs other than speculative purposes. Banks and HFCs offer loan against property for tenures of up to 25 years.
                </TypographyPBlueColor>
                <TypographyPBlueColor>
                    The loan amount for LAP can go up to 85% of the property’s market value, depending on the lender and the credit profile of the borrowers. Many lenders also offer Lease Rental Discounting (LRD) facility, which allows consumers to avail loan by pledging the rental receipts of their tenants.
                </TypographyPBlueColor>
            </>

            <>
                <TypographySmall className="font-bold tracking-normal">
                    Features & Benefits of Loan Against Property
                </TypographySmall>
                <TypographyPBlueColor>
                    Following are the features and <Link className="text-blue-800 cursor-pointer"> benefits of loan against property:</Link>
                </TypographyPBlueColor>

                <BoldList
                    items={loanAgainstPropertyBenefits}
                />
            </>

            <>
                <TypographySmall className="font-bold tracking-normal">
                    Loan Against Property Eligibility Criteria
                </TypographySmall>
                <TypographyPBlueColor>
                    The <Link className="text-blue-800 cursor-pointer"> eligibility criteria for availing LAP </Link>
                    varies across lenders, below are some general conditions that must be fulfilled to apply for loan against property:
                </TypographyPBlueColor>

                <BoldList
                    items={eligibilityCriteria}
                />
            </>

            <>
                <TypographySmall className="font-bold tracking-normal">
                    How to Apply for Loan Against Property
                </TypographySmall>
                <BoldList
                    items={applicationSteps}
                />
            </>

            <>
                <TypographyH4BlueColor>
                    FAQ's on Loan Against Property
                </TypographyH4BlueColor>
                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What is a Loan Against Property (LAP)?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        Loan against property is a secured loan option wherein borrowers avail financing by mortgaging their commercial or residential property. Borrowers can use the loan proceeds for any purpose other than any speculative activities.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What is the eligibility criteria for loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        The eligibility for availing loan against property would primarily depend on age, property location, features, repayment capacity, credit score, occupation profile, etc.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        Which bank is best for availing loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        For most consumers, the best bank/HFC for availing loan against property would be the one that offers the lowest interest rate as it would help them save on their overall interest cost. However, other features like loan tenure, LTV ratio, processing fees, pre-payment charges (in case of fixed rate LAPs) and loan disbursal time should also be factored in while comparing various LAP options.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        How does loan against property work?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        A LAP borrower secures a loan from a bank/NBFC/HFC by mortgaging his/her property and repaying it over the loan tenure. Just like any other secured loan, the lender would foreclose on the mortgaged property in case of loan default.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What is the maximum tenure available under loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        Mostly, the tenure of a loan against property goes up to 25 years. However, this may vary from one lender to another.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What are the advantages of availing a loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        A few benefits of loan against property are:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={loanBenefits}
                    />
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        Is it mandatory to have a co-applicant for availing loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        A co-applicant for a loan against property is mandatory only when the property being mortgaged is owned by more than one person. In such a case, all co-owners of the property need to apply as co-applicants.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What types of properties are accepted by lenders providing loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        Different lenders have different criteria for the type of property to be accepted against a mortgage loan. However, mostly all lenders accept residential, commercial or industrial property. It is important to note that the physical condition and age of the property may affect its acceptance by the lenders.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What is the maximum repayment tenure for a loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        Banks/ HFCs usually offer loan against property for tenures of up to 15 years with many lenders offering the maximum loan tenures of 20 years or more. For example, Godrej Housing Finance and IDFC FIRST Bank offer loan tenures of up to 25 years on loan against property.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        Can NRIs avail loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        Yes, several financial institutions offer loan against property to NRIs.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What is the difference between home loan and loan against property?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        Loan against Property allows individuals to raise funds by mortgaging their residential/commercial/industrial property, whereas a home loan helps individuals buy/build a new house or extend/renovate an existing one.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographySmall className="font-bold tracking-normal">
                        What happens when loan against property is not paid?
                    </TypographySmall>
                    <TypographyPBlueColor>
                        Not paying your Loan against Property EMI will incur late fees, penal interest and a reduction in your credit score. The loan, if not paid partially/fully within 90 days, will be classified as Non-Performing Asset (NPA), which may lead your lender to initiate recovery actions under the framework of the SARFAESI Act, 2002.
                    </TypographyPBlueColor>
                </>
            </>

        </div>
    )
}
