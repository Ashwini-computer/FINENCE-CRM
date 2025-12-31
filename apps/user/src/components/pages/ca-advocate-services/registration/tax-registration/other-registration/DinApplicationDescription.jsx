import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const DinApplicationDescription = {
  section1: {
    heading1: "Apply For",
    heading2: "Director Identification Number",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Wish to become a director in a company or a designated partner in an LLP? Obtain Director Identification Number (DIN). Prices start at INR 2499/- only.",
  },
  section2: {
    heroimg: "/caservices/otherregistration/din-application-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "DIN Application Fee",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "2499",
        desc: ["DIN Application"],
      },
      {
        title: "ENHANCED",
        price: "2999",
        desc: ["eXpress DIN Application (within 24 hours)"],
      },
      {
        title: "ULTIMATE",
        price: "3999",
        desc: ["DIN Application", "1 DSC Class III having 2 Years Validity"],
      },
    ],
  },
  section4: {
    heading1: "How to Apply For DIN?",
    steps: [
      {
        title: "Fill in a simple Checklist",
        desc: "Start the DIN application process by filling in a basic checklist with your personal and professional details.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Verification of Document",
        desc: "Your submitted information and supporting documents will be verified for accuracy and authenticity.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Submission of documents",
        desc: "Once verified, the required documents are officially submitted to the MCA for DIN processing.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "Processing of application",
        desc: "The Ministry of Corporate Affairs processes your application based on the details and documents submitted.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "You Receive DIN",
        desc: "Upon approval, your Director Identification Number (DIN) is issued and made available for use.",
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
    heading1: "FAQs On DIN Application",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "What is Director Identification Number?",
        content:
          "DIN is a unique 8‑digit alphanumeric number allotted to an individual who is appointed as a director of a company, via Form DIR‑3 under Sections 153 & 154 of the Companies Act, 2013.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "My DIN application has been rejected. Do I need to reapply?",
        content:
          "Yes. If your DIN application is rejected, you must apply afresh for a DIN with corrected information.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Can I use a provisional DIN for e-filing?",
        content:
          "No. Provisional DIN cannot be used in e‑forms, and the person cannot sign as a director until a DIN is finally allotted.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Is PAN mandatory for DIN application?",
        content:
          "Income‑tax PAN is mandatory for Indian nationals; foreign nationals may apply using a valid passport and attach a certified copy.",
        id: "4",
        sectionKey: "4",
      },
      {
        title:
          "What happens if details entered in DIN application don’t match PAN database?",
        content:
          "The form cannot be filed if details (name, father’s name, DOB) do not match the Income‑tax PAN database.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "What additional documents are needed for foreign nationals?",
        content:
          "Foreign nationals must attach a certified copy of passport (attested by embassy/notary/CA/CS/CMA), and if holding OCI/PIO/Indian visa, that can be used with necessary attestation.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "What is the validity of a DIN?",
        content:
          "DIN is issued for lifetime and doesn’t require renewal, unless deactivated/disqualified due to legal non-compliance.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "Where can I apply for DIN?",
        content:
          "DIN can be applied via SPICe+ form (for new company incorporations, limited to 3 directors) or via Form DIR‑3 (for existing companies) on the MCA portal.",
        id: "8",
        sectionKey: "8",
      },
      {
        title: "Can I hold multiple DINs?",
        content:
          "No. A person can hold only one DIN. Multiple applications may be rejected, and if discovered, one must file Form DIR‑5 to surrender extra DINs.",
        id: "9",
        sectionKey: "9",
      },
      {
        title: "How long does DIN allotment take?",
        content:
          "Once submitted correctly and fees are paid, DIN is allotted by the Central Government usually within a month, provided no duplication is found.",
        id: "10",
        sectionKey: "10",
      },
    ],
  },
  RequiredDocuments: [
    {
      title: "Quick Checklist",
      options: [
        "One Passport Size photos",
        "Self attested copy of Aadhar card",
        "Self-attested copy of PAN",
        "Self attested copy of Passport, in case of foreign nationals",
        "Self-attested copy of address proof",
      ],
    },
  ],
};
