import React from "react";
import {
  CAHerosection,
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
import { ADDRemoveApartnerInLlpDescription } from "./AddRemoveApartnerInLlpDescription";
const AddRemoveApartnerInLlpPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={ADDRemoveApartnerInLlpDescription?.section1?.heading1}
          heading2={ADDRemoveApartnerInLlpDescription?.section1?.heading2}
          heroimg={ADDRemoveApartnerInLlpDescription?.section1?.heroimg}
          intro={ADDRemoveApartnerInLlpDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            Who is a Designated Partner under LLP?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP>
            Every LLP must have at least two Designated Partners who are natural
            persons and at least one of them shall be resident in India. The LLP
            deed specifies who are to be Designated Partners and the
            responsibility of doing all acts, things and matters as are required
            under the LLP Act vests with the Designated Partners and they are
            concerned with the overall administration of LLP. A Designated
            Partner can be removed in LLP or added in LLP by passing a
            resolution and filing relevant forms with the Registrar of
            Companies.
          </TypographyP>
          <TypographyP className="mt-4">
            Mandatory requirements for appointment of Designated Partners are
            valid Digital Signature Certificate (DSC), Designated Partner
            Identification Number (DPIN) and Consent Letter from proposed
            Designated Partner. DPIN is similar to DIN in case of Directors of
            Companies. You may read the DIN Application to understand how to
            apply for DPIN. DPIN can be obtained for any person above the age of
            18. Indian National, Non-Resident Indians, and Foreign Nationals can
            be appointed a Designated Partner in India.
          </TypographyP>
          <img
            loading="lazy"
            src={ADDRemoveApartnerInLlpDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 mb-3">
            Why UC Services?
          </TypographyH3>
          <TypographyP>
            https://financesbazar.com/ is an eminent business platform and a
            progressive concept, which helps end-to-end incorporation,
            compliance, advisory, and management consultancy services to clients
            in India and abroad. Appointment of Director is easy, seamless,
            cheapest and quickest with https://financesbazar.com/! Apart from a
            Director Appointment, Uc Services.com also helps entrepreneurs with
            Private Limited Company Registration, Public Limited Company
            Registration, LLP Registration, HUF, One Person Company and all
            other compliances easily. You may get in touch with our compliance
            manager on +91 7709 222 331 or email care@financesbazar.com for free
            consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {ADDRemoveApartnerInLlpDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {ADDRemoveApartnerInLlpDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages
          packages={ADDRemoveApartnerInLlpDescription?.section3?.packages}
        />

        {/* Required Documents */}
        <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 mt-10 mx-auto">
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={
                ADDRemoveApartnerInLlpDescription?.RequiredDocuments
              }
            />
          </div>
        </div>
        {/* Steps Section */}
        <Steps
          heading1={ADDRemoveApartnerInLlpDescription?.section4?.heading1}
          steps={ADDRemoveApartnerInLlpDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard
            cards={ADDRemoveApartnerInLlpDescription?.section5?.cards}
          />
        </div>

        <Faqs
          heading1={ADDRemoveApartnerInLlpDescription?.section6?.heading1}
          heading2={ADDRemoveApartnerInLlpDescription?.section6?.heading2}
          toggleoptions={
            ADDRemoveApartnerInLlpDescription?.section6?.toggleoptions
          }
        />
      </div>
    </PageLayout>
  );
};

export default AddRemoveApartnerInLlpPage;
