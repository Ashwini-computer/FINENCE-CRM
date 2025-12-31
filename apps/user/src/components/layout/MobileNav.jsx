import { FiChevronDown } from "react-icons/fi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  TypographyH4,
  TypographyPBlueColor,
  TypographyP,
} from "@/custom/Typography";

export default function MobileNav({
  mainNavItems,
  isSheetOpen,
  setIsSheetOpen,
}) {
  const [openDropdowns, setOpenDropdowns] = useState(() => {
    const init = {};
    mainNavItems.forEach((item) => {
      if (!item.isSingle) init[item.title] = true;
    });
    return init;
  });

  const [expandedSubs, setExpandedSubs] = useState({});

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleSub = (mainTitle, subtitle) => {
    const key = `${mainTitle}-${subtitle}`;
    setExpandedSubs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button className="mt-2">
          <HiOutlineBars3CenterLeft size={28} />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="w-full px-0 mt-16 overflow-y-auto border-t shadow-xl"
        style={{ height: "80vh" }}
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex flex-col space-y-4">
            {mainNavItems.map((item, index) =>
              item.isSingle ? (
                <div key={index}>
                  <Link
                    key={item.title}
                    to={item.href}
                    className="font-semibold text-[15px] text-[#183B4E] px-4"
                  >
                    {item.title}
                  </Link>
                  <div className="px-4 py-4 border-t-2 my-4">
                    <TypographyPBlueColor className="text-sm font-semibold tracking-normal">
                      Need Assistance
                    </TypographyPBlueColor>
                    <TypographyP className="text-[13px] text-blue-950 leading-5">
                      Our customer care team is available from{" "}
                      <strong>Mon - Sat 9:30 am – 6:30 pm</strong> to assist you
                      with the best offers, or help resolve any queries.
                    </TypographyP>
                    <TypographyP className="text-[13px] text-blue-950 mt-4">
                      You can call us on: <br />
                      <strong>+91 9270033002</strong>
                      <br />
                    </TypographyP>
                  </div>
                </div>
              ) : (
                <div key={item.title} className="space-y-2">
                  <button
                    className="text-sm font-semibold flex items-center justify-between w-full border-b-2 px-6 pb-2"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    <TypographyH4 className="text-[15px] text-[#183B4E]">
                      {item.title}
                    </TypographyH4>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdowns[item.title] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdowns[item.title] && (
                    <div className="space-y-6 px-6">
                      {item.items.map((section) => (
                        <div key={section.title} className="space-y-2">
                          {section.title && (
                            <TypographyH4 className="uppercase text-[#261FB3]">
                              {section.title}
                            </TypographyH4>
                          )}

                          <ul className="space-y-3 my-4">
                            {section.links?.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.href}
                                  className="text-xs font-semibold tracking-normal text-[#697565] flex items-center"
                                >
                                  {link.label}
                                  {link.badge && (
                                    <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-green-400 font-semibold text-white rounded">
                                      {link.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {section.suboptions?.length > 0 && (
                            <div className="space-y-2">
                              {section.suboptions.map((sub) => {
                                const id = `${section.title}-${sub.subtitle}`;
                                return (
                                  <div key={id}>
                                    <div
                                      className="cursor-pointer text-[#183B4E] font-semibold text-xs"
                                      onClick={() =>
                                        toggleSub(section.title, sub.subtitle)
                                      }
                                    >
                                      {sub.subtitle}{" "}
                                      <span>
                                        {expandedSubs[id] ? "-" : "+"}
                                      </span>
                                    </div>
                                    {expandedSubs[id] && (
                                      <ul className="ml-4 space-y-1 mt-1">
                                        {sub.links.map((link) => (
                                          <li key={link.label}>
                                            <Link
                                              to={link.href}
                                              className="text-xs font-normal tracking-normal text-[#5A5A5A]"
                                            >
                                              {link.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
