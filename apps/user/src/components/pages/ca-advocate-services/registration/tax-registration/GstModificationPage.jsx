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
import { GstModificationDescription } from "./GstModificationDescription";
const GstModificationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={GstModificationDescription?.section1?.heading1}
          heading2={GstModificationDescription?.section1?.heading2}
          heroimg={GstModificationDescription?.section1?.heroimg}
          intro={GstModificationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is GST Registration Modification?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP>
            After receipt of GST Registration Certificate, if you wish to modify
            any fields such as name, address, email ID, contact details, you
            need to apply for GST Modification request.
          </TypographyP>
          <TypographyP className="pt-3">
            GST Modification is divided into two parts: Core Fields and Non-Core
            Fields. Core Field changes require supporting documents to be
            attached while applying. Non-Core Fields can be updated without
            submitting any proofs.
          </TypographyP>

          <img
            loading="lazy"
            src={GstModificationDescription?.section2?.heroimg}
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
            {GstModificationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {GstModificationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={GstModificationDescription?.section3?.packages} />

        {/* Steps Section */}
        <Steps
          heading1={GstModificationDescription?.section4?.heading1}
          steps={GstModificationDescription?.section4?.steps}
        />
      </div>
    </PageLayout>
  );
};

export default GstModificationPage;
