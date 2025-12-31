import {
    TypographyPBlueColor,
    TypographySmall,
    BoldList,
    TypographyMuted
} from '@/custom/Typography';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHead,
    TableRow,
} from "@/components/ui/table"
import { ToggleSection } from '@/custom/ToggleSection';
import { useState } from 'react';
import SingleTable from '@/custom/SingleTable';
import ScrollSpyLinks from '@/custom/ScrollSpyLinks';
import { CreditCardTable, FeeTable } from '../custom/CreditCardTables';

const hdfcCreditCardSections = [
    { title: "Popular HDFC Bank Credit Cards", link: "#popularHdfcCreditCards" },
    { title: "Features & Benefits", link: "#featuresBenefits" },
    { title: "Fees & Charges", link: "#feesAndCharges" },
    { title: "Eligibility Criteria", link: "#eligibilityCriteria" },
    { title: "How to Apply?", link: "#howToApply" },
    { title: "Manage Your Credit Card", link: "#manageYourCreditCard" },
    { title: "FAQs", link: "#faqs" }
];

const hdfcCreditCards = [
    {
        cardName: "HDFC Diners Club Privilege Credit Card",
        annualFee: "Rs. 2,500",
        suitedFor: "Lifestyle Benefits"
    },
    {
        cardName: "Shoppers Stop Black HDFC Bank Credit Card",
        annualFee: "Rs. 4,500",
        suitedFor: "Shopping"
    },
    {
        cardName: "HDFC Platinum Times Credit Card",
        annualFee: "Rs. 1,000",
        suitedFor: "Dining & Movies"
    },
    {
        cardName: "IRCTC HDFC Bank Credit Card",
        annualFee: "Rs. 500",
        suitedFor: "Travel"
    },
    {
        cardName: "HDFC PIXEL Play Credit Card",
        annualFee: "Rs. 500",
        suitedFor: "Cashback"
    },
    {
        cardName: "HDFC Harley-Davidson Diners Club Credit Card",
        annualFee: "Rs. 2,500",
        suitedFor: "Rewards"
    }
];

const hdfcCommonFeatures = [
    {
        title: "EMI Conversion",
        value:
            "Using HDFC Bank’s Smart EMI facility, you can convert big-ticket transactions into installments and pay off over a period of 3 to 24 months, or higher in some cases. Credit card interest is usually applicable on such EMIs, however, the bank also offers no-cost EMI facility on select merchant spends."
    },
    {
        title: "Loan on Credit Card",
        value:
            "HDFC Bank offers loan on credit card under their Insta Loan and Insta Jumbo Loan facilities. In case of Insta Loan, your limit will be blocked for the amount you borrow whereas in case of Insta Jumbo Loan, you can get an amount over and above your available credit limit. The eligible loan amount and interest rates vary from user to user."
    },
    {
        title: "Balance Transfer",
        value:
            "If you have an outstanding balance on a credit card from another provider and find it difficult to pay off, you can transfer the balance to your HDFC Bank credit card. This allows you to make payments in easy installments. Interest rates are applicable, but lower than standard credit card finance charges."
    },
    {
        title: "Link HDFC RuPay Credit Cards to UPI",
        value:
            "You can now use your HDFC RuPay Credit Cards on BHIM UPI and other UPI-enabled apps. This enables you to make UPI payments even without sufficient funds in your bank account."
    }
];

const hdfcFeeStructure = [
    {
        feeType: "Joining/Annual Fee",
        amount: "Varies for all HDFC Bank credit cards"
    },
    {
        feeType: "Finance Charges",
        amount: "Up to 3.75% p.m. | 45% p.a. (varies from card to card)"
    },
    {
        feeType: "Late Payment Fee (Excluding Infinia Metal Edition)",
        amount: `For Outstanding Balance of –
Up to Rs. 100: Nil
Rs. 101 to Rs. 500: Rs. 100
Rs. 501 to Rs. 1,000: Rs. 500
Rs. 1,001 to Rs. 5,000: Rs. 600
Rs. 5,001 to Rs. 10,000: Rs. 750
Rs. 10,001 to Rs. 25,000: Rs. 900
Rs. 25,001 to Rs. 50,000: Rs. 1,100
More than Rs. 50,000: Rs. 1,300`
    }
];

const hdfcEligibilityCriteria = [
    {
        title: "Age",
        value: "Between 21 years and 65 years"
    },
    {
        title: "Employment",
        value: "Salaried or Self-employed"
    },
    {
        title: "Documents Required",
        value: 'Click here to find the list of documents accepted by HDFC Bank'
    }
];

