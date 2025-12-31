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
import { SSIMsmeRegistrationDescription } from "./SsiMsmeRegistrationDescription";
const SsiMsmeRegistrationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={SSIMsmeRegistrationDescription?.section1?.heading1}
          heading2={SSIMsmeRegistrationDescription?.section1?.heading2}
          heroimg={SSIMsmeRegistrationDescription?.section1?.heroimg}
          intro={SSIMsmeRegistrationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is SSI MSME Registration?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP className="mt-2">
            To avail the benefits under the MSMED Act from Central or State
            Government and the Banking Sector, MSME Registration is required.
            MSME stands for micro, small and medium enterprises and any
            enterprise that falls under any of these three categories. Micro,
            Small and Medium Enterprises (MSME) sector has emerged as a highly
            vibrant and dynamic sector of the Indian economy over the last five
            decades.
          </TypographyP>
          <TypographyP className="mt-2">
            On 13th may, 2020 Government of India announced some major relief to
            the MSMEs. And one of the major relief is that the Government
            Revised the definition of the MSMe as a whole.
          </TypographyP>
          <TypographyP className="mt-2">
            Under the new definitions, the distinction between manufacturing and
            services enterprises has been eliminated and the investments have
            been revised upwards and additional criteria of turnover has been
            introduced.
          </TypographyP>

          <img
            loading="lazy"
            src={SSIMsmeRegistrationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="text-blue-950 ">
            What is the new & Revised definition of MSMe?
          </TypographyH3>

          <TypographyP className="mt-4">
            The new definition of MSMe is as follows:
          </TypographyP>
          <TypographyP>
            {" "}
            <strong>Micro Enterprise:</strong> Manufacturing and services
            enterprises with investments up to Rs 1 crore and turnover up to Rs
            5 crore will be classified as micro enterprises.
          </TypographyP>
          <TypographyP>
            {" "}
            <strong>Micro Enterprise:</strong> Manufacturing and services
            enterprises with investments up to Rs 1 crore and turnover up to Rs
            5 crore will be classified as micro enterprises.
          </TypographyP>
          <TypographyP>
            {" "}
            <strong>Small Enterprise:</strong> For small enterprises, the
            investment criteria and the turnover criteria has been revised
            upwards to Rs 10 crore and Rs 50 crore respectively.
          </TypographyP>
          <TypographyP>
            {" "}
            <strong>Medium Enterprise:</strong> For small enterprises, the
            investment criteria and the turnover criteria has been revised
            upwards to Rs 10 crore and Rs 50 crore respectively.
          </TypographyP>
          <div className="max-w-5xl w-full mt-6">
            <h2 className="text-xl md:text-2xl font-semibold my-6">
              Table showing existing and revised definition of MSME:
            </h2>

            {/* Existing MSME Classification */}
            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Existing MSMEs Classification (Criteria - Investment in Plant &
                Machinery or Equipment)
              </h3>
              <div className="overflow-x-auto border border-gray-300">
                <table className="min-w-full text-sm text-left text-gray-900">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-2 border">Classification</th>
                      <th className="px-4 py-2 border">Micro</th>
                      <th className="px-4 py-2 border">Small</th>
                      <th className="px-4 py-2 border">Medium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-semibold">
                        Manufacturing Enterprises
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 25 lacs
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 5 Crore
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 10 Crore
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-semibold">
                        Service Enterprises
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 10 lacs
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 2 Crore
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 5 Crore
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Revised MSME Classification */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Revised MSMEs Classification for Aatma Nirbhar Bharat
              </h3>
              <p className="mb-2 font-medium">
                (Criteria – Investment & Annual Turnover)
              </p>
              <div className="overflow-x-auto border border-gray-300">
                <table className="min-w-full text-sm text-left text-gray-900">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-2 border">Classification</th>
                      <th className="px-4 py-2 border">Micro</th>
                      <th className="px-4 py-2 border">Small</th>
                      <th className="px-4 py-2 border">Medium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-semibold">
                        Manufacturing And Services
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 1 Cr and Turnover less than Rs.
                        5 Cr
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 10 Cr and Turnover less than
                        Rs. 50 Cr
                      </td>
                      <td className="px-4 py-2 border">
                        Investment less than Rs. 50 Cr and Turnover less than
                        Rs. 250 Cr
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <TypographyP className="mt-7">
            The new definition will benefit all the MSMes as they need not worry
            about growing in size; they will still be able to get quite a lot of
            benefits which otherwise, as an MSME, they have got.
          </TypographyP>
          <TypographyP className="mt-2">
            This said new definition of MSMe is a welcome move for the promotion
            of the Atma Nirbhar Bharat Abhiyan by the Government of India.
          </TypographyP>
          <TypographyP className="mt-2">
            Any Micro, Small and medium-sized enterprises in the manufacturing
            and service sector can obtain MSME Registration. MSME is used
            interchangeably with SSI, which stands for Small Scale Industries.
          </TypographyP>
          <TypographyP className="mt-2">
            Though the MSME registration is not statutory, it is beneficial for
            business at it provides a range of benefits such as eligibility for
            capital investment subsidies, lower rates of interest, tax
            subsidies, power tariff subsidies, and other support. You may also
            avail our e-Xpress service to obtain SSI registration / MSME
            registration within one working day.
          </TypographyP>
          <TypographyP className="mt-2">
            Uc Services is an eminent business platform and a progressive
            concept, which helps end-to-end incorporation, compliance, advisory,
            and management consultancy services to clients in India and abroad.
            Registering for SSI/MSME is easy, seamless, cheapest and quickest
            with Uc Services!
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {SSIMsmeRegistrationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {SSIMsmeRegistrationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages
          packages={SSIMsmeRegistrationDescription?.section3?.packages}
        />
        {/* CustomCad Section */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            Benefits of SSI MSME Registration
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Points to make your decision easy
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {SSIMsmeRegistrationDescription?.customcardContent?.map(
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
            Documents Required for SSI MSME Registration
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={
                SSIMsmeRegistrationDescription?.RequiredDocuments
              }
            />
          </div>
        </div>
        {/* Steps Section */}
        <Steps
          heading1={SSIMsmeRegistrationDescription?.section4?.heading1}
          steps={SSIMsmeRegistrationDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={SSIMsmeRegistrationDescription?.section5?.cards} />
        </div>

        <Faqs
          heading1={SSIMsmeRegistrationDescription?.section6?.heading1}
          heading2={SSIMsmeRegistrationDescription?.section6?.heading2}
          toggleoptions={
            SSIMsmeRegistrationDescription?.section6?.toggleoptions
          }
        />
      </div>
    </PageLayout>
  );
};

export default SsiMsmeRegistrationPage;
