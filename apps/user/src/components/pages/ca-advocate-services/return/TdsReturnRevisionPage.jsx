import React, { useState } from "react";
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
  TypographyP,
  TypographyH4,
} from "@/custom/Typography";
import { TDSReturnsRevisionDescription } from "./TdsReturnRevisionDescription";
const TdsReturnRevisionPage = () => {
  return (
    <>
      <PageLayout>
        <div className="w-full mx-auto flex justify-center items-center flex-col">
          {/* Section 1 */}
          <CAHerosection
            heading1={TDSReturnsRevisionDescription?.section1?.heading1}
            heading2={TDSReturnsRevisionDescription?.section1?.heading2}
            heroimg={TDSReturnsRevisionDescription?.section1?.heroimg}
            intro={TDSReturnsRevisionDescription?.section1?.intro}
          />
          {/* section 2 */}
          <div className="max-w-5xl px-4 w-full">
            <TypographyH2 className="text-blue-950">
              TDS Returns Revision
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-2 text-blue-950">
              All you need to know
            </TypographyH3>
            <TypographyP className="p-4 font-sm">
              TDS Return is required to be filed by any person who is liable to
              deduct tax at source. A TDS Return is a quarterly statement which
              has to be submitted to the Income Tax Department of India.
              Submitting TDS Return is mandatory if you are a deductor. It
              should contain all details of TDS deducted and deposited by you
              for a particular quarter. You may need to file TDS correction or
              TDS revision if you have wrongly shown any details in original TDS
              Returns. Such mistakes can be wrong PAN, wrong date, or short or
              no tax deduction. In all such cases, in order to ensure seamless
              credit to the person whose TDS is deducted, you should revise your
              TDS Return. You may also need to revise your TDS return if you
              have short paid any TDS and received any notice from income tax
              department. It should be noted that only by paying short deducted
              TDS, your work is not over. This has to be given effect through a
              correctly filed TDS statement. TDS return may be corrected as many
              times as needed. There is no due date by which a TDS return has to
              be revised. Hence, as soon as an error is discovered, you should
              file a correction return.
            </TypographyP>
            <img
              loading="lazy"
              src={TDSReturnsRevisionDescription?.section2?.heroimg}
              alt="section 2"
              className="w-full max-w-3xl object-contain my-6 mx-auto"
            />
            <TypographyH4>Why UcServices?</TypographyH4>
            <TypographyP className="pt-2">
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
              {TDSReturnsRevisionDescription?.section3?.heading1}
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-1 text-blue-950">
              {TDSReturnsRevisionDescription?.section3?.heading2}
            </TypographyH3>
          </div>
          {/* Packages Section */}
          <Packages
            packages={TDSReturnsRevisionDescription?.section3?.packages}
          />

          <div className="max-w-5xl px-4 w-full mt-6">
            <TypographyH2 className="text-blue-950">
              Correction TDS Returns Filing- You must know
            </TypographyH2>
            <TypographyH3 className="py-2 text-blue-950">
              Points to make your decision easy
            </TypographyH3>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {TDSReturnsRevisionDescription?.TdscardFilingsection?.length >
                0 &&
                TDSReturnsRevisionDescription?.TdscardFilingsection.map(
                  (card, indx) => (
                    <Customcard title={card?.title} content={card?.content} />
                  )
                )}
            </div>
          </div>
          {/* required documents list section */}
          <div className="max-w-5xl px-4 w-full mt-15">
            <TypographyH2 className="text-blue-950">
              Documents Required for TDS Returns revision
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />
            <RequiredDocuments
              requiredDocuments={
                TDSReturnsRevisionDescription?.RequiredDocuments
              }
            />
          </div>
          {/* Steps Section 4*/}
          <Steps
            heading1={TDSReturnsRevisionDescription?.section4?.heading1}
            steps={TDSReturnsRevisionDescription?.section4.steps}
          />
          {/* {section 5} */}
          <div className="max-w-5xl px-4 w-full">
            <Stepscard cards={TDSReturnsRevisionDescription?.section5?.cards} />
          </div>
          {/* FAQs Section 6 */}
          <Faqs
            heading1={TDSReturnsRevisionDescription?.section6?.heading1}
            heading2={TDSReturnsRevisionDescription?.section6?.heading2}
            toggleoptions={
              TDSReturnsRevisionDescription?.section6?.toggleoptions
            }
          />
        </div>
      </PageLayout>
    </>
  );
};

export default TdsReturnRevisionPage;
