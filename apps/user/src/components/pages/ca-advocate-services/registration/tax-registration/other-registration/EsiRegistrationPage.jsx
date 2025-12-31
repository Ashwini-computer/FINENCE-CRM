import React from "react";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  Steps,
} from "../../../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";

import PageLayout from "../../../../../layout/PageLayout";
import { EsiRegistrationDescription } from "./EsiRegistrationDescription";
const EsiRegistrationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={EsiRegistrationDescription?.section1?.heading1}
          heading2={EsiRegistrationDescription?.section1?.heading2}
          heroimg={EsiRegistrationDescription?.section1?.heroimg}
          intro={EsiRegistrationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is ESIC Registration?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP className="mt-2">
            Employee State Insurance Corporation or ESIC Registration is a
            self-financing social security and health insurance scheme which
            provides medical benefit, sickness benefit, maternity benefit and
            various other benefits such as funeral expenses, free supply of
            physical aids etc. to the employees and their family.
          </TypographyP>
          <TypographyP className="mt-4">
            Any factory or business establishment having 10 or more than 10
            employees, irrespective of salary, have to register with ESIC. ESI
            contributions must be made for all employees having a salary of less
            than Rs.21,000 per month. Employees with less than Rs. 21,000
            monthly wages get health and sickness benefits through this
            statutory scheme. The state government also contribute 1/8th share
            cost of the medical benefit.
          </TypographyP>
          <TypographyH3 className="pt-4 text-blue-950 text-lg sm:text-xl">
            Who needs to register for ESI? (What establishments need ESI
            registration?)
          </TypographyH3>
          <TypographyP className="mt-4">
            The following establishments having 10 or more employees attracts
            ESI coverage.
          </TypographyP>
          <ol class="list-decimal pl-8 pt-4 space-y-2">
            <li>Name or address of the business</li>
            <li>Contact details (email or phone number)</li>
            <li>Bank account details</li>
            <li>Addition or removal of partners/directors</li>
            <li>
              Change in legal structure (from proprietorship to LLP, etc.)
            </li>
          </ol>

          <img
            loading="lazy"
            src={EsiRegistrationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 ">
            Rate of Contribution towards ESIC:
          </TypographyH3>
          <TypographyP className="my-2">
            Currently, the employee’s contribution rate towards ESIC (w.e.f.
            01.07.2019) is 0.75% of the wages and that of the employer’s is
            3.25% of the wages paid/payable in respect of the employees in every
            wage period. However, this rate keeps on changing from time to time
          </TypographyP>
          <TypographyH4 className="pt-3 pb-1.5 text-blue-950 text-base">
            Contribution Period and Benefit Period{" "}
          </TypographyH4>
          <TypographyP>
            There are two contribution periods each of six months duration and
            two corresponding benefit periods also of six months duration. ESIC
            registration is a statutory responsibility of the employers of the
            factory. It is mandatory according to the rules and regulation of
            the ESI Act 1948. https://financesbazar.com/ is an eminent business
            platform and a progressive concept, which helps end-to-end
            incorporation, compliance, advisory, and management consultancy
            services to clients in India and abroad. ESIC registration in India
            is easy, seamless, cheapest and quickest with
            https://financesbazar.com/! Apart from an ESI Registration,
            https://financesbazar.com/ also helps you with PF Registration, PF
            Returns, ESI Returns, Trademark Registration and a host of other
            services easily. You may get in touch with our compliance manager on
            +91 7709 222 331 or email care@financesbazar.com for free
            consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {EsiRegistrationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {EsiRegistrationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={EsiRegistrationDescription?.section3?.packages} />

        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            What is the Importance of IEC Code?{" "}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Points to make your decision easy
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {EsiRegistrationDescription?.customcardContent?.map(
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
          heading1={EsiRegistrationDescription?.section4?.heading1}
          steps={EsiRegistrationDescription?.section4?.steps}
        />

        <Faqs
          heading1={EsiRegistrationDescription?.section6?.heading1}
          heading2={EsiRegistrationDescription?.section6?.heading2}
          toggleoptions={EsiRegistrationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default EsiRegistrationPage;
