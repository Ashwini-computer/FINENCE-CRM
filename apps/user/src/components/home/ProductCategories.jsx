import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  HeadSkipper,
  TypographyMuted,
  TypographySmall,
} from "@/custom/Typography";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Define product data
const creditProducts = [
  {
    id: "credit-cards",
    title: "Credit Cards",
    icon: "credit-card",
    description:
      "From 50+ Options, Choose a card matching your lifestyle & needs",
    link: "/credit-cards",
    ctaText: "Get Best Offers",
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    icon: "personal-loan",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    link: "/personal-loan",
    ctaText: "Check Eligibility",
  },
  {
    id: "micro-loans",
    title: "Micro Loans (Under 50K)",
    icon: "micro-loan",
    description: "Instant small ticket loans to meet your immediate cash needs",
    link: "/personal-loans",
    ctaText: "Get Instant Loan",
  },
  {
    id: "business-loan",
    title: "Business Loan",
    icon: "business-loan",
    description: "Expand your business with loans at low interest rates",
    link: "/business-loan",
    ctaText: "Check Eligibility",
  },
  {
    id: "home-loan",
    title: "Home Loan",
    icon: "home-loan",
    description:
      "Choose from lowest interest rates available for your dream home",
    link: "/home-loan",
    ctaText: "Check Eligibility",
  },
  {
    id: "car-loan",
    title: "Car Loan",
    icon: "car-loan",
    description:
      "Expand your new and old cars with loans.\nQuick approval and minimal documentation required.",
    link: "/loan-against-car",
    ctaText: "Know More",
  },
  {
    id: "mortgage-loan",
    title: "Mortgage Loan",
    icon: "mortgage-loan",
    description:
      "Expand your business with loans at low interest rates.\nFlexible tenure options tailored for your needs.",
    link: "/business-loan",
    ctaText: "Check Eligibility",
  },
  {
    id: "commercial-loan",
    title: "Commercial Loan",
    icon: "commercial-loan",
    description:
      "Boost your commercial ventures with tailored financing.\nEnjoy competitive rates and seamless processing.",
    link: "/commercial-loan",
    ctaText: "Know More",
  },
];

const insuranceProducts = [
  {
    id: "term-insurance",
    title: "Term Life Insurance",
    icon: "life-insurance",
    description: "Safeguard your loved ones from future uncertainties",
    link: "/",
    badge: "Up to 15% Off",
    subline: "Starting from ₹485/month*",
  },
  {
    id: "investment-plan",
    title: "Investment Plan",
    icon: "investment-plan",
    description:
      "Plans starting from 1,000 with Inbuilt Life Cover & Tax Benefits",
    link: "/",
    badge: "Tax Free Returns",
    subline: "View Plans",
  },
  {
    id: "health-insurance",
    title: "Health Insurance",
    icon: "health-insurance",
    description:
      "Protect yourself and your family against medical expenses with up to 25% discount",
    link: "/",
    badge: "FREE Home Visit",
    subline: "Starting @ ₹8/day*",
  },
  {
    id: "car-insurance",
    title: "car Insurance",
    icon: "car-insurance",
    description:
      "Protect yourself and your car from financial emergencies and save up to 80%",
    link: "/",
    badge: "New",
    subline: "View Price",
  },
];

const financialProducts = [
  {
    id: "car-insurance",
    title: "Proud India",
    description: "Proudly main in india, for Indians around the world",
    link: "",
    img: "assets/indiaBanner.svg",
    ref: "view",
  },
  {
    id: "car-insurance",
    title: "Calculate Reward Earnings",
    description: "On Your Credit Card",
    link: "",
    img: "assets/reward-calculator.svg",
    ref: "check Now",
  },
  {
    id: "car-insurance",
    title: "Beware from Fraudsters",
    description:
      "Protect yourself and your car from financial emergencies and save up to 80%",
    link: "",
    img: "assets/bewareBanner.svg",
    ref: "Check fraud Detection",
  },
];

