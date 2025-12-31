import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import {
    TypographyPBlueColor,
    TypographyLarge,
    BoldList
} from '@/custom/Typography';
import { CreditCardTable, FeeTable } from '../custom/CreditCardTables';
import SingleTable from '@/custom/SingleTable';
import ScrollSpyLinks from '@/custom/ScrollSpyLinks';
import { ToggleSection } from '@/custom/ToggleSection';

const sbiCardSections = [
    {
        title: "Other Popular SBI Credit Cards",
        link: "#otherPopularSbiCreditCards"
    },
    {
        title: "SBI Credit Card Benefits",
        link: "#sbiCreditCardBenefits"
    },
    {
        title: "Fees & Charges",
        link: "#feesAndCharges"
    },
    {
        title: "Eligibility Criteria",
        link: "#eligibilityCriteria"
    },
    {
        title: "How to Apply for SBI Credit Cards?",
        link: "#howToApplyForSbiCreditCards"
    },
    {
        title: "SBI Credit Card Bill Payment",
        link: "#sbiCreditCardBillPayment"
    },
    {
        title: "Manage Your Credit Card",
        link: "#manageYourCreditCard"
    },
    {
        title: "FAQs",
        link: "#faqs"
    }
];

const features = [
    {
        title: "Rewards/ Cashback",
        value:
            "Most SBI credit cards offer value back in the form of cashback or rewards. While the cashback is usually credited to the card account, cardholders can redeem the accumulated rewards against a variety of options as per their requirements."
    },
    {
        title: "Add-on Cards",
        value:
            "With your primary credit card, you can avail add-on cards for your spouse, parents or children above the age of 18 years. Such cards usually come with the same benefits as primary cards."
    },
    {
        title: "Encash Facility",
        value:
            "Cardholders can avail instant cash using Encash Facility and pay off in easy installments of up to 48 months. Encash offer is given over and above the existing credit limit of the user whereas Encash Inline is given within the existing credit limit."
    },
    {
        title: "Flexipay Feature",
        value:
            "You can convert big ticket purchases into easy EMIs, using SBI Card’s Flexipay feature. Choose from a tenure of 3, 6, 9, 12, 18, or 24 months to convert transactions worth above Rs. 2,500 made during the last 30 days."
    },
    {
        title: "Balance Transfer",
        value:
            "If you have high balances on other bank credit cards and find it difficult to pay off, you can transfer the balance to your SBI credit card and save on the finance charges. Balance transfers also carry interest but it will be much lower than the finance charges applicable on revolving balance."
    },
    {
        title: "Automated Utility Bill Payment",
        value:
            "To manage all your utility bill payments, you can set standing instructions on your SBI Card. This is known as the Easy Bill Pay feature."
    },
    {
        title: "Insurance Cover",
        value:
            "Some SBI Credit Cards, particularly premium cards, also offer complimentary insurance covers, such as air accident cover, overseas hospitalization cover and more."
    }
];

const sbiCardsData = [
    {
        cardName: "BPCL SBI Card",
        annualFee: "Rs. 499",
        suitedFor: "Fuel"
    },
    {
        cardName: "Reliance SBI Card Prime",
        annualFee: "Rs. 2,999",
        suitedFor: "Shopping, Rewards"
    },
    {
        cardName: "Titan SBI Credit Card",
        annualFee: "Rs. 2,999",
        suitedFor: "Shopping, Rewards"
    },
    {
        cardName: "Etihad Guest SBI Premier Card",
        annualFee: "Rs. 4,999",
        suitedFor: "Travel"
    },
    {
        cardName: "SBI Card Miles Elite",
        annualFee: "Rs. 4,999",
        suitedFor: "Travel"
    },
    {
        cardName: "SBI Aurum Credit Card",
        annualFee: "Rs. 10,000",
        suitedFor: "Premium"
    }
];

