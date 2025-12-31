import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const ADDaDirectorDescription = {
  section1: {
    heading1: "Appoint",
    heading2: "A Director in Company",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Got an able person to take up directorship ? Appoint a Director in your company at prices starting INR 2299/- only.",
  },
  section2: {
    heroimg:
      "/caservices/change-services/add-a-director-partner-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "Simple Prices | No Surprises",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "2299",
        desc: ["Documents Preparation", "DIR 12 form filing for one director"],
      },
      {
        title: "ENHANCED",
        price: "4299",
        desc: [
          "Digital Signature Certificate",
          "Director Identification Number",
          "Documents Preparation",
          "DIR 12 form filing for one director",
        ],
      },
      {
        title: "ULTIMATE",
        price: "5299",
        desc: [
          "Digital Signature Certificate",
          "Director Identification Number",
          "Documents Preparation",
          "DIR 12 form filing for one director",
          "Director Regularisation for one director",
        ],
      },
    ],
  },
  section4: {
    heading1:
      "How to Appoint a Director / Procedure of appointing / adding a director in a company",
    steps: [
      {
        title: "DSC Application",
        desc: "Obtain a Digital Signature Certificate for the new director to enable secure online document signing on MCA portal.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "DIN Application",
        desc: "Apply for a Director Identification Number (DIN) which is mandatory for anyone wanting to be appointed as a director.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Sign Consent Letter",
        desc: "The proposed director must sign a consent letter (Form DIR-2) indicating their willingness to be appointed.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "File DIR 12 Form",
        desc: "The company must file Form DIR-12 with ROC within 30 days of the appointment to register the new director officially.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "Appointment is done",
        desc: "Once approved by the Registrar of Companies, the director is officially appointed in the company records.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Board Resolution",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "Uc Services team of experts will help you complete all the documentation needed for a director appointment. Once you fill in a simple checklist then We will draft and prepare all the relevant board resolutions needed for the purpose.",
      },
      {
        title: "DSC & DIN",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "We will apply for your DSC & DIN. DIN is Director identification number, which is a mandatory requirement for director appointment. Once the same is allotted to you, we will obtain the consent letter in the prescribed format.",
      },
      {
        title: "DIR 12 Filing",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Once we complete the documentation for the appointment of the director with DIN, DSC, and Consent letter, we will file DIR 12 form with Ministry. Once filed successfully, we will share acknowledgment with you over your registered email ID.",
      },
    ],
  },
  section6: {
    heading1: "FAQs On Appointment of Director in a Company",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "What should I do if a director resigns and only one remains?",
        content:
          "If a director resigns leaving the number below the statutory minimum (private–2, OPC–1, public–3), the company must appoint a new director within 6 months.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "What are the requirements for becoming a director?",
        content:
          "The individual must be at least 18 years old and have a valid DIN. They can be an Indian national or a foreign national.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Can a body corporate be appointed as a director?",
        content:
          "No. Under the Companies Act, only a natural person (individual) can be appointed as a director.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Can NRIs or foreign nationals be appointed as directors?",
        content:
          "Yes. NRIs and foreign nationals can be appointed after obtaining a DIN. However, at least one director must be an Indian resident.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "What is the minimum number of directors required?",
        content:
          "A private limited company must have at least two directors, an OPC requires one, and a public limited company requires three.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "What documents are required for DIN?",
        content:
          "You need a digital signature, signed affidavit, and identity & address proof of the proposed director.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Does a person already having a DIN need another one?",
        content:
          "No. DIN is permanent and can be used for subsequent appointments across companies.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "Can a director be removed, and how?",
        content:
          "Yes. A director can be removed by passing an ordinary resolution in a general meeting, followed by filing the resolution and required forms with MCA.",
        id: "8",
        sectionKey: "8",
      },
      {
        title: "Do I need to transfer shares when director tenure ends?",
        content:
          "No. A person can continue to hold shares even after demitting office, unless AoA requires share disposal.",
        id: "9",
        sectionKey: "9",
      },
      {
        title: "Which cities do you serve?",
        content:
          "Uc Services provides director appointment services across India including Ahmedabad, Mumbai, Pune, Bangalore, Chennai, Delhi, Kolkata, Kanpur, Nagpur, Jaipur and more.",
        id: "10",
        sectionKey: "10",
      },
    ],
  },
  RequiredDocuments: [
    {
      options: [
        "Self-attested copy of PAN",
        "Self-attested copy of identity and address proof such as passport or Aadhar card or Election card",
        "Consent to act as director in format of DIR-2",
        "Copy of resolution passed by the shareholders",
        "Notice for shareholders meeting",
        "PAN card: Mandatory for an Indian Applicant",
        "Passport: Mandatory for a foreign Applicant",
      ],
    },
  ],

  customcardContent: [
    {
      title:
        "How to Appoint a Director   / Procedure of appointing / adding a director in a company",
      content:
        "Managing Director is a Director, who by virtue of AOA of a company or an agreement with the company or a resolution passed in its general meeting, or by its BoD, is given substantial powers of management of affairs of the Company.",
    },
    {
      title: "Executive Director",
      content:
        "The Executive Director is the director, who is in full-time employment of the company. This is the reason that the executive directors are mainly engaged in the core management of the company and managing affairs of the company.",
    },
    {
      title: "Additional Director",
      content:
        "The Directors in all the existing companies are first registered as additional directors. This appointment of Additional Director is done by the Board of Directors. They can hold a meeting up to the next general meeting.",
    },
    {
      title: "Alternate Director",
      content:
        "Alternate Director is someone appointed for a person who is a Non-Resident Indian or Foreign Collaborators of a company by the Board of Directors to act for the original director during his absence for a period of more than three months.",
    },
    {
      title: "Ordinary Director",
      content:
        "The Ordinary Director is the Director who attends the Board Meetings of the Company and participates in the matters put across the Board of Directors. They are neither whole-time Directors nor Managing Directors for the company.",
    },
  ],
};