const hdfcCardsEligibleUser = [
    {
        cardName: "IndianOil HDFC Bank Credit Card",
        netMonthlyIncome: "> Rs. 12,000",
        itrPerAnnum: "> Rs. 6 lakh"
    },
    {
        cardName: "Swiggy HDFC Credit Card",
        netMonthlyIncome: "> Rs. 15,000",
        itrPerAnnum: "> Rs. 6 lakh"
    },
    {
        cardName: "HDFC Bank Millennia Credit Card",
        netMonthlyIncome: "> Rs. 35,000",
        itrPerAnnum: "> Rs. 6 lakh"
    },
    {
        cardName: "HDFC Regalia Gold Credit Card",
        netMonthlyIncome: "> Rs. 1 – Rs. 1.5 lakh",
        itrPerAnnum: "> Rs. 18 lakh"
    },
    {
        cardName: "6E Rewards XL IndiGo HDFC Bank Credit Card",
        netMonthlyIncome: "> Rs. 1.2 lakh",
        itrPerAnnum: "> Rs. 14.4 lakh"
    },
    {
        cardName: "HDFC Bank Diners Club Black Metal Edition Credit Card",
        netMonthlyIncome: "> Rs. 2.5 lakh",
        itrPerAnnum: "> Rs. 30 lakh"
    }
];

const hdfcApplicationProcess = [
    {
        title: "Step 1",
        value: "Enter your mobile number in the form on the top of this page to begin the application process."
    },
    {
        title: "Step 2",
        value: "Provide the OTP sent on the mobile number for verification."
    },
    {
        title: "Step 3",
        value: "Check and compare the cards you are eligible for from the list of pre-qualified card offers."
    },
    {
        title: "Step 4",
        value: "Select and apply for the best credit card."
    },
    {
        title: "Step 5",
        value: "Provide the required documents for smooth processing of the application and submit the completed application."
    }
];

const hdfcCreditCardLinks = [
    "HDFC Credit Card Payment",
    "HDFC Credit Card Address Change",
    "HDFC Credit Card Statement",
    "HDFC Credit Card Balance Transfer",
    "HDFC Credit Card PIN Generation",
    "HDFC Credit Card Cash Withdrawal",
    "How to Block HDFC Credit Card",
    "HDFC Credit Card Net Banking",
    "HDFC Credit Card Application Status"
];

