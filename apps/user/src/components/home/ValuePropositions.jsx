import { Button } from "@/components/ui/button";
import { MdNavigateNext } from "react-icons/md";
import {
  TypographyH2,
  Headline,
  TypographyH4,
  TypographyMuted,
} from "@/custom/Typography";
import { Link } from "react-router-dom";

// Value proposition card content
const valueProps = [
  {
    icon: "wide-choice",
    title: "Wide Choice",
    description:
      "We partner with major banks, NBFCs and fintech lenders offering a wide range of products.",
  },
  {
    icon: "easy-access",
    title: "Easy Access to Credit",
    description:
      "Smart algorithms offer multiple offers, comparisons & unbiased credit guidance.",
  },
  {
    icon: "safe-secure",
    title: "Safe & Secure",
    description:
      "ISO(27001: 2013) certified with industry-best data protection and control systems.",
  },
  {
    icon: "customer-first",
    title: "Customer First",
    description:
      "Expert team dedicated to helping you make the best financial choices.",
  },
];

// MiniCard component for reusability
const MiniCard = ({ icon, title, description }) => (
  <div className="grid gap-2 sm:gap-4">
    <img
      loading="lazy"
      src={`/product/${icon}.png`}
      alt="icon"
      className="w-10 sm:w-12"
    />
    <TypographyH4 className="text-primary font-bold">{title}</TypographyH4>
    <TypographyMuted className="leading-6.5">{description}</TypographyMuted>
  </div>
);

// GradientBox component for reusability
const GradientBox = ({ image, title, subtitle, buttonText }) => (
  <div className="bg-gradient-to-br from-[#bfe9fd] to-[#3cc2ff] p-12 rounded-md relative">
    <div className="flex justify-center">
      <img loading="lazy" src={image} alt={title} className="sm:w-72 w-56" />
    </div>
    <div className="grid gap-2 mt-6">
      <TypographyH2 className="font-semibold sm:text-2xl text-xl tracking-wide">
        {title}
      </TypographyH2>
      <TypographyMuted>{subtitle}</TypographyMuted>
      <Button className="absolute -bottom-3 right-16 bg-white hover:bg-white cursor-pointer rounded-none text-primary text-xs sm:text-sm font-semibold sm:p-6">
        {buttonText} <MdNavigateNext />
      </Button>
    </div>
  </div>
);

export default function ValuePropositions() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-22 h-0.5 bg-accent"></div>
          <Headline className="capitalize">
            Compare, Choose and Apply for personal credit products on
            Financebazaar
          </Headline>
          <Link to="/about-us" className="w-fit">
            <Button className="border bg-[#e1e9e9] shadow-none rounded-sm uppercase font-semibold hover:bg-blue-800 hover:text-white cursor-pointer text-xs text-secondary-foreground">
              Read More
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
          {valueProps.map((val, i) => (
            <MiniCard key={i} {...val} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 sm:mt-10 max-w-4xl mx-auto">
        <GradientBox
          image="/assets/about-us.svg"
          title="About Us"
          subtitle="How we are building a strong Financesbazar Brand"
          buttonText="KNOW MORE"
        />
        <GradientBox
          image="/assets/work-us.svg"
          title="Work With Us"
          subtitle="Want to Join Team Financesbazar?"
          buttonText="JOIN US"
        />
      </div>
    </div>
  );
}
