import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ToggleSection } from "@/custom/ToggleSection";
import {
  BoldList,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyMuted,
} from "@/custom/Typography";

export const CAHerosection = ({ heading1, heading2, heroimg, intro }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
      <div className="bg-white h-full">
        <TypographyH1 className="text-accent tracking-normal mb-2">
          {heading1}
        </TypographyH1>
        <TypographyH3 className="font-bold text-blue-950 mb-4 capitalize">
          {heading2}
        </TypographyH3>
        <TypographyMuted className="text-sm sm:text-base leading-relaxed">
          {intro}
        </TypographyMuted>
      </div>

      <div className="flex justify-center">
        <img
          loading="lazy"
          src={heroimg}
          alt="Filing Illustration"
          className="h-72 sm:h-96 object-contain"
        />
      </div>

      <div className="w-full max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="bg-primary/95 text-white text-center py-6">
          <h3 className="text-lg sm:text-xl font-semibold">
            Start With Confidence
          </h3>
          <p className="text-sm mt-1">CA/CS Assisted | 4.8/5 Rating</p>
        </div>

        <div className="bg-white px-6 py-6 space-y-4">
          <div className="grid gap-2">
            <Label>Name</Label>
            <Input type="text" placeholder="Name" />
          </div>
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="grid gap-2">
            <Label>Mobile</Label>
            <Input type="tel" placeholder="Phone" />
          </div>
          <Button className="w-full text-sm sm:text-base py-2 sm:py-3">
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Packages = ({ packages, heading1, heading2 }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8 bg-gray-50">
      {packages.length > 0 &&
        packages?.map((pkg, index) => (
          <div
            key={index}
            className="w-full sm:w-80 rounded-lg overflow-hidden shadow border border-gray-200 bg-white"
          >
            <div className="bg-primary text-white text-center py-6 px-4">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <hr className="border-white border-t-1 w-10 mx-auto my-3" />
              <p className="text-3xl font-bold text-orange-500">
                ₹ {pkg.price}/-
              </p>
              <p className="text-sm mt-1">(All Inclusive)</p>
            </div>

            <div className="p-6 text-sm space-y-8">
              <ul className="list-disc pl-6 sm:pl-8 text-gray-800 space-y-1">
                {pkg?.desc?.length > 0 &&
                  pkg?.desc?.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
              </ul>
              <div className="text-blue-900 font-medium flex justify-center gap-2 text-sm">
                <span>Easy EMI's</span> | <span>Transparent Pricing</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export const Customcard = ({ title, content }) => {
  return (
    <Card className="p-4 h-70 border border-blue-500 w-70 mx-auto md:mx-0 grid gap-2 text-center md:text-left shadow-2xl">
      <TypographyH3 className="mt-1 text-blue-950">{title}</TypographyH3>
      <div className="w-20 h-[2px] bg-accent my-3" />

      <div className="overflow-y-auto max-h-full scrollbar-hide">
        <TypographyMuted className="text-sm">{content}</TypographyMuted>
      </div>
    </Card>
  );
};

export const Steps = ({ heading1, steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps?.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="my-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        {heading1}
      </h2>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Connector Line (Visible on all devices now) */}
        <div className="absolute top-[50px] left-[10%] right-[10%] h-1 bg-gray-300 z-0" />

        {steps.length > 0 &&
          steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center w-full md:basis-1/5 z-10"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                  step.color
                }
                flex items-center justify-center text-white text-xl font-bold shadow-lg z-10
                ${
                  idx === activeStep
                    ? "ring-4 ring-white scale-110"
                    : "opacity-70"
                }
                transition-all duration-500`}
              >
                {idx <= activeStep ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  idx + 1
                )}
              </motion.div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`mt-4 transition-all duration-500 ${
                  idx === activeStep ? "shadow-xl z-20" : "opacity-90"
                }`}
              >
                <Card className="p-4 h-40 w-full grid gap-2 text-center md:text-left overflow-hidden">
                  <div className="overflow-y-auto max-h-full scrollbar-hide">
                    <TypographyH4>{step.title}</TypographyH4>
                    <TypographyMuted className="text-sm">
                      {step.desc}
                    </TypographyMuted>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const Stepscard = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 my-6">
      {cards?.length > 0 &&
        cards?.map((card, index) => (
          <Card key={index} className="shadow-2xl">
            <TypographyH3 className=" bg-primary py-4 rounded-t-md px-2 text-center text-primary-foreground">
              {card.title}
            </TypographyH3>

            <div className="px-4 mb-6 max-w-full flex flex-col items-center justify-center text-center">
              <div className="my-6">{card.icon}</div>
              <div className="max-h-40 overflow-auto scrollbar-hide mx-auto">
                <p className="text-left">{card.text}</p>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export const Faqs = ({ heading1, heading2, toggleoptions }) => {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center max-w-6xl w-full px-4 mx-auto my-10">
      <TypographyH3 className="text-primary font-bold p-4 text-center">
        {heading1}
      </TypographyH3>
      <div className="w-20 h-[2px] bg-blue-800 my-2" />

      <TypographyH4 className="text-primary tracking-normal font-bold text-center">
        {heading2}
      </TypographyH4>

      <div className="w-full space-y-4 mt-6">
        {toggleoptions?.length > 0 &&
          toggleoptions?.map((options, indx) => (
            <div key={options.id} className="w-full">
              <ToggleSection
                title={options.title}
                sectionKey={options.sectionKey}
                currentOpen={openSection}
                setOpenSection={setOpenSection}
                id={options.id}
              >
                <p className="p-5 text-sm sm:text-base leading-relaxed text-gray-700">
                  {options.content}
                </p>
              </ToggleSection>
            </div>
          ))}
      </div>
    </div>
  );
};

export const RequiredDocuments = ({ requiredDocuments }) => {
  return (
    <div className="flex items-center gap-4 justify-center px-4">
      {requiredDocuments?.length > 0 &&
        requiredDocuments.map((info, index) => (
          <div key={index} className="flex justify-center">
            <Card className="shadow-xl p-5 w-full max-w-md flex flex-col items-center justify-center gap-4">
              <TypographyH3 className="text-blue-950 text-lg sm:text-xl text-center">
                {info?.title}
              </TypographyH3>
              <ol
                className="list-disc list-outside max-h-70 overflow-auto scrollbar-hide
 pl-5 space-y-3 text-gray-800 text-sm sm:text-base"
              >
                {info?.options?.length > 0 &&
                  info.options.map((option, indx) => (
                    <li key={indx}>{option}</li>
                  ))}
              </ol>
            </Card>
          </div>
        ))}
    </div>
  );
};
