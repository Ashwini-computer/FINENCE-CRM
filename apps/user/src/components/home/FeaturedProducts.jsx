import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  TypographyH3,
  Headline,
  TypographyH4,
  TypographyMuted,
} from "@/custom/Typography";

const creditCards1 = [
  "3% Cashback on Online Spends",
  "1.5% Cashback on all Other Spends",
  "First Year Free",
];

const creditCards2 = [
  "1% cash back on all spends*",
  "Credit Card + Cash**",
  "100% Digital Process",
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:mt-12 overflow-hidden">
      <div className="text-center flex flex-col gap-4 items-center">
        <Headline className="capitalize">
          Tailor Made Products Exclusively
          <br />
          for Financesbazar Customers
        </Headline>
        <div className="w-22 h-0.5 bg-accent"></div>
      </div>

      {/* First Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:mt-12 min-w-0">
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="/assets/paisa-save.png"
            alt="paisa-save"
            className="-rotate-[25deg] h-[350px] sm:h-[500px] object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-6">
          <TypographyH3 className="text-md font-bold tracking-normal text-blue-950">
            Yes Bank Financesbazar PaisaSave Credit Card
          </TypographyH3>
          <div className="grid gap-2 sm:gap-6">
            {creditCards1.map((option, index) => (
              <TypographyH4
                key={index}
                className="opacity-85 flex items-center gap-3"
              >
                <IoCheckmarkCircleOutline size={24} className="text-accent" />{" "}
                {option}
              </TypographyH4>
            ))}
          </div>
          <Link
            to=""
            className="text-blue-800 sm:text-sm underline underline-offset-4 text-xs font-semibold ml-3"
          >
            Know More
          </Link>
        </div>
      </div>

      {/* Second Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
        <div className="flex flex-col gap-4 sm:gap-6 sm:order-1 order-2">
          <TypographyH3 className="text-md font-bold tracking-normal text-blue-950">
            RBL Bank Financesbazar DUET Credit Card
          </TypographyH3>
          <div className="flex flex-col gap-2 sm:gap-6">
            {creditCards2.map((option, index) => (
              <TypographyH4
                key={index}
                className="opacity-85 flex items-center gap-3"
              >
                <IoCheckmarkCircleOutline size={24} className="text-accent" />{" "}
                {option}
              </TypographyH4>
            ))}
          </div>
          <TypographyMuted className="font-semibold text-xs">
            **Cash is an XpressCash program by RBL Bank
          </TypographyMuted>
          <Link
            to=""
            className="text-blue-800 sm:text-sm underline underline-offset-4 text-xs font-semibold ml-3"
          >
            Know More
          </Link>
        </div>
        <div className="flex justify-center items-center sm:order-2 order-1">
          <img
            loading="lazy"
            src="/assets/duet.png"
            alt="duet"
            className="rotate-[26deg] h-[350px] sm:h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
