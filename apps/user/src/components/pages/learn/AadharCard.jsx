import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyH4BlueColor,
    TypographySmall,
    TypographyList2,
    BoldList
} from '@/custom/Typography';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import HeroLoginCard from "../HeroSectionPages";
import SingleTable from "@/custom/SingleTable";

const topics = [
    "What is Aadhaar Card",
    "Components of Aadhaar Card",
    "Types of Aadhaar Cards",
    "Eligibility for Aadhaar Card",
    "Documents Required for Aadhaar Card",
    "Aadhaar Card Services on UIDAI Portal",
    "Aadhaar Card Login",
    "How to Book Aadhaar Appointment Online",
    "How to Apply for Aadhaar Card",
    "How to Check Aadhaar Card Enrolment Status Online",
    "How to Download Aadhaar Card and Print It",
    "What is mAadhaar App",
    "How to Update Aadhaar Card",
    "How to Check Aadhaar Update Status Online",
    "PVC Aadhaar Card",
    "How to Link Aadhaar with PAN",
    "How to Link Aadhaar with Bank Account",
    "How to Lock/Unlock Aadhaar Biometrics",
    "How to Verify Aadhaar Card",
    "Aadhaar Card Benefits",
    "Aadhaar Card FAQs"
];

const eligibilityCriteria = [
    "The applicant is an Indian citizen residing in India",
    "The applicant is a non-resident Indian residing in India",
    "The applicant is an OCI cardholder, with a valid foreign passport and should have stayed in India for at least 182 days in the last 12 months",
    "The applicant is an LTV holder with a foreign passport of origin country issued to minorities communities of Afghanistan, Bangladesh and Pakistan such as Hindus, Buddhists, Sikhs, Jains, Parsis and Christians",
    "The applicant is a citizen of Nepal/ Bhutan",
    "Other resident foreigners who have stayed in India for at least 182 days in the last one year"
];

const identityDocuments = [
    "Passport of the applicant",
    "PAN Card",
    "Ration card or PDS Photo Card",
    "Voter Identification Card",
    "Driving Licence",
    "NREGS Jobs Card",
    "Photo Bank ATM Card",
    "Voter Identification Card",
    "Certificate of birth of the applicant"
];

const aadhaarServices = [
    "Document Update",
    "Check Aadhaar Update Status",
    "Update Demographics Data and Check Status",
    "Check Aadhaar Update History",
    "Book an Appointment",
    "Check Aadhaar Status",
    "Download Aadhaar",
    "Order Aadhaar PVC Card",
    "Check Aadhaar PVC Card Status",
    "Locate an Enrolment Center in Bhuvan Aadhaar",
    "Verify an Aadhaar Number",
    "Verify Email/Mobile Number",
    "Retrieve Lost/Forgotten EID/UID",
    "Virtua ID (VID) Generator",
    "Aadhaar Paperless Offline eKYC (Beta)",
    "Bank Seeding Status",
    "Check Aadhaar Validity",
    "Lock/Unlock Biometrics",
    "Aadhaar Authentication History",
    "Aadhaar Lock and Unlock Service",
    "Aadhaar Services on SMS",
    "Know Aadhaar Enrolment and Update Charges",
    "Grievance and Feedback",
    "Check Grievance/Feedback Status"
];

const additionalAadhaarServices = [
    "Free Proof of Identity and Proof of Address document update",
    "Address update",
    "Check bank seeding status",
    "Generate Virtual ID",
    "View authentication history",
    "Offline eKYC",
    "Check payment history",
    "Head of Family (HoF) Requests"
];

const moreAadhaarServices = [
    "View and Download Aadhaar",
    "Retrieve EID/UID",
    "Order PVC Card",
    "Check Aadhaar Validity",
    "Verify Email/Mobile",
    "Generate Virtual ID",
    "QR Code Scanner",
    "Generate QR Code",
    "Paperless Offline e-KYC",
    "Book an Appointment",
    "Check Request Status - Enrollment & Update Status, PVC Card Request Status, Retrieve Order Aadhaar Status",
    "Get TOTP",
    "View Authentication History and Aadhaar Update History",
    "Lock/Unlock Aadhaar Biometrics",
    "Lock/Unlock Aadhaar",
    "Locate an Enrollment Center"
];


