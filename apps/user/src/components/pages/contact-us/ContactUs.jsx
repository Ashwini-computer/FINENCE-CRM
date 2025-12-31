import {
  Headline,
  TypographyH3,
  TypographyMuted,
  TypographyH4,
} from "@/custom/Typography";
import PageLayout from "../../layout/PageLayout";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { MdCreditScore } from "react-icons/md";
import { RiLuggageDepositLine, RiRefund2Line } from "react-icons/ri";
import { SiHelpscout } from "react-icons/si";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CardStall from "../../CardStall";
import { Link } from "react-router-dom";

const contactOptions = [
  {
    icon: <AiOutlineMail size={36} className="text-accent" />,
    label: "Email",
    value: "care@financesbazar.com",
    link: "mailto:care@financesbazar.com?subject=Finances Bazar Enquiry&body=Hello, I have a query regarding...",
    description:
      "For queries related to loans, credit cards or in case of any general enquiries",
  },
  {
    icon: <GiRotaryPhone size={36} className="text-accent" />,
    label: "Call Now",
    value: "+91 7709222331",
    link: "tel:+917709222331",
    description:
      "Our customer service experts are here for you. Lines are open Mon-Sat from 9:30 am – 6:30 pm",
  },
  {
    icon: <AiOutlineWhatsApp size={36} className="text-accent" />,
    label: "WhatsApp",
    value: "+91 7709222331",
    link: "https://wa.me/917709222331?text=Hello%20Finances%20Bazar%2C%20I%20have%20a%20query%20regarding...",
    description:
      "You can even reach out to us via WhatsApp. Our service expert team will help you with your queries",
  },
];

const contactOptions2 = [
  {
    id: 1,
    title: "Credit Report Support",
    email: "creditreport@financesbazar.com",
    icon: <MdCreditScore className="text-accent" size={32} />,
    description:
      "For any help / support about your Credit Report or Credit Profile",
    mailTo:
      "mailto:creditreport@financesbazar.com?subject=Help%20with%20Credit%20Report&body=Hi%20financesbazar%20team%2C%0A%0AI%20need%20support%20regarding%20my%20credit%20report.%20Please%20assist.%0A%0AThanks",
  },
  {
    id: 2,
    title: "Step Up Card Support",
    email: "stepupcare@financesbazar.com",
    icon: <RiRefund2Line className="text-accent" size={32} />,
    description:
      "For your Step Up Card account and Fixed Deposit related queries",
    mailTo:
      "mailto:stepupcare@financesbazar.com?subject=Step%20Up%20Card%20Query&body=Hi%20financesbazar%2C%0A%0AI%20have%20a%20question%20regarding%20my%20Step%20Up%20Card%20or%20FD.%20Please%20help.%0A%0AThanks",
  },
  {
    id: 3,
    title: "NPS Account Help",
    email: "npsgrievanceofficer@financesbazar.com",
    icon: <SiHelpscout className="text-accent" size={32} />,
    description: "For help related to your NPS account or investments",
    mailTo:
      "mailto:npsgrievanceofficer@financesbazar.com?subject=NPS%20Account%20Assistance&body=Dear%20financesbazar%20NPS%20Support%2C%0A%0AI%20need%20assistance%20regarding%20my%20NPS%20account.%20Please%20guide%20me.%0A%0ARegards",
  },
  {
    id: 4,
    title: "Mutual Fund Support",
    email: "mutualfunds@financesbazar.com",
    icon: <RiLuggageDepositLine className="text-accent" size={32} />,
    description: "For help with your Mutual Funds Account or your investments",
    mailTo:
      "mailto:mutualfunds@financesbazar.com?subject=Mutual%20Fund%20Support&body=Hello%2C%0A%0AI%20need%20some%20help%20with%20my%20mutual%20funds%20account%20or%20investment.%0A%0AThank%20you",
  },
];

