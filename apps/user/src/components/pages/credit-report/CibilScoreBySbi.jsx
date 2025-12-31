import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../HeroSectionPages';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyList2
} from '@/custom/Typography';
import { listItems } from './CibilScoreByPan';
import { Link } from 'react-router-dom';

export const personalLoanFaqs = [
    {
        title: "Can I apply for a personal loan without having a CIBIL Score?",
        value: `Getting personal loan without CIBIL score is rather tough but not impossible. Many lenders provide personal loans to those who are new to credit.

In case your application for a personal loan without having a CIBIL Score is not approved by a lender, you can apply for collateral-based loans which means loan against gold, loan against FD, etc. However, it is advisable to maintain a CIBIL Score for instant approvals on loans.`
    },
    {
        title: "How to Get a Personal Loan with a Low CIBIL Score?",
        value: `There are various banks or other financial institutions that are willing to provide personal loan to applicants with an average CIBIL Score. However, in such cases, the interest rate is higher and the loan amount is lower.`
    },
    {
        title: "What are the factors that you need to consider in applying for a personal loan? Why is it important to consider those factors?",
        value: `The factors that you need to consider in applying for a personal loan are the amount of loan, tenure of loan, comparison of loan offers for lower interest rate, etc. It is important to consider all these factors before applying for a personal loan because these will help you decide your repayment capacity, help in building your credit score, etc.`
    },
    {
        title: "What is the minimum CIBIL score for personal loans or home loans in SBI?",
        value: `There is no minimum CIBIL score criteria for personal loans or home loans, as defined by SBI. The higher your CIBIL score is, the more the chances of personal loan or home loan approvals. However, you should maintain it at least 700 or above to avail funds at ease.

Primarily, you need to check and clear the eligibility criteria set by SBI before applying for a home loan or personal loan. Afterward, you may check for the minimum CIBIL score required for a particular loan type.`
    },
    {
        title: "How can I increase my CIBIL score for SBI Loan?",
        value: `To increase your CIBIL score for SBI loan, you need to pay all your dues in time, maintain good payment history, maintain a healthy mix of credit, avoid being a guarantor or co-applicant and maintain credit utilization ratio below 30% of the total sanctioned limit.`
    },
    {
        title: "My CIBIL Score is 650. Will my SBI Home Loan Application be approved?",
        value: `With a CIBIL Score as low as 650, chances of getting an SBI Home Loan are low. You need to increase it and make it at least 700 or above to increase the chances of approving the SBI home loan.`
    },
    {
        title: "Is CIBIL Score mandatory for SBI Loan application?",
        value: `Yes, the CIBIL Score is mandatory for an SBI Loan application. It works as the first screening of your credit profile for the lender. The higher the CIBIL score, the better your chances of the loan being reviewed and approved.`
    },
    {
        title: "Will the settlement of personal loans affect your CIBIL score?",
        value: `Yes, once your loan is marked as settled in your credit report, it will surely lower your CIBIL score (approx. 70-100 points).

Loan settlement is considered negative credit behavior, so any personal loan settlement of personal loan should be avoided to maintain a decent SBI CIBIL score for personal loans.`
    },
    {
        title: "Can I get more than 3 SBI personal loans, if I have a good CIBIL score?",
        value: `Multiple loan applications should be avoided in short duration, as it depicts your credit-hungry behavior. Even if you maintain a good CIBIL score, the possibility of sanctioning 3 different SBI personal loans could be less.

You may avail single SBI personal loan with the maximum loan amount to meet your urgent cash requirements.`
    },
    {
        title: "I have missed my SBI home loan EMI. Will it impact my CIBIL Score?",
        value: `If you missed the SBI home loan EMI within 90 days of the last payment, it will be considered as a minor default. However, you can recover from its impact by taking corrective measures such as ensuring that you pay off the missed EMI on the next due date and the late payment doesn’t happen again. To maintain a good credit score, you must clear all your dues on time.`
    },
    {
        title: "My application for SBI Personal Loan was rejected due to a low credit score. How can I improve my credit score?",
        value: `There are various ways through which you can improve your credit score such as:

- By making timely payment of your loan and credit card EMIs
- Regularly checking errors in your credit report and, if found, getting them rectified
- Maintaining a healthy credit mix of different types of credit products like credit cards, personal loans, home loans, etc.
- Getting a secured card and using it responsibly
- By not applying for new credit products in short duration`
    },
    {
        title: "What are the ways to check your CIBIL score?",
        value: `Here, you can check your CIBIL score online, and check your CIBIL report free of cost. You just need to mention your basic details, such as your full name, gender, date of birth, PAN card, PIN code, email address, and mobile number.

You also have an option of receiving regular updates via Whatsapp, absolutely free. The second option is to visit the official CIBIL website and request your CIBIL report, which is a paid service with inherited costs.`
    }
];


