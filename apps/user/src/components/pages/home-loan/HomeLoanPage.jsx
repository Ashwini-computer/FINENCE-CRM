import PageLayout from "@/components/layout/PageLayout";
import HeroLoginCard from "../HeroSectionPages";
import HomeLoanDescription from "./HomeLoanDescription";

export default function HomeLoanPage() {
    return (
        <PageLayout>

            <HeroLoginCard
                headline="Home Loan"
                description="Get a home loan at 7.90% p.a. onwards through Financesbazar for tenures of up to 30 years. Compare interest rates and loan features from top lenders and apply for the best home loan online."
                navigateLink="/home-loan/apply"
                loginSubHedline="Don't worry, this will not affect your home Loan."
                highlighterHedline={{
                    rightText: "Unlock Best",
                    highLighter: "Home Loan",
                    leftText: "Offers",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 my-8">
                <HomeLoanDescription />
            </div>

        </PageLayout >
    )
}
