import React from "react";
import PageLayout from "../../../layout/PageLayout";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  Steps,
  Stepscard,
} from "../../CaSectionComponents";
import { GstReturndiscription } from "./GstReturnDescription";

import {
  TypographyH2,
  TypographyH3,
  BoldList,
  TypographyP,
} from "@/custom/Typography";

const GstReturnPage = () => {
  return (
    <>
      <PageLayout>
        <div className="w-full mx-auto flex justify-center items-center flex-col">
          {/* Section 1 */}
          <CAHerosection
            heading1={GstReturndiscription?.section1?.heading1}
            heading2={GstReturndiscription?.section1?.heading2}
            heroimg={GstReturndiscription?.section1?.heroimg}
            intro={GstReturndiscription?.section1?.intro}
          />

          {/* section 2 */}
          <div className="max-w-5xl px-4 w-full">
            <TypographyH2 className="text-blue-950">
              GST Return Filing
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-2 text-blue-950">
              All you need to know about GST return filing
            </TypographyH3>
            <BoldList
              className="max-w-5xl w-full text-left p-3 sm:p-4 md:p-6"
              items={GstReturndiscription?.section2?.listoptions}
            />
            <img
              loading="lazy"
              src={GstReturndiscription?.section2?.heroimg}
              alt="section 2"
              className="w-full max-w-3xl object-contain my-6 mx-auto"
            />
            <TypographyP>
              https://financesbazar.com/ is an eminent business platform and a
              progressive concept, which helps end-to-end incorporation,
              compliance, advisory, and management consultancy services to
              clients in India and abroad. Filing online GST Returns is easy,
              seamless, cheapest, and quickest with Uc Serices.com! Apart from
              online return filing under GST services, Uc Serices.com also helps
              you to file Income Tax Returns, TDS Returns, PF Returns, and ESI
              Returns easily. Contact Uc Serices to know about the GST Return
              filing process. Inquire for a GST return filing service provider
              for Online GST returns, Find out when to file a GST return. You
              may get in touch with our compliance manager at +91 7709 222 331
              or email care@financesbazar.com for a free consultation.
            </TypographyP>
          </div>

          {/* section 3 */}
          <div className="max-w-5xl px-4 w-full mt-6">
            <TypographyH2 className="text-blue-950">
              {GstReturndiscription?.section3?.heading1}
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-1 text-blue-950">
              {GstReturndiscription?.section3?.heading2}
            </TypographyH3>
          </div>

          {/* Packages Section */}
          <Packages packages={GstReturndiscription?.section3?.packages} />

          <div className="max-w-5xl w-full px-4 mx-auto">
            <TypographyH2 className="text-blue-950">
              Various Returns under GST
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />

            {/* Responsive card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {GstReturndiscription?.GstcardFilingsection.length > 0 &&
                GstReturndiscription?.GstcardFilingsection.map(
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

          {/* Steps Section 4*/}
          <Steps
            heading1={GstReturndiscription?.section4?.heading1}
            steps={GstReturndiscription?.section4.steps}
          />

          {/* {section 5} */}
          <div className="max-w-5xl px-4 w-full">
            <Stepscard cards={GstReturndiscription?.section5?.cards} />
          </div>

          {/* FAQs Section 6 */}
          <Faqs
            heading1={GstReturndiscription?.section6?.heading1}
            heading2={GstReturndiscription?.section6?.heading2}
            toggleoptions={GstReturndiscription?.section6?.toggleoptions}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default GstReturnPage;
