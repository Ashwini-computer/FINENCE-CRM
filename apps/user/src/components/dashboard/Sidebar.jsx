import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographySmall } from "@/custom/Typography";
import { TbLogout } from "react-icons/tb";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  CircleHelp,
  Gauge,
  LayoutDashboard,
  UserPen,
  FileText,
  CreditCard,
} from "lucide-react";
import { useContextFile } from "@/context/contextFile";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { logoutUser } from "../../machine/authentication/UserAuthentication";
import { useDispatch } from "react-redux";

const navMain = [
  {
    title: "Credit Report",
    url: "/myaccount/products",
    icon: <CreditCard size={16} />,
    items: [
      { subTitle: "Report Summury", url: "/myaccount/dashboard/credit-report" },
      {
        subTitle: "Score History",
        url: "/myaccount/dashboard/credit-report/score-history",
      },
      {
        subTitle: "Score Predictor",
        url: "/myaccount/dashboard/credit-report/score-predictor",
      },
      {
        subTitle: "Download Report",
        url: "/myaccount/dashboard/credit-report//download-report",
      },
      {
        subTitle: "All Accounts",
        url: "/myaccount/credit-report/all-accounts",
      },
    ],
  },
  {
    title: "Products",
    url: "/myaccount/products",
    icon: <LayoutDashboard size={16} />,
    items: [
      {
        subTitle: "Personal Loan",
        url: "/myaccount/products/personal-loan/offers",
      },
      {
        subTitle: "Business Loan",
        url: "/myaccount/products/business-loan/offers",
      },
      { subTitle: "Home Loan", url: "/myaccount/products/home-loan/offers" },
      {
        subTitle: "Loan Against Property",
        url: "/myaccount/products/loan-against-property",
      },
      {
        subTitle: "Credit Card",
        url: "/myaccount/products/credit-card/offers",
      },
    ],
  },
  {
    title: "Support",
    url: "/myaccount/support",
    icon: <CircleHelp size={16} />,
    items: [
      { subTitle: "FAQs", url: "/myaccount/support?tab=faqs" },
      {
        subTitle: "Submit a Query",
        url: "/myaccount/support?tab=submit-query",
      },
      { subTitle: "Contact Us", url: "/myaccount/support?tab=contact-us" },
      {
        subTitle: "Communication Preferences",
        url: "/myaccount/support/preferences",
      },
    ],
  },
];

export default function Sidebar({ setSidebarOpen }) {
  // const { handleLogout } = useContextFile();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeSidebar = () => {
    if (setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const handleLogout = async () => {
    const res = await dispatch(logoutUser());
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/sign-in");
    } else {
      console.log("error while logout");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid gap-3 animate-pulse mt-10">
        <div className="h-10 bg-gray-200 rounded-md" />
        <div className="h-10 bg-gray-200 rounded-md" />
        <div className="h-10 bg-gray-200 rounded-md" />
        <div className="h-10 bg-gray-200 rounded-md" />
        <div className="h-10 bg-gray-200 rounded-md" />
        <div className="h-10 bg-gray-200 rounded-md" />
      </div>
    );
  }

  // All accordion sections open by default
  const allOpen = navMain.map((_, idx) => `item-${idx}`);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="sm:hidden border-b pb-2 flex justify-between items-center">
        <div>
          <img loading="lazy" src="/logo.png" alt="logo" className="w-28" />
        </div>
        <IoCloseOutline size={22} onClick={closeSidebar} />
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col gap-2 mt-4 sm:mt-0 overflow-y-auto sm:h-full h-screen pb-22">
        {/* Dashboard Link */}
        <NavLink
          to="/myaccount/dashboard"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `flex gap-2 items-center  hover:bg-muted p-3 rounded-md font-semibold ${
              isActive ? "bg-blue-100 text-blue-800" : ""
            }`
          }
        >
          <Gauge size={16} />
          <TypographySmall>Dashboard</TypographySmall>
        </NavLink>

        {/* Profile Link */}
        <NavLink
          to="/myaccount/profile"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `flex gap-2 items-center hover:bg-muted p-3 rounded-md font-semibold ${
              isActive ? "bg-blue-100 text-blue-800" : ""
            }`
          }
        >
          <UserPen size={16} />
          <TypographySmall>Profile</TypographySmall>
        </NavLink>

        {/* Accordion Links - all open by default */}
        <Accordion type="multiple" value={allOpen} collapsible>
          {navMain?.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="hover:bg-muted p-3 rounded-md">
                <div className="flex items-center text-blue-950 gap-2">
                  {item.icon}
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="grid gap-3 ml-4 mt-3">
                {item.items?.map((subItem, subIndex) => {
                  const isActive =
                    location.pathname ===
                    new URL(subItem.url, window.location.origin).pathname;
                  return (
                    <NavLink
                      key={subIndex}
                      to={subItem.url}
                      onClick={closeSidebar}
                      className={`flex items-center gap-2 text-xs hover:text-accent ${
                        isActive
                          ? "text-blue-800 font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      <div className="w-4 h-0.5 bg-accent" />
                      {subItem.subTitle}
                    </NavLink>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <NavLink
          to="/myaccount/loans/applied-Loan-History"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `flex gap-2 items-center hover:bg-muted p-3 rounded-md font-semibold ${
              isActive ? "bg-blue-100 text-blue-800" : ""
            }`
          }
        >
          <FileText size={16} />
          <TypographySmall>Applied Loan History</TypographySmall>
        </NavLink>

        {/* Logout */}
        <div
          onClick={() => {
            handleLogout();
          }}
          className="flex items-center text-blue-950 hover:bg-muted p-3 rounded-md font-semibold gap-2 cursor-pointer"
        >
          <TbLogout size={16} />
          <TypographySmall>Log Out</TypographySmall>
        </div>
      </div>
    </>
  );
}
