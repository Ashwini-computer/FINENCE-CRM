import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TypographyMuted, } from '@/custom/Typography';
import HeroLoginCard from '../HeroSectionPages';

export const cardBenefits = [
    {
        title: "Top Offers",
        description: "Pre-approved offers from 10+ issuers",
    },
    {
        title: "Wide Choices",
        description: "Compare from 60+ credit cards",
    },
    {
        title: "Quick Approval",
        description: "Instant approval on pre-qualified cards",
    },
    {
        title: "OneCard Benefits",
        description: "Enjoy lifetime free OneCard with exciting rewards and smart spend insights",
    }
];

export const creditStats = [
    {
        title: "4.2/5",
        subtitle: "Ratings",
        icon: "stars",
    },
    {
        title: "45M+",
        subtitle: "Satisfied Customers",
    },
    {
        title: "10+",
        subtitle: "Card Issuers",
    },
    {
        title: "60+",
        subtitle: "Cards to choose from",
    },
];

const bestCreditCards = [
    {
        id: 'hdfc-diners-club-black',
        title: 'HDFC Diners Club Black Credit Card',
        features: [
            'Unlimited airport lounge access for primary and add-on members',
            'High base rewards rate of 3.33% with 5 reward points per Rs. 150 spent',
        ],
        joining_fee: '10,000',
        renewal_fee: '10,000',
        tags: ['Travel', 'Lounge Access', 'Reward Points'],
    },
    {
        id: 'axis-bank-reserve',
        title: 'Axis Bank Reserve Credit Card',
        features: [
            'Unlimited domestic & international lounge visits via Priority Pass',
            'Low forex mark-up fee of 1.5% with 2X reward points on international spends',
        ],
        joining_fee: '50,000',
        renewal_fee: '50,000',
        tags: ['Travel', 'Lounge Access', 'Reward Points'],
    },
    {
        id: 'axis-atlas',
        title: 'Axis Atlas Credit Card',
        features: [
            '2.5X EDGE Miles on Travel spends',
            'Up to 12 international lounge access every year',
        ],
        joining_fee: '5,000',
        renewal_fee: '5,000',
        tags: ['Travel', 'Lounge Access', 'Reward Points'],
    },
];

export default function CreaditCardPage() {

    return (
        <PageLayout>
            <HeroLoginCard
                headline="Credit Card"
                description="Credit cards come with wide-ranging features and benefits designed to suit the lifestyle preferences of various income groups. Compare 60+ options on financesbazar, apply online, and get instant approval."
                cards={cardBenefits}
                navigateLink="/credit-cards/apply"
                loginSubHedline="Don't worry, this will not affect your credit score."
                ratingInfo={creditStats}
                highlighterHedline={{
                    rightText: "Find Best",
                    highLighter: "Credit Card",
                    leftText: "Offers",
                }}
            />

            {/* Best Credit Cards */}
            <div className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6">
                        <span className="">Best Credit Cards</span> in India
                    </h2>
                    <TypographyMuted className="mb-8 max-w-3xl">
                        Consumers can find a wide range of credit cards, from entry-level to super-premium, designed specifically to match their spending habits and financial profiles.
                        Whether you are looking for a zero annual fee card, travel specific credit card or a card that offers cashback benefits on all your spends,
                        there is something for everyone, you just have to make the right choice and pick the card that best suits your requirement.
                    </TypographyMuted>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bestCreditCards.map((card) => (
                            <Card key={card.id} className="shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl">{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <ul className="space-y-2">
                                            {card.features.map((feature, index) => (
                                                <li key={`${card.id}-feature-${index}`} className="flex items-start">
                                                    <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                                            <div>
                                                <div className="text-sm text-gray-500">Joining Fee</div>
                                                <div className="font-bold">{card.joining_fee} <span className="text-xs font-normal">+ Taxes</span></div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">Annual/Renewal Fee</div>
                                                <div className="font-bold">{card.renewal_fee} <span className="text-xs font-normal">+ Taxes</span></div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {card.tags.map((tag) => (
                                                <span key={`${card.id}-tag-${tag}`} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link to={`/credit-cards/${card.id}`}>
                                            <Button className="w-full cursor-pointer">
                                                Check Eligibility
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500 mb-4">
                            <strong>Note:</strong> We have shortlisted the above-mentioned top credit cards based on the cost-benefit analysis by determining
                            if the fee charged justifies the value-back offered. The choice of the best card for you can be subjective based on multiple factors
                            like brand preferences, fee payment ability, eligible options, etc.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose financesbazar */}
            <div className="py-10 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-xl font-bold mb-6">Why Choose Financesbazar?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>Compare and find the <strong>best credit card offers</strong></span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>Access pre-approved offers from <strong>leading issuers</strong></span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>Instant approval on <strong>eligible credit card applications</strong></span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>Seamless and fully <strong>digital application process</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