const sbiFeeStructure = [
    {
        feeType: "Joining/Annual Fee",
        amount: "Varies for all SBI Credit Cards"
    },
    {
        feeType: "Finance Charges",
        amount: "3.75% p.m. (45% p.a.) for Unsecured Cards\n2.75% p.m. (33% p.a.) for Shaurya, Defence and Secured Cards"
    },
    {
        feeType: "Late Payment Charges*",
        amount: `On outstanding amount of –\n
Up to Rs. 500: Nil\n
Above Rs. 500 to Rs. 1,000: Rs. 400\n
Above Rs. 1,000 to Rs. 10,000: Rs. 750\n
Above Rs. 10,000 to Rs. 25,000: Rs. 950\n
Above Rs. 25,000 to Rs. 50,000: Rs. 1,100\n
Above Rs. 50,000: Rs. 1,200`
    }
];

const creditCardEligibility = [
    {
        title: "Age",
        value: "You should be aged between 17 and 70 years"
    },
    {
        title: "Occupation",
        value: "Applicant should either be salaried or self-employed"
    },
    {
        title: "Documents Required",
        value: "Click here for the list of documents accepted by SBI Card for credit card application approval"
    }
];

const applicationSteps = [
    {
        title: "Step 1: Enter Your Mobile Number",
        value: "To start your SBI credit card application process, provide your mobile number in the credit card form."
    },
    {
        title: "Step 2: Verify OTP and Check Available Offers",
        value: "Provide your OTP for verification to check pre-approved offers."
    },
    {
        title: "Step 3: Select Preferred SBI Credit Card",
        value: "Compare available options as per your eligibility and select the best SBI credit card that suits your requirement."
    },
    {
        title: "Step 4: Apply and Provide Documents",
        value: "Apply for the suitable credit card and provide documents for smooth processing of the application."
    }
];

const paymentMethods = [
    {
        title: "Offline Payment",
        value: "You can either pay using your SBI debit card by visiting the nearest SBI ATM, drop your bill payment cheque in the dropbox, or even pay over the counter at any SBI branch."
    },
    {
        title: "Online Payment - PayNet BillDesk",
        value: "Pay your bill on SBI BillDesk PayNet gateway using net banking or debit cards from select banks."
    },
    {
        title: "Online Payment - UPI",
        value: "Pay using UPI QR code, Pay by VPA (Virtual Payment Address), or BHIM SBI Pay."
    },
    {
        title: "Online Payment - Net Banking",
        value: "Pay by logging in to Online SBI portal or via other banks using NEFT or 'Visa Credit Card Pay' option."
    },
    {
        title: "Online Payment - SBI App",
        value: "Use SBI YONO app/website or SBI Card mobile app to pay your credit card bill."
    },
    {
        title: "Online Payment - NACH",
        value: "Automate bill payments monthly using National Automated Clearing House (NACH) by authorizing once."
    },
    {
        title: "Online Payment - MasterCard MoneySend",
        value: "Use third-party payment apps that support MasterCard MoneySend."
    },
    {
        title: "Online Payment - Electronic Bill Payment (EBP)",
        value: "Pay via EBP using net banking, mobile, or ATM services of SBI Bank, Indian Overseas Bank, or Bank of India."
    }
];

const sbiCreditCardLinks = [
    "SBI Credit Card Login",
    "SBI Credit Card Net Banking",
    "SBI Credit Card Payment",
    "SBI Credit Card Statement",
    "SBI Credit Card PIN Generation",
    "SBI Credit Card Cash Withdrawal",
    "How to Block SBI Credit Card?",
    "SBI Credit Card Latest Offers",
    "SBI Credit Card Status"
];

