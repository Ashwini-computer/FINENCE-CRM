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
  BoldList,
  TypographyP,
  TypographyH4,
} from "@/custom/Typography";
import { Card } from "@/components/ui/card";
import { PFReturndiscription } from "./PfReturnDescription";

const PfReturnPage = () => {
  return (
    <>
      <PageLayout>
        <div className="w-full mx-auto flex justify-center items-center flex-col">
          {/* Section 1 */}
          <CAHerosection
            heading1={PFReturndiscription?.section1?.heading1}
            heading2={PFReturndiscription?.section1?.heading2}
            heroimg={PFReturndiscription?.section1?.heroimg}
            intro={PFReturndiscription?.section1?.intro}
          />
          {/* section 2 */}
          <div className="max-w-5xl px-4 w-full">
            <TypographyH2 className="text-blue-950">
              What is a Provident Fund Return?
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-2 text-blue-950">
              All you need to know
            </TypographyH3>
            <TypographyH4>Provident Fund:</TypographyH4>
            <TypographyP className="p-4 font-sm">
              Employees Provident Fund (EPF) is a scheme controlled by the
              Employees’ Provident Funds and Miscellaneous Provisions Act, 1952.
              It is regulated by Employees’ Provident Fund Organization (EPFO).
              PF registration is applicable for all establishment which employs
              20 or more persons. PF registration can also be obtained
              voluntarily by establishments having less than 20 employee.
            </TypographyP>
            <TypographyH4>
              Important Points relating to Provident Fund:
            </TypographyH4>
            <BoldList
              className="max-w-5xl w-full text-left"
              items={PFReturndiscription?.section2?.listoptions}
            />
            <img
              loading="lazy"
              src={PFReturndiscription?.section2?.heroimg}
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
              {PFReturndiscription?.section3?.heading1}
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-1 text-blue-950">
              {PFReturndiscription?.section3?.heading2}
            </TypographyH3>
          </div>
          {/* Packages Section */}
          <Packages packages={PFReturndiscription?.section3?.packages} />
          <div className="max-w-5xl w-full px-4 mx-auto">
            <TypographyH2 className="text-blue-950">
              Various Returns under TDS
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />

            {/* Responsive card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {PFReturndiscription?.PFcardFilingsection.length > 0 &&
                PFReturndiscription?.PFcardFilingsection.map((card, index) => (
                  <Customcard
                    key={index}
                    title={card?.title}
                    content={card?.content}
                  />
                ))}
            </div>
          </div>
          {/* required documents list section */}
          <div className="max-w-5xl px-4 w-full mt-15">
            <TypographyH2 className="text-blue-950">
              Details required for PF return
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />
            <RequiredDocuments
              requiredDocuments={PFReturndiscription?.RequiredDocuments}
            />
          </div>
          {/* Steps Section 4*/}
          <Steps
            heading1={PFReturndiscription?.section4?.heading1}
            steps={PFReturndiscription?.section4.steps}
          />
          {/* {section 5} */}
          <div className="max-w-5xl px-4 w-full">
            <Stepscard cards={PFReturndiscription?.section5?.cards} />
          </div>
          {/* FAQs Section 6 */}
          <Faqs
            heading1={PFReturndiscription?.section6?.heading1}
            heading2={PFReturndiscription?.section6?.heading2}
            toggleoptions={PFReturndiscription?.section6?.toggleoptions}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default PfReturnPage;
