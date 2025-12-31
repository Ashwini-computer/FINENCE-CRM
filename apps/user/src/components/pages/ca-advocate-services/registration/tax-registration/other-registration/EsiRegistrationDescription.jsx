import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const EsiRegistrationDescription = {
  section1: {
    heading1: "Apply",
    heading2: "ESI Registration",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Extend medical benefits to your employees. Register for ESIC. Prices start from INR 5999/- only.",
  },
  section2: {
    heroimg: "/caservices/otherregistration/esi-registration-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "Simple Prices | No Surprises",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "5999",
        desc: ["ESIC Registration (employees less than 20)", ""],
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
        title: "ENHANCED",
        price: "19999",
        desc: [
          "ESIC Registration (employees less than 50)",
          "ESIC Return for 1 year",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to register for ESIC?",
    steps: [
      {
        title: "Complete simple form",
        desc: "Start the ESIC registration process by filling out a simple online form with basic details.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload the necessary documents required for ESIC registration such as business and employee details.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Application Preparation",
        desc: "Ensure all required details and documents are correctly compiled and prepared for submission.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "Application Submission",
        desc: "Submit the completed application form and documents through the ESIC online portal.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "You are ESIC Registered",
        desc: "Once processed and approved, your organization will receive official ESIC registration.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section6: {
    heading1: "FAQs On ESIC Registration",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "What is the procedure for registration of an employer?",
        content:
          "An employer shall apply for FORM 01 within 15 days after the Act becomes applicable to their unit or establishment.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "Is it mandatory for the employer to register under ESIC?",
        content:
          "Yes, it is mandatory for every employer who comes under this Act to register their factory or establishment.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "What are the compliance requirements?",
        content:
          "Employers must deposit monthly contributions, file half-yearly returns, report changes in business activity, address, ownership or management, and maintain required registers and records.",
        id: "3",
        sectionKey: "3",
      },
      {
        title:
          "Whether the benefits granted to insured employees are transferable?",
        content:
          "No, the right to receive any benefits under this Act is not transferable.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "What is the ESI Scheme?",
        content:
          "It is a comprehensive social security scheme providing protection against sickness, maternity, disablement, death due to employment injury, and medical care to insured employees and their families.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "What is a Code number?",
        content:
          "This is the 17‑digit unique identification number allotted to each factory or establishment registered under the Act.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Is there any provision for exemption from ESI coverage?",
        content:
          "Yes, exemption may be granted if employees are otherwise in receipt of benefits substantially similar or superior to those under the ESI Act, for up to one year at a time.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "What is the time limit for payment of contribution?",
        content:
          "Contributions must be paid into an ESIC-authorized bank within 21 days of the end of the calendar month in which they fall due.",
        id: "8",
        sectionKey: "8",
      },
      {
        title:
          "What are the consequences of late payment of employee’s contribution?",
        content:
          "Delayed payment or non-payment of deducted employee contribution amounts to breach of trust under IPC 406, and interest and penalties may apply.",
        id: "9",
        sectionKey: "9",
      },
    ],
  },

  customcardContent: [
    {
      title: "Medical Benefit",
      content:
        "The ESIC takes care of an individual’s and his dependents’ medical expenses by full medical and surgical care. His dependents without any limit in ESI dispensaries and hospitals including a supply of medicine, ambulance services, and super specialty consultation.",
    },
    {
      title: "Disablement Benefit",
      content:
        "In case an employee is disabled, ESIC ensures that the employee is paid 90% of their monthly wages for the period of the injury in case of a temporary disablement. In case of permanent disablement, 90% of wages paid for the remaining life of such an employee.",
    },
    {
      title: "Sickness Benefit",
      content:
        "Sickness benefit is also provided to the insured employees in the form of cash compensation. At the rate of 70% of wages is payable to insured workers during the periods of certified sickness for a maximum of 91 days in a year by Employees State Insurance Corporation.",
    },
    {
      title: "Maternity Benefit",
      content:
        "ESIC also helps the insured women employees in the time of pregnancy. Maternity benefit for confinement/pregnancy is provided by ESIC for six months subject to contribution for 70 days in the preceding year.",
    },
    {
      title: "Dependant’s Benefit",
      content:
        "In case the employee meets with an untimely death due to an injury at the place of employment, ESIC pays a dependent benefit at the rate of 90% of wage in the form of monthly payment to the dependents of a deceased insured person.",
    },
    {
      title: "Unemployment Benefit",
      content:
        "The ESIC ensures unemployment allowances equal to 50% of wage for up to 1 year and medical care for self and family from ESI Hospitals in case of permanent invalidity due to a non-employment injury or involuntary loss of employment.",
    },
  ],
};
