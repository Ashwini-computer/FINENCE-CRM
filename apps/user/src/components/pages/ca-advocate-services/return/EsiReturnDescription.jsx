import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const EsiReturnsDescription = {
  section1: {
    heading1: "File Your",
    heading2: "ESI Returns",
    heroimg: "/caservices/pf-return-sec1.webp",
    intro:
      "File error-free ESI Returns and in-time. File your ESI returns through experts Uc Serices.com. Prices start at INR 999/- only.",
  },
  section2: {
    heading1: "What is an ESI Return?",
    heading2: "All you need to know",
    listoptions: [
      {
        value:
          "Employee State Insurance is a self-financing social security scheme and health insurance plan for Indian workers, offering medical and disablement benefits. Governed by the ESI Act, 1948, it is managed by Employees’ State Insurance Corporation (ESIC) under the Ministry of Labour and Employment. ESIC is expected to manage the fund as per the rules and regulations set forth by the Act.",
      },
      {
        value:
          "The ESIC is applicable on all the establishments having 10 or more workers and is beneficial to all the employees earning Rs.15, 000/- or less per month as wages, employer must contribute 3.25 percent and employee must contributes 0.75 percent towards ESI.",
      },
    ],
    heroimg: "/caservices/esi-returns-sec-2-hero.jpg",
    content:
      "Uc Serices.com is an eminent business platform and a progressive concept, which helps end-to-end incorporation, compliance, advisory, and management consultancy services to clients in India and abroad. Filing ESI Returns is easy, seamless, cheapest and quickest with Uc Serices.com! Apart from ESI returns, Uc Serices.com also helps you to file Income Tax Returns, TDS Returns, GST Returns and PF Returns easily. You may get in touch with our compliance manager on +91 7709 222 331 or email care@financesbazar.com for free consultation.",
  },
  section3: {
    heading1: "ESI Return Filing Charges",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "₹ 599/-",
        desc: "One TDS Return Revision upto 10 entries",
      },
      {
        title: "ENHANCED",
        price: "₹ 7999/-",
        desc: "Download of Justification File",
      },
      {
        title: "ULTIMATE",
        price: "₹ 9999/-",
        desc: "Reply to Income Tax Notice",
      },
    ],
  },
  section4: {
    heading1: "TDS Returns Revision Process Flow",
    steps: [
      {
        title: "Fill in the Simple checklist",
        desc: "Start by completing a basic checklist with all the required ESI information.",
        color: "from-yellow-500 to-orange-500",
      },
      {
        title: "Submission of Documents",
        desc: "Upload and submit necessary ESI documents like employee data and contribution records.",
        color: "from-orange-500 to-red-400",
      },
      {
        title: "Verification of Documents",
        desc: "Our team verifies the documents to ensure compliance and correctness.",
        color: "from-indigo-800 to-purple-900",
      },
      {
        title: "Preparation of ESI Return",
        desc: "We prepare the ESI return based on your provided data and documentation.",
        color: "from-blue-500 to-blue-700",
      },
      {
        title: "ESI Return filed & Ack Generated",
        desc: "Your ESI return is successfully filed and you receive the acknowledgment.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Fill Simple Checklist",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "Our Compliance Manager will get in touch with you to obtain your documents along with a checklist. After receiving documents, our team will verify documents and proceed with the filing of your ESI returns.",
      },
      {
        title: "Preparing ESI return",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "Once we verify the documents and details we will proceed for preparing the ESI return. Based on the documents & information presented, our ESI expert will prepare ESI return & send you for your approval.",
      },
      {
        title: "ESI Returns filed",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Once you check the details and the same is verified and approved by you, our ESI expert will file your ESI return with the ESIC department. Upon successful filing, we will send you the acknowledgement receipt.",
      },
    ],
  },
  section6: {
    heading1: "FAQs On ESI Return filing",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "What is the ESI Code number?",
        content:
          "This is the 17-digit unique identification number that is allotted to every registered establishment. This number gets generated through the ESIC portal on the submission of required information by the employer or it is generated on receipt of a survey report from the Social Security Officer.",
        id: "1",
        sectionKey: "1",
      },
      {
        title:
          "What Records are to be submitted by employer in ESI Returns/Reports?",
        content:
          "– Absent reports as sought by branch manager.Accident Reports in Form 12, in case any accident happens.Attendance, books of accounts, wages reports/ records as sorted by Social Security officer on last inspection.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "How can I file ESI return?",
        content:
          "ESI Return contributions have to be filed within 42 days of termination of contribution period. Payment of contribution shall be made within 21 days of the last day of a calendar month. These returns must be filed half yearly.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "When can we file ESIC Return?",
        content:
          "The ESIC Return is filed on the half-yearly basis which means the ESIC return is required to file on or before 11th May and 11th Nov.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Which Cities do you provide your services?",
        content:
          "Uc Serices.com provides its services all across India. You can file ESI Returns in Ahmedabad, Mumbai, Pune, Bangalore, Chennai, Delhi, Kolkata, Kanpur, Nagpur, Jaipur or any other cities easily with us",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "Have some queries?",
        content:
          "Our expert will help you in choosing the best suitable plan for you. Get in touch with our team to get all your queries resolved. Write to us at care@financesbazar.com or call us @+91 9643 203 209.",
        id: "6",
        sectionKey: "6",
      },
    ],
  },
  RequiredDocuments: [
    {
      options: [
        "Attendance register",
        "Register for Form 6",
        "Register of wages",
        "Register of any accidents on the premises",
        "Inspection book",
        "Monthly challans and returns submitted for ESI",
      ],
    },
  ],
};
