import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../HeroSectionPages';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyH4BlueColor,
    TypographyList2
} from '@/custom/Typography';
import { loanOffers } from '../personal-loan/PersonalLoanPage';
import { OffersCards } from '../../OffersCards';
import { listItems } from './CibilScoreByPan';

const personalLoanFaqs = [
    {
        title: "Can I apply for a personal loan without having a CIBIL Score?",
        value: `Getting personal loan without CIBIL score is rather tough but not impossible. Many lenders provide personal loans to those who are new to credit.`
    },
    {
        title: "How to Get a Personal Loan with a Low CIBIL Score?",
        value: `There are various banks or other financial institutions that are willing to provide personal loan to applicants with an average CIBIL Score.However, in such cases, the interest rate is higher and the loan amount is lower.`
    },
    {
        title: "What are the factors that you need to consider in applying for a personal loan? Why is it important to consider those factors?",
        value: `The factors that you need to consider in applying for a personal loan are the amount of loan, tenure of loan, comparison of loan offers for lower interest rate, etc.It is important to consider all these factors before applying for a personal loan because these will help you decide your repayment capacity, help in building your credit score, etc.`
    }
];

export default function CibilScoreByPersonalLoan() {
    return (
        <PageLayout>
            <HeroLoginCard2
                headline="CIBIL Score for Personal Loan"
                navigateLink="/myaccount/dashboard"
                loginSubHedline="Check credit Score with Your PAN Number"
                listHeadline={{
                    rightText: "Check Your",
                    highLighter: "FREE ",
                    leftText: "Credit Score"
                }}
                list={listItems}
                highlighterHedline={{
                    rightText: "Let’s Get Started"
                }}
                buttonName="Check Free Credit Score"
            />

            <div className="max-w-6xl mx-auto px-6 my-10">
                <div className="max-w-3xl">

                    <TypographyPBlueColor>
                        When applying for a personal loan, lenders look for various factors like your current income, age, existing credit liabilities, nature of the job (e.g. salaried or self-employed), etc. One of the key components that most lenders check is the CIBIL score for personal loan approval. CIBIL score is the most sought-after credit score; thus keeping it as high as possible is a good practice, if you’re planning to apply for a personal loan.
                    </TypographyPBlueColor>

                    <>
                        <OffersCards
                            offers={loanOffers}
                            headline="Compare Personal Loan Offers From Top Banks"
                        />
                        <TypographyPBlueColor className="italic">
                            *Applicable for selected customers
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            What is the Minimum CIBIL Score Required for Personal Loan?
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            There is no fixed number that can be marked as a minimum CIBIL Score for personal loan approval. However, a CIBIL score of 750 or above and as close to 900 is a good score and can open multiple loan options for you. S
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            ubsequently, a high credit score can also help you in getting a higher loan amount, that too at lower interest rates and with longer repayment tenure.
                        </TypographyPBlueColor>

                        <>
                            <TypographyH4BlueColor>
                                Why is CIBIL Score important to get a Personal Loan?
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Personal loan is termed as an unsecured loan that means when a bank or NBFC lends you funds, they do not require any collateral or security to be submitted with them, unlike in case of home loan, car loan, gold loan, etc.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                As it is considered as a risky investment for the lenders, so they pay close attention to an applicant’s behaviour through the credit score, while evaluating their personal loan applications.
                            </TypographyPBlueColor>
                        </>


                        <>
                            <TypographyH4BlueColor>
                                Credit Score helps the lender in the following ways:
                            </TypographyH4BlueColor>
                            <TypographyList2
                                items={[
                                    "Determine your (borrower’s) creditworthiness",
                                    "Decide the rate of interest to sanction the loan",
                                    "Decide your loan limit (i.e. how much you can borrow)"
                                ]}
                            />
                            <TypographyPBlueColor>
                                Please note that while having a low CIBIL score does not necessarily mean your personal loan application will be rejected, it may easily lead to your loan being sanctioned at a higher interest rate or at a lower limit than you applied for. Either way, it may not fetch you the best results.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor className="italic">
                                <bold className='font-bold'>Also Read </bold> How to Take a Personal Loan on Aadhar Card?
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH2BlueColor>
                                Things to keep in mind when applying for a Personal Loan
                            </TypographyH2BlueColor>
                            <TypographyPBlueColor>
                                Before applying for a personal loan, consider the following points:
                            </TypographyPBlueColor>
                            <>
                                <TypographyList2
                                    items={["Check your CIBIL score AND CIBIL report"]}
                                    className="my-0"
                                />
                                <TypographyList2
                                    items={["If you find any errors in your report, get those corrected", "How to File CIBIL Disputes"]}
                                    className="sm:ml-16 my-0 ml-4"
                                />
                            </>
                            <>
                                <TypographyList2
                                    items={["If your credit utilization ratio is very high, consider clearing your pending payments as a high credit utilization may show you as credit-dependent"]}
                                    className="my-0 mt-6"
                                />
                            </>
                            <>
                                <TypographyList2
                                    items={["Do not apply for new loans if your previous application was recently rejected"]}
                                    className="my-0 mt-6"
                                />
                                <TypographyList2
                                    items={[
                                        "First work on the reasons why your application got rejected;",
                                        "Learn how to improve your credit score"
                                    ]}
                                    className="sm:ml-16 my-0 ml-4"
                                />
                            </>
                            <>
                                <TypographyList2
                                    items={["Wait for a few months before reapplying for a previously rejected personal loan application"]}
                                />
                            </>
                        </>
                    </>

                    <>

                        <TypographyH2BlueColor>
                            FAQs on CIBIL Score for Personal Loan
                        </TypographyH2BlueColor>
                        {
                            personalLoanFaqs?.map((option) => (
                                <>
                                    <TypographyH4BlueColor>
                                        {option?.title}
                                    </TypographyH4BlueColor>
                                    <TypographyPBlueColor>
                                        <strong>Ans: </strong>{option?.value}
                                    </TypographyPBlueColor>
                                </>
                            ))
                        }
                    </>

                </div>
            </div>
        </PageLayout>
    );
}
