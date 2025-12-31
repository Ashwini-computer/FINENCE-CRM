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
import { EsiReturnsDescription } from "./EsiReturnDescription";

import {
  TypographyH2,
  TypographyH3,
  BoldList,
  TypographyP,
  TypographyH4,
} from "@/custom/Typography";

const EsiReturnPage = () => {
  return (
    <>
      <PageLayout>
        <div className="w-full mx-auto flex justify-center items-center flex-col">
          {/* Section 1 */}
          <CAHerosection
            heading1={EsiReturnsDescription?.section1?.heading1}
            heading2={EsiReturnsDescription?.section1?.heading2}
            heroimg={EsiReturnsDescription?.section1?.heroimg}
            intro={EsiReturnsDescription?.section1?.intro}
          />
          {/* section 2 */}
          <div className="max-w-5xl px-4 w-full">
            <TypographyH2 className="text-blue-950">
              What is an ESI Return?
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-2 text-blue-950">
              All you need to know
            </TypographyH3>
            <TypographyH4>Employees’ State Insurance(ESI):</TypographyH4>
            <TypographyP className="p-4 font-sm">
              Employee State Insurance is a self-financing social security
              scheme and health insurance plan for Indian workers, offering
              medical and disablement benefits. Governed by the ESI Act, 1948,
              it is managed by Employees’ State Insurance Corporation (ESIC)
              under the Ministry of Labour and Employment. ESIC is expected to
              manage the fund as per the rules and regulations set forth by the
              Act.
            </TypographyP>
            <TypographyH4>Applicability of ESI:</TypographyH4>
            <TypographyP className="p-4 font-sm">
              The ESIC is applicable on all the establishments having 10 or more
              workers and is beneficial to all the employees earning Rs.15,
              000/- or less per month as wages, employer must contribute 3.25
              percent and employee must contributes 0.75 percent towards ESI.
            </TypographyP>
            <img
              loading="lazy"
              src={EsiReturnsDescription?.section2?.heroimg}
              alt="section 2"
              className="w-full max-w-3xl object-contain my-6 mx-auto"
            />
            <TypographyP>
              https://financesbazar.com/ is an eminent business platform and a
              progressive concept, which helps end-to-end incorporation,
              compliance, advisory, and management consultancy services to
              clients in India and abroad. Filing online TDS Returns is easy,
              seamless, cheapest, and quickest with Uc Serices.com! Apart from
              online return filing under TDS services, Uc Serices.com also helps
              you to file Income Tax Returns, TDS Returns, PF Returns, and ESI
              Returns easily. Contact Uc Serices to know about the TDS Return
              filing process. Inquire for a TDS return filing service provider
              for Online TDS returns, Find out when to file a TDS return. You
              may get in touch with our compliance manager at +91 7709 222 331
              or email care@financesbazar.com for a free consultation.
            </TypographyP>
          </div>
          {/* section 3 */}
          <div className="max-w-5xl px-4 w-full mt-6">
            <TypographyH2 className="text-blue-950">
              {EsiReturnsDescription?.section3?.heading1}
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-1 text-blue-950">
              {EsiReturnsDescription?.section3?.heading2}
            </TypographyH3>
          </div>
          {/* Packages Section */}
          <Packages packages={EsiReturnsDescription?.section3?.packages} />
          <div className="max-w-5xl w-full px-4 mx-auto">
            <TypographyH2 className="text-blue-950">
              ESI Return Filing Charges
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />
          </div>
          {/* required documents list section */}
          <div className="max-w-5xl px-4 w-full mt-15">
            <TypographyH2 className="text-blue-950">
              TDS Returns Revision Process Flow
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />
            <RequiredDocuments
              requiredDocuments={EsiReturnsDescription?.RequiredDocuments}
            />
          </div>
          {/* Steps Section 4*/}
          <Steps
            heading1={EsiReturnsDescription?.section4?.heading1}
            steps={EsiReturnsDescription?.section4.steps}
          />
          {/* {section 5} */}
          <div className="max-w-5xl px-4 w-full">
            <Stepscard cards={EsiReturnsDescription?.section5?.cards} />
          </div>
          {/* FAQs Section 6 */}
          <Faqs
            heading1={EsiReturnsDescription?.section6?.heading1}
            heading2={EsiReturnsDescription?.section6?.heading2}
            toggleoptions={EsiReturnsDescription?.section6?.toggleoptions}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default EsiReturnPage;
