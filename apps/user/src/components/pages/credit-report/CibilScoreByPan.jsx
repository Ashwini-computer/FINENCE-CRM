import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../HeroSectionPages';
import {
  TypographyH2BlueColor,
  TypographyPBlueColor,
  TypographyH4BlueColor,
  TypographySmall,
  BoldList
} from '@/custom/Typography';
import React from 'react';

export const listItems = [
  "Detailed Credit Report Insights",
  "Free monthly Updates",
  "Personalised Loan & Credit Card Offers"
];

const creditScoreSteps = [
  {
    title: "Step 1",
    value: "Click here to enter the required details"
  },
  {
    title: "Step 2",
    value: "Fill in your Permanent Account Number (PAN)"
  },
  {
    title: "Step 3",
    value: "Enter your mobile number and e-mail address"
  },
  {
    title: "Step 4",
    value: "Enter your date of birth"
  },
  {
    title: "Step 5",
    value: "You can also select the tab next to ‘Get regular Credit Report updates via WhatsApp’ if required"
  },
  {
    title: "Step 6",
    value: "Click on “Get Free Credit Score” button to verify the mentioned details using OTP authentication"
  }
];

const panCardCibilFAQs = [
  {
    question: "Will my CIBIL score be affected when I update my PAN card?",
    answer: "No, your CIBIL score will not be affected while you update your PAN card. The PAN would remain the same and there would be change only in details in the PAN card without impacting your credit score."
  },
  {
    question: "Is there a fee associated with checking the CIBIL score using a PAN card?",
    answer: "Checking your CIBIL score is free of cost at FinancesBazar. However, if you check it at TransUnion CIBIL’s official website, it is free of cost only once a year, and for the rest, you will have to purchase a periodic plan."
  },
  {
    question: "Will my signature change in the PAN card impact my credit score?",
    answer: "Ideally, you should not change your signature as it may lead to unwanted circumstances in future, especially related to your finances. However, your changed signature, if updated in your PAN card, may not have an impact on your credit score."
  },
  {
    question: "What should I do if there’s an error in my CIBIL report obtained using a PAN card?",
    answer: "If you find any minor or major error, mismatched details, or inaccuracies in your CIBIL report fetched by PAN card, you need to raise a dispute with TransUnion CIBIL by filling out and submitting an online dispute resolution form and get the errors resolved at the earliest."
  },
  {
    question: "Does applying for a new PAN card impact your CIBIL Score?",
    answer: "Your CIBIL score is calculated based on the details of loans or credit cards linked to your existing PAN card. If you already have a PAN card, you are not required to apply for a new one, as owning more than one PAN card is a punishable offence and the Income Tax department may take action against you."
  },
  {
    question: "What are the effects of PAN change on my CIBIL Score?",
    answer: "Your CIBIL score is calculated based on the credit products linked to your PAN card. In case a different PAN card is mentioned in your CIBIL report, your credit score may vary. However, it is recommended that you get it corrected as early as possible, otherwise, lowering your credit score due to incorrect information in times of need can make it difficult for you to get your credit application approved."
  },
  {
    question: "What is a newly issued PAN Card’s CIBIL Score?",
    answer: "PAN card is required to apply for a loan or credit card. When you get your PAN card for the first time and you haven’t applied for the loan already, credit bureaus do not have any information regarding your credit history. Hence, they mark ‘New to Credit’ against your profile. It, however, does not mean that lenders will necessarily deny you a loan or credit card if you fulfil other criteria."
  },
  {
    question: "Does SBI use my PAN card to check the CIBIL Score for personal loans?",
    answer: "When you apply for SBI personal loan, the bank requests your credit score from CIBIL. Your PAN is required to generate your CIBIL report as all existing and old credit details are linked to your PAN. The loan approval depends largely on your CIBIL report apart from various other eligibility criteria."
  },
  {
    question: "Can I check my credit score if I do not have a PAN card?",
    answer: "Your major financial transactions are recorded against your PAN card. If you don’t have a PAN card, there is high probability that you haven’t availed any credit. In such a case, any credit bureau will not be able to generate your credit score."
  },
  {
    question: "Can I generate my credit score using an Aadhaar card?",
    answer: "Even though you have to link your PAN card with Aadhaar, as of now, you cannot get your credit score using your Aadhaar number only. You will have to provide your PAN card to generate your credit score."
  }
];

const additionalCibilQuestions = [
  "What are the 4 factors that affect your credit score?",
  "What is considered a good credit score?",
  "How to download CIBIL report from FinancesBazar?",
  "How do I check my SBI CIBIL score online for free?",
  "How many months does it take to increase my CIBIL score?",
  "What is the minimum credit score required for personal loan?",
  "What is a good CIBIL score for credit card?"
];

