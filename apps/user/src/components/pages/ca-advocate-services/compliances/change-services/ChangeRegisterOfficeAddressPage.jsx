import React from "react";
import {
  CAHerosection,
  Customcard,
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
import { ChangeRegisterOfficeAddressDescription } from "./ChangeRegisterOfficeAddressDescription";
const ChangeRegisterOfficeAddressPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={ChangeRegisterOfficeAddressDescription?.section1?.heading1}
          heading2={ChangeRegisterOfficeAddressDescription?.section1?.heading2}
          heroimg={ChangeRegisterOfficeAddressDescription?.section1?.heroimg}
          intro={ChangeRegisterOfficeAddressDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            Change of Registered Office Address
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            Registered office of Company:
          </TypographyH3>{" "}
          <TypographyP>
            Every company incorporated in India must have a registered office
            address. It is a principal place of business. All official
            correspondence from the Registrar is sent to this office. For any
            reason, you may have to shift your principal place of business be it
            within the city, within a state, or in a different city or in a
            different state altogether an initiation to ROC is a must. The
            registered office of a company is that to which official
            correspondence and all formal legal notices addressed to the company
            will be sent.
          </TypographyP>
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            Change in the Address of Registered office of Company:
          </TypographyH3>{" "}
          <TypographyP>
            Every company that has shifted registered office must give notice to
            Ministry within 30 days of such change. However, a special
            resolution is needed in the case the registered office has been
            shifted to another city in the same state. In the case where a
            registered office has been shifted from one state to another, the
            Company has to complete certain formalities. It must then give a
            newspaper advertisement and also a notice to the State Government
            and obtain NOC.
          </TypographyP>
          <img
            loading="lazy"
            src={ChangeRegisterOfficeAddressDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 mb-3">
            Penalty for not complying with the procedural requirements of change
            in the registered office of company as per the Act:
          </TypographyH3>
          <TypographyP>
            If any default is made in complying with the procedural requirements
            of change in registered office of company, the company and every
            officer who is in default shall be liable to a penalty of one
            thousand rupees for every day during which the default continues but
            not exceeding one lakh rupees.
          </TypographyP>
          <TypographyH4 className="text-blue-950 text-base mt-3 mb-2">
            Why UC Services?
          </TypographyH4>
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
            {ChangeRegisterOfficeAddressDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {ChangeRegisterOfficeAddressDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages
          packages={ChangeRegisterOfficeAddressDescription?.section3?.packages}
        />
        {/* CustomCad Section */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            Types of Directors
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            An Easy understanding
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {ChangeRegisterOfficeAddressDescription?.customcardContent?.map(
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
            Documents required to change the Registered Office of Company
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={
                ChangeRegisterOfficeAddressDescription?.RequiredDocuments
              }
            />
          </div>
        </div>
        {/* Steps Section */}
        <Steps
          heading1={ChangeRegisterOfficeAddressDescription?.section4?.heading1}
          steps={ChangeRegisterOfficeAddressDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard
            cards={ChangeRegisterOfficeAddressDescription?.section5?.cards}
          />
        </div>

        <Faqs
          heading1={ChangeRegisterOfficeAddressDescription?.section6?.heading1}
          heading2={ChangeRegisterOfficeAddressDescription?.section6?.heading2}
          toggleoptions={
            ChangeRegisterOfficeAddressDescription?.section6?.toggleoptions
          }
        />
      </div>
    </PageLayout>
  );
};

export default ChangeRegisterOfficeAddressPage;
