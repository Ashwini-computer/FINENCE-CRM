import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const EPFRegistrationDescription = {
  section1: {
    heading1: "Apply For",
    heading2: "PF Registration",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Extend Social Security to your employees. Register for Provident Fund. Prices starting INR 5999/- only.",
  },
  section2: {
    heroimg: "/caservices/otherregistration/epf-registration-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "PF Registration Charges",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "5999",
        desc: ["PF Registration (employees less than 20)"],
      },
      {
        title: "ENHANCED",
        price: "12999",
        desc: [
          "PF Registration (employees less than 20)",
          "PF Return (ECR) for 1 year",
        ],
      },
      {
        title: "ULTIMATE",
        price: "19999",
        desc: [
          "PF Registration (employees less than 50)",
          "PF Return (ECR) for 1 year",
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
        text: "Our Compliance Manager will get in touch with you to obtain your documents along with a simple checklist. You need to fill up the checklist and submit along with the documents for processing. Our expert team will verify documents and proceed with the DIN Application.",
      },
      {
        title: "DIN application",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "Once we have verified all the documents, we prepare the DIN application form and then we will file the DIN Application form and pay the fees for the same. All throughout the process, your dedicated compliance manager will keep you updated with the progress of DIN application.",
      },
      {
        title: "DIN received",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Upon uploading and successful payment, the MCA will verify the form. If there is no duplication found then the Director Identification Number will be approved and the same will be generated. Upon approval, the central government will communicate the DIN to the applicant within 1 month.",
      },
    ],
  },
  section6: {
    heading1: "FAQs On EPF Registration",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "Who must register with PF Department?",
        content:
          "Any company which has 20 or more employees is required to be registered with the PF Department.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "What is the time taken for EPF employer registration?",
        content:
          "EPF registration typically takes 10–15 working days after submission and verification.",
        id: "2",
        sectionKey: "2",
      },
      {
        title:
          "What is the contribution rate to the Provident fund & pension scheme?",
        content:
          "Employers contribute 12% of basic salary, and employees contribute 12%, of which 3.67% goes to PF and 8.33% to the Pension Scheme.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "What is the basic salary limit for EPF applicability?",
        content:
          "Employees drawing basic salary up to ₹15,000/month are compulsorily covered; those drawing above may opt in.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Is Employee Provident Fund taxable?",
        content:
          "Employer and employee contributions to EPF are not taxable income. Interest and maturity withdrawals (post 5 years) are tax‑exempt.",
        id: "5",
        sectionKey: "5",
      },
      {
        title:
          "What is the required number of employees for EPF applicability?",
        content:
          "Any establishment with 20 or more employees (excluding apprentices/casual labour), including contract workers, is covered.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Which cities do you provide services in?",
        content:
          "Uc Services provides EPF registration services across India, including Ahmedabad, Mumbai, Pune, Bangalore, Chennai, Delhi, Kolkata, Kanpur, Nagpur, Jaipur and more.",
        id: "7",
        sectionKey: "7",
      },
    ],
  },
  RequiredDocuments: [
    {
      options: [
        "Digital Signature",
        "Aadhar Card",
        "PAN Card",
        "Cancelled Cheque",
        "PAN Card of entity",
        "Electricity Bill",
        "Shop and Establishment Certificate",
      ],
    },
  ],

  customcardContent: [
    {
      title: "Contribution",
      content:
        "• Employee’s contribution – 12% of the basic salary \n• Employer – 12% of the basic salary",
    },
    {
      title: "Tax-free earnings",
      content:
        "• Interest on PF is exempt from tax\n• Withdrawals at maturity or beyond 5 years",
    },
    {
      title: "Financial security",
      content:
        "• Retirement, resignation and on a loss of income\n• Emergencies, Death or disability",
    },
    {
      title: "Quick registration",
      content:
        "• Online filing of an application\n• Easy documentation and Faster processing",
    },
    {
      title: "Benefits",
      content:
        "• A long-term investment for employees\n• Pension & Insurance after retirement",
    },
    {
      title: "Universal A/c number",
      content:
        "• Access online through a portal\n• Transfer accounts upon a change in employment",
    },
  ],
};
