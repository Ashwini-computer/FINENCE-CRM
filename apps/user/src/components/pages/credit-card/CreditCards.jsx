import {
  TypographyH4BlueColor,
  TypographyPBlueColor,
  TypographyList2,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useState } from "react";

export const CreditCard = ({
  title,
  image,
  rating,
  review,
  joiningFee,
  annualFee,
  highlights,
  tags,
  benefits,
  buttontext,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border bg-white rounded-md overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-4 border-b">
        {/* Card Image */}
        <div className="flex flex-col border-r p-4 sm:p-6 sm:col-span-3">
          <TypographyH4BlueColor className="mt-0 sm:hidden sm:mb-2 block">
            {title}
          </TypographyH4BlueColor>
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="sm:w-28 w-28 h-28 sm:h-36 object-contain"
          />
          <div className="flex items-center gap-1 sm:mt-2">
            <div className="text-yellow-500 text-lg">
              {"★".repeat(Math.floor(rating)) +
                "☆".repeat(5 - Math.floor(rating))}
            </div>
            <div className="text-sm text-gray-600">{review}</div>
          </div>
        </div>

        {/* Card Details */}
        <div className="flex flex-col gap-3 p-4 sm:col-span-9">
          <TypographyH4BlueColor className="hidden mt-0 sm:block">
            {title}
          </TypographyH4BlueColor>

          <div className="flex flex-wrap gap-8 text-sm text-gray-600">
            <div>
              <span className="font-medium text-black">Joining fee:</span>{" "}
              {joiningFee}
            </div>
            <div>
              <span className="font-medium text-black">
                Annual/Renewal Fee:
              </span>{" "}
              {annualFee}
            </div>
          </div>

          <div className="grid gap-2 text-sm text-gray-700">
            {highlights?.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap mt-2">
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-green-200 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1 cursor-pointer text-blue-700 font-semibold"
            >
              {showDetails ? <IoRemoveSharp /> : <IoAddSharp />}
              <TypographyPBlueColor>
                {showDetails ? "Less Details" : "More Details"}
              </TypographyPBlueColor>
            </div>
            <Button size="sm">
              {buttontext ? buttontext : "Check Eligibility"}
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      {showDetails && (
        <div className="p-4">
          <h3 className="font-semibold text-gray-800">Product Details</h3>
          <TypographyList2
            className="mt-2 sm:ml-4 mb-2 sm:text-sm text-gray-600"
            items={benefits}
          />
          <Button variant="link" className="font-medium text-blue-700">
            Know More
          </Button>
        </div>
      )}
    </div>
  );
};
