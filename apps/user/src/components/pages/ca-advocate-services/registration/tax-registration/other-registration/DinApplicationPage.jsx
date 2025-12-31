import React from "react";
import {
  CAHerosection,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
  Stepscard,
} from "../../../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";

import PageLayout from "../../../../../layout/PageLayout";
import { DinApplicationDescription } from "./DinApplicationDescription";
const DinApplicationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={DinApplicationDescription?.section1?.heading1}
          heading2={DinApplicationDescription?.section1?.heading2}
          heroimg={DinApplicationDescription?.section1?.heroimg}
          intro={DinApplicationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is a Director Identification Number?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            What is DIN?
          </TypographyH3>
          <TypographyP className="mt-2">
            DIN number or Directors Identification Number is a unique
            identification number provided by the Ministry of Corporate Affairs
            to an individual who intends to be a director of a company in India.
          </TypographyP>
          <TypographyP className="mt-2">
            DIN number or Directors Identification Number of a director is a
            unique 8-digit number which allows a person to legally act as a
            Director of a company. The DIN number is granted only one time to a
            person and an individual acting as the Director of multiple
            companies does not require to obtain multiple DINs to act as a
            director in those companies.
          </TypographyP>
          <TypographyH3 className="pt-4 text-blue-950 text-lg sm:text-xl">
            Rules for obtaining DIN:
          </TypographyH3>
          <ul class="list-disc pl-5 pt-4 space-y-2">
            <li>
              In the case of new companies, first Directors up to number of 3
              can apply for a DIN number only through the SPICe plus Form.
            </li>
            <li>
              In the case of already existing companies, the Directors can apply
              for a DIN number only through the DIR-3 Form.
            </li>
            <li>
              In case of already existing companies, the applicant director must
              attach a signature of any existing company director wherein he
              wants to get added.
            </li>
            <li>
              For E.g. Mr. Manoj wants to apply for DIN wherein he wishes to be
              a director in ABC company. Here, Mr. Manoj will require a board
              resolution of “ABC’ company along with the digital signature of
              any of the existing director of ABC company.
            </li>
          </ul>

          <img
            loading="lazy"
            src={DinApplicationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 ">
            Validity of DIN:
          </TypographyH3>
          <ul class="list-disc pl-8 pt-4 space-y-2">
            <li>
              Once the DIN number is given to a Director, it does not require
              any reactivation or renewal and has lifetime validity.
            </li>
            <li>
              However, the MCA may deactivate or disqualify the Director if the
              Director or the company is in violation of any of the laws or, its
              guidelines or notifications.
            </li>
          </ul>
          <TypographyH3 className="text-blue-950 mb-3 mt-4">
            Why UcServices as your service provider for “DIN Application”?
          </TypographyH3>
          <TypographyP>
            UcServices is an eminent business platform and a progressive
            concept, which helps end-to-end incorporation, compliance, advisory
            and management consultancy services to clients in India and abroad.
            Getting DIN (Director Identification Number) is easy, seamless,
            cheaper and quickest with UcServices! Apart from DIN application,
            UcServices also helps entrepreneurs with Digital signature, LLP
            registration, One Person Company Registration, Partnership
            Registration, HUF and Proprietorship Firm Registration easily.
          </TypographyP>
          <TypographyP className="mt-3">
            You may get in touch with our compliance manager on +91 7709 222 331
            or email care@financesbazar.com for free consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {DinApplicationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {DinApplicationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={DinApplicationDescription?.section3?.packages} />

        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            Importance of Director Identification Number
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Points to make your decision easy
          </TypographyH3>
          <ul class="list-disc pl-9 pt-5 space-y-2 text-sm leading-relaxed ">
            <li>
              A DIN number is required to legally identify a person as a
              director of a company in India.
            </li>
            <li>The entire database of the director can be found using DIN.</li>
            <li>
              Any form of communications with the MCA/ROC from the company such
              as annual returns, ROC filings, applications or KYC information
              related to the company is submitted with the signature of the
              Director(s) along with their DIN number.
            </li>
            <li>
              Non-compliance with this can result in penalties and fines from
              the ROC and the Director can also lose their DIN number.
            </li>
            <li>
              Director Identification Number (DIN) not only helps fixing the
              identity of the Director but also relates his participation in
              others companies, past and present.
            </li>
            <li>
              Once obtained DIN number, the director can use the same for life
              irrespective of the company he works in. A change in the company
              doesn’t change the Director Identification Number.
            </li>
          </ul>
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 mt-10 mx-auto">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl text-center">
            Documents Required for DIN Application
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={DinApplicationDescription?.RequiredDocuments}
            />
          </div>
        </div>
        {/* Steps Section */}
        <Steps
          heading1={DinApplicationDescription?.section4?.heading1}
          steps={DinApplicationDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={DinApplicationDescription?.section5?.cards} />
        </div>

        <Faqs
          heading1={DinApplicationDescription?.section6?.heading1}
          heading2={DinApplicationDescription?.section6?.heading2}
          toggleoptions={DinApplicationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default DinApplicationPage;
