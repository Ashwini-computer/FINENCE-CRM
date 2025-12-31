import PageLayout from '@/components/layout/PageLayout';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyH4BlueColor,
    TypographySmall,
    BoldList
} from '@/custom/Typography';
import React from 'react';
import HeroLoginCard from '../HeroSectionPages';
import { Link } from 'react-router-dom';

export default function ImproveCibilScore() {
    return (
        <PageLayout>
            <HeroLoginCard
                headline="How to Improve Your CIBIL Score"
                description="The approval and denial of your credit application depend mainly on a very important factor – credit score. A good credit score can help you get loans or credit cards easily and at a relatively lower cost of credit, whereas a low credit score can act as a major hindrance for those looking for credit urgently."
                // navigateLink="/personal-loan/apply"
                loginSubHedline="Don't worry, this will not affect your credit score."
                highlighterHedline={{
                    rightText: "Check Your",
                    highLighter: "FREE",
                    leftText: "Credit Score",
                }}
            />

            <div className='max-w-6xl mx-auto p-6'>
                <div className='max-w-3xl'>
                    <>
                        <TypographyPBlueColor>
                            Most lenders look at an applicant’s CIBIL score (credit score provided by TransUnion CIBIL) before approving the application. A good credit score can help get loans approved at relatively lower rates and relaxed terms, apart from numerous pre-approved offers. Applicants with a poor score are not eligible for pre-approved offers, pay higher interest rates and have to adhere to stricter loan terms.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            It is also noteworthy that most lenders do not approve credit applications of applicants having a poor credit score (650 or below). Even if a loan application is approved, the applicant has to pay the interest at a higher rate.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            If you have a poor CIBIL score and you want to know how to increase CIBIL score to become creditworthy in future, then you should follow a disciplined credit behaviour.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>

                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH2BlueColor>
                            7 Ways to Improve Your CIBIL Score
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            It is not possible to improve your CIBIL score overnight. However, you can follow some suggestions to improve your credit score gradually. Once your CIBIL score increases significantly, you can look for possible credit options in future. Let us discuss some important insights on how to improve CIBIL score over time so that you are creditworthy in future:
                        </TypographyPBlueColor>


                        <>
                            <TypographyH4BlueColor>
                                1. Set Reminders or Standing Instructions to Repay Loan EMIs on Time
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Your credit score gets severely impacted when you miss a loan EMI payment by the due date. You need to be aware and punctual when it comes to paying off your loan EMIs.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                If the EMI repayments get missed or delayed, you not only pay the penalties but also may witness a steep fall in your credit score. Your DPD (Days Past Due) takes a hit and the default may remain in your credit report for 36 months.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                The two best ways to avoid any delay in payments are by setting reminders to repay on time or by adding Standing Instructions (SI) to your bank account from where a due amount shall be deducted at regular intervals (mostly every month).
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                2. Clear all Credit Cards Dues on Time
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Strategically plan to clear your credit card balances by the due date. Your CIBIL score is hit significantly in case of non-payment of dues and regular defaults can easily take your credit score below 600.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                If you miss the due date, it is reflected in your credit report under the Days Past Due (DPD) section in your CIBIL report.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                If you cannot make the complete payment by the due date, you should at least try to clear the minimum amount due so that the card provider does not report the non-payment of total dues to the bureau.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                Even though the remaining unpaid amount will start incurring interest for the billing cycle, you will get an additional cycle to clear off your dues and prevent your credit score from falling.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                3. Check for Errors in your CIBIL Report
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                You might have a good credit history, but there can be various unknown errors due to which your credit score can be hit. These errors may include incorrect personal information, wrong account details, mismatched overdue or paid-off amounts, duplicate accounts, incorrect Days Past Due or collateral details, etc.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                For example – You have already paid off your loan completely and have closed the account from your end, but it is still appearing as current due because of an administrative error at the end of the lender.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                It might reduce your credit score significantly. Likewise, you will have to keep a check on other errors and suspicious activities. Resolve these errors by raising a grievance with CIBIL online. Once such errors are rectified, your credit score may increase significantly.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                4. Avoid Multiple Credit Applications in Short Duration
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                There are two types of credit enquiries – soft and hard enquiries. It is considered a soft enquiry when you check your credit score to become credit aware. It has no impact on your credit score.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                When a lender or credit card provider fetches your CIBIL credit report from the credit bureau against your credit application, it is considered a hard enquiry.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                An occasional hard enquiry is unlikely to have much impact on your credit score. However, multiple hard enquiries in a short time show your hunger for credit.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                Lenders might consider such applicants to be in financial difficulties and thus have relatively higher risks of credit default. This may eventually lead to credit application rejection by the lender/card provider.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                Credit bureaus thus lower the credit score of applicants who have conducted multiple hard inquiries in the recent past. Hence, if you intend to take a loan or credit card, do proper research, compare various options available and apply only to one provider.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                If your credit score is low and you can avoid availing credit immediately, do try to improve your CIBIL score first and then apply for credit.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                5. Avail Secured Credit Card
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Settled credit accounts and non-repayment on time can lower the credit score significantly. No lender would prefer to issue a credit card or loan to such applicants.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                You will have to rebuild your credit score to increase your creditworthiness before applying for the credit product. In such cases, you can opt for a secured credit card against a fixed deposit.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                The credit score is not considered while approving the secured credit card application so it will be issued easily. Once issued, you can use it diligently and clear dues on time to start rebuilding your credit score.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                Your credit score might not improve immediately but it can be helpful in the long run.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                <strong> Suggested Read:</strong><Link to='' className='text-blue-700'> Best Secured Credit Cards in India</Link>
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                6. Refrain from Closing the Oldest Credit Card Accounts
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Banks trust those applicants having a longer age of credit history and who have paid off their dues on time. So, if you have an old credit card account, you should not get it closed even if you don’t use it any more.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                Even though it may not have a remarkable impact on your credit score immediately, it can be helpful when your credit application is analysed by a lender in future.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                7. Monitor your Co-signed, Guaranteed or Joint Loan Accounts Regularly
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                If a loan applicant does not meet some of the loan eligibility, the lender may ask the borrower to get it co-signed or guaranteed by a co-applicant who has better creditworthiness.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                This is done to ensure that if the borrower fails to repay the loan, the remaining amount can be repaid with the assistance of the guarantor. In case of non-payment of EMIs on time, the credit score of the co-signor/guarantor also takes a hit along with that of the borrower.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                So if you are a co-signer or guarantor, you should regularly monitor if the repayment of the loan EMIs is done on time and discuss it with the borrower if there is a default in the repayment.
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH2BlueColor>
                                Additional Factors that can help Improve your Credit Score (Low Impact Factors)
                            </TypographyH2BlueColor>

                            <>
                                <TypographyH4BlueColor>
                                    Choosing a Longer Repayment Tenure
                                </TypographyH4BlueColor>
                                <TypographyPBlueColor>
                                    A longer repayment tenure might land you with more cash in hand and a lower EMI amount every month. You may have to pay more amount as interest in total but it will help you repay your dues with less difficulty every month and will also reduce your EMI/NMI ratio.
                                </TypographyPBlueColor>
                                <TypographyPBlueColor>
                                    Lenders consider your EMI to NMI ratio while analysing your loan application. A lower EMI/NMI ratio can work in your favour at the time of loan approval. If you assume you may face problems in repaying the loan that you are applying for, you can go ahead with a longer tenure.
                                </TypographyPBlueColor>
                            </>

                            <>
                                <TypographyH4BlueColor>
                                    Trying to Increase Your Credit Limit
                                </TypographyH4BlueColor>
                                <TypographyPBlueColor>
                                    Credit card providers offer credit limit enhancement options from time to time depending upon your credit card usage behaviour. If the provider gives you the option to increase your credit limit, you should opt for it as it also gives you the flexibility to use more credit when required.
                                </TypographyPBlueColor>
                                <TypographyPBlueColor>
                                    It does not mean that you are going to spend more money every month rather you will have to be smart about managing your expenses. The simple trick is to have a lot more credit available and keep your utilization low.
                                </TypographyPBlueColor>
                                <TypographyPBlueColor>
                                    Most experts suggest having a credit utilisation ratio of less than 30% to have a positive impact on your credit score. However, even if you have a high credit utilisation ratio occasionally and you repay dues on time, the bureau may not penalise you for it.
                                </TypographyPBlueColor>
                                <TypographyPBlueColor>
                                    <strong> Suggested Read:</strong><Link to='' className='text-blue-700'>Benefits of Increasing your Credit Card Limit</Link>
                                </TypographyPBlueColor>
                            </>


                            <>
                                <TypographyH4BlueColor>
                                    Trying to Maintain a Healthy Credit Mix
                                </TypographyH4BlueColor>
                                <TypographyPBlueColor>
                                    It is advisable to have a healthy mix of unsecured credit, like <Link to="/credit-card" className='text-blue-700'>credit cards</Link> or <Link to='/personal-loan' className='text-blue-700'>Personal loans</Link>, and secured loans, like auto loans or <Link to="/home-loan" className='text-blue-700'>Home Loan</Link>. Consumers with a higher number of credit accounts have more credibility than those who are new to credit or have a smaller number of credit accounts.
                                </TypographyPBlueColor>
                                <TypographyPBlueColor>
                                    Lenders and bureaus trust those applicants who have handled various types of credit accounts in a disciplined manner in the past. However, no lender will deny you a loan or credit card if you do not have an optimum credit mix.
                                </TypographyPBlueColor>
                                <TypographyPBlueColor>
                                    In case you find it difficult to assess your credit profile and want the guidance of a credit expert, you can subscribe to Financesbazar’s Credit+ program and seek expert assistance to improve your credit score.
                                </TypographyPBlueColor>
                                <TypographyPBlueColor>
                                    One can witness the credit score improving if the pointers mentioned above are followed in a disciplined manner. Usually, it may take a few months for the improvement to reflect in your credit report. However, it completely depends on an individual’s situation. All one needs is to be smart, patient and disciplined while handling credit.
                                </TypographyPBlueColor>
                            </>

                        </>

                    </>
                </div>
            </div>

        </PageLayout>
    )
}
