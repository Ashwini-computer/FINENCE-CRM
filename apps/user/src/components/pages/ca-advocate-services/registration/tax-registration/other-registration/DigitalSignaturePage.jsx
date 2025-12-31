import React from "react";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
} from "../../../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";

import PageLayout from "../../../../../layout/PageLayout";
import { DigitalSignatureDescription } from "./DigitalSignatureDescription";
const DigitalSignaturePage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={DigitalSignatureDescription?.section1?.heading1}
          heading2={DigitalSignatureDescription?.section1?.heading2}
          heroimg={DigitalSignatureDescription?.section1?.heroimg}
          intro={DigitalSignatureDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is Digital Signature Certificate?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP className="mt-2">
            A Digital Signature certificate (DSC) is the equivalent of a
            physical signature in an electronic format, as it establishes the
            identity of the sender of an electronic document on the Internet. It
            comes in the form of a USB E-Token, wherein the Digital Signature
            Certificate is stored and can be accessed through a computer to sign
            documents electronically.There are three types of Digital
            Signatures, Class I, Class II and Class III Digital Signature.
          </TypographyP>
          <TypographyH3 className="pt-4 text-blue-950 text-lg sm:text-xl">
            Who requires Digital Signature Certificate under MCA21?
          </TypographyH3>
          <TypographyP className="mt-4">
            Under MCA21 all the authorized signatories of company and
            professionals who sign the manual documents and returns filed with
            ROC is required to obtain a Digital Signature Certificate (DSC).
            Therefore following personnel have to procure Digital Signature
            Certificate:
          </TypographyP>
          <ul class="list-disc pl-8 pt-4 space-y-2">
            <li>Directors</li>
            <li>CA’s/Auditors</li>
            <li>Company Secretary – Whether in practice or in job.</li>
            <li>
              Bank Officials – for Registration and Satisfaction of Charges
            </li>
            <li>
              Other Authorized Signatories.Credentials required with Application
              Form
            </li>
          </ul>

          <img
            loading="lazy"
            src={DigitalSignatureDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 ">
            Why UcServices as Service Provider for getting your Digital
            Signature Certificate?
          </TypographyH3>
          <TypographyP className="my-2">
            UcServices is a group of intellectuals. The entire team of
            UcServices consists of Highly qualified CA, CS, Lawyers and business
            administrators. UcServices would be a one stop destination for
            Digital Signature Certificate. We also provide services like Start
            up advisory, Secretarial compliance services, PAN / TAN application,
            DIN allotment, GST registration, Trademark registration, GST /
            Income tax return filing and many more. You may get in touch with
            our compliance manager on +91 7709 222 331 or email
            care@financesbazar.com for free consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {DigitalSignatureDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {DigitalSignatureDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={DigitalSignatureDescription?.section3?.packages} />

        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            All about Digital Signature Certificate
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Points to make your decision easy
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {DigitalSignatureDescription?.customcardContent?.map(
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
            Documents Required for DSC Application
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={DigitalSignatureDescription?.RequiredDocuments}
            />
          </div>
        </div>
        {/* Steps Section */}
        <Steps
          heading1={DigitalSignatureDescription?.section4?.heading1}
          steps={DigitalSignatureDescription?.section4?.steps}
        />

        <Faqs
          heading1={DigitalSignatureDescription?.section6?.heading1}
          heading2={DigitalSignatureDescription?.section6?.heading2}
          toggleoptions={DigitalSignatureDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default DigitalSignaturePage;
