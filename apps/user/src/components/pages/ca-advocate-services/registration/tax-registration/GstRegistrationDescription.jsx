import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";
export const GstRegistrationDescription = {
  section1: {
    heading1: "Get Online",
    heading2: "New GST Registration Number",
    heroimg: "/caservices/pf-return-sec1.webp",
    intro:
      "Make your business GST Compliant. Never lose on GST input credit ever. Obtain your GST Registration Number Online at INR 1999/- only.",
  },
  section2: {
    heroimg: "/caservices/registration/gst-modification-sec2-hero.jpg", // placeholder
    content:
      "Annual compliance ensures maintained ROC status, investor trust, regulatory credibility, and avoidance of penalties for Producer Companies.",
  },
  section3: {
    heading1: "GST Registration Online Fees",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "1999",
        desc: [
          "GST Registration for Proprietorship or Partnership or LLP or Private Limited Company",
        ],
      },
      {
        title: "ENHANCED",
        price: "3299",
        desc: [
          "GST Registration for Proprietorship or Partnership or LLP or Private Limited Company",
          "GST Returns for first three months (upto 10 entries)",
        ],
      },
      {
        title: "ULTIMATE",
        price: "8099",
        desc: [
          "GST Registration for Proprietorship or Partnership or LLP or Private Limited Company",
          "GST Returns for one year (upto 100 entries)",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to get GST  Registration Number online?",
    steps: [
      {
        title: "Complete a Simple Form",
        desc: "Start the registration by visiting the GST portal and clicking on 'New Registration' under the 'Services' tab.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Verification of Documents",
        desc: "Fill Part A of Form GST REG-01 with basic details and receive the ARN. Then complete Part B with business details and upload required documents.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Application for GST Registration",
        desc: "Submit the completed form and documents. A confirmation message with the ARN will be generated.",
        color: "from-violet-500 to-indigo-500",
      },
      {
        title: "ARN Allotted",
        desc: "After document submission, the ARN (Application Reference Number) is issued for tracking the status of the GST application.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "GSTIN Allotted",
        desc: "Upon successful verification, a GST Registration Certificate (GST REG-06) with your GSTIN is issued online.",
        color: "from-gray-600 to-gray-800",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Fill a Simple Checklist",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "A Compliance Manager will get in touch with you to obtain your documents along with a simple checklist. You need to fill up that checklist and submit along with your documents for processing. Our team of experts will verify the documents. Our team of experts will verify the documents provided by you and take the procedure further.",
      },
      {
        title: "Application",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "Once our expert team completes verification process of your documents, the team will proceed with registration formalities. All throughout the process, your dedicated Compliance Manager will keep you updated on the progress of GST Registration. We will apply for GST Registration online and provide you ARN immediately.",
      },
      {
        title: "GST Certificate",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Once we applied for the GST registration number, the officer will verify the form and approve the filing of the GST application form. After successful filing of form your GSTIN and GST Certificate will be generated which means you will have your GST number. Note that It generally takes 3 to 7 days to get the GST number if the form and documents are correctly filed.",
      },
    ],
  },
  section6: {
    heading1: "FAQs On TAN Application",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "Who should obtain GST Registration?",
        content:
          "Businesses whose turnover exceeds the threshold limit as prescribed by the GST council are required to register under GST. Besides, certain other businesses are mandatorily required to obtain GST registration regardless of turnover, such as inter-state suppliers and e-commerce operators.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "Is PAN mandatory for GST Registration?",
        content:
          "Yes, PAN is mandatory for GST registration. However, for non-resident taxable persons, a PAN is not mandatory. They may provide other documents as identity proof.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Can I apply for multiple GST registrations?",
        content:
          "Yes. A business entity can obtain multiple GST registrations for different states. Additionally, multiple registrations can be obtained within the same state for different business verticals.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Do I need to be physically present for GST registration?",
        content:
          "No. GST registration is completely an online process. You can submit your documents and complete the process digitally without any physical appearance.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "What is the validity of GST Registration?",
        content:
          "GST registration is valid until it is surrendered or cancelled. However, in case of non-resident taxable persons and casual taxable persons, the validity is limited to 90 days (extendable).",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Can I register voluntarily under GST?",
        content:
          "Yes. Businesses with turnover below the threshold limit can also opt for voluntary registration under GST. Once registered, they must comply with all GST rules and regulations.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "What are the benefits of GST Registration?",
        content:
          "GST registration enhances the business credibility, allows legal recognition, enables tax collection and input tax credit, and opens access to a larger market.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "What if I don’t register under GST?",
        content:
          "Non-registration under GST, if liable, is an offence under the GST Act and attracts heavy penalties. It can lead to seizure of goods and even prosecution.",
        id: "8",
        sectionKey: "8",
      },
    ],
  },
  customcardContent: [
    {
      title: "Mandatory Registration Threshold",
      content:
        "Businesses must register for GST if turnover exceeds ₹20 lakh in most states or ₹10 lakh in special category states. Special rules apply to e-commerce operators and agents.",
    },
    {
      title: "Interstate suppliers",
      content:
        "Businesses engaged in interstate supply of goods or services must register for GST under the GST Act, regardless of turnover, to ensure accurate tax collection and regulatory compliance nationwide.",
    },
    {
      title: "Occasional taxpayers",
      content:
        "Individuals or businesses conducting occasional taxable transactions in a territory without a permanent business location must register as occasional taxable persons to comply with local tax regulations.",
    },
    {
      title: "E-commerce operators",
      content:
        "E-commerce platforms and aggregators must register for GST regardless of turnover. Additionally, individuals supplying goods or services via these platforms must also register for GST.",
    },
    {
      title: "Non-Resident Taxable Persons",
      content:
        "Non-resident individuals or firms making taxable supplies within India must obtain GST registration number to adhere to local tax laws, ensuring accurate tax administration and compliance.",
    },
    {
      title: "E-commerce operators",
      content:
        "E-commerce platforms and aggregators must register for GST irrespective of their turnover. In addition, persons supplying goods or services through such platforms are also required to register for GST.",
    },
    {
      title: "Agents of suppliers",
      content:
        "Agents managing the supply or receipt of goods or services for taxable entities must register for Goods and Services Tax (GST) to ensure tax compliance, avoid potential penalties, and maintain legal and financial accountability.",
    },
    {
      title: "Reverse Charge Mechanism",
      content:
        "Businesses subject to the Reverse Charge Mechanism must register for GST, regardless of turnover, to comply with tax regulations and ensure accurate GST collection and remittance.",
    },
  ],
  RequiredDocuments: [
    {
      title: "GST Registration Documents",
      options: [
        "PAN of applicant",
        "Aadhar Card",
        "Address Proof of business",
        "Proof of business or registration",
        "Identity and Address Proof of Directors with photographs",
        "Bank Account Statement or cancelled Cheque",
        "Authority Letter",
        "Digital Signature (not required in proprietorship firm)",
      ],
    },
  ],
};
