import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";
export const ICERegistrationDescription = {
  section1: {
    heading1: "Apply",
    heading2: "For Import Export Code",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Get IEC registered. Online IEC Registration in India is compulsory if you wish to export or import. Prices starting at INR 3299/- only.",
  },
  section2: {
    heroimg: "/caservices/otherregistration/ice-registration-sec2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "Simple Prices No Surprises",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "5999",
        desc: ["ESIC Registration (employees less than 20)"],
      },
      {
        title: "ENHANCED",
        price: "12999",
        desc: [
          "ESIC Registration (employees less than 20)",
          "ESIC Return for 1 year",
        ],
      },
      {
        title: "ULTIMATE",
        price: "19999",
        desc: [
          "ESIC Registration (employees less than 50)",
          "ESIC Return for 1 year",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to get IEC Registration",
    steps: [
      {
        title: "Complete a Simple Form",
        desc: "Fill out a basic form with your business and personal details to initiate the IEC registration process.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload the required documents including PAN, address proof, and business proof for verification.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Verification of Documents",
        desc: "The uploaded documents are verified by the concerned DGFT authority to ensure compliance.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "Application for IEC Registration",
        desc: "After document verification, your application is processed by DGFT for IEC issuance.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "IE Code Allotted",
        desc: "Once approved, your IEC (Import Export Code) is issued and shared online.",
        color: "from-gray-500 to-gray-700",
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
    heading1: "FAQs On IEC Registration",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "What is an IEC Code?",
        content:
          "IEC or Import Export Code is a 10-digit unique identification number issued by the DGFT (Director General of Foreign Trade) to individuals or businesses for import and export operations in India.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "Who needs an IEC code?",
        content:
          "Any individual or business engaged in import or export of goods and services from India is required to obtain an IEC code, unless specifically exempted.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Is IEC registration mandatory for all exports and imports?",
        content:
          "Yes, IEC registration is mandatory for conducting import/export operations unless exempted under special provisions like service exports where payment is received in foreign currency.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "What are the documents required for IEC registration?",
        content:
          "Key documents include PAN card, identity and address proof, passport-sized photo, bank certificate/canceled cheque, and business registration proof.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "How long does it take to get IEC?",
        content:
          "IEC is generally issued within 3-5 working days after successful application and document verification by DGFT.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Is there any government fee for IEC application?",
        content:
          "Yes. As of now, the government fee is ₹500 plus applicable taxes, which can be paid online via net banking, UPI, or card.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Does IEC have lifetime validity?",
        content:
          "Yes, once allotted, the IEC code is valid for a lifetime and does not require renewal. However, updates must be filed if there are changes in business details.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "Can I update or modify IEC details later?",
        content:
          "Yes, IEC details such as address, contact info, or bank account can be updated anytime by filing an amendment request online via the DGFT portal.",
        id: "8",
        sectionKey: "8",
      },
    ],
  },

  customcardContent: [
    {
      title: "Credibility",
      content:
        "Owning an IEC code increases the credibility of a business in the international market. It proves that the business is recognized by the government and complies with regulations governing international trade.",
    },
    {
      title: "Customs clearance",
      content:
        "The IEC code is required for customs clearance purposes. It serves as a unique identification number for importers or exporters, facilitating smooth clearance of goods through customs controls.",
    },
    {
      title: "International Transactions",
      content:
        "An IEC code is required to conduct various transactions related to international trade, including shipping documentation, customs declarations, and import and export payments.",
    },
    {
      title: "Benefits and incentives",
      content:
        "Many benefits and incentives are provided by the government to exporters and importers. These include duty drawback, export promotion programs and tax benefits. Having an IEC code is a prerequisite for using these benefits.",
    },
    {
      title: "Business expansion",
      content:
        "Obtaining an IEC code enables businesses to explore global market opportunities by facilitating export activities. It opens doors to new markets and allows businesses to expand their reach beyond domestic borders.",
    },
    {
      title: "Legal Requirement",
      content:
        "Obtaining IEC code is mandatory for any individual or business entity who wants to engage in import or export of goods and services from India. Without an IEC, it is not possible to legally conduct international business transactions.",
    },
  ],

  IceRegistrationcustomcardContent: [
    {
      title: "Visit the DGFT Website",
      content:
        "Go to the official Directorate General of Foreign Trade (DGFT) portal at https://www.dgft.gov.in/CP/ to begin the IEC registration process.",
    },
    {
      title: "Create a User Account",
      content:
        "Register as a new user by providing basic details like name, email ID, and mobile number. Verify your email and mobile via OTP.",
    },
    {
      title: "Login to the DGFT Portal",
      content:
        "Use your credentials to log in and access the IEC application section on the DGFT portal.",
    },
    {
      title: "Fill the IEC Application Form (ANF 2A)",
      content:
        "Complete the online form with business details such as PAN, name, address, bank details, and contact information.",
    },
    {
      title: "Upload Required Documents",
      content:
        "Upload scanned copies of PAN, address proof, bank certificate/cancelled cheque, photograph, and DSC (if applicable).",
    },
    {
      title: "Submit the Application",
      content:
        "Review all the details and submit the completed application form online through the portal.",
    },
    {
      title: "Make the Payment",
      content:
        "Pay the IEC application fee (₹500 + applicable taxes) via net banking, credit/debit card, or UPI.",
    },
    {
      title: "Application Processing",
      content:
        "The DGFT reviews your application and documents. Processing usually takes 3–5 business days.",
    },
    {
      title: "IEC Code Issuance",
      content:
        "Once approved, the DGFT issues the IEC number via email. It can also be downloaded from the portal.",
    },
    {
      title: "Start Import–Export Operations",
      content:
        "Use your IEC code for customs clearance, international bank transactions, and to claim export/import benefits.",
    },
  ],
  RequiredDocuments: [
    {
      options: [
        "Business Entity: Individuals, partnerships, LLPs (Limited Liability Partnerships), trusts, companies and any other legal entity engaged in importing or exporting can apply for an IEC.",
        "Legal Person: The applicant must be a legally recognized person under the laws of the country (e.g., Companies Act, LLP Act, Partnership Act, etc.).",
        "Income Tax PAN: Applicant must have a valid Income Tax Permanent Account Number (PAN) issued by the relevant tax authority.",
        "No Criminal Record: The applicant must not have been convicted of any criminal offense related to foreign trade or economic offenses.",
        "Not on the Denied Entity List: The applicant or any of its partners/directors should not be on the Denied Entity List maintained by the Government or any regulatory authority.",
        "No Export/Import Restrictions: The applicant should not be subject to any export or import restrictions imposed by the government or regulatory authority.",
        "Compliance with Foreign Exchange Regulations: The applicant must comply with foreign exchange laws and regulations, including those on foreign transactions and repatriation of funds.",
        "Compliance with Export Control Laws: The applicant must comply with export control laws and regulations, including restrictions on the export of certain goods, technologies or services.",
      ],
    },
  ],
};
