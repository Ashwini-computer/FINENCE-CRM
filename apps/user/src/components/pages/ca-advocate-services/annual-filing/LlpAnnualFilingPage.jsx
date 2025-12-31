import React from "react";
import PageLayout from "../../../layout/PageLayout";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
} from "../../CaSectionComponents";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";

import { LLPAnnualDescription } from "./LlpAnnualFilingDescription";

const LLPAnnualFilingPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={LLPAnnualDescription?.section1?.heading1}
          heading2={LLPAnnualDescription?.section1?.heading2}
          heroimg={LLPAnnualDescription?.section1?.heroimg}
          intro={LLPAnnualDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            {LLPAnnualDescription?.section2?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            {LLPAnnualDescription?.section2?.heading2}
          </TypographyH3>

          {LLPAnnualDescription?.section2?.listoptions?.map((item, index) => (
            <TypographyP key={index} className="p-4 text-sm sm:text-base">
              {item.value}
            </TypographyP>
          ))}

          <img
            loading="lazy"
            src={LLPAnnualDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />

          <TypographyP className="text-sm sm:text-base">
            {LLPAnnualDescription?.section2?.content}
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {LLPAnnualDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            {LLPAnnualDescription?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}
        <Packages packages={LLPAnnualDescription?.section3?.packages} />

        {/* Table Section */}
        <div className="max-w-5xl py-5 w-full">
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            LLP Annual Filing Forms and Due Dates
          </TypographyH3>
          <TypographyH4 className="p-3 text-base">
            These are the essential forms LLPs must file to maintain compliance.
          </TypographyH4>

          <div className="overflow-x-auto">
            <Table className="min-w-full mt-3 text-sm sm:text-base">
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold border-r">
                    Form Name
                  </TableHead>
                  <TableHead className="font-semibold border-r">
                    Due Date
                  </TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {LLPAnnualDescription?.tabledata?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="border-r break-words">
                      {item.formName}
                    </TableCell>
                    <TableCell className="border-r break-words">
                      {item.dueDate}
                    </TableCell>
                    <TableCell className="break-words">
                      {item.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Key Compliance Cards */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH3 className="text-blue-950 text-lg">
            Key LLP Annual Compliance Requirements
          </TypographyH3>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            These are the filings every LLP must make
          </TypographyH3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {LLPAnnualDescription?.customcardContent?.map((card, index) => (
              <Customcard
                key={index}
                title={card?.title}
                content={card?.content}
              />
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            Documents Required for LLP Annual Filing
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-900 my-4" />
          <div className="flex justify-center">
            <RequiredDocuments
              requiredDocuments={LLPAnnualDescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={LLPAnnualDescription?.section4?.heading1}
          steps={LLPAnnualDescription?.section4?.steps}
        />

        {/* FAQs */}
        <Faqs
          heading1={LLPAnnualDescription?.section6?.heading1}
          heading2={LLPAnnualDescription?.section6?.heading2}
          toggleoptions={LLPAnnualDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default LLPAnnualFilingPage;
