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
import { CompanyAnnualDescription } from "./CompanyAnnualFilingDescription";

const CompanyAnnualFilingPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={CompanyAnnualDescription?.section1?.heading1}
          heading2={CompanyAnnualDescription?.section1?.heading2}
          heroimg={CompanyAnnualDescription?.section1?.heroimg}
          intro={CompanyAnnualDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            ROC Compliance for Pvt Ltd Company
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP className="p-4 text-sm sm:text-base">
            ROC compliances for Pvt Ltd Company are mandatory under the
            Companies Act, 2013...
          </TypographyP>

          <TypographyH4 className="ml-3 text-base sm:text-lg">
            What is Annual ROC Compliance Filing for Pvt Ltd Company?
          </TypographyH4>
          <TypographyP className="p-4 text-sm sm:text-base">
            ROC compliances for Pvt Ltd Company involve the mandatory process...
          </TypographyP>

          <TypographyH4 className="my-3 ml-3 text-base sm:text-lg">
            The annual return for Pvt Ltd company must include:
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>Balance Sheet & Profit & Loss Account</li>
            <li>Compliance Certificate</li>
            <li>Company’s Registered Office Address</li>
            <li>Details of Shareholders, Directors & Securities</li>
          </ul>

          <img
            loading="lazy"
            src={CompanyAnnualDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />

          <TypographyP className="text-sm sm:text-base">
            https://financesbazar.com/ is an eminent business platform and a
            progressive concept, which helps end-to-end incorporation,
            compliance, advisory, and management consultancy services to clients
            in India and abroad. Filing online TDS Returns is easy, seamless,
            cheapest, and quickest with Uc Serices.com! Apart from online return
            filing under TDS services, Uc Serices.com also helps you to file
            Income Tax Returns, TDS Returns, PF Returns, and ESI Returns easily.
            Contact Uc Serices to know about the TDS Return filing process.
            Inquire for a TDS return filing service provider for Online TDS
            returns, Find out when to file a TDS return. You may get in touch
            with our compliance manager at +91 7709 222 331 or email
            care@financesbazar.com for a free consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {CompanyAnnualDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            {CompanyAnnualDescription?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}
        <Packages packages={CompanyAnnualDescription?.section3?.packages} />

        {/* Importance */}
        <div className="max-w-5xl w-full">
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Importance of ROC Compliance for Pvt Ltd company
          </TypographyH3>
          <ul className="list-disc ml-8 mt-2 text-blue-950 text-sm sm:text-base">
            <li>Ensures legal compliance and avoids penalties.</li>
            <li>Helps in maintaining proper financial records.</li>
            <li>Provides updated financial info to stakeholders.</li>
            <li>Avoids director disqualification.</li>
          </ul>
        </div>

        {/* Table Section */}
        <div className="max-w-5xl py-5 w-full">
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            ROC annual compliance form and its due dates for Pvt Ltd Company
          </TypographyH3>
          <TypographyH4 className="p-3 text-base">
            There are several important forms which should be filed while filing
            annual returns.
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
                {CompanyAnnualDescription?.tabledata?.map((item, index) => (
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

        {/* Benefits */}
        <div className="max-w-5xl px-4 w-full text-blue-950">
          <TypographyH3 className="p-3 text-lg">
            Benefits of annual return filing
          </TypographyH3>
          <ul className="list-disc pl-5 space-y-2 ml-2 text-sm sm:text-base">
            <li>Keeps Company Active</li>
            <li>Builds Trust with Stakeholders</li>
            <li>Supports Smooth Business Operations</li>
            <li>Avoids Heavy Penalties</li>
            <li>Helps in Business Planning</li>
            <li>Required for Fundraising or Exit</li>
          </ul>
        </div>

        {/* Key ROC Filing Cards */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH3 className="text-blue-950 text-lg">
            Key ROC Compliance Filing for Pvt Ltd Company
          </TypographyH3>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            A Private Limited Company must file the following annual returns
            with the MCA
          </TypographyH3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {CompanyAnnualDescription?.customcardContent?.map((card, index) => (
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
            Documents Required for ROC Compliance for Pvt Ltd Company
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-900 my-4" />
          <div className="flex justify-center">
            <RequiredDocuments
              requiredDocuments={CompanyAnnualDescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={CompanyAnnualDescription?.section4?.heading1}
          steps={CompanyAnnualDescription?.section4?.steps}
        />

        {/* FAQs */}
        <Faqs
          heading1={CompanyAnnualDescription?.section6?.heading1}
          heading2={CompanyAnnualDescription?.section6?.heading2}
          toggleoptions={CompanyAnnualDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default CompanyAnnualFilingPage;