const grievanceLevels = [
  {
    level: "Chief Executive Officer",
    turnaroundTime: "7 WORKING DAYS",
    name: "Pornima Babhulgaonkar Umbarkar",
    designation: "Managing Director",
    address:
      "Office no.02,15, Zeroboyz Chowk, above HDFC Bank, Nehru Nagar, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018",
    phone: "+91 9511247578",
    email: "ucservices.pornima@gmail.com",
  },
  {
    level: "Initial Complaint",
    turnaroundTime: "7 WORKING DAYS",
    name: "Customer care associate",
    designation: "Customer care team",
    address:
      "Office no.02,15, Zeroboyz Chowk, above HDFC Bank, Nehru Nagar, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018",
    phone: "1800-208-8877",
    email: "care@financesbazar.com",
  },
  {
    level: "For Carrer Goals",
    turnaroundTime: "6 WORKING DAYS",
    name: "Esha Marothiya",
    designation: "Admin Jr. Human Resource",
    address:
      "Office no.02,15, Zeroboyz Chowk, above HDFC Bank, Nehru Nagar, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018",
    phone: "+91 9325219487",
    email: "esha@ucindia.services",
  },
  {
    level: "Website concern",
    turnaroundTime: "6 WORKING DAYS",
    name: "Amol Suresh Mahor",
    designation: "Website Architect ",
    address:
      "Office no.02,15, Zeroboyz Chowk, above HDFC Bank, Nehru Nagar, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018",
    phone: "+91 9673170912",
    email: "amol@ucindia.services",
  },
];

export default function ContactUs() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-12 grid gap-8 sm:gap-12">
        <Headline>Contact Us</Headline>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <CardStall
              key={index}
              link={option.icon}
              icon={option?.icon}
              label={option?.label}
              value={option?.value}
              description={option?.description}
            />
          ))}
        </div>

        {/* Product Queries */}
        <div className="grid gap-6">
          <div className="w-14 h-0.5 bg-accent"></div>
          <TypographyH3 className="font-extrabold capitalize tracking-normal text-blue-950">
            Got any product related queries?
          </TypographyH3>
          <TypographyMuted>
            We have got dedicated service teams to help you with your queries.
            Just select a product and write to us. We usually respond within 48
            hours.
          </TypographyMuted>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactOptions2.map((contact) => (
              <Link
                to={contact.mailTo}
                key={contact.id}
                className="grid gap-2 hover:text-blue-800 transition-colors"
              >
                {contact.icon}
                <TypographyH4 className="text-blue-900 tracking-wide">
                  {contact.email}
                </TypographyH4>
                <TypographyMuted>{contact.description}</TypographyMuted>
              </Link>
            ))}
          </div>
        </div>

        {/* Grievance Table */}
        <div className="grid gap-6">
          <div className="w-14 h-0.5 bg-accent"></div>
          <TypographyH3 className="font-extrabold capitalize tracking-normal text-blue-950">
            Grievance Redressal Escalation Matrix
          </TypographyH3>
          <TypographyMuted>
            In case your concern is not resolved, you can contact the levels and
            wait for a resolution as per the Turnaround-Time mentioned.
          </TypographyMuted>

          <div className="overflow-x-auto mt-6">
            <Table className="border">
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="border border-r-2">Level</TableHead>
                  <TableHead className="border border-r-2">
                    Turnaround Time
                  </TableHead>
                  <TableHead className="border border-r-2">
                    Name & Designation
                  </TableHead>
                  <TableHead className="border border-r-2">
                    Contact Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grievanceLevels.map((option, index) => (
                  <TableRow key={index}>
                    <TableCell className="border border-r">
                      {option.level}
                    </TableCell>
                    <TableCell className="border border-r text-xs">
                      {option.turnaroundTime}
                    </TableCell>
                    <TableCell className="border border-r">
                      <div className="font-medium">Name: {option.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Designation: {option.designation}
                      </div>
                    </TableCell>
                    <TableCell className="grid gap-2">
                      <div className="text-sm text-wrap">
                        Address: {option.address}
                      </div>
                      <div className="text-sm">Phone: {option.phone}</div>
                      <div className="text-sm">Email: {option.email}</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Map location for the uc services */}
      <div className="w-full h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4000.926271474069!2d73.81233464612802!3d18.63353301217136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d96924845d%3A0xa360e8063116447!2sUCServices%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1744880657009!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-[600px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </PageLayout>
  );
}
