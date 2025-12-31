import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const SSIMsmeRegistrationDescription = {
  section1: {
    heading1: "Get",
    heading2: "MSME Registration",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Claim your access to Government Subsidies, Priority Lending and a quick start up. Register for MSME/Udyog Aadhar at INR 1699/- only",
  },
  section2: {
    heroimg:
      "/caservices/otherregistration/ssi-msme-registration-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "MSME Registration Fees",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "1699",
        desc: ["SSI/MSME Registration"],
      },
      {
        title: "ENHANCED",
        price: "2199",
        desc: ["eXpress SSI/MSME Registration (within 24 hours)"],
      },
      {
        title: "ULTIMATE",
        price: "9199",
        desc: [
          "eXpress SSI/MSME Registration (within 24 hours)",
          "eXpress Trademark (1 application 1 class) (start ups, proprietorship & small business)",
        ],
      },
    ],
  },
  section4: {
    heading1:
      "How to get EPF Registration online? / Process flow for PF registration in India",
    steps: [
      {
        title: "Complete simple form",
        desc: "Fill out a simple online form with the necessary business and employee information to begin the EPF registration process.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload all required documents such as identity proof, address proof, and business registration certificates.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Application Preparation",
        desc: "Ensure the accuracy of all data and compile your documents for smooth submission.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "PF registration form submission",
        desc: "Submit your EPF registration application form through the official government portal.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "You are PF Registered",
        desc: "Once approved, your organization will be officially registered under EPF.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Fill Simple Checklist",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "A Compliance Manager will get in touch with you to obtain documents along with a simple checklist. You need to fill up that checklist and submit along with your documents for processing. Once we receive the documents, We will verify them.",
      },
      {
        title: "Application",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "Once Verified, we will proceed with registration formalities. All throughout the process, your dedicated Compliance Manager will keep you updated on the progress of SSI/MSME Registration. We will apply for SSI/MSME Registration online.",
      },
      {
        title: "SSI/MSME Certificate",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Upon submission, your SSI/ MSME/ Udyog Aadhar Registration Certificate will be generated automatically.  Once done, we will notify you about the completion of the process. Whole process will be completed in 3 working days.",
      },
    ],
  },
  section6: {
    heading1: "FAQs On SSI / MSME Registration",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "Who Can Apply for MSME Registration?",
        content:
          "Any entrepreneur having a valid Aadhaar Number can apply for MSME Registration Online.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "What is the Validity of Registration Certificate granted?",
        content:
          "Provisional registration is valid for 2 years; permanent registration has lifetime validity.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "How is the value of plant & machinery computed?",
        content:
          "It is computed as per the MSMED Act, taking the original value of the plant & machinery into account.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Is SSI/MSME Registration voluntary or mandatory?",
        content:
          "Registration is voluntary—not mandatory—but recommended to avail benefits.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Can MSME Registration be revoked?",
        content:
          "Yes—if investment limits are exceeded, new licensed items are started, or ownership/control rules are violated.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Is physical copy of Certificate issued?",
        content:
          "No—only a digital certificate is issued as part of the government's paperless policy.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Is Aadhaar mandatory for online MSME Registration?",
        content:
          "Yes—aadhaar number is mandatory for issuance of an MSME certificate.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "Can I obtain MSME Certificate by applying myself?",
        content:
          "Yes—anyone can apply directly on the government website free of cost.",
        id: "8",
        sectionKey: "8",
      },
      {
        title: "What are the benefits of obtaining SSI/MSME Certificate?",
        content:
          "Multiple benefits—including subsidies, priority lending, protection against delayed payments, and more.",
        id: "9",
        sectionKey: "9",
      },
      {
        title: "Which Cities do you provide your services?",
        content:
          "Uc Services provides SSI/MSME Registration services across India, including Ahmedabad, Mumbai, Pune, Bangalore, Chennai, Delhi, Kolkata, Kanpur, Nagpur, Jaipur and more.",
        id: "10",
        sectionKey: "10",
      },
    ],
  },

  RequiredDocuments: [
    {
      title: "Quick Checklist",
      options: [
        "Scan photographs of all the Partners",
        "Self-attested and color copy PAN Card of all the Partners",
        "Self-attested and color copy ID Proof of all the Partners (Driving License/Passport/Voter ID)",
        "Electricity Bill, Any other utility bill or Bank Statement for the address proof of the Registered Office (not older than 2 months)",
        "Rent Agreement of Business Address, if any",
      ],
    },
  ],

  customcardContent: [
    {
      title: "Micro Enterprises",
      content:
        "Micro enterprises are the smallest entities. Micro manufacturing & service enterprises have an investment of less than investments up to Rs 1 crore and turnover up to Rs 5 crore",
    },
    {
      title: "Small Enterprises",
      content:
        "Small enterprises are bigger than the micro enterprises. Small manufacturing and service enterprises may have between investments up to Rs 10 crore and turnover up to Rs 50 crore",
    },
    {
      title: "Medium Enterprises",
      content:
        "Medium enterprises are bigger than the small enterprises. Medium manufacturing & services enterprises may have between investments up to Rs 20 crore and turnover up to Rs 100 crore.",
    },
    {
      title: "Registration",
      content:
        "SSI or MSME Registration is not mandatory. However, it is advisable for all micro, small and medium enterprises to obtain for its obvious benefits. The same is available for Manufacturers and Traders.",
    },
    {
      title: "Major Benefits",
      content:
        "Major benefits of SSI/MSME Registration are cheaper and quick bank loans, easy access to credit, tax rebates, cheaper infrastructure, including electricity exemptions.",
    },
    {
      title: "No Return Filing",
      content:
        "For Micro, Small & Medium Enterprises, An MSME Certificate once applied to need no renewals. It is valid for life time. Further, there are no periodic returns to be filed in respect of it.",
    },
  ],
};
