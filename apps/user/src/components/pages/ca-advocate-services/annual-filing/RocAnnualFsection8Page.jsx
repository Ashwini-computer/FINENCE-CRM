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
import { RocAnnualFsection8 } from "./RocAnnualFsection8Description";

const RocAnnualFsection8Page = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={RocAnnualFsection8?.section1?.heading1}
          heading2={RocAnnualFsection8?.section1?.heading2}
          heroimg={RocAnnualFsection8?.section1?.heroimg}
          intro={RocAnnualFsection8?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            ROC Annual Filing for NGO / NPO / Section 8 Company
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>

          <TypographyH4 className="ml-3 text-base sm:text-lg">
            What is a Non-Profit Organization / Non Government Organization?
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>
              A Non-Profit Organization means a trust, company or other
              association of persons, that is established and incorporated for a
              public purpose.
            </li>
            <li>
              The income and property of such organization are distributive
              neither to its members nor to office bearers except as reasonable
              compensation for services rendered.
            </li>
            <li>
              In India, NGO includes all kinds of Non Profit Organization i.e.
              Trust, Society and Section 8 Company.
            </li>
            <li>
              A non-profit Company can also be registered under section 8 of the
              Companies Act with the Registrar of Companies.
            </li>
            <li>
              Other names for such not-for-profit organizations are “Sangathan”,
              “Sangh”, “Sangam”. Income tax exemption is available for all
              non-profit NGOs.
            </li>
          </ul>
          <TypographyH4 className="my-3 ml-3 text-base sm:text-lg">
            Annual Compliance of NPO / NGO / Section 8 Company
          </TypographyH4>
          <TypographyP className="pl-4">
            Section 8 Company is registered under the Companies Act, 2013. Hence
            the Section 8 Company has to comply with the Compliance mentioned in
            the said act for the companies. It is necessary for the Section 8
            Company to follow the compliances prescribed by the Ministry of
            Corporate Affairs.
          </TypographyP>
          <TypographyH4 className="ml-3 mt-2 text-base sm:text-lg">
            Advantages of Section 8 Company Annual Compliance
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>
              Regular Compliance fulfillment provides the Section 8 Company with
              the better credibility or trustworthiness.
            </li>
            <li>
              It also helps Company to raise funds for the causes that the
              Section 8 Company.
            </li>
            <li>
              Also, the regular Annual Return Filing ensures the continuous
              existence of the organization.
            </li>
            <li>
              Being Compliant and adhering to the Annual Compliance needs may
              protect the company from getting in to all types of legal trouble.
            </li>
            <li>
              Also, it helps the Section 8 Company in protecting itself from
              penalties and punishments.
            </li>
            <li>
              The main objective of Section 8 Company is to form trust among its
              customers, being regular in filing annual return helps the company
              achieve this objective.
            </li>
          </ul>

          <img
            loading="lazy"
            src={RocAnnualFsection8?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />

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
            {RocAnnualFsection8?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            {RocAnnualFsection8?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}

        <Packages packages={RocAnnualFsection8?.section3?.packages} />
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            List of Major Annual Compliance for Section 8 Company
          </TypographyH2>
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            Points to make your decision easy
          </TypographyH3>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>
              <strong>Form MGT 7:</strong> The Section 8 Company requires to
              file Annual Return in Form MGT–7 regarding the latest information
              about the directors and shareholders of the Section 8 Company.
            </li>
            <li>
              <strong>Form AOC 4:</strong> Form AOC–4 needs to be filed for
              filing Financial Statements with the Balance Sheet, Profit and
              Loss Account, Directors’ Report, Cash Flow Statement, Auditor’s
              Report, and the Consolidated Financial Statement.
            </li>
            <li>
              <strong>Form DIR 8:</strong> Every Director of the Section 8
              Company has to file the disclosure of non–disqualification in each
              Financial Year.
            </li>
            <li>
              <strong>Form ADT 1:</strong> The auditor for the Company shall be
              appointed by the Board of Directors within a period of 30 (thirty)
              days from the Date of Incorporation of the Company. The
              appointment shall be filed in ADT–1.
            </li>
            <li>
              <strong>DIR–3 KYC:</strong> All directors are required to file a
              form to do the KYC with the ROC in form DIR 3 KYC. If you have
              already submitted the form, then one needs to verify the OTP over
              email and mobile no. Otherwise, all new directors need to submit
              this form.
            </li>
            <li>
              <strong>Form DPT 3:</strong> The Return of Deposit should be filed
              before the Registrar of Companies in FORM DPT–3.
            </li>
          </ul>
        </div>
        {/* Required Documents */}
        <div className="max-w-5xl w-full mt-10">
          <div className="flex justify-center mt-10">
            <RequiredDocuments
              requiredDocuments={RocAnnualFsection8?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={RocAnnualFsection8?.section4?.heading1}
          steps={RocAnnualFsection8?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={RocAnnualFsection8?.section5?.cards} />
        </div>

        {/* FAQs */}
        <Faqs
          heading1={RocAnnualFsection8?.section6?.heading1}
          heading2={RocAnnualFsection8?.section6?.heading2}
          toggleoptions={RocAnnualFsection8?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default RocAnnualFsection8Page;
