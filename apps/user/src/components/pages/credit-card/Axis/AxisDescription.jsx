import {
    TypographyPBlueColor,
    TypographySmall,
    BoldList,
    TypographyMuted,
    TypographyList2,
    TypographyP
} from '@/custom/Typography';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import SingleTable from '@/custom/SingleTable';
import ScrollSpyLinks from '@/custom/ScrollSpyLinks';
import { CreditCardTable, FeeTable } from '../custom/CreditCardTables';
import { ToggleSection } from '@/custom/ToggleSection';
import { Link } from 'react-router-dom';

const axisBankCreditCardInfoLinks = [
    {
        title: "Other Popular Axis Bank Credit Cards",
        link: "#other-popular-axis-bank-credit-cards"
    },
    {
        title: "Axis Bank Credit Card Reward Points: Earn & Redeem",
        link: "#axis-bank-credit-card-reward-points"
    },
    {
        title: "Fees & Charges",
        link: "#axis-bank-credit-card-fees-charges"
    },
    {
        title: "Eligibility Criteria",
        link: "#axis-bank-credit-card-eligibility-criteria"
    },
    {
        title: "Axis Bank Credit Card Apply Online",
        link: "#apply-axis-bank-credit-card-online"
    },
    {
        title: "Quick Links to Manage Your Credit Card",
        link: "#manage-axis-bank-credit-card"
    },
    {
        title: "FAQs",
        link: "#axis-bank-credit-card-faqs"
    }
];

const axisBankCreditCards = [
    {
        cardName: "Airtel Axis Bank Credit Card",
        annualFee: "Rs. 500",
        suitedFor: "Bill Payments"
    },
    {
        cardName: "Axis Neo Credit Card",
        annualFee: "Rs. 250",
        suitedFor: "Entertainment & Shopping"
    },
    {
        cardName: "Axis REWARDS Credit Card",
        annualFee: "Rs. 1,000",
        suitedFor: "Reward Points"
    },
    {
        cardName: "Axis Privilege Visa Credit Card",
        annualFee: "Rs. 1,500",
        suitedFor: "Reward Points"
    }
];

const axisBankCreditCardsTips = [
    "Put most of your purchases on your credit card",
    "Understand the rewards structure of your Axis Credit Card",
    "Maximise your rewards benefits by getting a card that offers accelerated rewards rate on categories you frequently shop from",
    "Be mindful of any capping that might be applicable on the rewards earnings"
];

const axisFeeStructure = [
    {
        feeType: "Joining/Annual Fee",
        amount: "Varies across all Axis Credit Cards"
    },
    {
        feeType: "Finance Charges",
        amount: "Up to 3.6% per month or 52.86% p.a."
    },
    {
        feeType: "Late Payment Fee",
        amount: `For Outstanding Balance of –
Up to Rs. 500: Nil
Rs. 501 to Rs. 5,000: Rs. 500
Rs. 5,001 to Rs. 10,000: Rs. 750
Greater than Rs. 10,000: Rs. 1,200`
    }
];

const axisEligibilityCriteria = [
    {
        title: "Age",
        value: "Between 18 years and 70 years"
    },
    {
        title: "Occupation",
        value: "Salaried or Self-employed"
    },
    {
        title: "Documents Required",
        value: "Click here for the list of documents accepted by Axis Bank for credit card application approval"
    }
];

const axisCreditCardApplicationSteps = [
    {
        title: "Step 1",
        value: "Click here for the credit card application form and submit your mobile number."
    },
    {
        title: "Step 2",
        value: "Verify OTP sent to your mobile number to check the available pre-qualified card offers."
    },
    {
        title: "Step 3",
        value: "Compare the available options as per your eligibility and select the preferred Axis Bank Credit Card that best suits your requirements."
    },
    {
        title: "Step 4",
        value: "Apply for the preferred credit card and provide the documents to complete your application."
    }
];

const axisBankCreditCardLinks = [
    "Axis Bank Credit Card Payment",
    "Axis Bank Credit Card Login",
    "Check Credit Card Statement of Axis Bank",
    "Axis Bank Credit Card Balance Transfer",
    "Axis Bank Credit Card Status",
    "Axis Bank Credit Card PIN Generation",
    "How to Block Axis Bank Credit Card",
    "Axis Bank Credit Card Net Banking",
    "Axis Bank Credit Card Offers"
];

