import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";
export const PanApplicationDescription = {
  section1: {
    heading1: "Apply",
    heading2: "For PAN",
    heroimg: "/caservices/pf-return-sec1.webp",
    intro:
      "Easily apply for Permanent Account Number. Prices starting at INR 499/- only.",
  },
  section2: {
    heroimg: "/caservices/registration/pan-application-sec2-hero.jpg", // placeholder
    content:
      "Annual compliance ensures maintained ROC status, investor trust, regulatory credibility, and avoidance of penalties for Producer Companies.",
  },
  section3: {
    heading1: "Simple Prices | No Surprises",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "499",
        desc: ["PAN Application"],
      },
      {
        title: "ENHANCED",
        price: "999",
        desc: ["PAN Application", "TAN Application"],
      },
      {
        title: "ULTIMATE",
        price: "2499",
        desc: [
          "PAN Application",
          "TAN Application",
          "1st income tax filing for non-assessee",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to Obtain PAN",
    steps: [
      {
        title: "Complete simple form",
        desc: "Fill out a simple form with your basic personal and contact details to begin the PAN application process.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Verification of Document",
        desc: "Ensure that your identity and address proof documents are verified for accuracy and authenticity.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Submission of Documents",
        desc: "Submit the required documents either online or at the authorized PAN service center.",
        color: "from-violet-500 to-indigo-500",
      },
      {
        title: "Application for PAN",
        desc: "After verification, the PAN application is officially submitted for processing.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "You Receive PAN",
        desc: "Once processed, your PAN card will be delivered to your registered address or made available digitally.",
        color: "from-gray-600 to-gray-800",
      },
    ],
  },

  section6: {
    heading1: "FAQs on Producer Company Annual Filing",
    heading2: "Answers to common queries",
    toggleoptions: [
      {
        title: "What is the use of a PAN card?",
        content:
          "A PAN is a 10‑digit alphanumeric identifier issued by the Income Tax Department. It’s required for filing income tax returns, opening bank accounts, high‑value transactions, loan applications, claiming TDS/TCS credits, purchasing property or foreign currency, and serves as a nationally accepted identity proof.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "How can I apply for a PAN card online?",
        content:
          "You can apply online via NSDL or UTIITSL using Form 49A. Fill out the form, pay the fee online, upload ID/address/date‑of‑birth proof and photographs, then send the signed acknowledgment and documents to the designated PAN office.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "What documents are required for PAN application?",
        content:
          "You need proof of identity (e.g., Aadhaar, Passport, Voter ID), proof of address (e.g., Aadhaar, utility bill, bank statement), proof of date of birth (e.g., birth certificate, passport), and passport‑size photographs.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Can I apply for PAN if I’m an NRI?",
        content:
          "Yes. NRIs can apply for PAN if they have taxable income or plan financial transactions in India. They follow a similar process online, but must provide overseas communication address and supporting documents as per guidelines.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Can a minor get a PAN card?",
        content:
          "Yes. Minors can be issued PAN cards (without photo/signature) under Section 160 of the IT Act. When they turn 18, they must apply for an updated PAN with a photo and signature via correction request.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "How long does it take to receive PAN after applying?",
        content:
          "After submitting an online application and sending documents, PAN is typically processed and sent within 15‑20 working days.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Can I track my PAN application status?",
        content:
          "Yes. After submitting, you’ll receive an acknowledgment number which can be used on the NSDL or UTIITSL website to track the status of your PAN application online.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "How can I update or correct details on my PAN card?",
        content:
          "You can correct or update PAN details online via the NSDL/UTIITSL portal under ‘PAN Correction’. Fill the correction form, upload supporting proof, pay the fee, and send the signed acknowledgment with documents.",
        id: "8",
        sectionKey: "8",
      },
      {
        title: "What if I lose my PAN card?",
        content:
          "If your PAN card is lost, file an FIR and apply for a duplicate PAN online via NSDL/UTIITSL, following the standard correction/reprint process.",
        id: "9",
        sectionKey: "9",
      },
      {
        title: "Can I surrender my PAN card?",
        content:
          "Yes. If you no longer need your PAN, you can surrender it by submitting a request, including the PAN copy and a declaration stating the reason.",
        id: "10",
        sectionKey: "10",
      },
    ],
  },
  customcardContent: [
    {
      title: "Identity",
      content:
        "PAN is a nationally accepted proof of identity in India. PAN is unique to every PAN card holder in India. It links all financial transactions made by a particular individual or entity.",
    },
    {
      title: "Interstate suppliers",
      content:
        "PAN is required usually for bank account opening. It is also mandatory in various transactions beforehand. It is a must that you quote PAN in your Income tax return.",
    },
    {
      title: "Benefits to NRI",
      content:
        "If you are an NRI and wish to claim benefits of non-deduction or lower-deduction in India, you must obtain PAN. For purchasing or selling of property in India, you need PAN.",
    },
  ],
  RequiredDocuments: [
    {
      title: "Quick Checklist",
      options: [
        "Self-Attested Address Proof (Electricity Bill/Latest Bank Statement/Mobile Bill) (not older than 2 months)",
        "Self-attested ID Proof (Driving License/Passport/Voter ID/Adhar Card)",
      ],
    },
  ],
};