export default function CibilScoreBySbi() {
    return (
        <PageLayout>
            <HeroLoginCard2
                headline="Check Free CIBIL Score for SBI Loans"
                description="A high CIBIL score depicts your disciplined credit beahviour and creditworthiness. Based on it, SBI considers you as a credit responsible borrower that helps in the hassle-free personal loan or home loan approval. Thus, it is recommended to check CIBIL score for SBI loans to ensure the application is not rejected due to a low score."
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

                    <>
                        <TypographyPBlueColor>
                            While applying for a loan or credit card, lending institutions thoroughly check the applicant’s detailed credit report. The credit report request from the credit bureau by the lender is termed as a hard enquiry, as it affects the applicant’s credit score.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            When you plan to apply for an SBI home loan or personal loan, the bank will request and fetch your CIBIL report from India’s leading credit bureau named TransUnion CIBIL. Based on your present status of the CIBIL report and CIBIL score, SBI shall approve or deny your loan or credit card application.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Minimum CIBIL Score Required for SBI Home Loan
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            SBI checks the credit score and credit report of primary applicants, as well as co-applicants (if any), before approving any home loan application.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            SBI has not specified any minimum <Link className='text-blue-700' to="/cibil-score/cibil-score-for-home-loan">CIBIL score for SBI home loan</Link> approval, as the higher your CIBIL score, the better your chances of getting loan approval.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            This is because a high credit score (750+) or as close to 900 implies that the applicant has a good track record of making timely repayments of loans or credit card EMIs, thus, assuring the bank that the loan will be repaid in time.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Moreover, following the RBI guidelines, SBI uses an applicant’s credit score to fix <Link to="/home-loan/interest-rates" className='text-blue-700'>home loan interest rate</Link>, over and above the benchmark rate. So, with a high credit score, the bank may also lower the home loan interest rates and provide better loan terms.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            In the case of a <Link to="/home-loan" className='text-blue-700'>home loan</Link>, if the applicant defaults on loan repayment, the co-applicant becomes responsible for repaying the loan on time. In case of any non-payment or delay in loan EMIs, the credit scores of both applicants are affected equally.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            You should ensure that the combined credit score of both applicants meets the eligibility criteria before applying for an SBI home loan. If in case of loan approval, your SBI Home Loan CIBIL Score is low, then try to improve the score to increase the chances of loan approval.
                        </TypographyPBlueColor>
                        <Link to='/credit-score/cibil-score-for-home-loan' className="italic text-blue-700">
                            <strong className='text-black'> Must Read: </strong> What should be the minimum CIBIL score for a home loan?
                        </Link>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            CIBIL Score Required for SBI Personal Loan
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Personal loan is an unsecured loan in which the borrower does not have to submit any collateral/security with the bank. As there is no collateral/security involved, banks/NBFCs are at high risk when approving loan applications.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Your SBI credit score for personal loans acts as an evaluating criterion that the bank uses to judge your creditworthiness and repayment history.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            In case borrowers fail to repay the loan in time, they are penalized heavily and their CIBIL score plunges making them almost ineligible for availing credit products shortly.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            This also acts as a deterrent for borrowers and they try their best to repay the loan on time. Therefore, timely loan payments are mandatory, as it help in building the credit score significantly.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            In the case of <Link to='' className='text-blue-700'>SBI personal loans</Link>, <strong>a CIBIL score of 750 and above is considered good for loan approval.</strong>
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            However, it is worth mentioning that SBI rarely specifies the exact CIBIL score range for loan approvals. This is largely because each application is different and the approval depends on a lot of other factors as well.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            However, it is worth mentioning that SBI rarely specifies the exact CIBIL score range for loan approvals. This is largely because each application is different and the approval depends on a lot of other factors as well.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Even if you have a CIBIL score of (700-750) or as close to 900, you stand a very good chance of loan approval provided other factors are fulfilled.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor className="italic">
                            Note: The loan approval or denial shall be at the sole discretion of SBI.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            Factors that affect the SBI CIBIL Score
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Besides your CIBIL score, several other factors affect your credit score are stated below:
                        </TypographyPBlueColor>
                        <TypographyList2
                            items={[
                                "Unresolved errors in your CIBIL report",
                                "Delayed or missed loan EMIs or credit card dues",
                                "Paying only the minimum due amount",
                                "Applying for multiple credit products in a short duration",
                                "Length of your credit history",
                                "Any outstanding debt, etc."
                            ]}
                        />
                    </>

                    <>
                        <TypographyH2BlueColor>
                            How does SBI interpret your creditworthiness using the CIBIL score?
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            If you have a high CIBIL score, it means that you have managed your credit efficiently in the past and have maintained disciplined credit behavior.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            When evaluating the creditworthiness, you would fall under the low-risk segment and thus are a preferred borrower for the bank. The bank would, therefore, ideally offer you the loan at relatively lower interest rates and approve the application quickly.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            In case your CIBIL score is low and is deteriorating continuously, it means that you have not managed your finances well and can be a risky proposition for the bank. Your creditworthiness, in such cases, would be very low and there are chances that you might default on the loan.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            SBI would not want to sanction your loan application, if it assesses that you may not be able to repay the loan. The bank, therefore, either rejects your application or offers you the loan at high interest rates.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            However, it does not necessarily mean that a person with a <Link to='' className='text-blue-700'>low CIBIL score</Link> will default for sure and a person with a high CIBIL score cannot default on the EMI payment.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            However, a credit score helps lenders in segregating potentially good borrowers from not-so-good ones. In case you have a CIBIL score less than 750, you can start rebuilding it from today onwards so that it is above 750 when you apply for a loan.
                        </TypographyPBlueColor>
                        <Link to='/cibil-report/how-to-check-cibil-score-by-pan-card' className='text-blue-700 italic text-sm'>
                            <strong className='text-black'>Also Know: </strong> How can I know my CIBIL Score through PAN card?
                        </Link>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            FAQs on CIBIL Score for SBI Loans
                        </TypographyH2BlueColor>
                        <div className="space-y-4">
                            {personalLoanFaqs.map((faq, index) => (
                                <details key={index} className="border-b-2 pb-2 mt-6">
                                    <summary className="font-medium cursor-pointer text-[#123458]">Que. {faq.title}</summary>
                                    <p className="mt-2 ml-6 whitespace-pre-line text-muted-foreground text-sm"><strong>Ans: </strong> {faq.value}</p>
                                </details>
                            ))}
                        </div>
                    </>

                </div>
            </div>

        </PageLayout>
    )
}