const sbiCreditCardFAQs = [
    {
        title: "Which SBI credit card is good for beginners",
        value: `
SBI SimplySAVE and SBI SimplyCLICK are the two most popular entry-level SBI credit cards offered to beginners. Both of these cards come at an annual fee of Rs. 499 and are good for you if you wish to get a decent set of benefits for a low annual fee. SimplySAVE is a good option to save on your retail shopping spends whereas SBI SimplyCLICK is beneficial if you frequently shop online.
`
    },
    {
        title: "What is SBI credit card limit? How to increase it",
        value: `
The total credit limit on your SBI credit card is the maximum amount you can spend using your card. As you keep using the card, the limit reduces and it replenishes when you pay your credit card bills. The limit you would get on your SBI Card depends on a lot of factors including your income, credit score, limit offered on your existing cards, etc. If you have had your SBI Card for a long time and have been regular with usage and payments, SBI Card may offer you a limit increase on their own.
`
    },
    {
        title: "How to redeem SBI credit card reward points",
        value: `
You can redeem the accumulated reward points on SBI credit cards online by logging into SBI Card’s official website or by visiting the partner merchant store/portal (in case of co-branded cards). Alternatively, you can call SBI credit card helpline to redeem your reward points.
`
    },
    {
        title: "How to close SBI credit card",
        value: `
To close your SBI credit card, you can call on SBI credit card helpline number or write to SBI customer support. Your card closure will be subject to all dues being paid in full. You should also see if you have any reward balance and redeem the same before closing your card.
`
    },
    {
        title: "How to activate SBI credit card",
        value: `
There are 3 ways to activate your SBI credit card—SBI Card Net Banking, SBI Credit Card app or email. To use the net banking facility, you must first be registered for the same. Once registered, login and navigate to the ‘Requests’ tab, then go to ‘Card Activation’. Authorize the same by clicking on the ‘Activate’ button. A similar process will be followed for Mobile App. Alternatively, you can also write an email, call customer support or chat with their chatbot ILA for card activation.
`
    },
    {
        title: "Are there any SBI credit cards offered in collaboration with other banks",
        value: `
Yes, several banks have collaborated with SBI Card to design and launch credit cards. Click here to view the complete list of SBI Card banking collaboration credit cards.
`
    },
    {
        title: "How to block SBI credit card",
        value: `
To block your SBI credit card, you can SMS BLOCK XXXX (where XXXX are the last 4 digits of your SBI Credit Card) and send it to 5676791. You can also call SBI Card helpline on 18601801290 or 39020202 (prefix local STD code) for the same.
`
    },
    {
        title: "How to generate SBI credit card PIN",
        value: `
You can generate pin for your SBI credit card through the mobile app, website, Chatbot ILA or IVR. The process slightly varies for each method. To generate/change the PIN via SBI Card website, you must first login using your customer ID and password. Then you can go to the ‘Manage PIN’ section, choose the card and authenticate using OTP. You will now have to enter the new PIN twice and proceed. Click here for details on other steps.
`
    },
    {
        title: "How to convert SBI credit card transactions into EMIs",
        value: `
You can use SBI Card’s Flexipay Facility within 30 days of the purchase. The minimum booking amount required to avail this facility is Rs. 2,500. You can bunch multiple transactions above Rs. 500 to avail this facility. A one-time processing fee of 2% of the booking amount (minimum Rs. 249, maximum Rs. 1,500) will be levied. Interest rate is 20% p.a. but it can also vary as per the applicable offers.
`
    },
    {
        title: "Which is the best SBI credit card",
        value: `
SBI offers a number of credit cards that can offer benefits specific to varying customer needs. To choose the best credit card, you must analyze your spending pattern. For instance, if you are looking for a travel credit card from SBI you can consider opting for Yatra SBI Credit Card or IRCTC SBI Card etc. For savings on fuel, you can opt for BPCL SBI Card Octane. Therefore, SBI credit card for you would be the one that offers maximum value back on your frequent purchases.
`
    },
    {
        title: "How to track SBI credit card application status",
        value: `
If you have applied for an SBI credit card and wish to track your application status, you can do it either online or offline. For online tracking of your application, you can visit the official website of SBI Card, and look out for option ‘Track your application’. Here you need to enter your application/reference number. In addition to that, you can also follow the offline way by contacting the SBI credit card customer care at 1860-180-1290.
`
    }
];

