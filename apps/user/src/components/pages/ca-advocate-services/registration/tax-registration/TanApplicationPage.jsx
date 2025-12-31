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
import { TanApplicationDescription } from "./TanApplicationDescription";
const TanApplicationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={TanApplicationDescription?.section1?.heading1}
          heading2={TanApplicationDescription?.section1?.heading2}
          heroimg={TanApplicationDescription?.section1?.heroimg}
          intro={TanApplicationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is TAN Registration?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP>
            TAN i.e. Tax Deduction and Collection Account Number is a 10 digit
            alphanumeric number, e.g. DELM12345L, required to be obtained by all
            persons who are responsible for deducting tax at source or
            collecting tax at source. It is compulsory to quote TAN in TDS/TCS
            return (including any e-TDS/TCS return), any TDS/TCS payment
            challan, TDS/TCS certificates, Annual Information Return and other
            documents as may be prescribed. There are two modes for applying for
            TAN- Offline and online.You may get in touch with our compliance
            manager on+91 7709 222 331 or email care@financesbazar.com for free
            consultation.
          </TypographyP>

          <img
            loading="lazy"
            src={TanApplicationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyP>
            Non-Core Fields include email ID, Phone number, any minor changes,
            while Core Fields include Change in Address, Add a place of Business
            etc.You may get in touch with our compliance manager on +91 7709 222
            331 or email care@financesbazar.com for free consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {TanApplicationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {TanApplicationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={TanApplicationDescription?.section3?.packages} />

        <div className="max-w-5xl w-full mt-10">
          <TypographyH3 className="text-blue-950 text-lg">
            Key Features of TAN
          </TypographyH3>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {TanApplicationDescription?.customcardContent?.map(
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

        {/* Steps Section */}
        <Steps
          heading1={TanApplicationDescription?.section4?.heading1}
          steps={TanApplicationDescription?.section4?.steps}
        />
        <Faqs
          heading1={TanApplicationDescription?.section6?.heading1}
          heading2={TanApplicationDescription?.section6?.heading2}
          toggleoptions={TanApplicationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default TanApplicationPage;
