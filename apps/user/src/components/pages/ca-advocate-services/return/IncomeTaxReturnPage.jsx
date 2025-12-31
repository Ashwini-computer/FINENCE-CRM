import React, { useState } from "react";
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
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";

import {
  TypographyH2,
  TypographyH3,
  BoldList,
  TypographyP,
  TypographyH4,
} from "@/custom/Typography";
import { IncomeTaxReturndiscription } from "./IncomeTaxReturnDescription";

const IncomeTaxReturnPage = () => {
  const [selectedcard, setSelectedcard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "ITR-1 (Sahaj)",
      info: "This form is for individuals who have income from salary, property of one house, other sources (except lottery winnings and income from racehorses) and total income up to ₹50 lakh.",
    },
    {
      id: 2,
      title: "ITR-2",
      info: "Individuals and Hindu Undivided Families (HUFs) who are not eligible to file ITR-1 and have income from sources other than profits and gains from business or profession.",
    },
    {
      id: 3,
      title: "ITR-3",
      info: "For Individuals and HUFs with income from profits and gains from business or profession.",
    },
    {
      id: 4,
      title: "ITR-4",
      info: " This form is meant for assumed income from business and profession. It applies to individuals, HUFs and firms (other than LLPs) having total income up to ₹ 50 lakhs and filing under sections 44AD, 44ADA or 44AE.",
    },
    {
      id: 5,
      title: "ITR-5",
      info: "For persons other than individual, HUF, company and person filing Form ITR-7. It includes firms, LLPs (Limited Liability Partnerships), AOPs (Associations of Persons), BOIs (Body of Individuals), artificial legal entities, cooperative societies and local authorities.",
    },
    {
      id: 6,
      title: "ITR-6",
      info: " For companies other than companies claiming exemption under section 11 (charitable or religious trusts)",
    },
    {
      id: 7,
      title: "ITR-7",
      info: " For persons including companies who are required to furnish return under section 139(4A) or 139(4B) or 139(4C) or 139(4D) or 139(4E) or 139(4F). This form is for persons, including companies, required to provide a return under section 139(4A) or section 139(4B) or section 139(4C) or section 139(4D) or section 139(4E) or section 139(4F ).",
    },
    {
      id: 8,
      title: "ITR-V:",
      info: " This is the confirmation form that is generated after online filing of returns. It must be signed and sent to the CPC (Centralized Processing Center) of the Income Tax Department within 120 days of the electronic filing of the return.",
    },
  ];
  return (
    <>
      <PageLayout>
        <div className="w-full mx-auto flex justify-center items-center flex-col">
          {/* Section 1 */}
          <CAHerosection
            heading1={IncomeTaxReturndiscription?.section1?.heading1}
            heading2={IncomeTaxReturndiscription?.section1?.heading2}
            heroimg={IncomeTaxReturndiscription?.section1?.heroimg}
            intro={IncomeTaxReturndiscription?.section1?.intro}
          />
          {/* section 2 */}
          <div className="max-w-5xl px-4 w-full">
            <TypographyH2 className="text-blue-950">
              Income Tax Returns
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-2 text-blue-950">
              All you need to know
            </TypographyH3>
            <TypographyH4> What is Income Tax return? </TypographyH4>
            <TypographyP className="p-4 font-sm">
              An Income Tax Return (ITR) is a form where taxpayers declare their
              taxable income from all sources, eligible deductions, and any
              taxes paid (e.g., TDS or advance tax). If you’ve paid more taxes
              than what is “payable,” you may be eligible for an income tax
              refund. If you owe additional taxes, you need to pay the
              outstanding amount before filing your return. Income tax is
              typically paid in advance through Tax Deducted at Source (TDS) or
              Advance Tax. When filing your ITR, ensure you disclose all sources
              of income and taxes paid accurately.
            </TypographyP>
            <img
              loading="lazy"
              src={IncomeTaxReturndiscription?.section2?.heroimg}
              alt="section 2"
              className="w-full max-w-3xl object-contain my-6 mx-auto"
            />
            <TypographyH4>Why UcServices?</TypographyH4>
            <TypographyP className="pt-2">
              https://financesbazar.com/ is an eminent business platform and a
              progressive concept, which helps end-to-end incorporation,
              compliance, advisory, and management consultancy services to
              clients in India and abroad. Filing online TDS Returns is easy,
              seamless, cheapest, and quickest with Uc Serices.com! Apart from
              online return filing under TDS services, Uc Serices.com also helps
              you to file Income Tax Returns, TDS Returns, PF Returns, and ESI
              Returns easily. Contact Uc Serices to know about the TDS Return
              filing process. Inquire for a TDS return filing service provider
              for Online TDS returns, Find out when to file a TDS return. You
              may get in touch with our compliance manager at +91 7709 222 331
              or email care@financesbazar.com for a free consultation.
            </TypographyP>
          </div>
          {/* section 3 */}
          <div className="max-w-5xl px-4 w-full mt-6">
            <TypographyH2 className="text-blue-950">
              {IncomeTaxReturndiscription?.section3?.heading1}
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-800 my-4" />
            <TypographyH3 className="py-1 text-blue-950">
              {IncomeTaxReturndiscription?.section3?.heading2}
            </TypographyH3>
          </div>
          {/* Packages Section */}
          <Packages packages={IncomeTaxReturndiscription?.section3?.packages} />
          <div className="max-w-5xl w-full px-6 mx-auto">
            <TypographyH2 className="text-blue-950">
              Different forms for ITR Filing
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 mt-4 mb-5" />

            <Marquee pauseOnHover gradient={false} speed={60}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  onClick={() => setSelectedcard(card)}
                  className="min-w-[300px] mx-4 cursor-pointer shadow-2xl bg-slate-100 hover:bg-gray-100 transition"
                >
                  <CardContent className="p-4 text-center font-semibold">
                    {card.title}
                  </CardContent>
                </Card>
              ))}
            </Marquee>

            {/* Show info of selected card below the marquee */}
            {selectedcard ? (
              <div className="mt-6 flex justify-center items-center">
                <Card className="h-40 flex flex-col gap-2 justify-center items-center p-4 text-center">
                  <TypographyH3>{selectedcard?.title}</TypographyH3>
                  <p className="text-gray-700">{selectedcard?.info}</p>
                </Card>
              </div>
            ) : (
              <div className="mt-6 flex justify-center items-center">
                <Card className="h-40 flex flex-col gap-2 justify-center items-center p-4 text-center">
                  <TypographyH3>{cards[0]?.title}</TypographyH3>
                  <p className="text-gray-700">{cards[0]?.info}</p>
                </Card>
              </div>
            )}
          </div>

          <div className="max-w-5xl py-8 w-full px-8 mx-auto flex flex-col gap-4">
            <TypographyH4>Penalties in Income Tax Return E-Filing</TypographyH4>
            <div>
              <TypographyH4>1. Late Filing Penalty</TypographyH4>
              <TypographyP className="p-3">
                If you fail to file your income tax return (ITR) by the due
                date, a penalty may be levied under Section 234F. For the
                current assessment year (AY 2023-24), the penalty for filing
                after the due date but before December 31 is up to ₹5,000. For
                income below ₹5 lakhs, the maximum penalty is ₹1,000.
              </TypographyP>
              <TypographyH4>2. Penalty for Incorrect Information</TypographyH4>
              <TypographyP className="p-3">
                Providing incorrect or misleading information in your ITR can
                attract penalties under Section 270A. If discrepancies are
                identified during assessment, the penalty will depend on the
                severity of the error and can range from 50% to 200% of the
                under-reported tax.
              </TypographyP>
              <TypographyH4>3. Under-reporting Income Penalties</TypographyH4>
              <TypographyP className="p-3">
                Concealing income or under reporting it can result in penalties
                under Section 270A. The penalty typically ranges from 50% of the
                tax payable for under-reported income to 200% for cases of
                intentional concealment.
              </TypographyP>
              <TypographyH4>4. Failure to Pay Tax on Time</TypographyH4>
              <TypographyP className="p-3">
                If you do not pay the full tax liability by the due date,
                interest is charged under Sections 234A, 234B, and 234C of the
                Income Tax Act. The interest rates are calculated on the unpaid
                tax amount for delays in filing, advance tax payments, or
                overall tax settlement.
              </TypographyP>
              <TypographyH4>5. Failure to File ITR</TypographyH4>
              <TypographyP className="p-3">
                Not filing a mandatory income tax return can lead to legal
                notices, penalties, and fines. Continuous non-compliance may
                result in prosecution under Section 276CC, which includes
                imprisonment and fines.
              </TypographyP>
            </div>
          </div>
          <div className="max-w-5xl py-2 w-full px-8 mx-auto flex flex-col gap-4">
            <TypographyH4>
              What are the eligibility criteria for Income tax return filing?
            </TypographyH4>
            <div>
              <TypographyP>
                Eligibility criteria for filing an Income Tax Return (ITR) may
                vary depending on the tax laws and regulations of a particular
                country. However, here are some common eligibility criteria that
                individuals usually need to meet in order to file an income tax
                return:
              </TypographyP>
              <TypographyH4 className="pt-5">1. Income Threshold</TypographyH4>
              <TypographyP className="p-3">
                Persons whose total income during a financial year exceeds a
                specified threshold set by the tax authorities are generally
                required to file an income tax return. This threshold may vary
                depending on factors such as age, sources of income, and
                residential status.
              </TypographyP>
              <TypographyH4 className="pt-5">
                2. Residential Status
              </TypographyH4>
              <TypographyP className="p-3">
                Tax liability and filing requirements may vary depending on an
                individual’s residential status, such as resident, non-resident,
                or resident but not ordinarily resident as defined by a
                country’s tax laws. Age: Some countries have specific filing
                requirements based on the taxpayer’s age. For example, certain
                tax benefits or deductions may be available to seniors or
                individuals under a certain age.
              </TypographyP>
              <TypographyH4 className="pt-5">3. Age</TypographyH4>
              <TypographyP className="p-3">
                Some countries have specific filing requirements based on the
                taxpayer’s age. For example, certain tax benefits or deductions
                may be available to seniors or individuals under a certain age.
              </TypographyP>
              <TypographyH4 className="pt-5">4. Sources of Income</TypographyH4>
              <TypographyP className="p-3">
                Individuals earning income from a variety of sources, such as
                salary, business or profession, capital gains, real estate, or
                other investments, may be required to file a tax return
                depending on applicable tax laws and limits for each income
                category.
              </TypographyP>
              <TypographyH4 className="pt-5">
                5. Taxable Transactions
              </TypographyH4>
              <TypographyP className="p-3">
                Taxpayers who engage in certain taxable transactions, such as
                selling property, receiving gifts, or earning income from
                abroad, may have additional filing or reporting obligations.
              </TypographyP>
              <TypographyH4 className="pt-5">
                6. Claiming Deductions or Exemptions
              </TypographyH4>
              <TypographyP className="p-3">
                Individuals who wish to claim deductions, exemptions, or tax
                credits under the tax laws must usually file an income tax
                return to take advantage of these benefits. This includes
                deductions for investments, expenses, gifts, or other eligible
                expenses.
              </TypographyP>
              <TypographyH4 className="pt-5">
                7. CMandatory filing requirements
              </TypographyH4>
              <TypographyP className="p-3">
                In some cases, even if an individual’s income is below the
                taxable threshold, they may still be required to file a tax
                return if they meet certain criteria set by the tax authorities.
                This could include cases where a taxpayer wants to claim a
                refund of taxes deducted at source or if they are entitled to
                certain tax credits or benefits.
              </TypographyP>
            </div>
          </div>
          <div className="max-w-5xl px-4 w-full mt-6">
            <TypographyH2 className="text-blue-950">
              Why You Should File Income Tax Returns
            </TypographyH2>
            <TypographyH3 className="py-2 text-blue-950">
              Points to make your decision easy
            </TypographyH3>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {IncomeTaxReturndiscription?.IncomeTazReturncardFilingsection
                ?.length > 0 &&
                IncomeTaxReturndiscription?.IncomeTazReturncardFilingsection.map(
                  (card, indx) => (
                    <Customcard title={card?.title} content={card?.content} />
                  )
                )}
            </div>
          </div>
          {/* required documents list section */}
          <div className="max-w-5xl px-4 w-full mt-15">
            <TypographyH2 className="text-blue-950">
              Details required for PF return
            </TypographyH2>
            <div className="w-20 h-[2px] bg-blue-900 my-4" />
            <RequiredDocuments
              requiredDocuments={IncomeTaxReturndiscription?.RequiredDocuments}
            />
          </div>
          {/* Steps Section 4*/}
          <Steps
            heading1={IncomeTaxReturndiscription?.section4?.heading1}
            steps={IncomeTaxReturndiscription?.section4.steps}
          />
          {/* {section 5} */}
          <div className="max-w-5xl px-4 w-full">
            <Stepscard cards={IncomeTaxReturndiscription?.section5?.cards} />
          </div>
          {/* FAQs Section 6 */}
          <Faqs
            heading1={IncomeTaxReturndiscription?.section6?.heading1}
            heading2={IncomeTaxReturndiscription?.section6?.heading2}
            toggleoptions={IncomeTaxReturndiscription?.section6?.toggleoptions}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default IncomeTaxReturnPage;