const faq_data = [
    {
        "question": "Which credit card is best in Axis Bank?",
        "answer": "Axis Bank offers different types of credit cards suitable for varying individual needs. For instance:\n\n- Flipkart Axis Bank Credit Card: Great for Flipkart users with dining and lounge benefits.\n- MyZone Credit Card: Good for entertainment perks.\n- Axis Bank Ace Credit Card: Best for direct cashback.\n- IndianOil Axis Bank Credit Card: Ideal for fuel-related benefits.\n\nChoose one based on your spending habits."
    },
    {
        "question": "Does Axis Bank provide lifetime free credit cards?",
        "answer": "Yes, Axis Bank MyZone Credit Card is being offered as a lifetime free card through select channels. Also, some salary or savings account holders may get lifetime free options. Contact customer service to check."
    },
    {
        "question": "What is the premium most Axis Bank Credit Card?",
        "answer": "Axis Bank Primus Credit Card is the most premium one, offered by invitation only with an annual fee of Rs. 1.8 Lakh. It includes luxury perks like dining, hotel, event bookings, unlimited lounge access, zero forex markup, and high rewards redemption."
    },
    {
        "question": "What is the minimum salary for an Axis Credit Card?",
        "answer": "Salary requirement varies by card. Entry-level cards like Neo, MyZone, or Flipkart cards have lower income criteria. Premium cards like Reserve or Burgundy Private Credit Card require higher income. Contact Axis Bank for specific eligibility."
    },
    {
        "question": "What is the Axis Credit Card limit?",
        "answer": "The limit depends on credit score, income, other debts, etc. Cash limit is usually 20% to 40% of the total credit limit."
    },
    {
        "question": "Are Axis Bank credit cards accepted worldwide?",
        "answer": "Yes, they are accepted globally. However, international usage charges vary. Check your card’s terms for details."
    },
    {
        "question": "What are Axis EDGE reward points? Do all Axis Bank credit cards offer EDGE points?",
        "answer": "Axis Bank offers EDGE reward points or co-branded points based on card type. These can be redeemed for merchandise or flights through Axis’s rewards or Travel Edge portals."
    },
    {
        "question": "Is Flipkart Axis Bank Card good?",
        "answer": "Yes, it’s a great option if you shop on Flipkart and use services like Uber, Swiggy, or Cleartrip. It also offers dining and lounge benefits for an annual fee of just Rs. 500."
    },
    {
        "question": "What is the interest charged on Axis Bank Credit Card?",
        "answer": "Interest is typically around 3.4% per month. Interest applies if dues are not paid by the due date."
    },
    {
        "question": "Can I convert my purchases made using Axis Credit Cards into EMIs?",
        "answer": "Yes, most purchases can be converted to EMIs if eligible. You can use internet banking to convert eligible transactions."
    },
    {
        "question": "Who can apply for Axis Bank Credit Cards?",
        "answer": "Eligibility: Age 18-70 years, regular income, and valid ID, address, and income proof. Criteria varies by card."
    },
    {
        "question": "How can I check my Axis Bank Credit Card Statement?",
        "answer": "Online via net banking or mobile app. Offline by calling customer care or visiting a branch."
    },
    {
        "question": "What is Axis Bank Credit Card customer care?",
        "answer": "Call 1800 419 5577 or 1800 103 5577. You can also raise queries online through Axis Bank’s website."
    },
    {
        "question": "How do I check Axis Bank Credit Card application status?",
        "answer": "Check online via Axis Bank website using your application number or call customer care."
    },
    {
        "question": "How to activate Axis Bank Credit Card?",
        "answer": "Log into internet banking or Axis mobile app to generate PIN. Then, make a transaction to activate."
    },
    {
        "question": "How to close my Axis Credit Card?",
        "answer": "Call customer care or visit a branch with a written closure request stating the reason."
    },
    {
        "question": "What is the billing cycle of Axis Bank Credit Card?",
        "answer": "Usually 30 days, but it may vary. The statement includes all transactions made in the cycle."
    },
    {
        "question": "How to apply for an Axis Bank Credit Card?",
        "answer": "Apply online at Axis Bank’s official website or offline at a branch with required documents."
    },
    {
        "question": "How to pay Axis Bank Credit Card bill?",
        "answer": "Pay online via net banking, UPI, Billdesk, etc., or offline via cash/cheque at Axis branches."
    },
    {
        "question": "How to increase Axis Bank Credit Card limit?",
        "answer": "Call customer care to request a limit increase. Approval depends on bank’s policy and your profile."
    },
    {
        "question": "How to unblock Axis Bank Credit Card?",
        "answer": "Call customer care or visit a branch with a valid reason to unblock the card."
    },
    {
        "question": "How to redeem Axis Bank Credit Card reward points?",
        "answer": "Login to Axis account and visit ‘Rewards’ or ‘Travel Edge’ portal to redeem points."
    }
]

