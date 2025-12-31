import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, LayoutGrid, VenetianMask, X } from "lucide-react";
import { TypographyH4BlueColor, TypographyMuted } from "@/custom/Typography";
import { useNavigate } from "react-router-dom";

export default function AchievementPopup({ onClose }) {
    const [showPopup, setShowPopup] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 300, height: 300 });
    const Navigate = useNavigate();

    const popupRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
            document.body.classList.add("overflow-hidden");
        }, 2000);

        const updateSize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    useEffect(() => {
        if (showPopup && popupRef.current) {
            popupRef.current.focus();
        }
    }, [showPopup]);

    const handleCloseCard = () => {
        onClose?.();
    };

    const handleApply = () => {
        onClose?.();
        Navigate('/cibil-credit-report')
    }

    return (
        <AnimatePresence>
            {showPopup && (
                <>
                    {/* Confetti */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 pointer-events-none"
                    >
                        <Confetti width={windowSize.width} height={windowSize.height} />
                    </motion.div>

                    {/* Backdrop */}
                    <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" />

                    {/* Popup Container */}
                    <div className="fixed top-1/2 left-1/2 z-50 w-[80%] sm:w-[300px] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseCard}
                            aria-label="Close"
                            className="flex justify-center cursor-pointer items-center rounded-full bg-black p-1.5 mb-3 text-white"
                        >
                            <X size={16} />
                        </button>

                        {/* Animated Card */}
                        <AnimatePresence>
                            <motion.div
                                key="default-card"
                                ref={popupRef}
                                tabIndex={-1}
                                role="dialog"
                                aria-modal="true"
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.6, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-blue-50 rounded-2xl shadow-xl p-6 w-full"
                            >
                                <TypographyH4BlueColor className="mb-4 text-center text-xl sm:text-2xl">
                                    Hey, <span className="text-blue-600">User</span> We have an offer just for you!
                                </TypographyH4BlueColor>

                                <div className="bg-white p-4 my-4 rounded-md">
                                    <ul className="grid gap-4 cursor-pointer text-blue-800 text-sm font-medium tracking-normal">
                                        <li className="flex items-center gap-1"><VenetianMask size={18} className="text-accent" />Personal Loan</li>
                                        <li className="flex items-center gap-1"><Handshake size={18} className="text-accent" />Business Loan</li>
                                        <li className="flex items-center gap-1"><LayoutGrid size={18} className="text-accent" />Home Loan</li>
                                    </ul>
                                </div>
                                <button
                                    onClick={handleApply}
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm p-2 mt-3 w-full cursor-pointer rounded-full"
                                >
                                    Check Your Credit Score
                                </button>
                                <TypographyMuted className="text-xs text-center mt-4">
                                    *Standard T&C Apply
                                </TypographyMuted>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
