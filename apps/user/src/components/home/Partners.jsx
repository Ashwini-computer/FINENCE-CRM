"use client";

import { useState, useEffect } from "react";
import { TypographyH3 } from "@/custom/Typography";

// Partner categories
const partnerCategories = [
  { id: "all", name: "All Unsecured Loans" },
  { id: "credit-card", name: "Credit Card" },
  { id: "personal-loan", name: "Personal Loan" },
  { id: "business-loan", name: "Business-Loan" },
  { id: "home-loan", name: "Home Loan" },
  { id: "car-loan", name: "Car Loan" },
  { id: "credit-bureau", name: "Credit Bureau" },
  { id: "credit-improvement", name: "Credit Improvement" },
];

// Partner logos per category
const partnerImages = {
  all: [
    "adityaBirala",
    "arka",
    "auSmallFinance",
    "axis",
    "badoda",
    "bajajHosingFinance",
    "bandan",
    "clx",
    "creditSaiSon",
    "csb",
    "dbs",
    "dcb",
    "dhanlaxmi",
    "equitas",
    "federal",
    "ftCash",
    "hdfc",
    "hindujaHousing",
    "icici",
    "idbi",
    "idfc",
    "iifl",
    "indiabulls",
    "indiTrade",
    "indusland",
    "jmfinance",
    "karnataka",
    "kotak",
    "licHFL",
    "ltFinance",
    "mahindraFinance",
    "moneyWide",
    "motilalOsWal",
    "piramal",
    "pnb",
    "poonawala",
    "profectusCapital",
    "protium",
    "rbl",
    "sbi",
    "sf",
    "shriramCity",
    "southIndian",
    "suryodaya",
    "tab",
    "tataCapital",
    "unity",
    "utkarshSmall",
    "yes",
  ],
  "credit-card": ["hdfc", "icici", "idbi", "central"],
  "home-loan": [
    "adityaBirala",
    "auSmallFinance",
    "panjabSind",
    "axis",
    "badoda",
    "bajajHosingFinance",
    "bandan",
    "bom",
    "dbs",
    "dcb",
    "dhanlaxmi",
    "federal",
    "ftCash",
    "hdfc",
    "hindujaHousing",
    "icici",
    "idbi",
    "idfc",
    "iifl",
    "indiabulls",
    "indiTrade",
    "indusland",
    "jmfinance",
    "karnataka",
    "kotak",
    "licHFL",
    "ltFinance",
    "mahindraFinance",
    "moneyWide",
    "motilalOsWal",
    "piramal",
    "pnb",
    "poonawala",
    "rbl",
    "sbi",
    "sf",
    "southIndian",
    "suryodaya",
    "tab",
    "tataCapital",
    "unity",
    "utkarshSmall",
    "yes",
  ],
  "personal-loan": [
    "auSmallFinance",
    "axis",
    "badoda",
    "bandan",
    "bom",
    "clx",
    "creditSaiSon",
    "csb",
    "dcb",
    "equitas",
    "federal",
    "ftCash",
    "hdfc",
    "hindujaHousing",
    "icici",
    "idbi",
    "idfc",
    "iifl",
    "indiTrade",
    "indusland",
    "karnataka",
    "kotak",
    "ltFinance",
    "moneyWide",
    "piramal",
    "poonawala",
    "profectusCapital",
    "protium",
    "rbl",
    "sbi",
    "southIndian",
    "suryodaya",
    "tab",
    "tataCapital",
    "utkarshSmall",
    "yes",
  ],
  "business-loan": [
    "arka",
    "auSmallFinance",
    "badoda",
    "bandan",
    "bom",
    "clx",
    "creditSaiSon",
    "csb",
    "dcb",
    "equitas",
    "federal",
    "ftCash",
    "hdfc",
    "hindujaHousing",
    "icici",
    "idbi",
    "idfc",
    "iifl",
    "indusland",
    "karnataka",
    "kotak",
    "ltFinance",
    "piramal",
    "poonawala",
    "profectusCapital",
    "protium",
    "rbl",
    "sbi",
    "southIndian",
    "suryodaya",
    "tab",
    "tataCapital",
    "utkarshSmall",
    "yes",
  ],
  "car-loan": ["sf", "shriramCity"],
  "credit-bureau": ["trasnunion", "exprerrian", "equifax", "crif"],
  "credit-improvement": [],
};

export default function Partners() {
  const [activeTab, setActiveTab] = useState("all");
  const [imageData, setImageData] = useState([]);

  // Get category heading
  const currentCategory = partnerCategories.find((cat) => cat.id === activeTab);

  useEffect(() => {
    const selectedImages = partnerImages[activeTab] || [];

    const images = selectedImages.map((filename, index) => ({
      id: index + 1,
      image: `/banks/logo/${filename}.png`,
      name: filename.replace(/([A-Z])/g, " $1").trim(),
    }));

    setImageData(images);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-r from-[#f5f9ff] to-[#f0fdfa] overflow-hidden py-4">
      <div className="max-w-6xl mx-auto p-6">
        {/* Main Heading */}
        <div className="max-w-sm grid gap-4">
          <div className="w-14 h-0.5 bg-accent"></div>
          <TypographyH3 className="text-blue-950 font-bold tracking-normal">
            Our partners from
            <br />
            across the industry
          </TypographyH3>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-4 mt-8 sm:mt-12 overflow-x-auto scrollbar-hide pb-2">
          {partnerCategories.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveTab(option.id)}
              className={`whitespace-nowrap ${
                activeTab === option.id
                  ? "bg-primary text-white border-none"
                  : "text-primary"
              } sm:text-sm text-xs font-semibold border border-primary cursor-pointer sm:px-4 px-2 py-1 rounded-sm`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Section Heading */}
        <h4 className="mt-4 mb-4 text-lg sm:text-xl font-semibold text-blue-900">
          Banks for {currentCategory?.name}
        </h4>

        {/* Logos */}
        <div className="grid grid-cols-3 text-center sm:grid-cols-7 sm:gap-6 gap-3 items-center">
          {imageData.length > 0 ? (
            imageData.map((partner) => (
              <div
                key={partner.id}
                className="text-xs font-semibold opacity-85 flex justify-center flex-wrap items-center h-11 sm:h-14 hover:scale-110 transition-all cursor-pointer bg-white rounded-md shadow-xl text-center p-2 px-3 whitespace-normal break-words"
              >
                <img
                  loading="lazy"
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-gray-500 text-sm italic">
              No partners found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
