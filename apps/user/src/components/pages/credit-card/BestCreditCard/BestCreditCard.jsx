import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../../HeroSectionPages';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyH4BlueColor
} from '@/custom/Typography';
import { CreditCard } from '../CreditCards';
import { BestCreditCards, listItems } from '../CreditCardJSONData';
import BestCreditCardDescription from './BestCreditCardDescription';

export default function BestCreditCard() {
    return (
        <PageLayout>
            <HeroLoginCard2
                headline="Best Credit Cards in India"
                description="To maximize the benefits of a credit card, it is essential to choose a card that aligns with your lifestyle and spending patterns. With hundreds of options in the market, finding the right fit can be overwhelming. To make your decision easier, we have curated a list of 25 best credit cards in India for 2025 across popular categories like shopping, travel, fuel, rewards, cashback, and premium credit cards."
                navigateLink="/myaccount/dashboard"
                loginSubHedline="Check Your Eligibility For Best Credit Card"
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

                    <TypographyH2BlueColor className="text-center">
                        Top 25 Credit Cards in India for May 2025
                    </TypographyH2BlueColor>

                    <div className="grid gap-4 mt-8">
                        {BestCreditCards?.map((card, idx) => (
                            <CreditCard key={idx} {...card} />
                        ))}
                    </div>

                    <div className='max-w-3xl mt-6'>
                        <BestCreditCardDescription />
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}
