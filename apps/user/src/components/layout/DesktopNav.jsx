"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function DesktopNav({ mainNavItems }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative">
      <div className="flex items-center gap-8">
        {mainNavItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative"
          >
            <div className="flex items-center text-sm text-blue-950 font-semibold gap-1 cursor-pointer">
              {item.isSingle ? (
                <Link to={item.href}>
                  <span>{item.title}</span>
                </Link>
              ) : (
                <>
                  <span>{item.title}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      index === hovered ? "rotate-180" : ""
                    }`}
                  />
                </>
              )}
            </div>

            <AnimatePresence mode="wait">
              {hovered === index && !item.isSingle && (
                <motion.div
                  key={`dropdown-${index}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="fixed left-0 top-16 w-full z-50"
                >
                  <div className="w-full max-h-[75vh]  overflow-y-auto px-10 py-12 grid grid-cols-2 gap-8 bg-white shadow border-b text-gray-900">
                    {item.items?.map((section, colIndex) => (
                      <div key={colIndex} className="space-y-4">
                        {section.title && (
                          <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">
                            {section.title}
                          </h2>
                        )}

                        {section.suboptions?.length > 0 && (
                          <div className="space-y-6 grid grid-cols-2 p-2">
                            {section.suboptions.map((option, subIdx) => (
                              <div key={subIdx}>
                                <h3 className="text-sm font-bold text-gray-700 mb-1">
                                  {option.subtitle}
                                </h3>
                                <ul className="space-y-1 pl-2">
                                  {option.links.map((link, k) => (
                                    <li key={k}>
                                      <Link
                                        to={link.href}
                                        onClick={() => setHovered(null)}
                                        className="text-sm text-gray-600 hover:text-black"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {section.links?.length > 0 && (
                          <ul className="space-y-2 pt-2">
                            {section.links.map((link, j) => (
                              <li key={j}>
                                <Link
                                  to={link.href}
                                  onClick={() => setHovered(null)}
                                  className="text-sm text-gray-600 hover:text-black"
                                >
                                  - {link.label}
                                  {link.badge && (
                                    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded">
                                      {link.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