export default function CibilScoreByPan() {
  return (
    <PageLayout>
      <HeroLoginCard2
        headline="How to Check Your Free CIBIL Score by PAN Card?"
        description="People having an active PAN card and active loan or credit card accounts can check their credit score online. They have to provide their basic details and PAN to check credit score from multiple bureaus."
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
              It is important to have a valid PAN card to avail credit facilities. Your PAN card is a government-approved identity proof document linked to your financial instruments and tax payments. You can check and download your CIBIL report using your PAN card. As this credit score is not fetched for borrowing purposes, it does not impact your credit score. Read on to know the simple steps to check CIBIL score by PAN card.
            </TypographyPBlueColor>
          </>

          <>
            <TypographyH2BlueColor>
              Check CIBIL Score by PAN Card Number for Free
            </TypographyH2BlueColor>
            <TypographyPBlueColor>
              CIBIL score is the foremost component of your CIBIL report that lenders, such as banks and NBFCs, check before evaluating any new credit application. Here, you can check your CIBIL score by PAN card for free within minutes and receive monthly updates in future.
            </TypographyPBlueColor>
            <TypographyPBlueColor>
              To check your free CIBIL score, you just need to provide your PAN card details, along with basic information, such as your registered mobile number, date of birth, PIN code and email address. Below are the simple steps to check your CIBIL score by PAN card.
            </TypographyPBlueColor>
          </>

          <>
            <TypographyH2BlueColor>
              Steps to Check CIBIL Score Using Your PAN Card
            </TypographyH2BlueColor>
            <TypographyPBlueColor>
              Here you can check your free credit score and receive monthly updates without impacting your score. Follow these simple steps to check your CIBIL score for free online by using your PAN number:
            </TypographyPBlueColor>
            <BoldList
              items={creditScoreSteps}
            />
            <TypographyPBlueColor>
              Once done, you will be redirected to your newly created account on FinancesBazar.com. You can also check your credit score from multiple bureaus, such as Experian, Equifax, etc., in various regional languages and get monthly updates.
            </TypographyPBlueColor>
          </>

          <>
            <TypographyH2BlueColor>
              Importance of PAN Card in Credit Report
            </TypographyH2BlueColor>
            <TypographyPBlueColor>
              Permanent Account Number (PAN) card is a 10-digit unique identification alphanumeric number assigned to tax-paying entities in India. It is mandatory to have a valid and original PAN card to check your free credit score and download your credit report.
            </TypographyPBlueColor>
            <TypographyPBlueColor>
              Permanent Account Number (PAN) card is a 10-digit unique identification alphanumeric number assigned to tax-paying entities in India. It is mandatory to have a valid and original PAN card to check your free credit score and download your credit report.
            </TypographyPBlueColor>
            <TypographyPBlueColor>
              While you enter your PAN card to check your credit report or CIBIL score, it is only used to check details of your credit products, such as loans and credit cards and is not used for any other purpose(s).
            </TypographyPBlueColor>
          </>


          <>
            <TypographyH2BlueColor>
              Effect of PAN Card Change on your CIBIL Score
            </TypographyH2BlueColor>
            <TypographyH4BlueColor>
              Issuance of Duplicate PAN Card
            </TypographyH4BlueColor>
            <TypographyPBlueColor>
              If your PAN card is lost or stolen and you have requested a duplicate PAN card, it won’t have any effect on your CIBIL score. This is because your PAN will remain the same, and even the past details shall remain identical.
            </TypographyPBlueColor>
            <TypographyPBlueColor>
              However, if you have two different PAN cards, then it is advisable to surrender one to avoid any further issues. Know steps to surrender PAN card
            </TypographyPBlueColor>
          </>


          <>
            <TypographyH4BlueColor>
              Issuance of New PAN Card
            </TypographyH4BlueColor>
            <TypographyPBlueColor>
              All of your financial transactions are mapped against your PAN. Your PAN is a unique number and is issued to you for lifetime. Ideally, you should have only one PAN against which all of your financial transactions should be mapped.
            </TypographyPBlueColor>
            <TypographyPBlueColor>
              In case you already have a PAN, you should not apply for a new one. Even if you lose your card, you should apply for a duplicate copy of your PAN.
            </TypographyPBlueColor>
            <TypographyPBlueColor>
              If there’s another PAN issued to you inadvertently, you should surrender it at the earliest and link your Aadhaar with the primary PAN.

            </TypographyPBlueColor>
            <TypographyPBlueColor>
              If you have still not linked your PAN with Aadhaar, find out how to link PAN and Aadhaar.
            </TypographyPBlueColor>
          </>


          <>
            <TypographyH2BlueColor>
              Factors that affect Your CIBIL Score
            </TypographyH2BlueColor>
            <TypographyPBlueColor>
              Following are the 4 major factors that negatively impact your CIBIL Score:
            </TypographyPBlueColor>

            <>
              <TypographyH4BlueColor>
                1. Irresponsible Payment Behaviour
              </TypographyH4BlueColor>
              <TypographyPBlueColor>
                Any delayed, missed or non-payment of your loan EMIs or credit card dues will negatively impact your CIBIL score. Credit repayment history acts as the most crucial component considered by lenders in the credit approval process.
              </TypographyPBlueColor>
              <TypographyPBlueColor>
                As soon as there is a default, it is marked against your PAN and is shared with the credit bureau by the lender. The credit bureau adds this information against your PAN and generates the updated credit report.
              </TypographyPBlueColor>
              <TypographyPBlueColor>
                When there is any default on your availed credit within the defined timeline, it leads to a drastic fall in your CIBIL score. Therefore, maintaining a good track record of timely repayment of loan EMI and credit card dues shall help in improving your CIBIL score.
              </TypographyPBlueColor>
            </>

            <>
              <TypographyH4BlueColor>
                2. Submitting Multiple Credit Applications
              </TypographyH4BlueColor>
              <TypographyPBlueColor>
                When you apply for a credit product, your PAN is mentioned in the application. The financial institution fetches your credit report from the bureau to assess your credit behaviour. This process is termed as a hard enquiry. If you have recently applied for multiple loans or credit cards simultaneously or in a short duration, then the lenders will consider the approvals with caution.
              </TypographyPBlueColor>
              <TypographyPBlueColor>
                This act shall depict your hunger for credit and can eventually result in a lowering of your CIBIL score. So, to avoid any further rejection, allow some time before you apply for the next credit product.
              </TypographyPBlueColor>
              <TypographySmall>
                Suggested Read: <span className='text-blue-700'>Pros and Cons of Owning Multiple Credit Cards</span>
              </TypographySmall>
            </>

            <>
              <TypographyH4BlueColor>
                3. High Credit Utilization Ratio (CUR)
              </TypographyH4BlueColor>
              <TypographyPBlueColor>
                Having a high credit utilization ratio or maxing out on your credit card frequently displays you to be overdependent on credit, resulting in a high repayment burden. This again will hamper your CIBIL score and diminish the chances for further loan approval.
              </TypographyPBlueColor>
              <TypographyPBlueColor>
                It is suggested to keep your credit utilization ratio less than 30% of the total sanctioned credit limit. This shows that you are not credit-hungry and the chances of you defaulting are less.
              </TypographyPBlueColor>
            </>

            <>
              <TypographyH4BlueColor>
                4. Diverse Credit Mix
              </TypographyH4BlueColor>
              <TypographyPBlueColor>
                Maintaining a balanced mix between a secured loan (home loan/auto loan) and an unsecured loan (personal loan/credit card/business loan) is likely to have a positive effect on your credit score.
              </TypographyPBlueColor>
              <TypographyPBlueColor>
                A better credit mix shows that you have handled different types of credit products prudently in the past and thus, the chances of you defaulting in future are relatively lower than those who have not handled multiple credit products in the past.
              </TypographyPBlueColor>
              <TypographyPBlueColor>
                However, no lender shall reject your application only because you have not handled multiple credit products in the past.
              </TypographyPBlueColor>
              <TypographySmall>
                Suggested Read: <span className='text-blue-700'>10 ways to improve your credit score</span>
              </TypographySmall>
            </>

          </>


          <>
            <TypographyH2BlueColor>
              Check CIBIL Score by PAN Card FAQs
            </TypographyH2BlueColor>
            {
              panCardCibilFAQs?.map((option, index) => (
                <React.Fragment key={index}>
                  <TypographyH4BlueColor>
                    Que. {option?.question}
                  </TypographyH4BlueColor>
                  <TypographyPBlueColor>
                    <span className='font-bold text-base'>Ans: </span>{option?.answer}
                  </TypographyPBlueColor>
                </React.Fragment>
              ))
            }
          </>


          <>
            <TypographySmall>
              Suggested Articles:
            </TypographySmall>
            <div className='border border-black mt-4'>
              {
                additionalCibilQuestions?.map((item, index) => (
                  <TypographyPBlueColor key={index} className="border-t p-2 flex items-center border-black first:border-none cursor-pointer text-blue-800">
                    {item}
                  </TypographyPBlueColor>
                ))
              }
            </div>
          </>

        </div>
      </div>
    </PageLayout>
  );
}
