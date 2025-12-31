import { sbiCreditCardProps } from "@/components/pages/credit-card/CreditCardJSONData";
import { CreditCard } from "@/components/pages/credit-card/CreditCards";

export default function CreditCardsOffers() {
    return (
        <div className="grid gap-4 sm:px-0 px-4 max-w-3xl sm:my-6">
            {sbiCreditCardProps.map((card, idx) => (
                <CreditCard
                    buttontext="Apply"
                    key={idx} {...card}
                    className="bg-white"
                />
            ))}
        </div>
    )
}
