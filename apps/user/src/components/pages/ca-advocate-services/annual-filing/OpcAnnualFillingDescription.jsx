import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const OpcAnnualDescription = {
  section1: {
    heading1: "File Your",
    heading2: "OPC Annual Compliance",
    heroimg: "/caservices/opc-annual-filing-sec1-hero.png",
    intro:
      "Every One Person Company must file annual ROC compliance. CA/CS‑assisted filings start at INR 3999/‑ only.",
  },
  section2: {
    heading1: "What is OPC Compliance?",
    heading2: "All you need to know",
    listoptions: [
      {
        value:
          "A One Person Company is legally treated as a Private Limited Company under Companies Act, 2013.",
      },
      {
        value:
          "Annual filings include Form AOC‑4 (financial statements) and Form MGT‑7A (annual return).",
      },
      {
        value:
          "OPCs also file Form ADT‑1 for auditor appointment within 15 days of AGM.",
      },
      {
        value:
          "Financial year runs Apr‑Mar; AOC‑4 due within 180 days, MGT‑7A within 60 days of FY-end.",
      },
      {
        value:
          "Annual income‑tax return (ITR‑6) also mandatory, even if no profit.",
      },
    ],
    heroimg: "/caservices/opc-annual-filing-sec2-hero.jpg", // hypothetical
    content:
      "OPC annual compliance ensures legal validity and helps avoid penalties. Timely filings improve credibility and ease access to finances.",
  },
  section3: {
    heading1: "OPC Annual Filing Cost",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "₹ 3999/-",
        desc: [
          "Authorized Capital of Rs 1 Lakh, turnover upto Rs. 20 Lakhs",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
        ],
      },
      {
        title: "ENHANCED",
        price: "₹ 15999/-",
        desc: [
          "Accounting and Book-keeping",
          "Financial Statement Preparation",
          "Drafting Notice and Director's Report",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
          "Annual Filings for Company having Authorized Capital of Rs 1 Lakh, turnover upto Rs. 20 Lakhs and upto 100 accounting transactions",
          "One Year Income Tax filing upto turnover of Rs. 20 Lakhs",
          "DIR–3 KYC",
        ],
      },
      {
        title: "ULTIMATE",
        price: "₹ 25999/-",
        desc: [
          "Accounting and Book-keeping",
          "Financial Statement Preparation",
          "Drafting Notice and Director's Report",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
          "Authorized Capital of Rs 5 Lakhs, turnover upto Rs. 100 Lakhs and upto 300 accounting transactions",
          "One Year Income Tax filing upto turnover of Rs. 100 Lakhs",
          "DIR–3 KYC",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to File OPC Annual Compliance",
    steps: [
      {
        title: "Complete Simple Checklist",
        desc: "Fill out and submit our checklist",
        color: "from-blue-400 to-cyan-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload financial and KYC documents",
        color: "from-green-400 to-teal-500",
      },
      {
        title: "Prepare Forms",
        desc: "Our CA prepares FS, director’s report and ROC forms",
        color: "from-purple-500 to-indigo-500",
      },
      {
        title: "File with ROC",
        desc: "We file AOC‑4, MGT‑7A & ADT‑1",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Receive Acknowledgment",
        desc: "You get ROC and ITR acknowledgments by email",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Expert Team",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "CA/CS‑assisted compliance to ensure accuracy.",
      },
      {
        title: "End‑to‑End Service",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "From bookkeeping to ROC filing, we handle everything.",
      },
      {
        title: "Acks & Reports",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Receive all filing acknowledgments and reports by email.",
      },
    ],
  },
  section6: {
    heading1: "FAQs on OPC Annual Compliance",
    heading2: "Got questions? We've answered them",
    toggleoptions: [
      {
        title: "What forms are mandatory for OPC?",
        content: "AOC‑4, MGT‑7A, ADT‑1 and ITR‑6 are required annually.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "What are due dates?",
        content:
          "AOC‑4: 180 days from FY-end; MGT‑7A: 60 days after 6 months; ADT‑1: within 15 days of AGM.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Is audit mandatory?",
        content:
          "Yes, statutory audit by CA is mandatory even if turnover is low.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Penalty for late filing?",
        content:
          "₹100/day per form; non‑compliance may lead to disqualification or striking off.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Do OPCs hold AGM?",
        content:
          "No AGM, but director must pass financial resolution before filing.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Additional filings?",
        content:
          "Include ITR‑6, DIR‑3 KYC, INC‑20A, DPT‑3, MSME‑I as applicable.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Need help?",
        content: "Contact us at +91 7709 222 331  or care@financesbazar.com",
        id: "7",
        sectionKey: "7",
      },
    ],
  },
  customcardContent: [
    {
      title: "Form MGT-7A",
      content:
        "OPCs must file Form MGT-7A with the RoC within 60 days of the financial year’s end. The form includes key details like finances, ownership, and director changes. Late filing leads to daily fees and possible penalties, including director disqualification.",
    },
    {
      title: "Form AOC-4",
      content:
        "The company must submit its financial statements, including the profit and loss statement, balance sheet, and auditor’s report, within 180 days after the financial year ends. A fine of ₹100 per day applies for late filing.",
    },
    {
      title: "ITR Filing",
      content:
        "Every OPC must file an income tax return every year, even if there’s no profit. The deadline is usually September 30. If the company’s turnover is over ₹1 crore, a tax audit is required before filing. OPCs must file ITR-6, even if they had no income.",
    },
    {
      title: "Form ADT-1",
      content:
        "The company must submit its financial statements, including the profit and loss statement, balance sheet, and auditor’s report, within 180 days after the financial year ends. A fine of ₹100 per day applies for late filing.",
    },
    {
      title: "Director’s Report",
      content:
        "This report covers the company’s activities and finances. OPCs with turnover over ₹2 crore must present it at the AGM, while others must still prepare and submit it.",
    },
    {
      title: "Board Meetings",
      content:
        "The report covers the company’s activities and finances. OPCs with a turnover above ₹2 crore must present it at the AGM, while others must still prepare and submit it.",
    },
    {
      title: "Statutory Registers",
      content:
        "The company must keep records like member and director lists, asset charges, and meeting minutes. This helps ensure transparency and legal compliance.",
    },
    {
      title: "Statutory Audit",
      content:
        "Every OPC is required to conduct a financial audit annually, as per the Companies Act, 2013. This ensures that the company’s financial records are accurate and comply with statutory regulations.",
    },
  ],
  RequiredDocuments: [
    {
      title: "Documents required for OPC Annual Compliance",
      options: [
        "PAN card of the company",
        "Corporate Identification Number (CIN)",
        "PAN card of the director",
        "Aadhar card of the director",
        "DSC of the director",
        "Income Tax Return",
        "Details of tax paid",
        "Balance sheet signed by the director and auditor",
        "Profit and loss statement",
        "Board’s report",
        "Auditor’s report if applicable",
      ],
    },
  ],
};
