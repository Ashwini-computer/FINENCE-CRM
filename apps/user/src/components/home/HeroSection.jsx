import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypographyH4 } from "@/custom/Typography";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

const slides = [
  {
    id: 1,
    content: (
      <div className="flex sm:justify-between sm:gap-8 gap-4 items-center w-full relative">
        {/* Text Section */}
        <div className="space-y-2 sm:space-y-6 order-2 sm:order-1 sm:text-left px-4 sm:px-0 max-w-md">
          <h1 className="text-sm text-primary sm:text-3xl font-bold">
            Get <span className="text-accent">Lifetime Free</span> Credit Card
            Score & Report
          </h1>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Track Credit Score,
            Free Forever
          </TypographyH4>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> No Impact on Credit
            Score
          </TypographyH4>
          <Link to="/cibil-credit-report">
            <Button className="h-6 rounded sm:h-10 sm:text-sm text-xs py-1 sm:py-2 sm:px-4">
              Get Free Credit Report
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 sm:order-2">
          <img
            src="/assets/credit-score.png"
            alt="Credit Score"
            loading="lazy"
            className="w-[350px] sm:w-[550px]"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex sm:justify-between sm:gap-8 sm:items-center w-full">
        {/* Image */}
        <div className="flex justify-center order-1 sm:order-1">
          <img
            src="/assets/cc-banner-img.svg"
            alt="Credit Card"
            loading="lazy"
            className="w-38 sm:w-[380px]"
          />
        </div>

        {/* Text */}
        <div className="space-y-2 sm:space-y-6 order-2 sm:order-2 sm:text-left sm:px-0 max-w-md">
          <h1 className="text-sm text-primary sm:text-3xl font-bold">
            Looking For The{" "}
            <span className="text-accent">Best Credit Cards?</span>
          </h1>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Search Card by Card
            Name/Categories
          </TypographyH4>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Choose from 400+
            Credit Cards
          </TypographyH4>
          <Link to="/cibil-credit-report">
            <Button className="h-6 sm:h-10 rounded sm:text-sm text-xs py-1 sm:py-2 sm:px-4">
              Search Credit Card
            </Button>
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex justify-around gap-4 sm:mt-8 sm:gap-8 w-full">
        {/* Image */}
        <div className="flex justify-end order-1 sm:order-1">
          <img
            src="/assets/pl-banner-img.svg"
            alt="Personal loan"
            loading="lazy"
            className="sm:w-[340px] w-32 relative sm:-top-10"
          />
        </div>

        {/* Text */}
        <div className="space-y-2 sm:space-y-6 order-2 sm:order-2 px-4 sm:px-0 max-w-md">
          <h1 className="text-sm text-primary sm:text-3xl font-bold">
            Your Dreams Deserve More - Unlock{" "}
            <span className="text-accent">Personal Loan</span> upto ₹60+ Lac!
          </h1>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Rates as low as
            10.99%*
          </TypographyH4>
          <TypographyH4 className="text-[11px] sm:text-base text-muted-foreground flex items-center gap-2 justify-start">
            <div className="w-2 sm:w-8 h-px bg-accent" /> Fast disbursal with
            effortless eperience
          </TypographyH4>
          <Link to="/personal-loan">
            <Button className="h-6 sm:h-10  roundedsm:text-sm text-xs py-1 sm:py-2 sm:px-4">
              Check Now
            </Button>
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="w-full hidden md:block">
        {/* Mobile & Tablet & Medium Devices → Text only (No big images) */}
        <div className="block xl:hidden px-4 py-6">
          <div className="w-full bg-gradient-to-br from-[#009896] via-yellow-200 to-[#009698] rounded-xl shadow-lg border overflow-hidden font-serif text-gray-800 p-4">
            <div className="text-center border-b-2 border-red-600 pb-3 mb-3">
              <h3 className="text-red-600 font-bold text-xl">श्री गणेश उत्सव</h3>
              <p className="text-base font-semibold">आग्रहाचे निमंत्रण..</p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                आपल्या प्रिय गणपती बाप्पा यांच्या चरणी सस्नेह वंदन. या वर्षी{" "}
                <strong>उंबरकर टेक्नॉलॉजी प्रा. लि.</strong> मध्ये आयोजित{" "}
                <strong>श्री गणेश उत्सव व वेबसाइट उद्घाटन सोहळ्यासाठी</strong>{" "}
                आपणास व आपल्या मान्यवर पाहुण्यांना सप्रेम आमंत्रण.
              </p>

              <p>
                कार्यक्रमात आपले स्वागत करताना आम्हाला अत्यंत आनंद होत आहे. या शुभ
                प्रसंगी आपण उपस्थित राहून सोहळ्याचे सौंदर्य आणि महत्त्व वाढवावे,
                ही नम्र विनंती.
              </p>

              <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-red-500 text-sm leading-snug">
                <p>
                  <strong>स्थळ:</strong> उंबरकर टेक्नॉलॉजी प्रा. लि., ऑफिस क्र. ०२,
                  १५, झिरोबॉईज चौक, नेहरू नगर, पिंपरी-चिंचवड, पुणे - ४११०१८
                </p>
                <p>
                  <strong>दिनांक:</strong> ०४/०९/२०२४
                </p>
                <p>
                  <strong>वेळ:</strong> १०:०० सकाळी
                </p>
                <p className="mt-1 text-red-700 font-semibold">
                  आमच्या वेबसाइट उद्घाटनासाठी मान्यवर पाहुण्यांचे विशेष आमंत्रण
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop & Desktop (XL and above) → Full design with images */}
        <div className="hidden xl:flex justify-center items-center w-full px-4 py-6">
          <div className="w-full max-w-5xl bg-gradient-to-br from-[#009896] via-yellow-200 to-[#009698] rounded-xl shadow-lg border overflow-hidden font-serif text-gray-800">
            {/* Header */}
            <div className="text-center border-b-2 border-red-600 py-4 px-2">
              <div className="flex items-center justify-center gap-4">
                <img src="/assets/om.png" alt="om sign" className="w-10 h-10" />
                <div>
                  <h3 className="text-red-600 font-bold text-2xl">श्री गणेश उत्सव</h3>
                  <p className="text-base font-semibold">आग्रहाचे निमंत्रण..</p>
                </div>
                <img src="/assets/om.png" alt="om sign" className="w-10 h-10" />
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-2 gap-6 p-6">
              {/* Left - Ganesh Image & Date */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="/assets/ganesh-ji.png"
                  alt="गणपती बाप्पा"
                  className="w-56 object-contain"
                />
                <h3 className="text-red-700 font-bold text-lg mt-3">
                  महाप्रसाद कार्यक्रम उत्साह
                </h3>
                <p className="text-gray-800 text-base mt-1">
                  गुरुवार, <span className="font-semibold">०४/०९/२०२४</span>
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  कार्यक्रमाची सुरुवात:{" "}
                  <span className="font-semibold">१०:०० सकाळी</span>
                </p>
              </div>

              {/* Right - Details */}
              <div className="flex flex-col justify-center space-y-4 text-sm leading-relaxed">
                <p>
                  आपल्या प्रिय गणपती बाप्पा यांच्या चरणी सस्नेह वंदन. या वर्षी{" "}
                  <strong>उंबरकर टेक्नॉलॉजी प्रा. लि.</strong> मध्ये आयोजित{" "}
                  <strong>श्री गणेश उत्सव व वेबसाइट उद्घाटन सोहळ्यासाठी</strong>{" "}
                  आपणास व आपल्या मान्यवर पाहुण्यांना सप्रेम आमंत्रण.
                </p>

                <p>
                  कार्यक्रमात आपले स्वागत करताना आम्हाला अत्यंत आनंद होत आहे. या शुभ
                  प्रसंगी आपण उपस्थित राहून सोहळ्याचे सौंदर्य आणि महत्त्व वाढवावे,
                  ही नम्र विनंती.
                </p>

                <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-red-500 text-sm leading-snug">
                  <p>
                    <strong>स्थळ:</strong> उंबरकर टेक्नॉलॉजी प्रा. लि., ऑफिस क्र. ०२,
                    १५, झिरोबॉईज चौक, नेहरू नगर, पिंपरी-चिंचवड, पुणे - ४११०१८
                  </p>
                  <p>
                    <strong>दिनांक:</strong> ०४/०९/२०२४
                  </p>
                  <p>
                    <strong>वेळ:</strong> १०:०० सकाळी
                  </p>
                  <p className="mt-1 text-red-700 font-semibold">
                    आमच्या वेबसाइट उद्घाटनासाठी मान्यवर पाहुण्यांचे विशेष आमंत्रण
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    ),
  }


];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="overflow-hidden border-b-2"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f5f9ff, #f0fdfa)", // Top white, bottom gradient
      }}
    >
      <div className="max-w-6xl mx-auto p-3 sm:p-6">
        {/* Slide Container */}
        <div className="relative min-h-[140px] sm:min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots (Indicators) */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center mt-6 sm:space-x-3 space-x-2.5 border bg-muted sm:p-1 sm:px-2 px-1 py-0.5 rounded w-fit">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`sm:w-2 sm:h-2 w-1 h-1 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                  ? "bg-primary scale-110"
                  : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
