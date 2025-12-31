import React from "react";
import PageLayout from "../../../layout/PageLayout";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
} from "../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";
import { OpcAnnualDescription } from "./OpcAnnualFillingDescription";

const OpcAnnualFillingPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={OpcAnnualDescription?.section1?.heading1}
          heading2={OpcAnnualDescription?.section1?.heading2}
          heroimg={OpcAnnualDescription?.section1?.heroimg}
          intro={OpcAnnualDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            What is OPC Compliance?
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP className="p-4 text-sm sm:text-base">
            A One Person Company (OPC) in India is a type of private limited
            company owned and managed by a single individual, as defined under
            Section 2(62) of the Companies Act, 2013. Since an OPC is legally
            treated as a private limited company, it must follow all the
            compliance requirements applicable to such companies, including
            annual filings and regulatory obligations. Meeting these compliance
            requirements is essential to keep the company legally active and
            avoid penalties. Ensuring timely compliance can be challenging, but
            professional services are available to assist OPCs in meeting their
            legal obligations efficiently.
          </TypographyP>

          <TypographyP className="pt-2 p-4">
            An OPC needs to submit its financial statements and annual returns,
            following the financial year from April 1 to March 31. Compared to
            private and public limited companies, OPCs have fewer compliance
            requirements. The annual filing includes details like the company’s
            balance sheet, profit and loss statement, registered office,
            shareholding structure, and management information. This structure
            allows solo entrepreneurs to enjoy the benefits of a corporate
            entity while maintaining limited liability and a separate legal
            identity.
          </TypographyP>

          <img
            loading="lazy"
            src={OpcAnnualDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH3 className="py-4 text-blue-950 text-lg sm:text-xl">
            Required forms to be filed for OPC Annual Compliance
          </TypographyH3>
          <TypographyH4>ROC Form MGT-7</TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-blue-950 text-sm sm:text-base">
            <li>
              Contains details of shareholding structure, changes in
              directorship, and share transfers during the year (if any).
            </li>
            <li>
              HDue Date: 60 days from the completion of six months after the
              financial year ends (i.e., 28th November).
            </li>
            <li>
              Since OPCs are not required to hold an AGM, this timeline applies
              instead of the standard AGM-based deadline. .
            </li>
          </ul>
          <TypographyH4 className="pt-2">ROC Form AOC-4</TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-blue-950 text-sm sm:text-base">
            <li>
              Includes details related to the company’s Balance Sheet, Profit &
              Loss Account, Compliance Certificate, Registered Office Address,
              Register of Members, Shares &
            </li>
            <li>Debentures, Debt, and Management Information.</li>
            <li>
              Due Date: 27th September (180 days from the end of the financial
              year, considering the financial year runs from 1st April to 31st
              March).
            </li>
          </ul>
          <TypographyH4 className="pt-2">ROC Form ADT-1</TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-blue-950 text-sm sm:text-base">
            <li>Filed for the appointment of an auditor.</li>
            <li>
              Due Date: 14th October (within 15 days from the conclusion of the
              AGM)..
            </li>
          </ul>
          <TypographyH4 className="pt-4 font-bold">
            Why Uc Services ?
          </TypographyH4>
          <TypographyP className="text-sm pt-4 sm:text-base">
            https://financesbazar.com/ is an eminent business platform and a
            progressive concept, which helps end-to-end incorporation,
            compliance, advisory, and management consultancy services to clients
            in India and abroad. Filing online TDS Returns is easy, seamless,
            cheapest, and quickest with Uc Serices.com! Apart from online return
            filing under TDS services, Uc Serices.com also helps you to file
            Income Tax Returns, TDS Returns, PF Returns, and ESI Returns easily.
            Contact Uc Serices to know about the TDS Return filing process.
            Inquire for a TDS return filing service provider for Online TDS
            returns, Find out when to file a TDS return. You may get in touch
            with our compliance manager at +91 7709 222 331 or email
            care@financesbazar.com for a free consultation.
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {OpcAnnualDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            {OpcAnnualDescription?.section3?.heading2}
          </TypographyH3>
        </div>

        {/* Packages */}
        <Packages packages={OpcAnnualDescription?.section3?.packages} />

        {/* Importance */}
        <div className="max-w-5xl w-full">
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Importance of OPC Annual Compliances
          </TypographyH3>
          <TypographyP className="font-medium pt-1">
            Annual compliance is essential for a One Person Company (OPC) to
            operate legally and maintain financial stability. Here’s why timely
            filing is important:
          </TypographyP>
          <ul className="list-disc ml-8 mt-6 text-blue-950 text-sm sm:text-base">
            <li>
              Fulfills Legal Obligations and Prevents Penalties: OPCs must
              submit annual returns and financial statements as mandated by the
              Ministry of Corporate Affairs (MCA). Failure to comply can lead to
              fines, late fees, and even the removal of the company from
              official records, affecting its legal standing.
            </li>
            <li>
              Keeps the Company Active and Operational: Regular compliance
              ensures that the OPC remains in good standing with regulatory
              bodies. It prevents the company from being labeled as inactive or
              non-compliant, allowing it to continue business smoothly without
              restrictions.
            </li>
            <li>
              Strengthens Financial Reputation and Trust: Timely submission of
              financial records reflects accountability and transparency,
              increasing trust among stakeholders. A well-maintained compliance
              history helps in building credibility, which is beneficial for
              business expansion and partnerships.
            </li>
            <li>
              Eases Future Business Growth and Funding: Banks, lenders, and
              investors assess a company’s compliance track record before
              approving loans or investments. A company that regularly files its
              returns is more likely to receive financial support, facilitating
              growth and development.
            </li>
            <li>
              Ensures Smooth Tax Filings and Benefits: Regular compliance helps
              in accurate tax filings and avoids unnecessary tax scrutiny or
              penalties. By maintaining proper records, the company can also
              claim tax benefits and exemptions, reducing financial burdens.
            </li>
            <li>
              Boosts Credibility with Clients and Vendors: A company that
              follows compliance rules is seen as reliable and trustworthy by
              clients and suppliers. This improves business relationships and
              makes it easier to secure contracts, collaborations, and better
              credit terms.
            </li>
          </ul>
          <TypographyH4 className="pt-5 text-blue-950 text-lg font-medium">
            Additional Compliances
          </TypographyH4>
          <ul className="list-disc ml-8 mt-2 text-blue-950 text-sm sm:text-base">
            <li>
              DIR-3 KYC: Directors need to update their KYC details every year
              by filing this form. If they fail to do so, their DIN (Director
              Identification Number) will be deactivated. Without an active DIN,
              they cannot sign documents or act as a director.
            </li>
            <li>
              INC-20A: A newly incorporated company must file this declaration
              within 180 days of registration. It confirms that the company has
              started its business operations. If not filed on time, the company
              may face penalties and restrictions on transactions.
            </li>
            <li>
              DPT-3: Companies must report details of outstanding loans and
              deposits as of March 31 each year. This helps the government track
              financial liabilities of companies. Filing this form late may
              result in fines or legal action.
            </li>
            <li>
              MSME-I: Companies must submit this report every six months if they
              have unpaid dues to MSMEs for more than 45 days. This helps
              monitor payments to small businesses and ensures compliance with
              MSME laws. Not filing the form on time can lead to penalties and
              legal issues.
            </li>
          </ul>
          <TypographyH4 className="pt-6 pb-2 text-blue-950 text-lg">
            Penalties for OPC Non-Compliances
          </TypographyH4>
          <TypographyP>
            Failing to comply with OPC annual filing requirements can lead to
            heavy penalties, legal scrutiny, and even the company’s removal from
            official records. Non-filing of annual returns (MGT-7A) and
            financial statements (AOC-4) results in a penalty of ₹100 per day
            per form, while continuous non-compliance for two years can lead to
            the company being struck off by the MCA. Additionally, if filings
            are not completed for three consecutive years, the sole director may
            be disqualified for five years, restricting their ability to manage
            any company.
          </TypographyP>
        </div>

        {/* Benefits */}
        <div className="max-w-5xl py-2 w-full text-blue-950">
          <TypographyH4 className=" text-lg my-4">
            Benefits of OPC annual filings
          </TypographyH4>
          <TypographyP className="font-semibold mt-5">
            Meeting annual compliance requirements for a One Person Company
            (OPC) is crucial for legal security, financial advantages, and
            overall business credibility. Below are the key benefits of ensuring
            timely compliance:
          </TypographyP>
          <ul className="list-disc pl-6 mt-3 space-y-3 ml-2 text-sm sm:text-base">
            <li>
              <span className="font-semibold">
                Avoids Penalties and Legal Issues:
              </span>{" "}
              Non-compliance can result in hefty penalties, late fees, or even
              the disqualification of the director. In severe cases, the
              Ministry of Corporate Affairs (MCA) may strike off the company.
              Filing annual returns on time helps avoid these legal consequences
              and ensures smooth business operations.
            </li>
            <li>
              <span className="font-semibold">
                Maintains Business Continuity:
              </span>{" "}
              Regular compliance ensures that the OPC remains active and
              recognized by regulatory authorities. Missing compliance deadlines
              can lead to unnecessary legal complications, disrupting business
              operations, and limiting future growth opportunities.
            </li>
            <li>
              <span className="font-semibold">
                Improves Business Credibility:
              </span>{" "}
              A company with proper financial filings demonstrates transparency
              and reliability. This builds trust among investors, clients, and
              financial institutions. A strong compliance record can also help
              in establishing long term business relationships and partnerships.
            </li>
            <li>
              <span className="font-semibold">
                Easier Access to Loans and Investments:
              </span>{" "}
              Banks and investors prefer companies that follow proper legal
              procedures. Compliance increases the chances of getting loan
              approvals and attracting investments. Financial institutions are
              more likely to support businesses that maintain a clean legal and
              financial history.
            </li>
            <li>
              <span className="font-semibold">
                Supports Business Growth and Expansion:
              </span>{" "}
              Keeping compliance records up to date is essential when expanding
              business operations or converting an OPC into a Private Limited
              Company. Proper filings ensure that all necessary documentation is
              in place, making transitions smoother and more efficient.
            </li>
            <li>
              <span className="font-semibold">
                Better Tax Planning and Financial Management:
              </span>{" "}
              Accurate financial reporting through timely compliance helps in
              better tax planning and reduces the risk of tax audits. It also
              prevents additional charges such as interest or penalties on
              unpaid taxes, ensuring cost effective financial management.
            </li>
          </ul>
        </div>

        {/* Key ROC Filing Cards */}
        <div className="max-w-5xl w-full mt-10">
          <TypographyH3 className="text-blue-950 text-lg ">
            Mandatory compliances For One Person Company
          </TypographyH3>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH4 className="text-blue-950 text-xl">
            Points to make your decision easy
          </TypographyH4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {OpcAnnualDescription?.customcardContent?.map((card, index) => (
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
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            Documents Required for ROC Compliance for Pvt Ltd Company
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-900 my-4" />
          <div className="flex justify-center">
            <RequiredDocuments
              requiredDocuments={OpcAnnualDescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={OpcAnnualDescription?.section4?.heading1}
          steps={OpcAnnualDescription?.section4?.steps}
        />

        {/* FAQs */}
        <Faqs
          heading1={OpcAnnualDescription?.section6?.heading1}
          heading2={OpcAnnualDescription?.section6?.heading2}
          toggleoptions={OpcAnnualDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default OpcAnnualFillingPage;