// --- Main Component ---
export default function SbiDescription() {
    const [openSection, setOpenSection] = useState(null);

    return (
        <>

            <ScrollSpyLinks links={sbiCardSections} setOpenSection={setOpenSection} />

            <ToggleSection
                title="Other popular SBI Credit Cards"
                sectionKey="otherPopularSbiCreditCards"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="otherPopularSbiCreditCards"
            >
                <TypographyPBlueColor>
                    Apart from the above-mentioned popular credit cards, SBI Card also offers some other credit cards ranging from entry-level to premium. Some of these are listed below:
                </TypographyPBlueColor>
                <CreditCardTable
                    cards={sbiCardsData}
                    headers={["SBI Credit Card", "Annual Fee", "Best Suited For"]}
                />
            </ToggleSection>

            <ToggleSection
                title="SBI Credit Card: Features & Benefits"
                sectionKey="sbiCreditCardBenefits"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="sbiCreditCardBenefits"
            >
                <TypographyPBlueColor>
                    As mentioned above, different SBI cards come with different features and benefits. However, some common benefits SBI credit card are mentioned below:
                </TypographyPBlueColor>
                <BoldList items={features} />
            </ToggleSection>

            <ToggleSection
                title="SBI Credit Cards: Fees & Charges"
                sectionKey="feesAndCharges"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="feesAndCharges"
            >
                <TypographyPBlueColor>
                    Below-mentioned are some of the common fees and charges applicable to SBI Credit Cards:
                </TypographyPBlueColor>

                <FeeTable data={sbiFeeStructure} />
                <TypographyPBlueColor className='italic'>
                    *An additional Late Payment Charge of Rs. 100 will be levied if you miss the payment of Minimum Amount Due (MAD) by the due date for 2 consecutive billing cycles. This charge will continue to be levied for every payment cycle until the MAD is cleared.
                </TypographyPBlueColor>
                <TypographyPBlueColor className='italic'>
                    The fee & charges may vary from card to card. Please refer to the terms and conditions for card variants separately before applying. For other details related to the fee & charges of SBI Credit Cards, <Link to='' className='text-blue-700'>
                        click here.</Link>
                </TypographyPBlueColor>
            </ToggleSection>

            <ToggleSection
                title="SBI Credit Card: Eligibility & Documentation"
                sectionKey="eligibilityCriteria"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="eligibilityCriteria"
            >
                <TypographyPBlueColor>
                    The general eligibility criteria to apply for an SBI Credit Card are as follows:
                </TypographyPBlueColor>
                <BoldList items={creditCardEligibility} />
            </ToggleSection>

            <ToggleSection
                title="How to Apply SBI Credit Card?"
                sectionKey="howToApplyForSbiCreditCards"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="howToApplyForSbiCreditCards"
            >
                <TypographyPBlueColor>
                    You can <Link to='' className='text-blue-700'>compare and apply for SBI Credit Cards online at FinancesBazar</Link>. The steps for the same are mentioned below:
                </TypographyPBlueColor>
                <BoldList items={applicationSteps} />
            </ToggleSection>

            <ToggleSection
                title="SBI Credit Card bill payment"
                sectionKey="sbiCreditCardBillPayment"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="sbiCreditCardBillPayment"
            >
                <TypographyPBlueColor>
                    SBI Card provides several online and offline ways through which cardholders can make their SBI credit card bill payment, as listed below:
                </TypographyPBlueColor>
                <BoldList items={paymentMethods} />
            </ToggleSection>

            <ToggleSection
                title="Quick Links to Manage your SBI Credit card"
                sectionKey="manageYourCreditCard"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="manageYourCreditCard"
            >
                <TypographyPBlueColor>
                    Click on the links mentioned below to know various details and procedures associated with SBI Credit Cards that can help you in managing your card easily:
                </TypographyPBlueColor>
                <SingleTable items={sbiCreditCardLinks} columns={3} />
            </ToggleSection>

            <ToggleSection
                title="FAQ"
                sectionKey="faqs"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="faqs"
            >
                <BoldList items={sbiCreditCardFAQs} />
            </ToggleSection>
        </>
    );
}