import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const RocAnnualFsection8 = {
  section1: {
    heading1: "File Annual Returns",
    heading2: "For NGO / NPO / Section 8 Company",
    heroimg: "/caservices/roc-annual-filing-for-section-8-sec1-hero.webp", // replace with actual path
    intro:
      "Every NGO / NPO or Section 8 Company must file ROC annual returns. Make your organization ROC‑compliant with Uc Serices. Prices start at INR 6 999/- only.",
  },
  section2: {
    heading1: "ROC Annual Filing for NGO / NPO / Section 8 Company",
    heading2: "All you need to know",
    listoptions: [
      {
        value:
          "A Non‑Profit Organization includes trusts, societies and Section 8 companies. Income/property isn’t distributable among members except reasonable compensation.",
      },
      {
        value:
          "Section 8 Company is registered under Companies Act, 2013 and follows all prescribed MCA compliances.",
      },
      {
        value:
          "Key annual filings include AOC‑4 (financial statements), MGT‑7 (annual return), ADT‑1 (auditor appointment), DIR‑8 and DIR‑3 KYC.",
      },
      {
        value: "Form DPT‑3 (deposit return) may also be needed if applicable.",
      },
    ],
    heroimg: "/caservices/roc-annual-filing-for-section-8-sec2-hero.jpg",
    content:
      "Annual compliance ensures credibility, legal standing, fund‑raising ability and protection from penalties or striking‑off actions.",
  },
  section3: {
    heading1: "Annual Filing Cost",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "₹ 6999/-",
        desc: [
          "Authorized Capital of Rs 1 Lakhs, turnover upto Rs. 20 Lakhs",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
        ],
      },
      {
        title: "ENHANCED",
        price: "₹ 21999/-",
        desc: [
          "Accounting and Book-keeping",
          "Financial Statement Preparation",
          "Drafting Notice and Director’s Report",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
          "Annual Filings for Company having Authorized Capital of Rs 1 Lakhs, turnover upto Rs. 20 Lakhs and upto 100 accounting t",
          "One Year Income Tax filing upto turnover of Rs. 20 Lakhs",
          "2 DIR–3 KYC",
          "Professional certification on AOC 4",
        ],
      },
      {
        title: "ULTIMATE",
        price: "₹ 31999/-",
        desc: [
          "Accounting and Book-keeping",
          "Financial Statement Preparation",
          "Drafting Notice and Director’s Report",
          "AOC 4 Filing",
          "MGT 7 Filing",
          "ADT 1 Filing",
          "Annual Filings for Company having Authorized Capital of Rs 5 Lakhs, turnover upto Rs. 100 Lakhs and upto 300 accounting",
          "One Year Income Tax filing upto turnover of Rs. 100 Lakhs",
          "2 DIR–3 KYC",
          "Professional certification on AOC 4",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to File Annual Compliance",
    steps: [
      {
        title: "Complete Simple Checklist",
        desc: "Fill out the checklist collected by your Compliance Manager.",
        color: "from-blue-400 to-cyan-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload required documents.",
        color: "from-green-400 to-teal-500",
      },
      {
        title: "Prepare Forms",
        desc: "Notice, director’s report and forms are prepared.",
        color: "from-purple-500 to-indigo-500",
      },
      {
        title: "File Annual Forms",
        desc: "AOC‑4, MGT‑7, ADT‑1 etc are filed with ROC.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Receive Acknowledgement",
        desc: "Acknowledgement receipts are emailed to you.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Simple Process",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "Compliance Manager guides you through checklists and document submission.",
      },
      {
        title: "Expert Preparation",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "Expert team prepares necessary forms with ongoing updates.",
      },
      {
        title: "Online Filing & Acks",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "We file the forms and email acknowledgment upon completion.",
      },
    ],
  },
  section6: {
    heading1: "FAQs on Section 8 Annual Filing",
    heading2: "Answers to common queries",
    toggleoptions: [
      {
        title: "What forms are required for NGOs/NPOs?",
        content:
          "An NGO/NPO must file AOC‑4, MGT‑7; audited financials, director report and form details with ROC.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "Is annual filing mandatory?",
        content:
          "Yes, all Section 8 companies must file annual returns, regardless of activity.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "What is the deadline?",
        content:
          "Deadline is 30 September each year (180 days after 31 March FY end).",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "What if filing is late?",
        content:
          "Late fees ₹100/day per form; may lead to striking off or director disqualification.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Can returns be filed online?",
        content: "Yes, all forms can be filed online via the MCA portal.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Do nil activities require filing?",
        content:
          "Yes, even if no activity or funding, nil returns must be filed to maintain compliance.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Need assistance?",
        content: "Contact us at +91 7709 222 331  or care@financesbazar.com",
        id: "7",
        sectionKey: "7",
      },
    ],
  },
  RequiredDocuments: [
    {
      title:
        "Documents required for Annual Compliance for Section 8 Company / NGO / NPO",
      options: [
        "Article of Association of the company",
        "Memorandum of Association of the company",
        "DSC or Digital Signature Certificate",
        "Certificate of Incorporation of Section 8 Company",
      ],
    },
  ],
};
