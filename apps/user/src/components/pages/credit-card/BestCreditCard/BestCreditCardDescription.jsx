import {
  TypographyPBlueColor,
  TypographySmall,
  BoldList,
  TypographyH4BlueColor,
  TypographyList2,
  TypographyP,
} from "@/custom/Typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ScrollSpyLinks from "@/custom/ScrollSpyLinks";
import { ToggleSection } from "@/custom/ToggleSection";
import { bestPopularCreditCard } from "../CreditCardJSONData";

const creditCardLinks = [
  {
    title: "Best Cashback & Shopping Cards",
    link: "#cashback-shopping",
  },
  {
    title: "Best Rewards Credit Cards",
    link: "#rewards",
  },
  {
    title: "Best Travel Credit Cards",
    link: "#travel",
  },
  {
    title: "Best Premium Credit Cards",
    link: "#premium",
  },
  {
    title: "Best Fuel Credit Cards",
    link: "#fuel",
  },
  {
    title: "How to Choose the Right Card?",
    link: "#how-to-choose",
  },
  {
    title: "FAQs",
    link: "#faqs",
  },
];

export default function BestCreditCardDescription() {
  const [openSection, setOpenSection] = useState(null);

  return (
    <>
      <TypographyPBlueColor className="italic">
        Note: HDFC Infinia is not included in the above list as it is an
        invite-only card.
      </TypographyPBlueColor>
      <div className="text-center">
        <Button size="sm" className="self-center">
          Calculate Rewards on Your Credit Card!
        </Button>
      </div>
      <TypographyPBlueColor>
        Apart from the above-mentioned top 10 credit cards in India, the best
        credit cards also vary across different categories. We have further
        listed the <strong>25 best credit cards in India</strong> across
        multiple categories-{" "}
        <strong>Cashback & Shopping, Rewards, Travel, Premium, and Fuel</strong>
        .
      </TypographyPBlueColor>
      <TypographyPBlueColor>
        We have talked about the major benefits of these credit cards along with
        a few reasons why we recommend them and which is the{" "}
        <strong>best credit card in India</strong> for each category. To find
        the right credit card, you must always analyze your spending patterns
        and accordingly look for a card that offers maximum value in your
        preferred spending categories.
      </TypographyPBlueColor>

      <ScrollSpyLinks links={creditCardLinks} setOpenSection={setOpenSection} />
      <>
        <TypographyP className="sm:text-xl text-lg font-light bg-gray-200 mt-6 p-3">
          Best Cashback & Shopping Credit Cards in India
        </TypographyP>
        <TypographyPBlueColor>
          Here are the best credit cards in India that offer substantial value
          on shopping across select brands as well as on general online
          spending, in the form of cashback.
        </TypographyPBlueColor>
        {bestPopularCreditCard?.map((card, index) => (
          <CreditCardBenefits key={index} {...card} />
        ))}
      </>
    </>
  );
}

const headers = ["Key Benefits", "Why We Like It"];

export const CreditCardBenefits = ({
  name,
  image,
  joiningFee,
  annualFee,
  benefits,
  whyWeLikeIt,
}) => {
  return (
    <div className="mb-6">
      <TypographyH4BlueColor>{name}</TypographyH4BlueColor>
      <div className="my-6">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className={
            name == "YES Bank financesbazar PaisaSave Credit Card" && "h-80"
          }
        />
      </div>
      <TypographyP className="text-md text-blue-950 font-semibold">
        Joining Fee: {joiningFee}
      </TypographyP>
      <TypographyP className="text-md text-blue-950 font-semibold">
        Annual Fee: {annualFee}
      </TypographyP>

      <Table className="border border-black mt-2">
        <TableHeader>
          <TableRow className="bg-blue-800 hover:bg-blue-800 text-white">
            {headers.map((header, i) => (
              <TableHead
                key={i}
                className={`font-semibold text-white text-center ${
                  i < headers.length - 1 ? "border-r border-black" : ""
                }`}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {benefits.map((benefit, index) => (
            <TableRow key={index} className="border border-black">
              <TableCell className="text-blue-950 border-r whitespace-normal break-words border-black">
                {benefit}
              </TableCell>
              <TableCell className="text-blue-950 whitespace-normal break-words border-black">
                {whyWeLikeIt[index] || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
