import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const DigitalSignatureDescription = {
  section1: {
    heading1: "Get Your",
    heading2: "Digital Signature",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Buy Class 2 & Class 3 Digital Signatures for Income tax returns, ROC Forms, GST and Tenders. Prices start at INR 1999/- only.",
  },
  section2: {
    heroimg: "/caservices/otherregistration/digital-signature-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "DSC Charges",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "1999",
        desc: [
          "Class 3 DSC - MCA, Income-tax and GST purpose (duration 2 years)",
        ],
      },
      {
        title: "ENHANCED",
        price: "2499",
        desc: ["Class 3 Organisation DSC"],
      },
      {
        title: "ENHANCED",
        price: "3799",
        desc: ["DSC For use in DGFT/Tenders (2 Years)"],
      },
    ],
  },
  section4: {
    heading1: "How to obtain Digital Signature?",
    steps: [
      {
        title: "Complete simple form",
        desc: "Start by filling out a simple application form for obtaining a Digital Signature Certificate (DSC).",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload the necessary documents such as identity proof, address proof, and passport-size photo.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Verification of documents",
        desc: "The submitted documents are verified by the issuing authority to confirm authenticity.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "Processing of Application",
        desc: "Once documents are verified, your application is processed for Digital Signature issuance.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "Your DSC is ready",
        desc: "After successful processing, your Digital Signature Certificate is issued and ready for use.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },

  section6: {
    heading1: "FAQs On DSC Application",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "What is a Digital Signature?",
        content:
          "A digital signature is a simple, secure, convenient, and time‑saving way of signing electronic documents or authenticating online transactions using a unique code linked to the signer.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "What is ‘DSC’?",
        content:
          "DSC stands for Digital Signature Certificate, which is the electronic form of a physical certificate used to verify identity online.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Is a digital signature legally valid?",
        content:
          "Yes, digital signatures are legally recognized in India under the Information Technology Act, 2000.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Can a digitally signed document be used as valid evidence?",
        content:
          "Yes, as per amendments to the Indian Evidence Act, 1858, electronically signed documents with valid digital signatures are admissible as legal evidence.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Can two people have the same digital signature?",
        content:
          "No, a digital signature is unique to the signer and cannot be duplicated by another individual.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Can a digital signature be forged?",
        content:
          "Almost impossible. Digital signatures use cryptographic technology, making them more secure and tamper‑resistant than handwritten signatures.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "What is the validity period of a DSC?",
        content:
          "DSCs are typically issued for 1 or 2 years and must be renewed before expiry to remain valid.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "What happens after a DSC expires?",
        content:
          "Once expired, the DSC becomes invalid. You’ll need to reapply or renew it through the standard application process.",
        id: "8",
        sectionKey: "8",
      },
      {
        title: "Where can I use a DSC?",
        content:
          "DSCs can be used for e‑filing tax returns, GST, ROC, MCA forms, e‑tendering, import/export licenses, e‑procurement, digitally signing documents, emails, and secure transactions.",
        id: "9",
        sectionKey: "9",
      },
      {
        title: "Do you provide DSC services across all cities?",
        content:
          "Yes, DSC application services are available across India, including major cities like Mumbai, Delhi, Bangalore, Chennai, Kolkata, Pune, and more.",
        id: "10",
        sectionKey: "10",
      },
    ],
  },

  customcardContent: [
    {
      title: "Class II DSC",
      content:
        "Class II Digital Signatures are used for Income Tax E-Filing, Company, OPC and LLP Incorporation, Annual Return Filing & GST. Class II Digital Signatures are required to file documents electronically with the Ministry of Corporate Affairs, GST and Income Tax Department.",
    },
    {
      title: "Class III DSC",
      content:
        "Class III Digital Signatures provide the highest level of security and are used for E-Auctions and E-Tendering. All government entities usually require Class III Digital Signatures for the tendering process. This certificate will be issued to individuals as well as organizations.",
    },
    {
      title: "Validity",
      content:
        "Digital Signatures usually come with a validity of 1 or 2 years. Digital Signatures must be renewed before expiry. DSC is issued in a pen drive like a token. A subscriber should be well aware of its certificate validity to avoid probable business loss due to expired certificate.",
    },
  ],
  RequiredDocuments: [
    {
      title: "Quick Checklist",
      options: [
        "One Passport Size Photo",
        "Duly filed and signed DSC form ( provided by us)",
        "Self-attested copy of passport",
        "Self-attested copy of address proof",
      ],
    },
  ],
};
