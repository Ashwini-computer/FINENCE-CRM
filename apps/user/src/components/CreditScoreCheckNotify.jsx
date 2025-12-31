import { ChevronLeft } from "lucide-react";
import { TypographySmall } from "../custom/Typography";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CreditScoreCheckNotify() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      className="fixed bottom-6 sm:bottom-22 right-0 px-4 py-3 w-[300px] sm:px-6 bg-yellow-200 z-50 border rounded-l-full shadow-2xl hidden sm:flex items-center gap-3"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "calc(100% - 50px)" }}
      exit={{ x: "100%" }}
    >
      {/* Chevron Button */}
      <span
        className="cursor-pointer border-r-2 pr-4 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronLeft
          size={22}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </span>

      {/* Content */}
      <motion.div
        className={`flex items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300`}
      >
        <div className="grid gap-0.5">
          <TypographySmall className="text-[16px]">
            FREE Credit Score
          </TypographySmall>
          <Link
            to="/cibil-credit-report"
            className="cursor-pointer text-sm text-blue-800 font-medium"
          >
            Check Now
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
