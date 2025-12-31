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
} from "@/custom/Typography";
import { NidhiCADescription } from "./NidhiCAFilingDescription";

const NidhiCompanyAnnualFilingPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={NidhiCADescription?.section1?.heading1}
          heading2={NidhiCADescription?.section1?.heading2}
          heroimg={NidhiCADescription?.section1?.heroimg}
          intro={NidhiCADescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is Nidhi Company Annual Filing?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyH4 className=" my-2 text-base sm:text-lg">
            Nidhi Company:
          </TypographyH4>
          <TypographyP>
            The literal meaning of Nidhi is ‘fund’, ‘finance or treasure’. Nidhi
            Company is incorporated with the object of developing the habit of
            thrift and save and reserve the funds amongst its members and also
            receiving deposits and lending from and to its members only, for
            their mutual benefit.<br></br>Though there are no separate
            registrations to be done under RBI for a Nidhi company, RBI has the
            power to issue directives to them. However, Nidhi company needs to
            fulfill the minimum requirements for the registration, which are as
            follows:
          </TypographyP>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>A minimum of 7 members</li>
            <li>Minimum 3 directors</li>
            <li>
              All such companies must apply “Nidhi Limited” after its name.
            </li>
            <li>
              Every Nidhi company must ensure within a period of one year from
              the commencement that it has not less than 200 members.
            </li>
          </ul>
          <TypographyH4 className="my-3 ml-3 text-base sm:text-lg">
            Nidhi Company Annual FIling:
          </TypographyH4>
          <TypographyP className="pl-4">
            Nidhi Company is required to file returns twice a year and yearly
            returns once with ROC every year. Apart from this Nidhi Company is
            also required to file its Financial Statements in Form AOC 4 and
            Annual Return in form MGT 7 annually with ROC.
          </TypographyP>
          <TypographyH4 className="ml-3 mt-2 text-base sm:text-lg">
            Following are the forms required to be filed by Nidhi company every
            year with ROC:
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-sm sm:text-base">
            <li>Form NDH 1</li>
            <li>Form NDH 3</li>
            <li>MCA Form MGT 7</li>
            <li>MCA Form AOC 4</li>
          </ul>
          <TypographyP className="ml-2 mt-2">
            Every Nidhi Company is required to comply with provisions of
            Companies Act, 2013 and Nidhi Rules, 2014. In a way every Nidhi
            Company is a Public Limited Company. Hence it requires to follow all
            the provisions applicable to Public Limited Company unless exempted
            from compliance of specific section with or without any
            modification.
          </TypographyP>
          <img
            loading="lazy"
            src={NidhiCADescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyP className="text-sm sm:text-base mt-7">
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
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {NidhiCADescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            {NidhiCADescription?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}
        <Packages packages={NidhiCADescription?.section3?.packages} />

        {/* form Section */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            Annual filing of Nidhi Company by Uc Services
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Forms to be filed
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {NidhiCADescription?.customcardContent?.map((card, index) => (
              <Customcard
                key={index}
                title={card?.title}
                content={card?.content}
              />
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full mt-10">
          <div className="flex justify-center mt-10">
            <RequiredDocuments
              requiredDocuments={NidhiCADescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={NidhiCADescription?.section4?.heading1}
          steps={NidhiCADescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={NidhiCADescription?.section5?.cards} />
        </div>

        {/* FAQs */}
        <Faqs
          heading1={NidhiCADescription?.section6?.heading1}
          heading2={NidhiCADescription?.section6?.heading2}
          toggleoptions={NidhiCADescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default NidhiCompanyAnnualFilingPage;