export default function AadharCard() {
    // Split topics into chunks of 3 for rows
    // const chunkedTopics = [];
    // for (let i = 0; i < topics.length; i += 3) {
    //     chunkedTopics.push(topics.slice(i, i + 3));
    // }

    // const chunkedTopics2 = [];
    // for (let i = 0; i < topics.length; i += 3) {
    //     chunkedTopics2.push(identityDocuments.slice(i, i + 3));
    // }

    // const chunkedTopics3 = [];
    // for (let i = 0; i < topics.length; i += 3) {
    //     chunkedTopics3.push(aadhaarServices.slice(i, i + 3));
    // }
    return (
        <PageLayout>
            <HeroLoginCard
                headline="Aadhaar Card – Eligibility, Documents, How to Apply, Update, Aadhar Status"
                description="Aadhaar card is one of the most important proof of identity and address. It is acceptable throughout India and more than 1.4 billion Aadhar cards have been issued till date. It is also used for performing banking transactions, availing subsidies, etc. This page provides complete details about Aadhaar card, its enrolment process, generation, update Aadhar details, how to check status and more."
                navigateLink="/business-loan/apply"
                loginSubHedline="I hereby appoint FinancesBazar as my authorised representative to receive my credit information from Cibil / Equifax / Experian / CRIF Highmark (bureau)."
                highlighterHedline={{
                    rightText: "Let's Get",
                    highLighter: "Started",
                }}
                buttonName="Check free Credit Score"
            />

            <div className="max-w-5xl mx-auto px-6 mb-8 sm:px-8">

                <>
                    <TypographyPBlueColor>
                        The Unique Identification Authority of India (UIDAI) issues the Aadhaar card which is a 12-digit unique identification number assigned to all residents of India, non-resident Indians, OCI cardholders, LTV holders, Nepal/Bhutan nationals, etc. Residents get the Aadhar number by providing their biometric and demographic details at various government-authorized Aadhaar Enrolment Centres or Aadhaar Seva Kendras (ASKs).
                    </TypographyPBlueColor>

                    <TypographyPBlueColor>
                        The key idea behind issuing Aadhaar cards by the government is to have a more streamlined and transparent method of allocating various government benefits and subsidies to residents.
                    </TypographyPBlueColor>

                    <TypographySmall className="underline text-lg">
                        On this page:
                    </TypographySmall>

                    {/* Topics Table */}
                    <SingleTable items={topics} columns={3} />
                </>

                <>
                    <TypographyH2BlueColor>
                        What is Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Aadhaar card issued by UIDAI contains your Aadhaar number and various biometric and demographic details. The Aadhar card can be used as a relevant proof of identity and address to avail various services such as opening a bank account, availing government subsidies, applying for loans, etc.
                    </TypographyPBlueColor>
                    <img  loading="lazy" src="/assets/Adhar-card.jpeg" alt="adhar-card" className="sm:w-96 w-full" />
                </>

                <>
                    <TypographyH2BlueColor>
                        Components of Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Given below are the key components that make up your Aadhaar card:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={[
                            "Name", "Date of birth", "Gender", "Photograph", "Aadhaar number", "QR code", "Address"
                        ]}
                    />
                </>

                <>
                    <TypographyH2BlueColor>
                        Types of Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        UIDAI issues different Aadhaar cards to residents. The following are the three different types of Aadhaar card that an individual can avail depending on their age and residential status:
                    </TypographyPBlueColor>

                    <div className="bg-gray-200 p-4 border border-black">

                        <>
                            <TypographyH4BlueColor>
                                Aadhaar Card for Resident Indians
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Every Indian citizen can apply for an Aadhaar card. Moreover, the Government of India has now made it mandatory for taxpayers to link their PAN with Aadhaar for filing their annual Income Tax Return (ITR).
                            </TypographyPBlueColor>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Baal Aadhaar or Aadhar Card for Minors
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Aadhaar enrolment is available even for minors, unlike the voter identification card. To apply for an Aadhaar card for children, you have to provide proof of identity and address of parents.
                            </TypographyPBlueColor>
                            <TypographyPBlueColor>
                                Newborns can also be enrolled for Aadhaar. However, they have to update their biometric data as soon as they turn 5 and 15 years old. The Baal Aadhaar card for children below 5 years is blue in colour.
                            </TypographyPBlueColor>
                            <Link to="" className="text-blue-800">
                                Click to know more about Baal Aadhaar
                            </Link>
                        </>

                        <>
                            <TypographyH4BlueColor>
                                Non-resident Indians (NRIs) including both minors and adults having a valid Indian Passport can apply for Aadhaar card by visiting any Aadhaar Kendra.
                            </TypographyH4BlueColor>
                            <TypographyPBlueColor>
                                Even OCIs (Overseas Citizens of India) can also apply for Aadhaar card. However, they need to reside in India for 182 days in the past one year to get the Aadhar card.
                            </TypographyPBlueColor>
                            <Link to="" className="text-blue-800">
                                Click to know more about Aadhaar Card for NRIs
                            </Link>
                        </>

                    </div>
                </>

                <>
                    <TypographyH2BlueColor>
                        What is eAadhaar
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        e-Aadhaar is an electronic copy of your Aadhaar card. You can download it online free of cost from the UIDAI website, mAadhaar, UMANG app or DigiLocker account. It is equally valid as any other form of Aadhaar and acceptable everywhere.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        What is masked Aadhaar
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        This is the latest option for the citizens to mask their Aadhaar cards in downloaded e-Aadhaar in which the first 8 digits are replaced with characters ‘XXXX-XXXX’ and only show the last four digits of the Aadhaar number.
                        It can be used as a valid proof of identity at hotels, amusement parks, train travel, etc.
                    </TypographyPBlueColor>
                    <TypographySmall>
                        Read More: <Link to="" className="text-blue-800">Masked Aadhaar</Link>
                    </TypographySmall>
                </>

                <>
                    <TypographyH2BlueColor>
                        Eligibility for Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        The purpose of issuing Aadhaar by UIDAI to the residents of India was to provide them with a document that can be used as unique identity proof for various purposes. It is more than just an identification number.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        However, the eligibility to avail an Aadhaar Card is not just limited to Indians. The eligibility criteria for Aadhaar enrolment are as follows:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={eligibilityCriteria}
                    />
                </>

                <>
                    <TypographyH2BlueColor>
                        Documents Required for Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        At the time of Aadhaar enrolment, you have to submit the following document proofs –
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={[
                            "1) Proof of Address (POA)",
                            "2) Proof of Identity (POI)",
                            "3) Proof of Relationship (PoR)",
                            "4) Proof of Date of Birth (DoB)"
                        ]}
                    />
                    <TypographyPBlueColor>
                        The most common documents that are generally used to apply for an Aadhaar Card are given below:
                    </TypographyPBlueColor>
                    {/* Topics Table */}
                    <SingleTable items={identityDocuments} columns={3} />
                    <TypographyH4BlueColor>
                        Click to know the complete list of documents required for Aadhaar card application
                    </TypographyH4BlueColor>
                    <TypographyPBlueColor>
                        To apply for a new Aadhaar card or update details in your card, you can download the form by visiting the official website, i.e. https://uidai.gov.in or can visit the nearest Aadhaar enrolment centre to submit Aadhaar card enrolment form which is free of cost.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        You need to submit the form along with the supporting documents to initiate the process of Aadhaar enrolment.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor className="italic">
                        <span className="font-semibold"> Note: </span> In case you want to update details in your Aadhaar card, you need to pay a fee of Rs. 50 for the demographic and Rs. 100 for the biometric update at the Aadhaar Enrolment Centre.
                    </TypographyPBlueColor>

                </>

                <>
                    <TypographyH2BlueColor>
                        Aadhaar Card Services on UIDAI Portal
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        The government has made provisions for availing various services related to Aadhar online. The following key Aadhaar card services are available on the UIDAI portal:
                    </TypographyPBlueColor>
                    <SingleTable items={aadhaarServices} columns={3} />
                </>

                <>
                    <TypographyH2BlueColor>
                        Aadhaar Card Login
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        For Aadhaar card login or to login to your UIDAI account, you need to visit the Aadhaar card login page and enter your Aadhaar number, captcha code and the OTP that you receive on your registered mobile number.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        Here are the key services that you can avail only after you do an Aadhaar card login:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={additionalAadhaarServices}
                    />
                    <TypographyPBlueColor>
                        It is worth noting that you cannot login to Aadhaar card portal if you don’t have a mobile number registered with UIDAI against your Aadhaar.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Book Aadhaar Appointment Online
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        To enroll for an Aadhaar card or to make updates to your Aadhaar card (except for address update), you need to physically visit an Aadhaar Seva Kendra. Booking an appointment online lets you choose the appointment date and time as per your convenience.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        The online appointment booking is also free of cost and you are not required to pay any charges for your initial Aadhaar enrollment. However, you may be required to pay for the Aadhaar service that you avail at the Aadhaar Seva Kendra, that is, Rs. 50 for demographic update and Rs.100 for biometric update per appointment.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        Booking an Aadhaar appointment online before you visit an Aadhaar Seva Kendra ensures a more convenient and hassle-free experience.
                    </TypographyPBlueColor>
                    <Link to="" className="font-semibold text-blue-800 tracking-normal cursor-pointer">
                        Click to know more about Aadhaar online appointment booking
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Apply for Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        To apply for an Aadhar card, the applicant can either directly walk-in to an Aadhaar Seva Kendra or book an appointment for a more convenient and hassle-free experience.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        The applicant is then required to provide the necessary information at the time of Aadhaar enrolment and when such data is verified, the Aadhaar card is generated. You can check the Aadhaar enrolment status online as well.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        The step by step Aadhaar Card application process is as follows:
                    </TypographyPBlueColor>
                    <ol className="grid gap-2 list-decimal text-sm opacity-85 mb-4 ml-6">
                        <li>Visit the nearest <Link to="" className="text-blue-800 cursor-pointer"> Aadhaar Enrolment Center</Link></li>
                        <li>Fill the Aadhaar Enrollment Form</li>
                        <li>Provide the photograph and biometric data (fingerprint and iris scan)</li>
                        <li>After enrolment, you will now receive an acknowledgement slip containing the enrolment number that can be used to <Link to="" className="text-blue-800 cursor-pointer"> check Aadhar status </Link>  online as well as through IVR</li>
                        <li>Dispatch of Aadhaar to the address of the applicant</li>
                    </ol>
                    <Link to="" className="font-semibold text-sm text-blue-800 tracking-normal cursor-pointer">
                        Find How to Apply for Aadhaar Card Here
                    </Link>
                </>


                <>
                    <TypographyH2BlueColor>
                        How to Check Aadhaar Card Enrolment Status Online
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        After enrolment, you can check the Aadhaar card application status online using the 28-digit ‘Enrolment ID’ or ‘EID’ which is available on the top of your Aadhaar Acknowledgement Slip. The EID is made of the 14-digit enrolment number (1234/12345/12345) and select the 14-digit date and time of enrolment (yyyy/mm/dd hh:mm:ss).
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        To check the status online, you need to visit the UIDAI website and click on “Check Aadhaar Status” listed under the Get Aadhaar section. If your Aadhaar is generated, you will get the Aadhaar details and the delivery status.
                    </TypographyPBlueColor>
                    <Link to="" className="font-semibold text-sm text-blue-800 tracking-normal cursor-pointer">
                        Know in Detail – How to check Aadhaar Application Status Online
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Download Aadhaar Card and Print It
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Once the Aadhaar card status enquiry shows that your Aadhaar number is generated, it is dispatched to your residential address. However, it may take some time before the physical Aadhaar reaches you.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        You can download Aadhar card online and print the PDF version of Aadhaar card (also known as e-Aadhaar card). Both e-Aadhar card as well as its print out is equally valid as your original Aadhaar card and acceptable at all places.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        There are various ways through which you can get your Aadhar card online or e-Aadhaar card. You can get your Aadhaar card by using your:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={[
                            "Aadhaar Number", "Name and Date of Birth", "Without a Registered Mobile Number", "Enrolment Number (EID)", "Virtual ID", "DigiLocker Account", "Umang App", "mAadhaar App"
                        ]}
                    />
                    <Link to="" className="font-semibold text-sm text-blue-800 tracking-normal cursor-pointer">
                        Read in Detail: Aadhaar Card Download & Print
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        What is mAadhaar
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Aadhaar card is often the key/mandatory requirement to avail a number of services and people need to provide their Aadhaar card almost everywhere. You can meet these requirements by using the official mobile application – mAadhaar app that lets you carry and access your Aadhaar card on your smartphone anytime and anywhere.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        The mAadhaar app can be installed on both Android or iOS devices and lets you add up to five Aadhaar profiles on a single device. Some of the key services available on the mAadhaar app include the option to:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={moreAadhaarServices}
                    />
                    <Link to="" className="font-semibold text-sm text-blue-800 tracking-normal cursor-pointer">
                        Click to know more about the mAadhaar App
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Update Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        You can make updates/corrections to your Aadhaar card online as well as offline. You will have to pay a fee of Rs. 50 each time you make a demographic update to your Aadhaar card and Rs. 100 for every biometric update.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        However, as per the latest updates, you can update Proof of Identity and Proof of Address documents free of cost till 14th December, 2024.
                    </TypographyPBlueColor>

                    <>
                        <TypographyH4BlueColor>
                            Steps to Update Aadhar Online
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            You can make corrections to your address online via the UIDAI website. At present, you can also update your proof of identity and proof of address documents if not updated in the past ten years.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            You need to simply fill up the relevant details, upload the necessary documents and pay the applicable fee (if any) to make updates online.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Steps to Update Aadhar Card Offline
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            To make any other changes to your demographic information apart from address update or update your biometric data, you need to physically visit an Aadhaar Seva Kendra or Aadhaar Update Center and submit the request along with the applicable charges.
                        </TypographyPBlueColor>
                        <TypographySmall>
                            Click to know about <Link to="" className="text-blue-800 font-semibold">Aadhar Card Update or Correction Online & Offline</Link>
                        </TypographySmall>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            How to Check Aadhaar Update Status Online
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            If there are errors in Aadhaar details, you can get them rectified both online and offline. You can check the status of both online and offline update requests on the UIDAI portal. Follow these simple steps to check Aadhaar card update status online:
                        </TypographyPBlueColor>
                        <ol className="text-sm opacity-85 list-decimal ml-6">
                            <li>On the UIDAI website, under the Update Aadhaar section, click on “Check Aadhaar Update Status”</li>
                            <li>Enter your Service Request Number (SRN) or Update Request Number (URN) generated at the time of making the request along with the captcha code</li>
                            <li>Click on “Submit” to see the Aadhaar update status online</li>
                        </ol>
                    </>
                </>

                <>
                    <TypographyH2BlueColor>
                        PVC Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        UIDAI has now started providing the Aadhaar Card as a Polyvinyl Chloride (PVC) card. You can apply for the Aadhaar PVC card online by paying a nominal fee of Rs. 50 (inclusive of GST and Speed Post charges).
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        The Aadhaar PVC card is comparatively more durable, comes with a host of security features and is a legally valid form of Aadhaar.
                    </TypographyPBlueColor>
                    <Link to="" className="text-blue-800 cursor-pointer text-sm">
                        Click to know more about PVC Aadhaar Card
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Link Aadhaar with PAN
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        The Union Government of India has made it mandatory for people to link their PAN with Aadhaar for filing ‘Income Tax Return’ under Section 133 AA (2) of the Income Tax Act. The deadline for linking PAN with Aadhaar card has ended on 30th June 2023.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        However, to continue using your PAN card and file your income tax returns, you can link your PAN and Aadhaar post the deadline via the income tax e-filing website and paying the penalty of Rs. 1,000.
                    </TypographyPBlueColor>
                    <Link to="" className="text-blue-800 cursor-pointer text-sm">
                        How to Link Aadhaar with PAN Card Online
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Link Aadhaar with Bank Account
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        The Reserve Bank of India made it compulsory for all bank accounts to be linked with Aadhaar in 2017. However, as per the Supreme Court’s judgement in 2018, it is no longer a compulsion to link your Aadhaar with the bank account.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        However, in case you want to link Aadhaar with the bank account, you can do so via any of the following means given below:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={[
                            "Link Aadhaar with bank accounts via internet banking",
                            "Bank’s mobile application",
                            "By visiting the nearest bank branch",
                            "ATM", "SMS service", "Mobile number"
                        ]}
                    />
                    <Link to="" className="text-blue-800 cursor-pointer text-sm">
                        How to link Aadhaar with Bank Account
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Lock/Unlock Aadhaar Biometrics
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Aadhaar acts as the proof of identity and proof of address for the citizens of India which are one of most important documents for availing government-related services.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        To protect users from frauds, UIDAI provides the facility to lock/unlock Aadhaar biometric data online. The ways to lock and unlock your Aadhaar biometric data online are as follows:
                    </TypographyPBlueColor>
                    <TypographyList2
                        items={[
                            "Lock/Unlock Aadhaar Biometric through UIDAI",
                            "Lock/Unlock Aadhaar Biometric via mAdhaar app",
                        ]}
                    />
                    <Link to="" className="text-blue-800 cursor-pointer text-sm">
                        How to Lock or Unlock Aadhaar Biometric Data
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Verify your Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Aadhaar card verification is done to check the validity of an Aadhaar card. A service provider may perform Aadhaar card verification to know if the Aadhaar mentioned in a document actually belongs to the applicant or not.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        The Aadhaar card verification process may be carried out online via the UIDAI website, mAadhaar app or offline through the Aadhaar Paperless Offline e-KYC process.
                    </TypographyPBlueColor>
                    <Link to="" className="text-blue-800 cursor-pointer text-sm">
                        Click here to find out more about Aadhaar card verification.
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        Aadhaar Card Benefits
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        The Government of India issues an Aadhaar number to every Indian citizen which acts as the proof of identity everywhere in the country. There are a range of benefits of having an Aadhaar card, as mentioned below:
                    </TypographyPBlueColor>

                    <>
                        <TypographyH4BlueColor>
                            Identity Card
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Aadhaar is an identity card accepted by all government and non-government organisations even though it is not a citizenship document. It not only has the photograph of the card holder but also contains biometric details like fingerprints and iris image.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Aadhaar card also contains a QR code that can be scanned to verify whether the details mentioned in the card are correct or not.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Proof of Address/Residence
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Aadhar card contains the residential address of the card holder. It can thus be used as a proof of residence for various governmental as well as non-governmental verification processes.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Aadhaar is also considered a valid proof of residence when applying for various financial products like share market investments, mutual funds, <Link to="/home-loan" className="text-blue-800">home loan</Link>, <Link to="/personal-loan" className="text-blue-800">personal loan</Link>, <Link to="/credit-card" className="text-blue-800">credit card</Link>, etc. as well as for availing financial services such as filing ITR.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Government Subsidy
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The government has made it compulsory for people to link their bank accounts with Aadhaar if they want to avail subsidies under different schemes.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            In order to get the subsidy directly in the bank account for schemes such as Pahal, Atal Pension Yojna, kerosene subsidy, school subsidy, food subsidies and others, people have to mandatorily furnish their Aadhaar.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Bank Accounts
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Aadhaar has become a key document along with PAN for opening bank accounts these days. These days banks need only Aadhaar card and PAN to open a bank account for the applicant.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            Jan Dhan accounts also need Aadhaar of the applicant. However, it is not compulsory to link your bank account with an Aadhar card.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Income Tax
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The Income Tax Department has made it compulsory for taxpayers to link Aadhaar to PAN. Aadhaar would now mandatorily be required while paying income tax and filing returns otherwise the ITR application of the taxpayer would not be processed.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Phone Connection
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Almost all telecom companies provide phone connections after accepting Aadhaar as proof of identity and address. Once Aadhaar is provided, the connection gets activated in the least possible time.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Gas Connection
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            People have to provide their Aadhaar for getting a new gas connection. In case they want to avail subsidy on their present gas connection, they will have to fill the KYC form and link Aadhaar with their bank account to get subsidy directly in their account under the Pahal (DBTL) scheme.
                        </TypographyPBlueColor>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Mutual Fund
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            Using the Aadhar Card, you could earlier complete e-KYC for mutual fund investments as mandated by SEBI. Even though the earlier e-KYC process is no longer operational, the investment account opening process is simplified in case you have your Aadhar card.
                        </TypographyPBlueColor>
                    </>

                    <TypographyPBlueColor className="italic">
                        <span className="font-semibold">Note: </span> The current limit for complete e-KYC for mutual fund accounts is Rs. 50,000 per year per fund. To override this limitation, in-person biometric verification needs to be completed by the investor.
                    </TypographyPBlueColor>
                </>

                <>
                    <TypographyH2BlueColor>
                        What is an Aadhaar Sewa Kendra (ASK) or Aadhaar Enrolment Centre
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Aadhaar Seva Kendra (ASK) is a one-stop destination for residents to avail all kinds of Aadhaar-related services. ASKs provided dedicated Aadhaar enrolment and update services to residents in a state-of-the-art environment.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        All ASKs are wheelchair-friendly and have special provisions to service the specially-abled and elderly.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        These ASKs are available in addition to the Aadhaar Enrolment Centres already run by banks, CSC, Post Offices, BSNL and state governments. You can find the updated list of all the functional ASKs on the UIDAI website.
                    </TypographyPBlueColor>
                    <Link to="" className="text-blue-800 cursor-pointer text-sm">
                        Read more about Aadhaar Enrolment Centres
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        How to Fill Aadhaar Enrolment/Correction Form?
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        Applicants have to fill the Aadhaar Enrolment/Correction Form if they want to enrol for Aadhaar or they want to make corrections in their existing Aadhaar. The duly filled Aadhaar card correction/enrolment form should be submitted to process the request.
                    </TypographyPBlueColor>
                    <Link to="" className="text-blue-800 cursor-pointer text-sm">
                        How to Fill Aadhaar Enrolment/Correction Form
                    </Link>
                </>

                <>
                    <TypographyH2BlueColor>
                        What to do if you have lost your Aadhaar Card?
                    </TypographyH2BlueColor>

                    <>
                        <TypographyH4BlueColor>
                            Q. What is the validity of my downloaded Aadhaar Card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Once you download the Aadhaar Card, it is valid for your entire life."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. What is Aadhaar authentication and what are its benefits?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Aadhaar authentication is the process of the verification of demographic, biometric and other information submitted to the CIDR authorities for verification. The benefit of authenticated Aadhaar is that it helps in establishing identity, improving efficiency and transparency in service delivery, demographic and address verification in future."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How to link an Aadhaar Number with a Bank Account?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: " The government of India in 2017 made it mandatory for the applicants to link Aadhaar with Bank accounts, but it was later ruled out by the Supreme Court in 2018 that it is no longer mandatory to link Aadhaar card with bank account. However, banks have provided various options through which account holders can link their accounts with Aadhaar card."
                                }
                            ]}
                        />
                        <TypographyPBlueColor>
                            Some of the methods to link Aadhaar with bank accounts are –
                        </TypographyPBlueColor>
                        <TypographyList2
                            items={[
                                "Bank’s mobile app", "Internet banking", "Through IVR", "By visiting the ATM or", "By visiting the bank’s branch"
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How to link Aadhar Number with PAN?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Linking Aadhaar with a ration card enables easy transfer of PDS benefits to your bank account (if applicable). In order to link your Aadhaar with ration card, you have to follow these steps:"
                                }
                            ]}
                        />
                        <ol className="ml-6 list-decimal">
                            <li>Visit the nearest PDS centre/ration shop</li>
                            <li>Provide the self-attested copy of your and your family members’ Aadhaar</li>
                            <li>Now provide a self-attested copy of your ration card</li>
                            <li>You will also have to provide your bank account details in case you have not linked it with Aadhaar</li>
                            <li>Now provide your fingerprints for biometric authentication</li>
                        </ol>
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How to link Aadhar Number with EPF Account?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Linking your EPF account/UAN with Aadhaar allows you to access your EPF account online. Here’s how to do it:"
                                }
                            ]}
                        />
                        <TypographyList2
                            items={[
                                "Register on the EPF member portal and login to your account",
                                "In the KYC section, add your Aadhaar details and submit the form",
                                "Your request will appear under pending KYC",
                                "Once approved by EPFO, it will be viewed under approved KYC",
                                "On successful verification by UIDAI, “Verified” will be mentioned against your approved Aadhaar"
                            ]}
                        />

                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. When do I need to authenticate Aadhaar Number?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "You need to authenticate Aadhaar for the verification of identity under different schemes like PDS, NREGA, etc. Beneficiaries are required to authenticate Aadhaar either at the time of applying for such schemes or at the time of availing benefits."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. From where can I authenticate Aadhar Number?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "The request to authenticate Aadhaar can be placed at the masked point of service delivery by various agencies. Some of these are self-service kiosks whereas others are operator-managed. Examples of such authentication points are FPS shops, bank terminals, NREGA centres, etc."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How can I know if my Aadhar number is linked with my bank account?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "UIDAI has provided a facility to check whether a bank account is linked with Aadhaar or not. Users can visit https://resident.uidai.gov.in/bank-mapper and login using their Aadhaar number and OTP to check the linkage."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. My mobile number is not registered in Aadhaar, how can I get my mobile number updated in Aadhaar?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "In order to get your mobile number linked with an Aadhaar card, you have to visit one of the Aadhaar Enrolment Centres and submit a request for mobile phone updation. Once the request is submitted, the mobile number will be linked with Aadhaar."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How can I know if my update request has been processed?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Whenever a person files an updation request, he gets a URN after successful submission of the form. He can track the request with the help of this URN."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. From where do I download the m-Aadhaar App?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "m-Aadhaar app can be downloaded from the Google Play Store or App Store."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Is it necessary to link a bank account with Aadhaar?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "No. It is not mandatory to link a bank account with Aadhaar as long as you have provided any of the other key KYC documents such as PAN, Driving License, Voter ID card, Passport etc."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How to update address in your Aadhaar?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "You can update the address in your Aadhaar card online as well as offline. The online process is free of cost whereas you have to pay a charge of Rs. 50 to update your address in Aadhaar by visiting the Aadhaar Enrolment Centre."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How to change mobile number in Aadhaar card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "You can change your mobile number in your Aadhaar card by visiting the nearest Aadhaar Enrolment Centre."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. What is the URN number in Aadhaar Card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Whenever you file a request for updation or correction of details in your Aadhaar online, an Update Request Number (URN) is provided after successful submission of the application. You can use this URN to track the updation process."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How to check Aadhaar Card update or correction status?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Aadhar details may sometimes be wrong or may need to be updated. It might take some time to make the correction after a request is made. In order to check Aadhaar update status or correction status, you can visit the official UIDAI website. However, you will have to provide the Update Request Number (URN) to track the status of your update request."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How to get a duplicate Aadhaar Card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "In order to get a duplicate Aadhar card, you must follow the steps mentioned below:"
                                }
                            ]}
                        />
                        <TypographyList2
                            items={[
                                "You can call the toll free number 1800-180-1947 and follow the IVR.",
                                "You can download e-Aadhaar from UIDAI’s website and print it to use it in place of Aadhaar."
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. What to do if an Aadhaar Card is not received?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "In case you check the status of Aadhaar on the website and find that it has been dispatched but the Aadhaar card is not received at your end, you can download the e-Aadhaar from UIDAI’s website using your enrolment number or you can place a request for sending the Aadhar card again."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Can I e-file a tax return without an Aadhaar number?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "E-filing a tax return without Aadhaar is not possible according to the current norms. The government has made it mandatory to link PAN and Aadhaar. In case PAN and Aadhaar are not linked, the e-filing of return would not be processed."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. I am not in India and I don’t have an Aadhar Card. Can I apply for an Aadhaar card from outside India?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "No. You cannot apply for Aadhaar from outside of India as it is mandatory to provide biometric details at an Aadhaar Enrolment Centre, which is located in India. Additionally, you need to have a residential address in India if you want to apply for an Aadhaar card."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. What are the charges for the Aadhaar PVC Card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "You can apply for a PVC Aadhaar card online by paying a nominal fee of Rs. 50 (inclusive of GST and Speed Post charges)."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How many Aadhaar cards may be linked to the same mobile number?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "There is no restriction on the number of Aadhaar cards that can be linked to one mobile number. However, only 5 accounts can be accessed using one mobile number on Aadhaar card."
                                },
                                {
                                    title: "Ans",
                                    value: "It is advisable to link your own mobile number or the mobile number you have better access only to your Aadhaar card as the same will be used for various OTP-based authentication services."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Are e-Aadhaar and the Aadhaar card the same thing?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "e-Aadhaar is an electronic or digital copy of your physical Aadhaar card that can be downloaded in PDF format and then printed too. e-Aadhaar card is equally valid and acceptable as any other form of Aadhaar."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. What can I update on my own on the Self Service Update Portal (SSUP) of Aadhaar card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "At present, you can only update your address as well as proof of identity and address documents on the Aadhaar Card Self Service Update Portal."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Are NRIs allowed to apply for an Aadhaar card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Yes, NRIs can apply for an Aadhaar card provided they meet the eligibility criteria and documentation requirements issued by the UIDAI."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Can the Aadhaar card be made online?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "No, you need to visit an Aadhaar Seva Kendra for your initial Aadhaar enrollment."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How long does it take to update or make correction in Aadhaar card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "It can take up to 30 days for your update request to be processed and get the updated Aadhaar delivered at your address."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Where do I find my nearest Aadhaar update centre/ Aadhaar Seva Kendra?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "You can locate the nearest Aadhaar Seva Kendra via the UIDAI website."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Can I update demographic information in Aadhaar online?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Yes, at present you can only make changes to your address information in Aadhaar online."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. Can I get my Aadhaar card from DigiLocker?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "Yes, you can download your Aadhaar card from your DigiLocker account."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How can I update mobile number in Aadhaar Card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "To update your mobile number in Aadhaar card you need to visit the nearest Aadhaar Seva Kendra, make the update request and pay a fee of Rs. 50."
                                }
                            ]}
                        />
                    </>

                    <>
                        <TypographyH4BlueColor>
                            Q. How can I check/verify my mobile number linked to Aadhaar card?
                        </TypographyH4BlueColor>
                        <BoldList
                            items={[
                                {
                                    title: "Ans",
                                    value: "You can check/verify the mobile number linked to your Aadhaar card via the UIDAI website. Here is a step-by-step guide to do so:"
                                },
                                {
                                    title: "1.",
                                    value: "Click on the My Aadhaar tab and select “Verify Email/Mobile Number” listed under the Aadhaar Services section"
                                },
                                {
                                    title: "2.",
                                    value: "Enter your Aadhaar number, mobile number, captcha code and click on “Submit” to verify if your mobile number is linked to your Aadhaar."
                                }
                            ]}
                        />
                    </>

                </>

                <>
                    <TypographyH2BlueColor>
                        Read More about Aadhaar Card
                    </TypographyH2BlueColor>
                    <TypographyPBlueColor>
                        The Aadhaar program was launched by the former prime minister of India, Dr. Manmohan Singh, in 2009. In April 2010, Nandan Nilekani, who was appointed as the Chairman of UIDAI on June 23rd 2009, launched the logo and the brand name “Aadhaar”.
                    </TypographyPBlueColor>
                    <TypographyPBlueColor>
                        Aadhaar is a Hindi word that means ‘base’ or ‘foundation’. Currently, Mr. Amit Agrawal is the CEO of UIDAI/Aadhaar. On September 29, 2010, Ranjana Sonawane from Nandurbar district of Maharashtra state became the first Indian to receive the Aadhaar card. Find out more about Aadhaar card below:
                    </TypographyPBlueColor>

                    <>
                        <TypographyH4BlueColor>
                            What is UIDAI
                        </TypographyH4BlueColor>
                        <TypographyPBlueColor>
                            The Unique Identification Authority of India (UIDAI) provides Aadhaar, a unique identity to every individual residing in India which now acts as a centre point of most of the government schemes. The organisation works under the central government and has its data centre at IMT Manesar, Haryana.
                        </TypographyPBlueColor>
                        <TypographyPBlueColor>
                            It is responsible for generating, updating and deleting Aadhaar cards apart from carrying out awareness programs, facilitation of digitisation using Aadhaar e-KYC, etc.
                        </TypographyPBlueColor>
                    </>
                </>


            </div>
        </PageLayout>
    );
}