export default function ProductCategories() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 ">
        <HeadSkipper className="w-fit">Popular Products</HeadSkipper>
        <div className="sm:grid hidden sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {creditProducts?.map((product) => (
            <ProductCardCredit key={product.id} {...product} />
          ))}
        </div>
        <div className="grid grid-cols-4 text-center sm:hidden items-center gap-3">
          {creditProducts?.map((product) => (
            <ProductCardCreditSmallDevice key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <HeadSkipper className="w-fit">Insurance & Investment</HeadSkipper>
        <div className="sm:grid hidden sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {insuranceProducts?.map((product) => (
            <ProductCardInsurance key={product.id} {...product} />
          ))}
        </div>
        <div className="grid grid-cols-4 text-center sm:hidden items-center gap-3">
          {insuranceProducts?.map((product) => (
            <ProductCardInsuranceSmallDevice key={product.id} {...product} />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <HeadSkipper className="w-fit">
          Keeping you financially healthy and safe, always
        </HeadSkipper>

        {/* Mobile Slider */}
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1} // full width
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mt-4"
          >
            {financialProducts?.map((product, index) => (
              <SwiperSlide key={index} className="w-full">
                <ProductCardFinancial {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Desktop Grid
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-4">
            {financialProducts?.map((product, index) => (
              <ProductCardFinancial key={index} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCardCredit({ title, description, icon, link, ctaText }) {
  return (
    <Link
      to={link}
      className="border flex flex-col justify-between cursor-pointer hover:scale-105 transition-all hover:shadow-xl rounded-sm shadow p-4"
    >
      <TypographySmall className="uppercase font-bold text-blue-900 text-sm">
        {title}
      </TypographySmall>
      <div className="flex justify-between mt-2 gap-4">
        <img src={`product/${icon}.png`} alt={icon} className="h-10 w-10" />
        <TypographyMuted className="font-medium text-xs line-clamp-3">
          {description}
        </TypographyMuted>
      </div>

      <TypographySmall className="text-[12.5px] font-semibold text-blue-700 flex items-center gap-3 mt-6">
        {ctaText} <LuMoveRight />
      </TypographySmall>
    </Link>
  );
}

function ProductCardCreditSmallDevice({ title, icon, link }) {
  return (
    <Link
      to={link}
      className="flex flex-col justify-center items-center gap-2 border p-1 rounded-md h-19"
    >
      <img
        loading="lazy"
        src={`product/${icon}.png`}
        alt={icon}
        className="h-7 w-7"
      />
      <TypographySmall className="text-blue-950 font-semibold text-[9px] capitalize">
        {title}
      </TypographySmall>
    </Link>
  );
}

function ProductCardInsurance({
  title,
  description,
  icon,
  link,
  badge,
  subline,
}) {
  return (
    <Link
      to={link}
      className="border relative flex flex-col justify-between cursor-pointer hover:scale-105 transition-all hover:shadow-xl rounded-sm shadow p-4"
    >
      <TypographySmall className="uppercase font-bold text-blue-900 text-sm">
        {title}
      </TypographySmall>
      <div className="flex justify-between mt-2 gap-4">
        <img
          loading="lazy"
          src={`product/${icon}.png`}
          alt={icon}
          className="h-10 w-10"
        />
        <TypographyMuted className="font-medium text-xs flex-wrap">
          {description}
        </TypographyMuted>
      </div>

      <TypographySmall className="text-[12.5px] font-semibold text-blue-700 flex items-center gap-3 mt-4">
        {subline} <LuMoveRight />
      </TypographySmall>
      <span className="absolute -top-3 text-white rounded font-semibold left-8 py-1 px-2 text-[10px] bg-green-600">
        {badge}
      </span>
    </Link>
  );
}

function ProductCardInsuranceSmallDevice({ title, icon, link, badge }) {
  return (
    <Link
      to={link}
      className="flex flex-col relative justify-center items-center gap-2 border p-1 rounded-md h-19"
    >
      <img
        loading="lazy"
        src={`product/${icon}.png`}
        alt={icon}
        className="h-7 w-7"
      />
      <TypographySmall className="text-blue-950 font-semibold text-[9px] capitalize">
        {title}
      </TypographySmall>
      <span className="text-white w-[92%] mx-auto rounded-xs -top-2 absolute text-[7px] bg-green-500">
        {badge}
      </span>
    </Link>
  );
}

function ProductCardFinancial({ title, description, img, link, ref }) {
  return (
    <Link
      to={link}
      className="border flex p-2 cursor-pointer hover:scale-105 transition-all hover:shadow-xl rounded-sm shadow w-full"
    >
      <img loading="lazy" src={img} alt={title} className="w-20" />
      <div className="flex flex-col mt-2 gap-1">
        <TypographySmall className="text-xs sm:text-sm">
          {title}
        </TypographySmall>
        <TypographyMuted className="text-[10px] sm:text-xs">
          {description}
        </TypographyMuted>
        <span className="text-xs font-semibold text-blue-900 w-fit border-b border-blue-800 pb-1">
          {ref}
        </span>
      </div>
    </Link>
  );
}
