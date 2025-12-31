import React from "react";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
  Stepscard,
} from "../../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
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

import PageLayout from "../../../../layout/PageLayout";
import { ADDaDirectorDescription } from "./AddAdirectorPartnerDescription";
const AddAdirectorPartnerPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={ADDaDirectorDescription?.section1?.heading1}
          heading2={ADDaDirectorDescription?.section1?.heading2}
          heroimg={ADDaDirectorDescription?.section1?.heroimg}
          intro={ADDaDirectorDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is Appointment of Director?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            Who is Director in a Company?
          </TypographyH3>
          <ul className="list-disc pl-5 space-y-3 text-justify leading-relaxed text-gray-800">
            <li>
              Director is an individual who directs, manages, oversees or
              controls the affairs of the Company.
            </li>
            <li>
              He is a person appointed to the Board of a company to perform the
              duties and functions of a company in accordance with the
              provisions of The Company Act, 2013.
            </li>
            <li>
              Director of a company is a natural person elected by the
              shareholders as per the Memorandum of Association and Articles of
              Association of the company.
            </li>
            <li>
              The Board of Directors means a group of those individuals elected
              by the shareholders of a company to manage the affairs of the
              company.
            </li>
          </ul>
          <TypographyH4 className="text-xl mt-5 text-blue-950">
            Minimum number of director based on the type of the company:
          </TypographyH4>
          <Table className="mt-6">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-center">
                  Type of company
                </TableHead>
                <TableHead className="font-bold text-center">
                  No. of Director required
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-muted">
                <TableCell className="text-center">
                  One Person Company
                </TableCell>
                <TableCell className="text-center">1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">
                  Private Limited Company
                </TableCell>
                <TableCell className="text-center">2</TableCell>
              </TableRow>
              <TableRow className="bg-muted">
                <TableCell className="text-center">
                  Public Limited Company
                </TableCell>
                <TableCell className="text-center">3</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <img
            loading="lazy"
            src={ADDaDirectorDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 mb-3">
            Necessity / Reasons of appointing an additional Director in a
            company:
          </TypographyH3>

          <ul className="list-disc pl-5 space-y-3 text-justify leading-relaxed text-gray-800">
            <li>
              When there is sudden death or plans of retirement / resignation or
              other personal reasons, if the existing Directors are unable to
              work for a long time, in such cases appointing an additional
              director is necessary to meet the statutory limit of the company.
            </li>
            <li>
              For the growth of business, it is necessary to hire new talent in
              the management of the company.
            </li>
            <li>
              In case where there is new product line or department added in the
              company, then to lead the team, appointing an expert as a director
              is necessary.
            </li>
            <li>
              When the specified statutory number of directors reduces, then it
              is mandatory for a company to appoint a new director.
            </li>
            <li>
              To help the shareholders assign more operational responsibilities
              without losing any strategic control.
            </li>
          </ul>

          <TypographyH3 className="text-blue-950 mt-8 mb-3">
            Eligibility criteria for a person to be appointed as director in a
            company:
          </TypographyH3>

          <ul className="list-disc pl-5 space-y-3 text-justify leading-relaxed text-gray-800">
            <li>
              The person appointed must be eligible as per the relevant clauses
              in the Articles of Association.
            </li>
            <li>
              The proposed individual must be above the age of 18 i.e. a major.
            </li>
            <li>
              He or she must qualify as per the laws mentioned under the
              Companies Act, 2013.
            </li>
            <li>
              The Members of the Board must consent to the appointment of the
              proposed individual in which he seeks to get appointed as
              director.
            </li>
            <li>
              It must be noted that the Companies Act does not mention any
              educational qualification in order to be eligible to become a
              Director.
            </li>
            <li>
              Indian National, Non–Resident Indians, and Foreign Nationals can
              be appointed as a director in India.
            </li>
          </ul>
          <TypographyH4 className="mt-4 text-base">
            Why Uc Services as your service provider for Appointing a director
            in a company in India?
          </TypographyH4>
          <TypographyP className="mt-2">
            Uc Services is a group of intellectuals. The entire team of Uc
            Services consists of Highly qualified CA, CS, Lawyers and business
            administrators.Uc Services would be a one stop destination for
            Appointing a Director for your company. Appointment of Director is
            easy, seamless, cheapest and quickest
            withhttps://financesbazar.com/! Apart from a Director
            Appointment,https://financesbazar.com/ also helps entrepreneurs with
            Private Limited Company Registration, Public Limited Company
            Registration, LLP Registration, HUF, One Person Company and all
            other compliance easily. You may get in touch with our compliance
            manager on +91 7709 222 331 or email care@financesbazar.com for free
            consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {ADDaDirectorDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {ADDaDirectorDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={ADDaDirectorDescription?.section3?.packages} />
        {/* CustomCad Section */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            Types of Directors
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            An Easy understanding
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {ADDaDirectorDescription?.customcardContent?.map((card, index) => (
              <Customcard
                key={index}
                title={card?.title}
                content={card?.content}
              />
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 mt-10 mx-auto">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl text-center">
            How to Appoint a Director / Procedure of appointing / adding a
            director in a company
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={ADDaDirectorDescription?.RequiredDocuments}
            />
          </div>
        </div>
        {/* Steps Section */}
        <Steps
          heading1={ADDaDirectorDescription?.section4?.heading1}
          steps={ADDaDirectorDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={ADDaDirectorDescription?.section5?.cards} />
        </div>

        <Faqs
          heading1={ADDaDirectorDescription?.section6?.heading1}
          heading2={ADDaDirectorDescription?.section6?.heading2}
          toggleoptions={ADDaDirectorDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default AddAdirectorPartnerPage;
