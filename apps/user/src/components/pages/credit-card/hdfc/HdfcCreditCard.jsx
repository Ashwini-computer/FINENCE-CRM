import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../../HeroSectionPages';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
} from '@/custom/Typography';
import { CreditCard } from '../CreditCards';
import HdfcDescription from './HdfcDescription';
import { hdfcCreditCardProps, listItems } from '../CreditCardJSONData';

export default function HdfcCreditCard() {
    return (
        <PageLayout>
            <HeroLoginCard2
                headline="HDFC Credit Card"
                description="HDFC Bank Credit Cards come with a diverse range of benefits in the form of rewards, discounts, cashback and other complimentary services. These cards cater to varied individual needs of the customers and offer value-back across spending categories, like travel, shopping, dining, fuel and many more. Depending upon your preferences, you can also avail accelerated benefits on select brands, like Swiggy, IndianOil, Tata Neu, IndiGo, Marriott Bonvoy, etc. through co-branded cards. Refer below to the list of top HDFC Bank Credit Cards in 2025 to compare and apply online via financesbazar for the card that best suits your needs."
                navigateLink="/myaccount/dashboard"
                loginSubHedline="Check Your Eligibility For HDFC Credit Card"
                listHeadline={{
                    rightText: "Check",
                    highLighter: "Pre-Approved Credit Cards ",
                    leftText: "for you in Just One Click"
                }}
                list={listItems}
                buttonName="Check Offers"
            />

            <div className='max-w-6xl p-6 mx-auto'>
                <div className='max-w-3xl'>
                    <>
                        <TypographyH2BlueColor>
                            Top 10 HDFC Bank Credit Cards for May 2025
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            You can find HDFC Bank credit cards with varied features and benefits focusing mainly on one or more spending categories. Some HDFC cards offer reward points while others offer cashback, some are co-branded with popular airlines like IndiGo while others are launched in association with lifestyle brands like Tata Neu.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Here is the list of the most popular HDFC credit cards. You can compare and apply for the best HDFC credit card as per your needs and preferences.
                        </TypographyPBlueColor>
                    </>
                    <div className="grid gap-4 mt-8">
                        {hdfcCreditCardProps?.map((card, idx) => (
                            <CreditCard key={idx} {...card} />
                        ))}
                    </div>

                </div>

                <div className='max-w-3xl mt-6'>
                    <HdfcDescription />
                </div>
            </div>
        </PageLayout>
    )
}
