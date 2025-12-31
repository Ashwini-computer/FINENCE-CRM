import React from "react";
import PageLayout from "../../../layout/PageLayout";
import {
  CAHerosection,
  Customcard,
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
  BoldList,
} from "@/custom/Typography";
import { ProducerCompanyADescription } from "./RocAnnualComplianceForProducerCompanyDescription";

const RocAnnualComplianceForProducerCompanyPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={ProducerCompanyADescription?.section1?.heading1}
          heading2={ProducerCompanyADescription?.section1?.heading2}
          heroimg={ProducerCompanyADescription?.section1?.heroimg}
          intro={ProducerCompanyADescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is Annual Compliance for Producer Company?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyH4 className=" my-2 text-base sm:text-lg">
            What is a Producer Company?
          </TypographyH4>
          <TypographyP>
            A Producer Company means a company that is formed with a purpose of
            engaging in any activity that is connected to or relatable to any
            primary produce. In other words, a Producer Company is a company
            that is formed with a primary objective of production, harvesting,
            procurement, grading, pooling, handling, marketing, selling, port of
            primary produce of the members or import of goods or services for
            their benefits.
          </TypographyP>

          <TypographyH4 className=" my-2 text-base sm:text-lg">
            Annual Compliance of the Producer Company
          </TypographyH4>
          <ul className="list-disc ml-8 mt-4 text-sm sm:text-base">
            <li>
              Annual Compliance refers to specific forms that the Companies are
              required to file with the Registrar of the Companies during a
              year.
            </li>
            <li>
              Be it any type of company, to be adhere to the Annual ROC
              Compliance is mandatory.
            </li>
            <li>
              The Producer Company needs to file the Balance Sheet, P&L Account
              and other documents with MCA.
            </li>
            <li>
              Hence, being a Producer Company, you need to file your Annual
              Compliance Forms correctly on a regular basis in order to ensure
              that your company gets good legal standing. The Following are the
              main annual compliance for a Producer Company.
            </li>
          </ul>
          <TypographyH3 className="py-4 text-blue-950 text-lg sm:text-xl">
            Advantages of Complying with the Annual Compliance for Producer
            Company
          </TypographyH3>

          <img
            loading="lazy"
            src={ProducerCompanyADescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <ul className="list-disc ml-8 mt-4 text-sm sm:text-base">
            <li>
              Credibility and Transparency: Compliance is mandatory for Producer
              Company. When the company is regular with Annual Compliance, it
              raises its credibility and transparency of an organization.
            </li>
            <li>
              Active Status: Non-filing or defaults in complying with the Annual
              Filing for Producer Company may result in striking off the name of
              the Company by the Registrar of Company. Hence, Annual Compliance
              in helps in maintaining active status.
            </li>
            <li>
              Assures Investors and customers: Annual Compliance creates a
              competitive advantage for the Producer Company in the market. This
              can be useful to advertise the business and assure the investors
              and customers about the company’s business.
            </li>
            <li>
              Avoiding Penalties: Regularity in filing the Annual Compliance
              helps the Producer Company to avoid the heavy penalties.
            </li>
          </ul>
          <TypographyH4 className="p-3 text-blue-950 text-lg sm:text-xl">
            Why Uc Services ?
          </TypographyH4>
          <TypographyP className="text-sm sm:text-base px-6">
            https://financesbazar.com/ is a group of intellectuals. The entire
            team of Uc Services.com consists of Highly qualified CA, CS, Lawyers
            and business administrators. https://financesbazar.com/ would be a
            one stop destination for your Nidhi Company Annual Filing in India.
            We also provide services like Company registration, Start up
            advisory, Secretarial compliance services, PAN / TAN application,
            DIN registration, ESI registration GST registration, Trademark
            registration, GST / Income tax return filing and many more. Lack of
            documents? Unaware about the Legal aspects of business? Don’t worry,
            we have got you covered with the help and guidance you are looking
            for. To know about the entire Nidhi Company Compliance Checklist,
            get in touch with our compliance manager on +91 7709 222 331 or
            email us at care@financesbazar.com for free consultation and to know
            more about us and the services we provide.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {ProducerCompanyADescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            {ProducerCompanyADescription?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}
        <Packages packages={ProducerCompanyADescription?.section3?.packages} />
        {/* listoptionSection */}
        <div className="max-w-5xl w-full mt-7">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            What are the Major Annual Compliance for Producer Company?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 mt-4" />
          <TypographyH3 className="py-3 text-blue-950 text-lg">
            Points to make your decision easy
          </TypographyH3>
          <BoldList
            className="max-w-5xl w-full text-left sm:px-2 md:px-4"
            items={ProducerCompanyADescription?.listoptions}
          />
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            Documents required for Producer Company Annual Compliance
          </TypographyH2>
          <div className="flex justify-center mt-10">
            <RequiredDocuments
              requiredDocuments={ProducerCompanyADescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={ProducerCompanyADescription?.section4?.heading1}
          steps={ProducerCompanyADescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={ProducerCompanyADescription?.section5?.cards} />
        </div>

        {/* FAQs */}
        <Faqs
          heading1={ProducerCompanyADescription?.section6?.heading1}
          heading2={ProducerCompanyADescription?.section6?.heading2}
          toggleoptions={ProducerCompanyADescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default RocAnnualComplianceForProducerCompanyPage;
