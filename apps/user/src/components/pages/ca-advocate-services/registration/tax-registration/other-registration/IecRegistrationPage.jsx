import React from "react";
import {
  CAHerosection,
  Customcard,
  Faqs,
  Packages,
  RequiredDocuments,
  Steps,
} from "../../../../CaSectionComponents";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/custom/Typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageLayout from "../../../../../layout/PageLayout";
import { ICERegistrationDescription } from "./IceRegistrationDescription";
const IecRegistrationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={ICERegistrationDescription?.section1?.heading1}
          heading2={ICERegistrationDescription?.section1?.heading2}
          heroimg={ICERegistrationDescription?.section1?.heroimg}
          intro={ICERegistrationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            Import Export Code Registration
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP>
            IEC Registration is a 10-digit code issued by the Directorate
            General of Foreign Trade (DGFT) and is required for anyone who wants
            to import or export goods from India. It acts like a license for
            international trade and is needed to clear shipments at customs and
            receive payments from abroad. The process to get IEC is simple and
            done online. Whether you’re a small business or a large company, IEC
            is the first step to start importing or exporting legally from
            India.
          </TypographyP>
          <TypographyH3 className="pt-4 text-blue-950 text-lg sm:text-xl">
            What is Import Export Code (IEC Code)?
          </TypographyH3>

          <TypographyP className="pt-2">
            The Import Export Code (IEC) is a unique 10-digit identification
            number issued by the Directorate General of Foreign Trade (DGFT)
            under the Ministry of Commerce and Industry, Government of India. It
            is mandatory for individuals or businesses involved in the import or
            export of goods and services from India. Without an IEC, no person
            or entity is legally allowed to engage in import or export
            activities. It serves as a basic business identification for
            international trade transactions and is used by customs authorities,
            banks, and other government bodies during shipment clearance and
            financial dealings related to foreign trade.
          </TypographyP>

          <TypographyH3 className="pt-4 text-blue-950 text-lg sm:text-xl">
            When will there be requirement of IE code?
          </TypographyH3>
          <TypographyP className="mt-2">
            At following instances the IE Code would be required:
          </TypographyP>
          <ul class="list-disc pl-8 pt-4 space-y-2">
            <li>
              When an importer has to clear his shipments from the customs then
              it’s needed by the customs authorities.
            </li>
            <li>
              When an importer sends money abroad through banks then it’s needed
              by the bank.
            </li>
            <li>
              When an exporter has to send his shipments then it’s needed by the
              customs port.
            </li>
            <li>
              When an exporter receives money in foreign currency directly into
              his bank account then submission of IEC is required by the bank.
            </li>
          </ul>

          <img
            loading="lazy"
            src={ICERegistrationDescription?.section2?.heroimg}
            alt="section 2"
            className="w-full max-w-3xl object-contain my-6 mx-auto"
          />
          <TypographyH4>Why UcServices</TypographyH4>
          <TypographyP>
            https://financesbazar.com/ is a leading business platform providing
            comprehensive corporate legal services, including company
            incorporation, compliance, advisory, and management consultancy,
            both in India and internationally. The platform offers fast, easy,
            and affordable IEC Modification, New GST Registration, ITR Filing.
            You can contact with compliance manager at +91 7709 222 331 or email
            care@financesbazar.com{" "}
          </TypographyP>
        </div>

        {/* Section 3 */}
        <div className="max-w-5xl w-full mt-8">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            {ICERegistrationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {ICERegistrationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={ICERegistrationDescription?.section3?.packages} />
        <div className="max-w-5xl w-full mt-8">
          <TypographyH3 className="mt-2 text-blue-950">
            Who needs an IEC code?
          </TypographyH3>
          <TypographyP className="pt-3">
            Any individual or business entity who wants to engage in import or
            export of goods and services from India must obtain an Import Export
            Code (IEC) from the Directorate General of Foreign Trade (DGFT) or
            its regional offices. It includes:
          </TypographyP>
          <ul class="list-disc pl-8 pt-4 space-y-2">
            <li>
              <strong>Businesses:</strong> All types of businesses, including
              sole proprietors, partnerships, limited liability companies
              (LLPs), private limited companies, public limited companies and
              any other form of import/export entity must obtain an IEC code.
            </li>
            <li>
              <strong>Manufacturers:</strong> Manufacturers who wish to export
              their products to foreign markets or import raw materials and
              components for manufacturing purposes require an IEC code.
            </li>
            <li>
              <strong>Traders:</strong> Traders who buy and sell goods
              internationally need an IEC code for customs clearance and
              compliance purposes.
            </li>
            <li>
              <strong>Service Providers:</strong> Service providers who provide
              services to clients outside India and accept payments in foreign
              currency also need to obtain an IEC code.
            </li>
            <li>
              <strong>Individuals:</strong> Individuals carrying out
              international business activities in their own name, such as
              importing goods for personal use or exporting products in the
              course of a commercial enterprise, must obtain an IEC code.
            </li>
          </ul>
          <TypographyH3 className="py-1 mt-3 text-blue-950 text-base">
            What are the documents required for IEC code?
          </TypographyH3>
          <TypographyP>
            The specific documents required to obtain an Import Export Code
            (IEC) may vary slightly depending on the regulations of the country
            issuing the code. However, here is a general list of documents
            commonly required for Import export code registration (IEC code
            registration):
          </TypographyP>
          <Table className="border border-gray-300 mt-10">
            <TableHeader className="bg-gray-100">
              <TableRow className="text-center">
                <TableHead className="font-semibold border border-gray-300 px-4 py-2">
                  Document
                </TableHead>
                <TableHead className="font-semibold border border-gray-300 px-4 py-2">
                  Required For
                </TableHead>
                <TableHead className="font-semibold border border-gray-300 px-4 py-2">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Proof of Identity
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Individuals
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Passport, Voter ID, Aadhaar Card, or PAN Card
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2"></TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Entities
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Certificate of Incorporation, Partnership Deed, or Certificate
                  of Registration issued by the relevant authorities
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Address Proof
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Individuals
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Passport, Voter ID, Aadhaar Card, Driving License, or Utility
                  Bill
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2"></TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Entities
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Proof of address (Utility Bill, Rental Agreement, or Real
                  Estate Tax Receipt)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Bank Certificate/Canceled Cheque
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Both Individuals and Entities
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Canceled cheque or bank certificate confirming bank account
                  details (account holder’s name, account number, and IFSC code)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Permanent Account Number (PAN) Card
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Both Individuals and Entities
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  A copy of the PAN card of the applicant or entity
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Digital Photograph
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Both Individuals and Entities
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  A passport-sized digital photograph of the applicant or
                  authorized person signed
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Credentials (if applicable)
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  If someone other than the applicant is applying on behalf of
                  the entity
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  A credential signed by the applicant authorizing the
                  representative to apply for the IEC code
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Certificate of Incorporation
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Companies
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  A copy of the Certificate of Incorporation issued by the
                  Registrar of Companies (ROC)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Articles of Association
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Companies
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  A copy of the Articles of Association and Memorandum of
                  Association of the company
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Partnership Deed
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Partnerships
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  A copy of the partnership deed registered with the Registrar
                  of Companies
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Export Import Code Application Form
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Both Individuals and Entities
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Complete the IEC application form provided by the Directorate
                  General of Foreign Trade (DGFT) or equivalent authority
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <TypographyH3 className="py-1 mt-3 text-blue-950 text-base">
            What are the documents required for IEC code?
          </TypographyH3>
          <TypographyP className="my-4">
            In general, different types of business entities are eligible to
            obtain an Import Export Code (IEC) in order to engage in
            international business activities. Here are the common types of
            businesses eligible for an IEC code:
          </TypographyP>
          <ol className="list-decimal ml-2 pl-6 space-y-2">
            <li>
              <strong>Sole Proprietorship:</strong> A sole proprietorship is a
              business owned and operated by one person. Sole proprietors are
              eligible to apply for an IEC code to facilitate import and export
              transactions for their business.
            </li>
            <li>
              <strong>Partnership Firm:</strong> Partnership firms, where two or
              more individuals join together to carry on business for profit,
              can collectively apply for the IEC Code. The partners jointly own
              and manage the business and are jointly liable for its
              obligations.
            </li>
            <li>
              <strong>Limited Liability Partnership (LLP):</strong> LLPs are
              hybrid business entities that combine the features of a
              partnership and a corporation. LLPs are separate legal entities
              distinct from their partners and can apply for an IEC code to
              engage in international business activities.
            </li>
            <li>
              <strong>Limited Liability Company:</strong> A limited liability
              company is a type of business entity that limits the liability of
              its shareholders and has a separate legal existence separate from
              its owners. Limited companies are eligible to obtain an IEC code
              for import and export purposes.
            </li>
            <li>
              <strong>Joint stock company:</strong> Joint stock companies are
              companies whose shares are publicly traded on a stock exchange.
              Like private limited companies, joint stock companies can apply
              for an IEC code to facilitate their import and export
              transactions.
            </li>
            <li>
              <strong>One Person Company (OPC):</strong> An OPC is a type of
              private company with a single shareholder as the owner. OPCs have
              limited liability and can obtain an IEC code to engage in
              international business activities.
            </li>
            <li>
              <strong>Registered Trusts:</strong> Trusts registered under the
              relevant Trusts Act are eligible to apply for an IEC code if they
              are engaged in import and export.
            </li>
            <li>
              <strong>Registered Companies:</strong> Companies registered under
              the relevant Companies Registration Act may also be eligible to
              obtain an IEC code for engaging in international trade depending
              on the country’s regulations.
            </li>
          </ol>
        </div>
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl mt-2 sm:text-2xl">
            What is the Importance of IEC Code?{" "}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            Points to make your decision easy
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {ICERegistrationDescription?.customcardContent?.map(
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
            Eligibility criteria to Get IEC Code
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={ICERegistrationDescription?.RequiredDocuments}
            />
          </div>
        </div>

        <div className="max-w-5xl w-full mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {ICERegistrationDescription?.IceRegistrationcustomcardContent?.map(
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
          heading1={ICERegistrationDescription?.section4?.heading1}
          steps={ICERegistrationDescription?.section4?.steps}
        />
        <Faqs
          heading1={ICERegistrationDescription?.section6?.heading1}
          heading2={ICERegistrationDescription?.section6?.heading2}
          toggleoptions={ICERegistrationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default IecRegistrationPage;
