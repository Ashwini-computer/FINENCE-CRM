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
import PageLayout from "../../../../layout/PageLayout";
import { PanApplicationDescription } from "./PanApplicationDescription";

const PanApplicationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={PanApplicationDescription?.section1?.heading1}
          heading2={PanApplicationDescription?.section1?.heading2}
          heroimg={PanApplicationDescription?.section1?.heroimg}
          intro={PanApplicationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            PAN Application
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP>
            Permanent Account Number (PAN) is a ten-digit alphanumeric number,
            for eg. AAAAA0000A, issued in the form of a laminated card, by the
            Indian Income Tax Department, to any “person” who applies for it or
            to whom the department allows the number without an application.
          </TypographyP>
          <TypographyH4 className=" my-4 text-base sm:text-lg">
            Procedure for PAN Application
          </TypographyH4>
          <ol className="list-disc space-y-2  list-outside pl-7 pt-3">
            <li>
              Online application of PAN can be made on the NSDL website OR
              UTIITSL website.
            </li>
            <li>
              Submit the PAN card application Form 49A available on the NSDL.
            </li>
            <li>
              Payment of application fee can be made through credit/debit card,
              demand draft or net-banking.
            </li>
            <li>
              Once the application and payment are accepted, the applicant is
              required to send the supporting documents through courier/post to
              NSDL.
            </li>
            <li>
              Upon the receipt of documents, PAN application is processed by
              NSDL and PAN is issued.
            </li>
          </ol>

          <img
            loading="lazy"
            src={PanApplicationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyP>
            PAN enables the department to link all transactions of the “person”
            with the department. These transactions include tax payments,
            TDS/TCS credits, returns of income/wealth/gift, specified
            transactions, correspondence, and so on. PAN, thus, acts as an
            identifier for the “person” with the tax department.You may get in
            touch with our compliance manager on +91 7709 222 331 or email
            care@financesbazar.com for free consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {PanApplicationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {PanApplicationDescription?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}
        <Packages packages={PanApplicationDescription?.section3?.packages} />

        {/* Key Compliance Cards */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH3 className="text-blue-950 text-lg">
            Features of Permanent Account Number
          </TypographyH3>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {PanApplicationDescription?.customcardContent?.map(
              (card, index) => (
                <Customcard
                  key={index}
                  title={card?.title}
                  content={card?.content}
                />
              )
            )}
          </div>
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 mt-10 mx-auto">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl text-center">
            Documents Required for PAN Application
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={PanApplicationDescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={PanApplicationDescription?.section4?.heading1}
          steps={PanApplicationDescription?.section4?.steps}
        />

        {/* FAQs */}
        <Faqs
          heading1={PanApplicationDescription?.section6?.heading1}
          heading2={PanApplicationDescription?.section6?.heading2}
          toggleoptions={PanApplicationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default PanApplicationPage;
