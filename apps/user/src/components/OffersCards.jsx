import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/custom/Typography";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { TypographyH4BlueColor } from "../custom/Typography";
import { Link } from "react-router-dom";

export const OffersCards = ({
  headline,
  offers,
  buttontext,
  className,
  loanType,
}) => {
  console.log("loanType=>", loanType);
  const [showAllOffers, setShowAllOffers] = useState(false);
  const visibleOffers = showAllOffers ? offers : offers.slice(0, 4);

  return (
    <>
      <h2 className="sm:text-2xl text-lg font-bold text-blue-950 mb-3 px-3">
        {headline}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {visibleOffers.map((offer) => (
          <div
            key={offer.id}
            className={`border shadow p-6 rounded-md ${className}`}
          >
            <div className="flex sm:flex-row flex-col justify-between sm:items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="border p-1 rounded">
                  <img
                    loading="lazy"
                    src={offer?.img}
                    alt={offer?.name}
                    className="w-5 h-5"
                  />
                </div>
                <TypographyH4BlueColor className="font-bold mt-0 text-lg">
                  {offer?.name}
                </TypographyH4BlueColor>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {offer.highlights.map((highlight, index) => (
                  <span
                    key={`${offer.id}-highlight-${index}`}
                    className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-4 items-center justify-between flex-wrap">
              <div>
                <div className="text-xs text-gray-500">Max. Loan Amt.</div>
                <TypographySmall className="font-semibold">
                  {offer?.max_loan}
                </TypographySmall>
              </div>
              <div>
                <div className="text-xs text-gray-500">Rate of Interest</div>
                <TypographySmall className="font-semibold">
                  {offer?.interest_rate}
                </TypographySmall>
              </div>
              <div>
                <div className="text-xs text-gray-500">Tenure</div>
                <TypographySmall className="font-semibold">
                  {offer?.tenure}
                </TypographySmall>
              </div>
              <div>
                <div className="text-xs text-gray-500">Processing Fee</div>
                <TypographySmall className="font-semibold">
                  {offer?.processing_fee}
                </TypographySmall>
              </div>
              <Link to={`/myaccount/loans/apply/${loanType}`}>
                <Button className="text-xs">
                  {buttontext ? buttontext : ""}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button
          onClick={() => setShowAllOffers(!showAllOffers)}
          className="text-sm font-semibold"
        >
          {showAllOffers ? (
            <>
              <IoRemoveOutline className="text-lg" />
              Show Less Offers
            </>
          ) : (
            <>
              <IoAddOutline className="text-lg" />
              Show More Offers
            </>
          )}
        </Button>
      </div>
    </>
  );
};
