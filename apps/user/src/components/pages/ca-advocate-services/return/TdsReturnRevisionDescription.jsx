import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const TDSReturnsRevisionDescription = {
  section1: {
    heading1: "Revise",
    heading2: "TDS Returns",
    heroimg: "/caservices/tds-returns-revision-hero.webp", // adjust as needed
    intro:
      "TDS Return revision is easy, seamless, error‑free, fastest and most cost‑effective with https://financesbazar.com/. Prices start at INR 999/-.",
  },
  TdscardFilingsection: [
    {
      title: "What is TDS Return revision?",
      content:
        "A TDS Return revision is filed when there are errors in the original TDS return—such as incorrect PAN, date, or tax amount—to ensure seamless credit to the deductee. You can revise your return any number of times and there's no fixed due date for revision.",
    },
    {
      title: "When needed?",
      content:
        "File a correction/revision if you’ve shown wrong PAN, date, short/nil tax deduction, or received a notice from the Income‑Tax Department & need to ensure correct credit.",
    },
    {
      title: "Noduedateforrevision",
      content:
        "There is no due date for filing revised TDS returns—you can do it any time—but it’s wise to file as soon as you discover an error or receive a notice :contentReference[oaicite:1]{index=1}.",
    },
  ],
  section2: {
    heading1: "TDS Returns Revision",
    heading2: "All you need to know",
    listoptions: [
      {
        value:
          "TDS Return is required to be filed quarterly by any person liable to deduct tax at source.",
      },
      {
        value:
          "If original return has mistakes — PAN, challan, tax — a revised return ensures correct credit to the deductee.",
      },
      {
        value:
          "You can submit correction statements multiple times until error-free; no revision deadline.",
      },
      {
        value:
          "Revision typically uses TRACES‑downloaded justification file to locate and fix errors.",
      },
    ],
    heroimg: "/caservices/tds-returns-revision-sec2-hero.jpg", // adjust as needed
    content:
      "https://financesbazar.com/ provides end‑to‑end service—download justification file, prepare revised return, and file it online—all backed by CA/CS support. Reach us at +91 7709 222 331 or care@financesbazar.com for a free consultation :contentReference[oaicite:2]{index=2}.",
  },
  section3: {
    heading1: "TDS Returns Revision Charges",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "₹ 999/-",
        desc: [
          "Download of justification file + one TDS Return revision (up to 10 entries)",
        ],
      },
      {
        title: "ENHANCED",
        price: "₹ 1,499/-",
        desc: [
          "Justification file + one TDS Return revision (≤10 entries) + reply to Income‑Tax notice",
        ],
      },
      {
        title: "ULTIMATE",
        price: "₹ 2,499/-",
        desc: [
          "Justification file, one revision (≤50 entries), Form 16A issue, reply to Income‑Tax notice",
        ],
      },
    ],
  },
  section4: {
    heading1: "TDS Returns Revision‑Process Flow",
    steps: [
      {
        title: "We receive required information",
        desc: "You provide TAN, challans, return token or justification file.",
        color: "from-yellow-500 to-orange-500",
      },
      {
        title: "You fill in a simple excel template",
        desc: "Enter the corrections/entries for revision.",
        color: "from-orange-600 to-red-500",
      },
      {
        title: "Your return is prepared",
        desc: "Our experts draft the revised return and justification.",
        color: "from-indigo-800 to-purple-900",
      },
      {
        title: "Your return is submitted",
        desc: "With your approval, we file the revised return online via TRACES/NSDL portal.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "You receive return acknowledgement",
        desc: "Acknowledgment of filing, revised Form 16A, and reply to notice (if applicable).",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Justification File",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "We download the TRACES justification file to identify discrepancies or demands.",
      },
      {
        title: "Correction & Revision",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "We prepare correction entries (C1/C2/C3/C9 etc.) and validate them before filing.",
      },
      {
        title: "Form 16A issuance",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "For quarterly TDS revision, we generate and share Form 16A post‑revision.",
      },
    ],
  },
  section6: {
    heading1: "FAQs On TDS Returns Revision",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "Who needs to file a TDS revision?",
        content:
          "Anyone liable to deduct TDS who has errors in the original return—wrong PAN, challan, short deduction, etc.—should file revised return.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "How many times can I revise?",
        content:
          "There is no limit—you can file correction statements as many times as needed until all errors are corrected :contentReference[oaicite:3]{index=3}.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Is there a due date for filing revision?",
        content:
          "No. You can revise at any time. However, if you’ve received an Income‑Tax notice, comply by the deadline stated there :contentReference[oaicite:4]{index=4}.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "What documents are required?",
        content:
          "Your TAN, relevant challans, original return acknowledgment, and the TRACES justification file.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Still confused?",
        content:
          "Our certified experts (CA/CS) can help you decide the right package and guide you end‑to‑end. Contact care@financesbazar.com or +91 7709 222 331.",
        id: "5",
        sectionKey: "5",
      },
    ],
  },
  RequiredDocuments: [
    {
      title: "Quick Checklist",
      options: [
        "Your TAN",
        "Challans of TDS Payment",
        "Acknowledgement of Original Return",
        "TRACES Justification File",
      ],
    },
    {
      title: "TAN and Challans",
      options: [
        "Provide your TAN and online/offline challans (Challan 281) for the quarter being revised; acknowledgment from bank portal also needed.",
      ],
    },
  ],
};
