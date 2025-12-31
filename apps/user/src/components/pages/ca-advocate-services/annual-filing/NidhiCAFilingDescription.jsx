import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const NidhiCADescription = {
  section1: {
    heading1: "File",
    heading2: "Nidhi Company Annual Filing",
    heroimg: "/caservices/nidhi-company-annual-filing-sec1-hero.jpg",
    intro:
      "Every Nidhi Company must comply with ROC annual filings. CA/CS‑assisted compliance starts at INR 6 999/‑ only.",
  },
  section2: {
    heading1: "What is Nidhi Company Annual Filing?",
    heading2: "All you need to know",
    listoptions: [
      {
        value:
          "Nidhi Company is incorporated to foster thrift and savings amongst members and operate as a mutual benefit finance entity.",
      },
      {
        value:
          "It must comply with provisions of the Companies Act, 2013 and Nidhi Rules, 2014.",
      },
      {
        value:
          "Annual filings include NDH‑1 (statutory deposit return), NDH‑3 (half‑yearly return), AOC‑4 (financial statements), MGT‑7 (annual return), ADT‑1 (auditor appointment), and form MGT‑14 if resolutions are filed.",
      },
      {
        value:
          "NDH‑3 must be filed within 30 days of each half‑year; NDH‑1 within 90 days of FY end, AOC‑4 within 30 days of AGM, MGT‑7 within 60 days of AGM.",
      },
      {
        value: "Income‑tax return in ITR‑6 is due by 30 September every year.",
      },
    ],
    heroimg: "/caservices/nidhi-company-annual-filing-sec2-hero.jpg",
    content:
      "Compliance ensures credibility, avoids penalties, and maintains active ROC status while enabling legitimate deposit and lending operations.", // summarised
  },
  section3: {
    heading1: "Nidhi Company Annual Filing Fees",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "₹ 6999/-",
        desc: [
          "Annual Filings for Company having Authorized Capital of Rs 5 Lakhs and turnover upto Rs. 20 Lakhs",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
          "Form NDH 1 filing",
          "2 Form NDH 3 filing",
          "Professional certification on MGT-7 & AOC-4",
        ],
      },
      {
        title: "ENHANCED",
        price: "₹ 23999/-",
        desc: [
          "Accounting and Book-keeping",
          "Financial Statement Preparation",
          "Drafting Notice and Director’s Report",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
          "Form NDH 1 filing",
          "2 Form NDH 3 filing",
          "Annual Filings for Company having Authorized Capital of Rs 5 Lakhs, turnover upto Rs. 20 Lakhs and upto 100 accounting t",
          "One Year Income Tax filing upto turnover of Rs. 20 Lakhs",
          "3 DIR–3 KYC for 3 Directors",
          "Professional certification on MGT-7 & AOC-4",
        ],
      },
      {
        title: "ULTIMATE",
        price: "₹ 33999/-",
        desc: [
          "Accounting and Book-keeping",
          "Financial Statement Preparation",
          "Drafting Notice and Director’s Report",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
          "Form NDH 1 filing",
          "2 Form NDH 3 filing",
          "Annual Filings for Company having Authorized Capital of Rs 5 Lakhs, turnover upto Rs. 100 Lakhs and upto 300 accounting",
          "One Year Income Tax filing upto turnover of Rs. 100 Lakhs",
          "3 DIR–3 KYC for 3 Directors",
          "Professional certification on MGT-7 & AOC-4",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to File Annual Compliance",
    steps: [
      {
        title: "Complete Simple Checklist",
        desc: "Compliance Manager collects documents via a simple checklist.",
        color: "from-blue-400 to-cyan-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload bank statements, member lists, loan/deposit details.",
        color: "from-green-400 to-teal-500",
      },
      {
        title: "Prepare Forms",
        desc: "Expert team prepares NDH‑1, NDH‑3, AOC‑4, MGT‑7, ADT‑1 forms.",
        color: "from-purple-500 to-indigo-500",
      },
      {
        title: "File ROC Forms",
        desc: "Forms submitted online before due dates to avoid penalties.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Receive Acknowledgement",
        desc: "Cease the process once acknowledgment is received via email.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "CA/CS‑Assisted",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "Expert oversight ensures all forms are accurately prepared and filed.",
      },
      {
        title: "End‑to‑End Compliance",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "From data collection to ROC filing and acknowledgments.",
      },
      {
        title: "Timely Acknowledgments",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "All filing receipts sent directly to your registered email.",
      },
    ],
  },
  section6: {
    heading1: "FAQs on Nidhi Company Annual Filing",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "Is annual return required for a Nidhi Company?",
        content:
          "Yes, Nidhi Companies must file annual return (MGT‑7) regardless of activity.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "Which forms are mandatory?",
        content:
          "Mandatory forms: NDH‑1, NDH‑3, AOC‑4, MGT‑7, ADT‑1; plus MGT‑14 if resolutions filed.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "When are the due dates?",
        content:
          "NDH‑3: within 30 days of each half‑year; NDH‑1: within 90 days of FY end; AOC‑4: 30 days post‑AGM; MGT‑7: 60 days post‑AGM; ITR‑6: 30 September.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "What are the penalties?",
        content:
          "Late fees of ₹100/day per form; defaults may result in striking off or disqualification.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Is audit mandatory?",
        content:
          "Yes—financial statements must be audited by a CA before AOC‑4 filing.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Even nil activity requires filing?",
        content: "Yes, nil returns are required to maintain ROC compliance.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Want assistance?",
        content:
          "Contact us at +91 7709 222 331  or care@financesbazar.com for a free consultation.",
        id: "7",
        sectionKey: "7",
      },
    ],
  },
  customcardContent: [
    {
      title: "Form NDH 3",
      content:
        "Form NDH 3 is a half yearly compliance of Nidhi Company. It contains the details of No. of Members admitted and ceased during the half year, details of members, Loan etc. Form NDH 3 to be filed with ROC within 30 days from the close of each half year.",
    },
    {
      title: "Form NDH 1",
      content:
        "This is a Statutory compliance of Nidhi Company. Form NDH 1 contains all the details regarding the members, loans, deposits, reserves etc for the full financial year. Every Nidhi Company is required to file Form NDH-1 with ROC within 90 days form the closure of Financial Year.",
    },
    {
      title: "Form AOC 4",
      content:
        "Like every other company, Nidhi Company is required to file its Financial Statements, along with Notice calling General Meeting, Directors Report, Auditors Report and Balance sheet to ROC within 30 days from the date of Annual General Meeting of the Company.",
    },
    {
      title: "Form MGT 7",
      content:
        "Every Nidhi company is required to file its Annual Return along with List of members of Nidhi Company within 60 days from date of Annual General Meeting. The annual returns are to be filed in Form MGT 7 with ROC.",
    },
    {
      title: "Form MGT 14",
      content:
        "Nidhi Company is also required to report any resolutions passed for Disclosure of Directors interest, Approval of Financial Statements and Directors Report. if any to the ROC in Form MGT 14.",
    },
    {
      title: "Form ITR 6",
      content:
        "Nidhi companies are required to file its Income tax return in Form ITR 6 within the period of 6 months from the closure of financial year. Hence the due date for filing Form ITR 6 would be 30th September every year.",
    },
  ],

  RequiredDocuments: [
    {
      title: "Quick Checklist",
      options: [
        "Bank Statement for the financial year",
        "Details of the members",
        "Details of the cash transactions if any",
        "Details of loans and deposits by the members",
        "Details regarding reserves if any",
      ],
    },
  ],
};
