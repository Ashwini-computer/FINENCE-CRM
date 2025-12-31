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
  TypographyH4,
  TypographyP,
  BoldList,
} from "@/custom/Typography";
import { AnnualFilingForTrustDesc } from "./AnnualFilingForTrustDescription";

const AnnualFilingForTrustPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={AnnualFilingForTrustDesc?.section1?.heading1}
          heading2={AnnualFilingForTrustDesc?.section1?.heading2}
          heroimg={AnnualFilingForTrustDesc?.section1?.heroimg}
          intro={AnnualFilingForTrustDesc?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            Annual Filing for Trust in India
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyH4 className=" my-2 text-base sm:text-lg">
            What is a Trust?
          </TypographyH4>
          <TypographyP>
            A trust is a legally formed organization where the owner is the
            trustor and beneficiary is the trustee. The main purpose of forming
            a trust is to ensure an effortless transfer of the property of the
            owner of the trust in the name of the beneficiaries (trustees) as
            per the provisions mentioned in the trust deed. All the registered
            trusts in India are governed by the Indian Trust Act 1882. The
            registered trusts in India, hence, shall have to adhere to the legal
            provisions of the said Act. These legal provisions, apart from the
            provisions of the registration and operation of the trusts, include
            the compliance requirement for Trust such as Income tax Return
            Filing, Audit Report Filing etc. for the Trust in India.
          </TypographyP>

          <TypographyH3 className=" mt-3 text-base sm:text-lg">
            Types of Trust in India
          </TypographyH3>
          <TypographyH4 className="py-4 text-blue-950 text-lg sm:text-xl">
            Public Trust
          </TypographyH4>
          <TypographyP>
            A Public Trust is an organization created to benefit the public in
            general or different classes of people and is not restricted to a
            selected group of people. A trust created with a charitable or
            religious purpose shall be called Public Charitable Trust.
          </TypographyP>
          <TypographyH4 className="py-4 text-blue-950 text-lg sm:text-xl">
            Private Trust
          </TypographyH4>
          <TypographyP>
            A Private Trust is an organization which is created for the
            advantage of a specific person or a specific class of people.
          </TypographyP>

          <img
            loading="lazy"
            src={AnnualFilingForTrustDesc?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH4 className=" text-xl my-2 text-blue-950">
            Annual Filing of Trust India
          </TypographyH4>
          <TypographyP>
            Once a Private Trust is formed, it requires to comply with the
            provisions of multiple laws as mentioned below:
          </TypographyP>
          <ol className="list-decimal list-inside p-3">
            <li>Indian Trust Act 1882</li>
            <li>The Income Tax Act. 1961</li>
            <li>Bombay Public Trust Act, 1950</li>
          </ol>

          <TypographyH4 className=" text-blue-950 text-lg sm:text-xl pt-2 pb-1">
            Why Uc Services ?
          </TypographyH4>
          <TypographyP className="text-sm sm:text-base">
            https://financesbazar.com/ is a group of intellectuals. The entire
            team of Uc Services.com consists of Highly qualified CA, CS, Lawyers
            and business administrators. https://financesbazar.com/ would be a
            one stop destination for your Nidhi Company Annual Filing in India.
            We also provide services like Company registration, Start up
            advisory, Secretarial compliance services, PAN / TAN application,
            DIN registration, ESI registration GST registration, Trademark
            registration, GST / Income tax return filing and many more. Lack of
            documents? Unaware about the Legal aspects of business? Don’t worry,
            we have got you covered with the help and guidance you are looking
            for. To know about the entire Nidhi Company Compliance Checklist,
            get in touch with our compliance manager on +91 7709 222 331 or
            email us at care@financesbazar.com for free consultation and to know
            more about us and the services we provide.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {AnnualFilingForTrustDesc?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {AnnualFilingForTrustDesc?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}

        <Packages packages={AnnualFilingForTrustDesc?.section3?.packages} />
        {/* Key Compliance Cards */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH3 className="text-blue-950 text-lg">
            Various Annual Compliance / filing of Trust in India
          </TypographyH3>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            Points to make your decision easy
          </TypographyH3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {AnnualFilingForTrustDesc?.customcardContent?.map((card, index) => (
              <Customcard
                key={index}
                title={card?.title}
                content={card?.content}
              />
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 mt-10 mx-auto">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl text-center">
            Documents required to change the Registered Office of Company
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={AnnualFilingForTrustDesc?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={AnnualFilingForTrustDesc?.section4?.heading1}
          steps={AnnualFilingForTrustDesc?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={AnnualFilingForTrustDesc?.section5?.cards} />
        </div>

        {/* FAQs */}
        <Faqs
          heading1={AnnualFilingForTrustDesc?.section6?.heading1}
          heading2={AnnualFilingForTrustDesc?.section6?.heading2}
          toggleoptions={AnnualFilingForTrustDesc?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default AnnualFilingForTrustPage;
