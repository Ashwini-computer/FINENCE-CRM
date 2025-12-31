import HeroSection from '@/components/home/HeroSection';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ValuePropositions from '@/components/home/ValuePropositions';
import AppDownload from '@/components/home/AppDownload';
import Partners from '@/components/home/Partners';
import PageLayout from '@/components/layout/PageLayout';
import CreditScoreCheckNotify from "@/components/CreditScoreCheckNotify";

export default function Landing() {
    return (
        <PageLayout>
            <HeroSection />
            <ProductCategories />
            <FeaturedProducts />
            <ValuePropositions />
            <AppDownload />
            <Partners />
            <CreditScoreCheckNotify />
        </PageLayout>
    )
}
