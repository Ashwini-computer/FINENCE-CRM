import React from "react";
import PageLayout from "../../../layout/PageLayout";
import {
  CAHerosection,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
  Stepscard,
} from "../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";
import { CompanyAnnualDescription } from "./RocAnnualFFPLCompanyDescription";

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
            What is ROC Annual Filing for Public Limited Company?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>

          <TypographyH4 className="ml-3 text-base sm:text-lg">
            What is a Public Limited Company?
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>
              A Public Limited Company is a company that offers shares to the
              general public and has limited liability.
            </li>
            <li>
              Moreover, Public Limited Company is required to publish its true
              financial status to its shareholders.
            </li>
          </ul>
          <TypographyH4 className="my-3 ml-3 text-base sm:text-lg">
            Annual Return of the Public Limited Company
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>
              The Public Limited Companies are undoubtedly required to make the
              largest number of compliances every year, as compared to those by
              all other types of companies.
            </li>
            <li>
              Every Public Limited Company in India mandatorily required to file
              annual filling every year as per the Companies Act, 2013.
            </li>
            <li>
              The Public Limited Company needs to file the Balance Sheet, P&L
              Account and other documents with MCA.
            </li>
            <li>
              The Annual Return is totally different from the income tax
              department and it’s governed by Ministry of Corporate Affairs.
            </li>
          </ul>

          <img
            loading="lazy"
            src={CompanyAnnualDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH4 className="my-3 ml-3 text-base sm:text-lg">
            Annual Return of the Public Limited Company
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>
              Proper compliance according to company law is the obligation of
              every company, it creates transparency. The regular compliance
              increases the credibility of the company.
            </li>
            <li>
              Regular annual compliance results in assuring the clients that the
              company is regularly reviewing its operation. So, they can trust
              the company regarding their operations.
            </li>
            <li>
              Annual compliance gives a competitive edge in the market. It can
              be used in advertising the business & assuring the investors or
              customers about the company’s business.
            </li>
            <li>
              Annual compliance by the companies ensures that the data collected
              for annual compliance is correct.
            </li>
            <li>
              Many times small businesses end up with heavy penalties as they do
              not comply with annual compliances. So, regular annual compliances
              result in avoiding heavy penalties
            </li>
          </ul>

          <TypographyP className="text-sm sm:text-base mt-7">
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

        {/* Required Documents */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            Documents Required for ROC Compliance for Pvt Ltd Company
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-900 my-4" />
          <div className="flex justify-center mt-10">
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
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={CompanyAnnualDescription?.section5?.cards} />
        </div>

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
