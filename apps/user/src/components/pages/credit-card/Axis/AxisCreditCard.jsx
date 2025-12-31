import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../../HeroSectionPages';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
} from '@/custom/Typography';
import { CreditCard } from '../CreditCards';
import AxisDescription from './AxisDescription';
import { axisBankCreditCards, listItems } from '../CreditCardJSONData';

export default function AxisCreditCard() {
    return (
        <PageLayout id='top'>
            <HeroLoginCard2
                headline="Axis Bank Credit Card"
                description="Axis Bank credit cards cater to individuals with varied spending preferences. You can find credit cards that are exclusively focused on shopping, travel, rewards or cashback, along with cards that offer comprehensive benefits on several spending tags. Some of the top credit cards, like Axis Atlas, Axis Horizon, Axis Bank Ace, IndianOil Axis, and Flipkart Axis Credit Cards, offer considerable value-back to the cardholders. Compare multiple cards and apply for the one that best suits your requirements."
                navigateLink="/myaccount/dashboard"
                loginSubHedline="Check Your Eligibility For Axis Bank Credit Card"
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
                            Top Axis Bank Credit Cards in India May 2025
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            Some of the most popular Axis Credit Cards are shown below. It is advised to read the highlights and benefits of these cards in detail and compare them with other credit cards before applying for the one that would suit your needs. Since Axis Bank is a partner of FinacesBazar, you can directly apply for select Axis Bank Credit Cards here.
                        </TypographyPBlueColor>
                    </>
                    <div className="grid gap-4 mt-8">
                        {axisBankCreditCards?.map((card, idx) => (
                            <CreditCard key={idx} {...card} />
                        ))}
                    </div>

                </div>

                <div className='max-w-3xl mt-6'>
                    <AxisDescription />
                </div>
            </div>

        </PageLayout>
    )
}
