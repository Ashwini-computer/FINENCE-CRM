import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../../HeroSectionPages';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
} from '@/custom/Typography';
import { CreditCard } from '../CreditCards';
import SbiDescription from './SbiDescription';
import { listItems, sbiCreditCardProps } from '../CreditCardJSONData';

export default function SbiCreditCard() {
    return (
        <PageLayout>
            <HeroLoginCard2
                headline="SBI Credit Card"
                description="SBI Card is a leading credit card issuer in India offering credit cards with benefits across multiple categories. SBI SimplySave, SBI SimplyClick, Cashback SBI Card, SBI Card ELITE and BPCL SBI Card are some of the most popular SBI credit cards. Since each card is focused on unique individual needs, such as shopping, travel, fuel, groceries, and other such categories, choosing the right card can be confusing. To help you make an informed decision, we have listed the top SBI credit cards."
                navigateLink="/myaccount/dashboard"
                loginSubHedline="Check Your Eligibility For SBI Credit Card"
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
                            Best SBI Credit Cards in May 2025
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            With SBI credit cards, you can earn reward points and cashback and avail other benefits, such as complimentary lounge access and memberships, discounted movie tickets, co-branded privileges, and many more. You can apply for SBI Credit Cards online based on the below-mentioned list of cards according to your requirements.
                        </TypographyPBlueColor>
                    </>
                    <div className="grid gap-4 mt-8">
                        {sbiCreditCardProps.map((card, idx) => (
                            <CreditCard key={idx} {...card} />
                        ))}
                    </div>

                </div>

                <div className='max-w-3xl mt-6'>
                    <SbiDescription />
                </div>
            </div>

        </PageLayout>
    )
}


