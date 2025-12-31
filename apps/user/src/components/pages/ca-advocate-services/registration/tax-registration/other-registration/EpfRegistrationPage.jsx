import React from "react";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
  Stepscard,
} from "../../../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";

import PageLayout from "../../../../../layout/PageLayout";
import { EPFRegistrationDescription } from "./EpfRegistrationDescription";
const EpfRegistrationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={EPFRegistrationDescription?.section1?.heading1}
          heading2={EPFRegistrationDescription?.section1?.heading2}
          heroimg={EPFRegistrationDescription?.section1?.heroimg}
          intro={EPFRegistrationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is EPF Registration?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP className="mt-2">
            Provident Fund (PF) is one of the main platform of savings in India
            for nearly all people working in Government, Private or Public
            sector organizations. It is implemented by the Employees Provident
            Fund Organization (EPFO) of India. Registration has to be done
            within One month from the date of hiring 20th employees. PF is the
            best way to provide social security to the employees.
          </TypographyP>
          <TypographyP className="mt-2">
            Provident Fund PF is largely an employee benefit scheme prescribed
            by the Government which provides facilities to the employees of an
            organization about medical assistance, retirement, education of
            children, insurance support and housing. It is created with the
            purpose to provide financial security and stability to employees.
          </TypographyP>
          <TypographyH3 className="pt-4 text-blue-950 text-lg sm:text-xl">
            Contribution towards EPF
          </TypographyH3>
          <ul class="list-disc pl-5 pt-4 space-y-2">
            <li>
              Contribution to EPF is to be done by both Employer and Employee.
            </li>
            <li>
              Employer deducts his employees’ share of EPF from his salary.
            </li>
            <li>
              Employer needs to deposit the amount of his contribution of EPF
              along with employees deducted share.
            </li>
            <li>
              The Employer’s contribution to EPF would be 12% and that of
              employee’s would be 12%.
            </li>
          </ul>
          <img
            loading="lazy"
            src={EPFRegistrationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 ">
            Why is it necessary to contribute in EPF?
          </TypographyH3>
          <ul class="list-disc pl-8 pt-4 space-y-2">
            <li>The PF contribution by an employer will be tax-free.</li>
            <li>
              The amount including the amount interest will be exempt from tax
              on withdrawal after a specific period.
            </li>
            <li>
              Organizations can also enroll themselves voluntarily under PF
              laws.
            </li>
          </ul>
          <p className="mt-4">
            <strong className="mr-2">NOTE:</strong>Any delay in registration of
            EPF (Employee Provident Fund) may result in a penalty.
          </p>
          <TypographyH3 className="text-blue-950 mb-3 mt-4">
            Why UcServices as your service provider for EPF (Employee’s
            Provident Fund) registration?
          </TypographyH3>
          <TypographyP>
            UcServices is a group of intellectuals. The entire team of
            UcServices consists of Highly qualified CA, CS, Lawyers and business
            administrators. UcServices would be a one stop destination for your
            EPF (Employee’s Provident Fund) registration in India. We also
            provide services like Start up advisory, Secretarial compliance
            services, PAN / TAN application, DIN registration, ESI registration
            GST registration, Trademark registration, GST / Income tax return
            filing and many more. You may get in touch with our compliance
            manager on +91 7709 222 331 or email care@financesbazar.com for free
            consultation and to know more about the services provided by us.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {EPFRegistrationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {EPFRegistrationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={EPFRegistrationDescription?.section3?.packages} />
        {/* CustomCad Section */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            Key Features of EPF Registration
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Points to make your decision easy
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {EPFRegistrationDescription?.customcardContent?.map(
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
            List of Documents required for PF registration
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={EPFRegistrationDescription?.RequiredDocuments}
            />
          </div>
        </div>
        {/* Steps Section */}
        <Steps
          heading1={EPFRegistrationDescription?.section4?.heading1}
          steps={EPFRegistrationDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={EPFRegistrationDescription?.section5?.cards} />
        </div>

        <Faqs
          heading1={EPFRegistrationDescription?.section6?.heading1}
          heading2={EPFRegistrationDescription?.section6?.heading2}
          toggleoptions={EPFRegistrationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default EpfRegistrationPage;
