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
import { GstRegistrationDescription } from "./GstRegistrationDescription";
import PageLayout from "../../../../layout/PageLayout";

const GstRegistrationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={GstRegistrationDescription?.section1?.heading1}
          heading2={GstRegistrationDescription?.section1?.heading2}
          heroimg={GstRegistrationDescription?.section1?.heroimg}
          intro={GstRegistrationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            GST Registration
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know about GST Registration Number
          </TypographyH3>
          <TypographyH4 className=" my-2 text-base sm:text-lg">
            What is GST?
          </TypographyH4>
          <TypographyP>
            GST stands for Goods and Services Tax. It is a value added tax
            imposed on most goods and services sold for domestic consumption.
            GST is a comprehensive indirect tax that has been introduced in many
            countries to replace various taxes such as sales tax, VAT, excise
            duty, etc., simplifying the taxation process and reducing
            complexity. It is designed to be a more transparent and efficient
            tax system applicable at every stage of the supply chain, from
            production to the final consumer.
          </TypographyP>
          <TypographyP className="mt-3">
            <strong>GST Registration</strong> is applicable on all goods and
            services except Petroleum products as of now. Goods & Service Tax
            (GST) is a consolidated tax, which essentially means that State and
            Central Indirect taxes have been merged. Entire country now operates
            under a uniform tax system. It now replaces service tax, excise,
            VAT, entertainment tax, luxury tax, octroi, CST etc.
          </TypographyP>

          <img
            loading="lazy"
            src={GstRegistrationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH4 className=" text-xl my-2 text-blue-950">
            Structure of GST in India
          </TypographyH4>
          <TypographyP>
            In India, the Goods and Services Tax (GST) is a broad indirect tax
            on goods and services nationwide. It’s a dual model, meaning both
            the central and state governments collect and manage the tax. Here’s
            a summary of the GST structure in India:
          </TypographyP>
          <ol className="list-disc space-y-2  list-outside pl-7 pt-3">
            <li>
              <strong> Central Goods and Services Tax (CGST):</strong> CGST is a
              component of GST levied by the Central Government on domestic
              supplies of goods and services. It is governed by the Central
              Goods and Services Tax Act, 2017.
            </li>
            <li>
              <strong> State Goods and Services Tax (SGST):</strong> SGST is a
              component of GST levied by state governments on domestic supplies
              of goods and services. Each state has its own SGST law that
              governs the levy and administration of SGST.
            </li>
            <li>
              <strong> Integrated Goods and Services Tax (IGST):</strong> IGST
              is a tax levied on interstate supply of goods and services as well
              as imports. It is collected by the central government and then
              distributed among the states. IGST is governed by the Integrated
              Goods and Services Tax Act, 2017.
            </li>
            <li>
              <strong> Union Territory Goods and Services Tax (UTGST):</strong>{" "}
              UTGST is similar to SGST but applies to the Union Territory of
              India. It is governed by the Union Territory Goods and Services
              Tax Act 2017.
            </li>
            <li>
              <strong> Cess:</strong> In addition to the above taxes, certain
              goods and services may attract specific taxes that are levied for
              specific purposes such as funding educational or health
              initiatives. These charges are levied over and above the GST rate
              applicable to those goods or services.
            </li>
          </ol>

          <TypographyP className="pt-3">
            The GST Council, led by the Union Finance Minister and including
            State and Union Territory Finance Ministers, makes recommendations
            on GST matters like tax rates, exemptions, and thresholds. It
            ensures uniformity and consistency in GST across the country.
          </TypographyP>

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
            {GstRegistrationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {GstRegistrationDescription?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}
        <Packages packages={GstRegistrationDescription?.section3?.packages} />

        <div className="max-w-5xl w-full mt-10">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            Advantages of New GST Registration number in business
          </TypographyH2>
          <TypographyP className="my-4">
            Obtaining a Goods and Services Tax (GST) number offers several
            benefits to businesses in India:
          </TypographyP>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>Legitimacy and Compliance:</strong> Getting a GST number
              makes your business look legitimate to both the government and
              customers. It shows you’re following tax laws, which boosts trust
              and credibility.
            </li>
            <li>
              <strong>Interstate Trade:</strong> A GST number lets businesses
              trade across state lines freely. IGST makes it easy to move goods
              and services between states and improves trade efficiency.
            </li>
            <li>
              <strong>Input Tax Credit (ITC):</strong> Businesses can claim
              input tax credit on taxes paid for purchases, which lowers their
              overall tax burden by offsetting these costs against taxes
              collected from sales.
            </li>
            <li>
              <strong>Reduced Tax Cascade:</strong> GST replaces several
              indirect taxes like VAT, Excise Tax, Service Tax etc. with a
              single unified tax. This simplifies the tax structure and makes
              compliance easier for businesses.
            </li>
            <li>
              <strong>Simplified Tax Structure:</strong> GST replaces various
              indirect taxes (like VAT, Excise Tax, Service Tax) with one
              unified tax. This simplifies the tax system and makes it easier
              for businesses to comply.
            </li>
            <li>
              <strong>Ease of Doing Business:</strong> GST has made
              registration, filing returns, and paying taxes easier through its
              online portal. This simplifies business for entrepreneurs and cuts
              down on admin work.
            </li>
            <li>
              <strong>National Market Access:</strong> GST creates a single
              national market by removing state-level trade barriers, helping
              businesses reach more states and explore new opportunities.
            </li>
            <li>
              <strong>Competitive Advantage:</strong> GST creates a fairer
              business environment by removing state tax differences and
              geographical barriers, boosting competition, especially for small
              and medium-sized businesses.
            </li>
            <li>
              <strong>Improved cash flow:</strong> Businesses can improve their
              cash flow by using input tax credits to reduce the taxes they owe
              on their sales.
            </li>
          </ul>
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl my-4">
            What are the Turnover Limit under GST in India?
          </TypographyH2>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              For most states in India, the threshold limit for mandatory GST
              registration is ₹20,00,000 of total turnover in a financial year
              for supply of goods and ₹10,00,000 for special category states.
            </li>
            <li>
              Special category states in India include the northeastern states,
              Uttarakhand, Himachal Pradesh, and Jammu and Kashmir. Certain
              businesses must register for GST regardless of their turnover.
              These include businesses involved in interstate supply, casual or
              non-resident taxable persons, e-commerce operators, input service
              distributors, supplier representatives, and those liable for
              reverse charge tax.
            </li>
            <li>
              It is important to note that these turnover limits are subject to
              change based on decisions taken by the GST Council. Therefore,
              businesses should regularly check for updates on turnover limits
              and other GST-related regulations to ensure compliance.
            </li>
          </ul>
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl my-4">
            What are the Turnover Limit under GST in India?
          </TypographyH2>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>1. Exempt:</strong> Certain essential goods and services
              are exempt from GST. This means they are not subject to any GST.
              Examples include fresh fruits and vegetables, milk, educational
              services, health services, etc.
            </li>
            <li>
              <strong>2. Zero-rated (0%):</strong> Certain goods and services
              are zero-rated, meaning they are subject to a 0% GST rate. This
              category includes items such as fresh meat, fish, poultry, dairy
              products, grains, books, newspapers, etc.
            </li>
            <li>
              <strong>3. 5% GST Slab:</strong> This slab includes essential
              items like household items like sugar, spices, tea, coffee (except
              instant), coal, medicines and some transport services.
            </li>
            <li>
              <strong>4. 12% GST Slab:</strong> Goods covered under this slab
              include processed food, garments above ₹1000, frozen meat
              products, butter, cheese, ghee, packaged food, mobile phones,
              sewing machines etc. Moreover, some services like business class
              air tickets, hotel accommodation with tariff between ₹1000 and
              ₹2500 etc. come under this slab.
            </li>
            <li>
              <strong>5. 18% GST Slab:</strong> Items like footwear worth more
              than ₹500, biscuits, pastries and cakes, mineral water, camera,
              speakers, printers and services like AC hotels serving alcohol,
              telecom services, IT services, financial services etc., fall under
              this slab.
            </li>
            <li>
              <strong>6. 28% GST Slab:</strong> This slab includes items such as
              automobiles, motorcycles, SUVs, carbonated water, high-end
              motorcycles, cigarettes, cigars and services such as five–star
              hotels, racing club betting and cinema halls.
            </li>
            <li>
              <strong>7. Special rates:</strong> Certain goods and services are
              subject to GST at special rates. For example, luxury cars and
              tobacco products attract cess in addition to the 28% GST rate.
            </li>
          </ul>
        </div>

        {/* Key Compliance Cards */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH3 className="text-blue-950 text-lg">
            Who needs new GST Registration Online?
          </TypographyH3>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {GstRegistrationDescription?.customcardContent?.map(
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
            Documents Required for GST Registration Number
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={GstRegistrationDescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={GstRegistrationDescription?.section4?.heading1}
          steps={GstRegistrationDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <Stepscard cards={GstRegistrationDescription?.section5?.cards} />
        </div>

        {/* FAQs */}
        <Faqs
          heading1={GstRegistrationDescription?.section6?.heading1}
          heading2={GstRegistrationDescription?.section6?.heading2}
          toggleoptions={GstRegistrationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default GstRegistrationPage;
