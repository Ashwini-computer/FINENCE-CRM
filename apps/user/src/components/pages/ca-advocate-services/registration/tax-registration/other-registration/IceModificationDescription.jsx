import { ClipboardCheck, FileCheck2, BadgeCheck } from "lucide-react";

export const ICEModificationDescription = {
  section1: {
    heading1: "Modify",
    heading2: "Details on Your IEC",
    heroimg: "/caservices/otherregistration/ice-registration-sec1-hero.jpg",
    intro:
      "Wish to modify any details on IEC Registration? Uc Services will help you do it seamlessly. Prices start at INR 2399/-only.",
  },
  section2: {
    heroimg: "/caservices/otherregistration/ice-modification-sec-2-hero.jpg", // placeholder
  },
  section3: {
    heading1: "Simple Prices | No Surprises",
    heading2: "Choose Your Package",
    packages: [
      {
        title: "ESSENTIAL",
        price: "2399",
        desc: ["Modification in IEC Registration"],
      },
      {
        title: "ENHANCED",
        price: "3299",
        desc: [
          "Modification in IEC Registration",
          "Digital Signature Class 2 Individual having 2 Years Validity",
        ],
      },
    ],
  },
  section4: {
    heading1: "How to modify IEC Registration?",
    steps: [
      {
        title: "Complete Simple Checklist",
        desc: "Start by completing a simple checklist outlining the necessary information and documents required.",
        color: "from-yellow-400 to-orange-500",
      },
      {
        title: "Submit Documents",
        desc: "Upload the necessary documents for IEC modification including identity proof, address proof, and business credentials.",
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Verification of Documents",
        desc: "Your submitted documents are reviewed and verified by the DGFT or the respective authority.",
        color: "from-violet-800 to-purple-900",
      },
      {
        title: "Application for Modification",
        desc: "Submit your official application for modifying your IEC registration through the DGFT portal.",
        color: "from-sky-500 to-blue-600",
      },
      {
        title: "You receive Modified IEC Certificate",
        desc: "Once the process is complete and approved, your updated IEC certificate will be issued.",
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
    heading1: "FAQs On IEC Modification",
    heading2: "Get answers to all your queries",
    toggleoptions: [
      {
        title: "Is it mandatory to modify IEC if my business address changes?",
        content:
          "Yes, it is compulsory to update any change in business details, including business address, with DGFT to ensure compliance and avoid penalties.",
        id: "1",
        sectionKey: "1",
      },
      {
        title: "What is the timeline for IEC modification?",
        content:
          "IEC modifications are generally processed within 3–7 working days after successful submission and document verification.",
        id: "2",
        sectionKey: "2",
      },
      {
        title: "Can I modify my IEC offline?",
        content:
          "No. IEC modification is now an entirely online process via the DGFT portal.",
        id: "3",
        sectionKey: "3",
      },
      {
        title: "Is there a fee for modifying IEC?",
        content:
          "There is no government fee for IEC modification, though professional service charges may apply if assistance is used.",
        id: "4",
        sectionKey: "4",
      },
      {
        title: "Can I update my IEC without a Digital Signature Certificate?",
        content:
          "Yes, you can use Aadhaar e‑sign if you don’t have a DSC, though for companies DSC is preferred.",
        id: "5",
        sectionKey: "5",
      },
      {
        title: "What happens if I don’t update my IEC annually?",
        content:
          "Your IEC may be deactivated, which will impact your ability to import or export until it’s updated.",
        id: "6",
        sectionKey: "6",
      },
      {
        title: "Can a professional modify my IEC on my behalf?",
        content:
          "Yes, authorized representatives such as Chartered Accountants or legal experts can file the modification on your behalf.",
        id: "7",
        sectionKey: "7",
      },
      {
        title: "Is bank detail update also considered a modification?",
        content:
          "Yes, updating your export-import linked bank account details is considered a modification and must be filed.",
        id: "8",
        sectionKey: "8",
      },
      {
        title: "How can I check if my IEC has been modified successfully?",
        content:
          "You can log into the DGFT portal and check your IEC profile status under “Track Status”.",
        id: "9",
        sectionKey: "9",
      },
      {
        title: "Can I make multiple modifications at once?",
        content:
          "Yes, you can make multiple changes in a single application before final submission.",
        id: "10",
        sectionKey: "10",
      },
    ],
  },

  customcardContent: [
    {
      title: "1. Visit the DGFT Portal",
      content: "Go to the official DGFT website: https://dgft.gov.in",
    },
    {
      title: "2. Login to Your Account",
      content:
        "Use your registered credentials to log in. If not registered, create an account on the DGFT portal.",
    },
    {
      title: "3. Select “Modify IEC”",
      content:
        "From the dashboard, go to ‘IEC Profile Management’ and choose the option to modify your IEC.",
    },
    {
      title: "4. Update Required Information",
      content:
        "Make necessary updates such as changes to your business address, contact information, bank details, or directorship.",
    },
    {
      title: "5. Upload Supporting Documents",
      content:
        "Upload valid documents such as:\n- Updated PAN\n- Business address proof\n- Board resolution (for companies)\n- Cancelled cheque with updated bank details",
    },
    {
      title: "6. Submit and Sign",
      content:
        "Verify all details and digitally sign the application using DSC or Aadhar e-sign.",
    },
    {
      title: "7. Acknowledgement and Approval",
      content:
        "You will receive an acknowledgement after submission. Once approved by DGFT, your updated IEC will reflect online.",
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
        "Ensures Smooth Export-Import Operations: Avoids customs delays and transaction issues",
        "Legal Compliance: Complies with DGFT and customs regulations",
        "Improved Business Image: Builds trust with international clients and authorities",
        "Avoids Penalties: Prevents legal issues due to incorrect or outdated details",
        "Updated Communication Channel: Keeps DGFT communication streamlined",
      ],
    },
  ],
};