export default function AxisDescription() {
    const [openSection, setOpenSection] = useState(null);
    return (
        <>
            <ScrollSpyLinks links={axisBankCreditCardInfoLinks} setOpenSection={setOpenSection} />

            <ToggleSection
                title="Other popular Axis Credit Cards"
                sectionKey="other-popular-axis-bank-credit-cards"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="other-popular-axis-bank-credit-cards"
            >
                <TypographyPBlueColor>
                    Apart from the above-mentioned cards, Axis Bank also offers some other credit cards to cater to the diverse individual needs. Some of the other popular Axis credit cards are listed below:
                </TypographyPBlueColor>
                <CreditCardTable
                    cards={axisBankCreditCards}
                    headers={["Axis Credit Card", "Annual Fee", "Best Suited For"]}
                />
            </ToggleSection>

            <ToggleSection
                title="How to Earn & Redeem Axis Bank Credit Card Reward Points?"
                sectionKey="axis-bank-credit-card-reward-points"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="axis-bank-credit-card-reward-points"
            >
                <TypographyPBlueColor>
                    Most Axis Bank credit cards offer reward points under the Axis EDGE Rewards Program. Know more about Axis Bank credit card reward points earning and redemption below:
                </TypographyPBlueColor>
                <small className='text-lg font-semibold text-blue-900'>
                    How to Earn?
                </small>
                <TypographyPBlueColor>
                    You can earn Axis Bank credit card reward points on every card spend you make online or offline. Here are a few pointers you can use to maximise your rewards earnings:
                </TypographyPBlueColor>
                <TypographyList2
                    items={axisBankCreditCardsTips}
                />
                <small className='text-lg font-semibold text-blue-900'>
                    How to Redeem?
                </small>
                <TypographyPBlueColor>
                    You can redeem <strong>Axis credit card reward points</strong> against the redemption options of choice as per availability via onli9ne as well as offline modes.
                </TypographyPBlueColor>
                <TypographyP>Suggested Read – <Link to='' className="text-blue-800">Best Rewards Credit Cards in India 2025</Link></TypographyP>
                <TypographyPBlueColor>
                    You can use your points for products and e-vouchers from rewards catalogue, convert them into airmiles or use them to make hotel bookings too. The value of these points can vary depending on your credit card and the redemption option you opt for.
                </TypographyPBlueColor>
            </ToggleSection>

            <ToggleSection
                title="Axis Bank Credit Cards: Fees & Charges"
                sectionKey="axis-bank-credit-card-fees-charges"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="axis-bank-credit-card-fees-charges"
            >
                <TypographyPBlueColor>
                    Below mentioned are some common fees and charges applicable to almost all Axis Bank Credit Cards:
                </TypographyPBlueColor>

                <FeeTable data={axisFeeStructure} />

                <TypographyPBlueColor className='italic'>
                    Certain charges may vary from card to card. Please refer to the terms and conditions for the respective card variants separately. For other fees & charges related to Axis Credit Cards, click here.
                </TypographyPBlueColor>
            </ToggleSection>

            <ToggleSection
                title="Axis Bank Credit Card: Eligibility & Documentation"
                sectionKey="axis-bank-credit-card-eligibility-criteria"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="axis-bank-credit-card-eligibility-criteria"
            >
                <TypographyPBlueColor>
                    The common eligibility criteria and documentation required to apply for any of the Axis credit cards are mentioned below:
                </TypographyPBlueColor>
                <BoldList items={axisEligibilityCriteria} />
            </ToggleSection>

            <ToggleSection
                title="How to Apply Axis Bank Credit Card Online?"
                sectionKey="apply-axis-bank-credit-card-online"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="apply-axis-bank-credit-card-online"
            >
                <TypographyPBlueColor>
                    You can follow the below-mentioned steps as you apply online for Axis Bank Credit Card through Financesbazar:
                </TypographyPBlueColor>
                <BoldList items={axisCreditCardApplicationSteps} />
                <a href="#top">
                    <Button size="sm" >
                        Apply Now For the best Axis Bank Credit Offers
                    </Button>
                </a>
            </ToggleSection>

            <ToggleSection
                title="Quick Links to Manage your Axis Bank Credit card"
                sectionKey="manage-axis-bank-credit-card"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="manage-axis-bank-credit-card"
            >
                <TypographyPBlueColor>
                    Click on the below links to know about various details and procedures associated with Axis Bank Credit Card that can help you with easier card management:
                </TypographyPBlueColor>
                <SingleTable items={axisBankCreditCardLinks} columns={3} />
            </ToggleSection>


            <ToggleSection
                title="FAQs on Axis Bank Credit Card"
                sectionKey="axis-bank-credit-card-faqs"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="axis-bank-credit-card-faqs"
            >
                <div className='p-2 space-y-6'>
                    {
                        faq_data?.map((faq, index) => (
                            <div key={index}>
                                <TypographySmall>
                                    {faq?.question}
                                </TypographySmall>
                                <TypographyMuted>
                                    {faq.answer}
                                </TypographyMuted>
                            </div>
                        ))
                    }
                </div>
            </ToggleSection>
        </>
    )
}