const hdfcFaqs = [
    {
        question: "How to activate HDFC credit card?",
        answer: "There are multiple ways to activate HDFC credit cards. The easiest way is to give a missed call on 9966027100. You can also visit HDFC MyCards to activate the card. Login through OTP, link your card and enable online, international and contactless transactions. You can also resort to WhatsApp Banking (7070022222) or HDFC’s Chatbot EVA to activate."
    },
    {
        question: "What is HDFC credit card interest rate?",
        answer: "HDFC Bank charges an interest rate of up to 3.75% p.m. However, this may vary from card to card. For example, HDFC Infinia Credit Card charges an interest rate of 1.99% p.m. only."
    },
    {
        question: "How to upgrade hdfc bank credit card?",
        answer: "You can check card upgrade options on HDFC credit card netbanking. If eligible, you can see the cards that you can get upgraded to. Simply choose your preferred card and proceed with the upgrade."
    },
    {
        question: "What are the different types of HDFC credit cards?",
        answer: "HDFC Credit Cards cater to different individual needs like shopping, travel, dining, entertainment and more. You can find entry-level cards like HDFC Moneyback+ and HDFC Freedom, along with premium cards like HDFC Infinia and HDFC Diners Club Black. The best HDFC credit card for you would be the one that aligns with your spending patterns and helps you save a significant amount on your favourite spending categories."
    },
    {
        question: "How to check HDFC credit card balance?",
        answer: "There are multiple ways to check HDFC credit card balance. You can send an SMS with the text “CCBAL <space> [last 4 digits of your card number]” to 5676712. You can also check your credit card balance, outstanding amount, available limit, etc. by logging into netbanking, mobile banking or mobile app."
    },
    {
        question: "How to block HDFC credit card?",
        answer: "If your HDFC credit card is lost or stolen, you can call HDFC Bank’s customer support to get your card blocked. You can also block your HDFC credit card immediately through netbanking, mobile banking, mobile app, SMS or WhatsApp banking. You can find all the details on blocking and unblocking HDFC credit card here."
    },
    {
        question: "How to pay HDFC credit card bills?",
        answer: "You can make your HDFC Bank credit card bill payment through online and offline methods. To pay your HDFC card bill online, you can use HDFC net banking or mobile banking facility. You can also use HDFC mobile app or HDFC credit card bill desk to make the payment online. To pay the bills offline, you can visit the nearest branch of the bank and pay via cheque or cash."
    },
    {
        question: "Can I apply for HDFC credit card offline?",
        answer: "Yes, to apply offline, you can visit the nearest branch of the bank and contact an executive regarding the application process. You need to fill out and submit an application form along with the required documents. The bank will verify your documents and process your application."
    },
    {
        question: "How to register for HDFC credit card net banking?",
        answer: `If you are already an HDFC Bank customer having a salary/savings/current account with the bank, you can easily link your credit card to your net banking service. However, if you have got an HDFC bank credit card but do not avail any other service from the bank, you can still register for HDFC credit card net banking. Follow this process:

On HDFC Bank’s official website, go to ‘Ways to bank’ section
Select ‘Bank online’ and then go to ‘credit card net banking’
Click on ‘Register for credit card netbanking’
Choose a Login ID and enter your details- name, credit card number, PIN, expiry date and create a new password for your account
Submit the form 6. If all the details are correctly entered, your HDFC credit card net banking account will be created`
    },
    {
        question: "How to check HDFC credit card application status?",
        answer: `Visit HDFC Bank’s official website, then go to the ‘Credit Cards’ section, scroll down to the ‘Important Links’, then you will be redirected to another page. Here, you can check HDFC credit card status online using a combination of any of these details:

Application reference number and mobile number
Application form number and mobile number
Date of birth and mobile number`
    },
    {
        question: "How can I increase the limit on my HDFC Bank credit card?",
        answer: `The bank may offer you a higher limit, when you have been using your card for a long time, utilize a significant portion of the available limit and make timely payments. You will be conveyed your enhanced limit via SMS or email which you need to approve. However, if the bank does not offer you a higher limit on its own, you can request a limit increase by speaking to the customer service executive or by writing a letter to the bank. In this case, you may also be required to submit your latest income documents.`
    },
    {
        question: "I don’t have a CIBIL score. Can I apply for HDFC Bank credit card?",
        answer: `HDFC Bank prefers to give credit cards to people who have good credit scores (preferably above 750). However, the bank also offers entry-level credit cards that are designed for people who are new to credit. You can apply for such cards if you want to start your credit journey. Besides this, if you have a salary account with the bank, you will have better chances of credit card approval.`
    },
    {
        question: "Why did my HDFC credit card application get rejected?",
        answer: `If you don’t meet the eligibility criteria or some internal policies of HDFC Bank, then the bank may reject your request. Generally, the bank sends a message on your registered mobile number regarding your application status. Additionally, you can also call on the HDFC credit card customer care number and ask the representative about your query regarding rejection.`
    },
    {
        question: "What is HDFC credit card customer care number?",
        answer: `You can contact HDFC credit card customer care on 1800 1600 / 1800 2600 (toll free). This number is accessible across India. Additionally, if you have any other query, you can also fill a feedback form by visiting the official website of the bank. The email address for HDFC customer care is customerservices.cards@hdfcbank.com.`
    },
    {
        question: "Can I get loan on HDFC Bank credit card?",
        answer: `Yes, HDFC Bank offers loans on credit cards to select cardholders. You can avail the ‘Insta Loan’ facility wherein the amount is deducted from your available credit limit. However, HDFC Bank also offers ‘Insta Jumbo Loan’ which is a personal loan against credit card. Eligible loan amount and interest rates vary from one user to another.`
    },
    {
        question: "Does HDFC provide a lifetime free credit card?",
        answer: `Currently, HDFC Bank does not offer lifetime free credit card. However, the bank occasionally offers promotional lifetime free offers on select cards. You can contact HDFC Bank’s customer care to check if any current offers apply.`
    },
    {
        question: "How to redeem HDFC credit card points?",
        answer: `To redeem your HDFC credit card reward points, log in to your Net Banking account. Once logged in, go to the ‘Cards’ section, select ‘Redeem Rewards,’ and choose the category you’d like to redeem for—such as vouchers, travel, products, or cashback.`
    },
    {
        question: "How to check if your HDFC card has airport lounge access?",
        answer: `To check if your HDFC credit card offers airport lounge access, visit HDFC Bank’s website, navigate to your specific credit card’s page, and review its benefits. You can also check your welcome kit, which generally details lounge access benefits, including eligible lounges and terms. Additionally, you can also contact customer care of the bank to confirm lounge access benefits and eligibility.`
    },
    {
        question: "How to close HDFC Bank credit card?",
        answer: `You can submit a credit card closure request through HDFC MyCards. Enter your registered mobile number, verify with OTP and proceed to choose the card that you want to close. If you have not registered yet, you will have to register to MyCards before proceeding. Once you choose the card, you will have to select the reason for card closure and enter the OTP. After this, your credit card closure request will be submitted.`
    }
];


