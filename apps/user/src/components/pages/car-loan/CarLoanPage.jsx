import { LeftGradiantPannel, MobileHeader } from "@/components/pages/credit-report/LeftGradiantPannel";
import OtpCollection from "@/custom/OtpCollection";

const benefits = [
    "No Income Proof Required",
    "Lowest Interest Rates",
    "Quick Disbursal Within 24 Hours",
    "Loan Available for New & Used Cars"
];

export default function CarLoanPage() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-screen sm:overflow-y-hidden'>
            <MobileHeader
                mobileHeroheadline="Get As Soon as Car Loan"
                features={benefits}
                mobileHeroImeges="/product/car-against.svg"
            />
            <LeftGradiantPannel
                content={{
                    heading: "Loan Against Car",
                    description:
                        "Unlock the value of your car and get upto 200% of the original value",
                }}
                image="/product/car-against.svg"
            />

            <OtpCollection
                heading="Unlock Best Loan Against Car"
                lendersHighlight="Offers suitable for your needs"
                features={benefits}
                termsUrl="/terms"
                onOtpSuccess={() => {
                    localStorage.setItem("otp_verified", "true");
                    window.dispatchEvent(new Event("otp_verified"));
                }}
            />

        </div>
    )
}
