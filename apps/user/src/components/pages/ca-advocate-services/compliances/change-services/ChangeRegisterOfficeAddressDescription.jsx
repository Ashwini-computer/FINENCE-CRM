import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const ChangeRegisterOfficeAddressDescription = {
  section1: {
    heading1: "Change Your",
    heading2: "Company’s Registered Office",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Quickly give effect to Change in Registered Office. Get all compliaces done through Uc Services. Prices start at INR 3499/- only.",
  },
  section2: {
    heroimg:
      "/caservices/change-services/change-registered-office-address-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "Simple Prices | No Surprises",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "4299",
        desc: [
          "PDocument Preparation",
          "Change in Registration Office Address on MCA database",
          "Modification in PAN Card",
          "Modification in TAN",
        ],
      },
      {
        title: "ENHANCED",
        price: "5299",
        desc: [
          "Document Preparation",
          "Change in Registration Office Address on MCA database",
          "Modification in PAN Card",
          "Modification in TAN",
          "Filing MGT 14",
        ],
      },
      {
        title: "ULTIMATE",
        price: "19299",
        desc: [
          "Document Preparation",
          "Filing of form MGT-14 (Filing of resolution to ROC regarding Change in office from one state to another",
          "E-form INC-22 (Notice of situation or change of situation of registered office)",
          "E-form GNL-1 (Applications made to Registrar of Companies)",
          "E-form INC-28 (Notice of Order of the Court or any other competent authority)",
          "E-form INC-23 (Application to Regional Director for approval to shift the Registered Office from one state to another st",
          "Modification in PAN Card",
          "Modification in TAN",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to Change Registered Office Address?",
    steps: [
      {
        title: "Fill in the simple checklist",
        desc: "Start by completing a checklist with all necessary company details and proposed new address.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Preparation of Resolutions",
        desc: "Draft and pass a board resolution and, if required, a special resolution approving the change.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Public notice",
        desc: "Issue a public notice about the proposed address change if required under the Companies Act.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "Preparing the Form",
        desc: "Fill out the necessary ROC forms (like INC-22 or MGT-14) based on the type of address change.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "Filing the form with ROC",
        desc: "Submit the completed forms along with required documents to the Registrar of Companies (ROC).",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },
  section5: {
    cards: [
      {
        title: "Fill in the Simple Checklist",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "A Compliance Manager will get in touch with you to obtain your documents along with a simple checklist. You need to fill up that checklist and submit along with your documents for processing. Our team of experts shall verify the documents. Our team of experts will verify the documents provided by you and take the procedure further.",
      },
      {
        title: "Preparing the Resolution",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "Once we have all the documents and details, we will take the procedure further and prepare the draft of the resolution to be passed in the Extra ordinary General Meeting. In case you have changed your office in another state, then we will also prepare the public notice to be published in the Newspaper. After that we will initiate the final process.",
      },
      {
        title: "Filing the form with ROC",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Once you pass the resolution and give public notice, we will move forward and prepare the required forms to be filed with the ROC regarding the change in the registered office address. Then we will file the same with the concerned ROC and will also file a copy to the Registrar under whose jurisdiction the registered office is proposed to be shifted.",
      },
    ],
  },
  section6: {
    heading1: "FAQs on Change of Registered Office Address",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title:
          "What are the circumstances under which a company can change its registered office address?",
        content:
          "The three common circumstances under which a company changes its registered office are:\n– Within the same village or city\n– Within the same state\n– From one state to another",
        id: "1",
        sectionKey: "1",
      },
      {
        title:
          "I wish to change my registered office of company in another city, but it falls under the same ROC. Do I need to give public notice in newspapers?",
        content:
          "No, if you are changing the registered office within the jurisdiction of the same ROC, you do not need to issue a public notice in newspapers.",
        id: "2",
        sectionKey: "2",
      },
      {
        title:
          "Do you need permission from shareholders to change the registered office address to another location in the same city?",
        content:
          "No, companies relocating within the same village, town or city limits do not need permission from shareholders or other authorities, but they must notify the Registrar of Companies via e‑Form INC‑22.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "In which cities do you provide your services?",
        content:
          "https://financesbazar.com/ provides its services online across India, including Ahmedabad, Mumbai, Pune, Bangalore, Chennai, Delhi, Kolkata, Kanpur, Nagpur, Jaipur, or any other city in India.",
        id: "4",
        sectionKey: "4",
      },
    ],
  },
  RequiredDocuments: [
    {
      title: "Within the same city / state",
      options: [
        "Proof of registered office address of the company",
        "NOC from the owner of new premises or copy of property ownership documents",
        "Copy of bills such as electricity bill, water bill, etc.",
        "Copy of Special Resolution (Required when registered office changed within same state but different cities)",
      ],
    },
    {
      title: "From one state to another",
      options: [
        "Copy of Special Resolution passed to amend the MOA",
        "Copy of MOA & AOA of the company",
        "Copy of Notice of general meeting with the statement of explanation",
        "Copy of Minutes of Meeting of the General Meeting",
        "Details of debenture holders and creditors of the company",
      ],
    },
  ],
  customcardContent: [
    {
      title: "Same State, Same Jurisdiction",
      content:
        "While changing the Address of the Registered office of Company within the same city, the company has to arrange a board meeting and pass board resolution to change the registered office. Once the resolution has passed, the company has to file the form INC-22 with MCA within 30 days of the date of the board resolution. In a case where registered office is changed in different cities but same state and ROC, then along with form INC-22, Form MGT-14 and special resolution passed in EGM with MCA has to be filed.",
    },
    {
      title: "Same State, Different Jurisdiction",
      content:
        "In a case where the company wants to change the registered office within the same state but different from the jurisdiction of one ROC (Registrar Of Companies) to the other ROC, it has to apply for the approval of the Regional Director (RD) in the manner prescribed in form INC-23 along with the necessary documents such as special resolution. Once the Regional Director confirms this change, it has to file the same confirmation to the ROC within 60 days. The ROC shall confirm the change of the address within 30 days of the filing.",
    },
    {
      title: "Different Jurisdiction, Different State",
      content:
        "For shifting office from one state to another the company needs to file a special resolution in MGT 14 with MCA within 30 days also make alterations in MOA and AOA. The company shall publish an advertisement in at least 1 vernacular newspaper and in an English newspaper not more than 30 days before the date of application to RD. The company then shall file an application to RD. The company has to file the confirmation received from the RD to both the ROC in form INC 22 within 30 days from the date of the order with the required documents.",
    },
  ],
};