export default function HdfcDescription() {
    const [openSection, setOpenSection] = useState(null);

    return (
        <>

            <ScrollSpyLinks links={hdfcCreditCardSections} setOpenSection={setOpenSection} />

            <ToggleSection
                title="Other popular HDFC Credit Cards"
                sectionKey="otherPopularhdfcCreditCards"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="otherPopularHdfcCreditCards"
            >
                <TypographyPBlueColor>
                    Apart from the above-mentioned credit cards, the bank also offers other credit cards catering to your travel, shopping, dining and other lifestyle-related needs. Below mentioned are some of the popular credit cards:
                </TypographyPBlueColor>
                <CreditCardTable
                    cards={hdfcCreditCards}
                    headers={["HDFC Credit Card", "Annual Fee", "Best Suited For"]}
                />
            </ToggleSection>

            <ToggleSection
                title="HDFC Credit Card: Features & Benefits"
                sectionKey="sbiCreditCardBenefits"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="hdfcCreditCardBenefits"
            >
                <TypographyPBlueColor>
                    Though each HDFC card comes with a different set of benefits, there are some common features that most credit cards from HDFC Bank would have. Key features of HDFC credit cards include:
                </TypographyPBlueColor>
                <BoldList items={hdfcCommonFeatures} />
            </ToggleSection>

            <ToggleSection
                title="HDFC Credit Cards: Fees & Charges"
                sectionKey="feesAndCharges"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="feesAndCharges"
            >
                <TypographyPBlueColor>
                    Some of the common HDFC credit card fees and charges are mentioned in the table below:
                </TypographyPBlueColor>

                <FeeTable data={hdfcFeeStructure} />

                <TypographyPBlueColor className='italic'>
                    Click here to view other associated fees and charges related to HDFC Bank credit cards.
                </TypographyPBlueColor>
            </ToggleSection>

            <ToggleSection
                title="HDFC Credit Card: Eligibility & Documentation"
                sectionKey="eligibilityCriteria"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="eligibilityCriteria"
            >
                <TypographyPBlueColor>
                    Each credit card provider has its own set eligibility criteria which can vary for every credit card variant. It is advisable to check whether you meet the eligibility requirements, like the minimum income required and age limit, before applying for a credit card of your choice to minimize the chances of application rejection.
                </TypographyPBlueColor>
                <TypographyPBlueColor>
                    Given below are the common HDFC credit card eligibility criteria and the documents required during credit card application process for HDFC credit cards:
                </TypographyPBlueColor>
                <BoldList items={hdfcEligibilityCriteria} />
                <Table className="border border-black mt-2">
                    <TableHeader>
                        <TableRow className="bg-[#1B56FD] hover:bg-[#1B56FD]">
                            <TableHead className="border text-white border-black">
                                Credit Cards
                            </TableHead>
                            <TableHead className="border text-white border-black">
                                Net Monthly Income for Salaried
                            </TableHead>
                            <TableHead className="border text-white border-black">
                                ITR per annum for Self Employed
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {hdfcCardsEligibleUser?.map((card, index) => (
                            <TableRow key={index} className="border border-black">
                                <TableCell className="text-blue-800 border-r whitespace-normal break-words border-black">
                                    {card?.cardName}
                                </TableCell>
                                <TableCell className="border-r border-black">{card?.netMonthlyIncome}</TableCell>
                                <TableCell>{card?.itrPerAnnum}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ToggleSection>

            <ToggleSection
                title="How to Apply HDFC Credit Card?"
                sectionKey="howToApplyForHdfcCreditCards"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="howToApplyForHdfcCreditCards"
            >
                <TypographyPBlueColor>
                    You can apply for HDFC credit cards via Financesbazar through a completely digital process. Follow the steps given below:
                </TypographyPBlueColor>
                <BoldList items={hdfcApplicationProcess} />
                <TypographyPBlueColor>
                    Once HDFC Bank verifies the documents and approves your application, you can expect the credit card to reach you within 10 working days.
                </TypographyPBlueColor>
                <TypographyPBlueColor className="italic">
                    In case you are unable to view the card of choice at our end, you may visit and apply directly at the bank’s website.
                </TypographyPBlueColor>
            </ToggleSection>

            <ToggleSection
                title="Quick Links to Manage your HDFC Credit card"
                sectionKey="manageYourCreditCard"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="manageYourCreditCard"
            >
                <TypographyPBlueColor>
                    Here are some of the links that will help you manage your HDFC Bank credit card, you can click on them as per your requirement:
                </TypographyPBlueColor>
                <SingleTable items={hdfcCreditCardLinks} columns={3} />
            </ToggleSection>

            <ToggleSection
                title="FAQ"
                sectionKey="faqs"
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id="faqs"
            >
                <div className='sm:p-4 p-2 space-y-6'>
                    {
                        hdfcFaqs?.map((faq, index) => (
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
    );
}