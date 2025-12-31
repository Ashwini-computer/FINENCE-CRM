import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const ADDRemoveApartnerInLlpDescription = {
  section1: {
    heading1: "Appoint / Remove",
    heading2: "A Designated Partner in a LLP",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Is there a change in your Designated Partner under a LLP? Add/ Remove a Designated Partner at prices starting INR 1299/- only.",
  },
  section2: {
    heroimg:
      "/caservices/change-services/add-remove-a-partner-in-llp-sec-1-hero.jpg", // placeholder
  },
  section3: {
    heading1: "Simple Prices | No Surprises",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "1299",
        desc: [
          "Preparation of Supplementary deed (Applicable for Partnership Firm)",
          "Execution of deed (Applicable for Partnership Firm)",
        ],
      },
      {
        title: "ENHANCED",
        price: "2299",
        desc: [
          "Preparation of Supplementary deed",
          "Execution of deed",
          "Documents preparation for filing",
          "Filing of Form 3 and Form 4 with Department",
        ],
      },
      {
        title: "ULTIMATE",
        price: "4299",
        desc: [
          "Preparation of Supplementary deed",
          "Execution of deed",
          "DSC of Incoming Partner",
          "DIN of Incoming Partner",
          "Documents preparation for filing",
          "Filing of Form 3 and Form 4 with Department",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to Appoint a Designated Partner",
    steps: [
      {
        title: "DSC Application",
        desc: "Obtain Digital Signature Certificate (DSC) for the designated partner.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "DIN Application",
        desc: "Apply for Director Identification Number (DIN) required to become a designated partner.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Signed Consent Letter",
        desc: "Get the consent letter signed by the incoming designated partner.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "Filing of Form 3 & 4",
        desc: "Submit Form 3 and Form 4 with the Registrar of Companies to officially appoint the designated partner.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "Appointment is done",
        desc: "Once the forms are processed and approved, the partner is officially appointed.",
        color: "from-gray-500 to-gray-700",
      },
    ],
  },

  section5: {
    cards: [
      {
        title: "LLP Supplementary Deed & Resolution",
        icon: <ClipboardCheck size={48} className="text-accent" />,
        text: "Uc Services team of experts will help you complete all the documentation needed for adding or removing a Designated Partner. We will draft and prepare the supplementary deed and board resolution for appointment of designated partner in llp.Application for DSC & DIN",
      },
      {
        title: "Application for DSC & DIN",
        icon: <FileCheck2 size={48} className="text-accent" />,
        text: "We will apply for your DSC & DPIN. DPIN is Designated Partner Identification Number, which is a mandatory requirement for appointment/ adding of DP. Once the same is allotted to you, we will obtain consent letter in its prescribed format.",
      },
      {
        title: "DIR 12 Filing",
        icon: <BadgeCheck size={48} className="text-accent" />,
        text: "Once we complete the documentation for the appointment of the director with DIN, DSC, and Consent letter, we will file DIR 12 form with Ministry. Once filed successfully, we will share acknowledgment with you over your registered email ID.",
      },
    ],
  },
  section6: {
    heading1: "FAQs On Adding/Removal of Designated Partner",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "How to remove a Designated Partner from the LLP?",
        content:
          "In order to remove a Designated Partner, a resolution must be passed by the partners of the LLP, and thereafter the necessary form must be filed with the MCA.",
        id: "1",
        sectionKey: "1",
      },
      {
        title:
          "Is it mandatory to appoint a new Designated Partner after removal?",
        content:
          "Yes, an LLP must always have at least two Designated Partners. If one is removed, a new one must be appointed immediately.",
        id: "2",
        sectionKey: "2",
      },
      {
        title:
          "What are the eligibility criteria for becoming a Designated Partner in LLP?",
        content:
          "A person must be at least 18 years old, a natural person (not a body corporate), and should hold a valid DPIN (Designated Partner Identification Number).",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Can a foreign national become a Designated Partner?",
        content:
          "Yes, a foreign national can be appointed as a Designated Partner, provided at least one Designated Partner is a resident of India.",
        id: "4",
        sectionKey: "4",
      },
      {
        title:
          "What is the time frame for notifying the change in Designated Partner to ROC?",
        content:
          "Any addition or removal of a Designated Partner must be informed to the ROC by filing Form 4 within 30 days of such change.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "What documents are required to add a new Designated Partner?",
        content:
          "PAN card, identity proof, address proof, DSC, and consent to act as a Designated Partner are required for the appointment.",
        id: "6",
        sectionKey: "6",
      },
      {
        title:
          "What happens if the minimum number of Designated Partners falls below the required limit?",
        content:
          "The LLP must immediately appoint a new Designated Partner to comply with the requirement of having at least two Designated Partners.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "Which cities do you serve?",
        content:
          "UC Services offers LLP Designated Partner addition/removal services across India including Mumbai, Pune, Ahmedabad, Delhi, Bangalore, Chennai, Hyderabad, and more.",
        id: "8",
        sectionKey: "8",
      },
    ],
  },
  RequiredDocuments: [
    {
      title: "Documents Required",
      options: [
        "Scan photographs of all the Incoming Partners",
        "Occupation and Educational Qualifications of all the Incoming Partners",
        "Self-attested and color copy PAN Card of all the Incoming Partners",
        "Self-attested and color copy ID Proof of all the Incoming Partners (Driving License/Passport/Voter ID)",
        "Details regarding Capital Contribution of all the Incoming Partners",
      ],
    },
    {
      title: "Who cannot be a Designated Partner under an LLP?",
      options: [
        "A person adjudged insolvent within preceding 5 years;",
        "A person who has defaulted in payment made to Creditors within preceding 5 years and has not made a composition with them;",
        "A person convicted by a Court for an offence involving moral turpitude involving sentence of not less than six months;",
        "A person involved in any act of fraud;",
        "Minors below the age of 18 years.",
      ],
    },
  ],
};
