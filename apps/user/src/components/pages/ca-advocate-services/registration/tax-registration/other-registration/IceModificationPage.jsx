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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageLayout from "../../../../../layout/PageLayout";
import { ICEModificationDescription } from "./IceModificationDescription";
const IceModificationPage = () => {
  return (
    <PageLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section 1 */}
        <CAHerosection
          heading1={ICEModificationDescription?.section1?.heading1}
          heading2={ICEModificationDescription?.section1?.heading2}
          heroimg={ICEModificationDescription?.section1?.heroimg}
          intro={ICEModificationDescription?.section1?.intro}
        />

        {/* Section 2 */}
        <div className="max-w-5xl w-full">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl md:text-3xl">
            IEC Modification
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-2 text-blue-950 text-lg sm:text-xl">
            All you need to know
          </TypographyH3>
          <TypographyP className="mt-2">
            Whether you’re starting an import-export business or already own
            one, keeping your documents updated is crucial. One such important
            document is the Import Export Code (IEC). Issued by the Directorate
            General of Foreign Trade (DGFT), the IEC is a 10-digit
            identification number necessary for any international trade.
          </TypographyP>
          <TypographyP className="mt-4">
            Over time, if any details associated with your IEC; like business
            address, ownership, or contact details, change, it’s essential to
            update them. This update process is called IEC Modification.
          </TypographyP>
          <TypographyP className="mt-4">
            Keeping your IEC information updated ensures legal compliance,
            avoids penalties, and maintains trust in foreign markets.
          </TypographyP>
          <TypographyH3 className="pt-4 text-blue-950 text-lg sm:text-xl">
            What is IEC Modification?
          </TypographyH3>

          <TypographyP className="pt-2">
            IEC Modification refers to the process of updating or correcting any
            changes in the existing IEC license issued to a business or
            individual. This is required when there is a change in business
            details, such as:
          </TypographyP>
          <ul class="list-disc pl-8 pt-4 space-y-2">
            <li>Name or address of the business</li>
            <li>Contact details (email or phone number)</li>
            <li>Bank account details</li>
            <li>Addition or removal of partners/directors</li>
            <li>
              Change in legal structure (from proprietorship to LLP, etc.)
            </li>
          </ul>

          <img
            loading="lazy"
            src={ICEModificationDescription?.section2?.heroimg}
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
            {ICEModificationDescription?.section3?.heading1}
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-base">
            {ICEModificationDescription?.section3?.heading2}
          </TypographyH3>
        </div>
        <Packages packages={ICEModificationDescription?.section3?.packages} />
        <div className="max-w-5xl w-full mt-8">
          <TypographyH3 className="mt-2 text-blue-950">
            When Should You Modify IEC?
          </TypographyH3>
          <Table className="border border-gray-300 mt-10">
            <TableHeader className="bg-gray-100">
              <TableRow className="text-center">
                <TableHead className="font-semibold border border-gray-300 px-4 py-2">
                  Change Type
                </TableHead>
                <TableHead className="font-semibold border border-gray-300 px-4 py-2">
                  Requires Modification?
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Change in Business Address
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Change in Director/Partner details
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Change in Bank Account
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Change in Entity Type
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Yes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Minor corrections (spelling errors)
                </TableCell>
                <TableCell className="border border-gray-300 px-4 py-2">
                  Yes
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <TypographyP className="pt-5">
            Important: As per DGFT norms, IEC holders are required to confirm or
            update their IEC annually between April to June, even if there are
            no changes.
            <br /> (Source: DGFT Public Notice No. 49/2015-2020)
          </TypographyP>
          <TypographyH4 className="mt-3">
            When Should You Modify IEC?
          </TypographyH4>
          <ul class="list-disc pl-8 pt-4 space-y-2">
            <li>Modifications can be done anytime during the year.</li>
            <li>Annual update between April and June is mandatory.</li>
            <li>
              Incorrect details in IEC may lead to customs hold or penalties.
            </li>
            <li>Always keep DSC or Aadhar linked for easier e-signing.</li>
            <li>
              Government fee for modification is nil, but professional help may
              involve charges.
            </li>
          </ul>
          <TypographyP className="mt-6">
            IEC Modification is not just a compliance requirement but a
            necessary step to keep your business running smoothly in the
            international market. With the DGFT portal making the process
            simpler, there’s no reason to delay any updates. Always make sure
            your IEC reflects accurate business information to avoid unnecessary
            trouble at ports or with regulatory authorities. For any
            clarification, you can always refer to the official DGFT portal:
            https://dgft.gov.in
          </TypographyP>
        </div>

        {/* Required Documents */}
        <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 mt-10 mx-auto">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl text-center">
            Benefits of IEC Modification
          </TypographyH2>
          <div className="mt-10">
            <RequiredDocuments
              requiredDocuments={ICEModificationDescription?.RequiredDocuments}
            />
          </div>
        </div>

        {/* Steps Section */}
        <Steps
          heading1={ICEModificationDescription?.section4?.heading1}
          steps={ICEModificationDescription?.section4?.steps}
        />
        <div className="max-w-5xl w-full mt-6">
          <TypographyH2 className="text-blue-950 text-xl sm:text-2xl">
            How to Modify IEC – Step-by-Step Process
          </TypographyH2>
          <div className="w-20 h-[2px] bg-blue-800 my-4" />
          <TypographyH3 className="py-1 text-blue-950 text-lg">
            The process for IEC modification is completely online and simple if
            followed correctly. Here’s how you can do it:
          </TypographyH3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {ICEModificationDescription?.customcardContent?.map(
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

        <Faqs
          heading1={ICEModificationDescription?.section6?.heading1}
          heading2={ICEModificationDescription?.section6?.heading2}
          toggleoptions={ICEModificationDescription?.section6?.toggleoptions}
        />
      </div>
    </PageLayout>
  );
};

export default IceModificationPage;
