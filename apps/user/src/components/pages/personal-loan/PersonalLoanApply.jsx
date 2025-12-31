import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TypographyH3,
  TypographySmall,
  TypographyMuted,
} from "@/custom/Typography";
import { IoCheckmark } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { StepCard, InputField, SelectDropDownMenu } from "@/custom/Fields";
import { useContextFile } from "@/context/contextFile";
import { personalLoanapply } from "@/machine/Loans";

const featureList = [
  "Hand-picked offers from 30+ lenders",
  "Money in mins via Pre-Approved loans",
  "Instant sanction and disbursal",
  "Contact-less processes",
];

export const employmentOptions = [
  {
    label: "Salaried",
    description: "Received Fixed Amount of the income every month",
    value: "salaried",
  },
  {
    label: "Self-Employed Business",
    description: "Run a business",
    value: "business",
  },
  {
    label: "Self-Employed Professional",
    description: "Engage in a profession Eg. Doctor, CA, Lawyer, etc",
    value: "professional",
  },
];

const incomeOptions = [
  { label: "Upto ₹3 Lacs", value: "upto_3" },
  { label: "₹3 - ₹4 Lacs", value: "3_to_4" },
  { label: "₹4 - ₹5 Lacs", value: "4_to_5" },
  { label: "₹5 - ₹10 Lacs", value: "5_to_10" },
  { label: "₹10 Lacs +", value: "10_plus" },
];

export const bankOptions = [
  { label: "State Bank of India", logo: "/assets/banks/sbi.png" },
  { label: "Punjab National Bank", logo: "/assets/banks/pnb.png" },
  { label: "Bank of Baroda", logo: "/assets/banks/bob.png" },
  { label: "Canara Bank", logo: "/assets/banks/canara.png" },
  { label: "Union Bank of India", logo: "/assets/banks/union.png" },
  { label: "Bank of India", logo: "/assets/banks/boi.png" },
  { label: "Indian Bank", logo: "/assets/banks/indian.png" },
  { label: "Central Bank of India", logo: "/assets/banks/cbi.png" },
  { label: "Indian Overseas Bank", logo: "/assets/banks/iob.png" },
  { label: "UCO Bank", logo: "/assets/banks/uco.png" },
  { label: "Bank of Maharashtra", logo: "/assets/banks/bom.png" },
  { label: "Punjab & Sind Bank", logo: "/assets/banks/psb.png" },
  { label: "HDFC Bank", logo: "/assets/banks/hdfc.png" },
  { label: "ICICI Bank", logo: "/assets/banks/icici.png" },
  { label: "Axis Bank", logo: "/assets/banks/axis.png" },
  { label: "Kotak Mahindra Bank", logo: "/assets/banks/kotak.png" },
  { label: "IndusInd Bank", logo: "/assets/banks/indusind.png" },
  { label: "Yes Bank", logo: "/assets/banks/yes.png" },
  { label: "IDFC First Bank", logo: "/assets/banks/idfc.png" },
  { label: "IDBI Bank", logo: "/assets/banks/idbi.png" },
  { label: "Federal Bank", logo: "/assets/banks/federal.png" },
  { label: "RBL Bank", logo: "/assets/banks/rbl.png" },
  { label: "Bandhan Bank", logo: "/assets/banks/bandhan.png" },
  { label: "South Indian Bank", logo: "/assets/banks/southindian.png" },
  { label: "Karur Vysya Bank", logo: "/assets/banks/karurvysya.png" },
  { label: "Karnataka Bank", logo: "/assets/banks/karnataka.png" },
  { label: "City Union Bank", logo: "/assets/banks/cityunion.png" },
  { label: "Dhanlaxmi Bank", logo: "/assets/banks/dhanlaxmi.png" },
  { label: "DCB Bank", logo: "/assets/banks/dcb.png" },
  { label: "CSB Bank", logo: "/assets/banks/csb.png" },
  { label: "Tamilnad Mercantile Bank", logo: "/assets/banks/tmb.png" },
  { label: "Jammu & Kashmir Bank", logo: "/assets/banks/jkbank.png" },
  { label: "Nainital Bank", logo: "/assets/banks/nainital.png" },
  { label: "Laxmi Vilas Bank", logo: "/assets/banks/lvb.png" },
  { label: "Catholic Syrian Bank", logo: "/assets/banks/csb.png" },
  { label: "Shamrao Vithal Co-operative Bank", logo: "/assets/banks/svc.png" },
  { label: "Saraswat Bank", logo: "/assets/banks/saraswat.png" },
  { label: "Abhyudaya Co-operative Bank", logo: "/assets/banks/abhyudaya.png" },
  { label: "Bharatiya Mahila Bank", logo: "/assets/banks/bmb.png" },
  { label: "Andhra Bank", logo: "/assets/banks/andhra.png" },
  { label: "Allahabad Bank", logo: "/assets/banks/allahabad.png" },
  { label: "Corporation Bank", logo: "/assets/banks/corporation.png" },
  { label: "Oriental Bank of Commerce", logo: "/assets/banks/obc.png" },
  { label: "Syndicate Bank", logo: "/assets/banks/syndicate.png" },
  { label: "Vijaya Bank", logo: "/assets/banks/vijaya.png" },
  { label: "Dena Bank", logo: "/assets/banks/dena.png" },
  { label: "United Bank of India", logo: "/assets/banks/ubi.png" },
  { label: "State Bank of Mysore", logo: "/assets/banks/sbm.png" },
  { label: "State Bank of Patiala", logo: "/assets/banks/sbp.png" },
  { label: "State Bank of Bikaner & Jaipur", logo: "/assets/banks/sbbj.png" },
  { label: "State Bank of Hyderabad", logo: "/assets/banks/sbh.png" },
  { label: "State Bank of Travancore", logo: "/assets/banks/sbt.png" },
];

export default function PersonalLoanApply() {
  const { user } = useContextFile();
  const [formData, setFormData] = useState({
    employmentType: "",
    incomeRange: "",
    primaryBank: "",
    companyName: "",
    residenceCity: "",
    annualIncome: "",
    loanAmount: "",
    currentEMI: "",
    userId: user?._id,
    mobile: user?.mobile,
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    if (step <= 2) {
      setStep((prev) => prev + 1);
    }
  };

  const validateStep5 = () => {
    const newErrors = {};
    if (!formData.companyName)
      newErrors.companyName = "Company name is required.";
    if (!formData.residenceCity)
      newErrors.residenceCity = "Residence city is required.";
    if (!formData.annualIncome || isNaN(formData.annualIncome))
      newErrors.annualIncome = "Valid annual income is required.";
    if (!formData.loanAmount || isNaN(formData.loanAmount))
      newErrors.loanAmount = "Valid loan amount is required.";
    if (!formData.currentEMI || isNaN(formData.currentEMI))
      newErrors.currentEMI = "Valid EMI amount is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateStep5()) {
      const res = await personalLoanapply(formData);
      console.log(res);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 w-full sm:h-screen sm:overflow-y-hidden">
      {/* Left Section */}
      <div className="bg-[#CAD7FE] sm:p-8 p-6 relative">
        <img loading="lazy" src="/logo.png" alt="logo" className="w-42" />
        <div className="max-w-lg mx-auto sm:mt-10 mt-4 relative">
          <div>
            <TypographyH3 className="text-[#1b1dc7]">
              Personal Loan
            </TypographyH3>
            <div className="grid sm:gap-6 gap-3 mt-8">
              {featureList?.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="sm:w-6 sm:h-6 w-5 h-5 rounded-full shadow bg-secondary flex justify-center items-center">
                    <IoCheckmark />
                  </div>
                  <TypographySmall>{item}</TypographySmall>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* <  loading="lazy" src="/assets/personal-loan.gif" className="w-48"></  loading="lazy"> */}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-xl mx-auto w-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StepCard title="Employment Type">
                <div className="grid gap-4">
                  {employmentOptions?.map((option, idx) => (
                    <div
                      key={idx}
                      className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                        formData?.employmentType === option?.value
                          ? "border-blue-700 bg-blue-50"
                          : ""
                      }`}
                      onClick={() =>
                        handleInputChange("employmentType", option?.value)
                      }
                    >
                      <div className="grid gap-1">
                        <Label className="text-blue-800">{option?.label}</Label>
                        <TypographyMuted className="text-xs">
                          {option?.description}
                        </TypographyMuted>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border ${
                          formData?.employmentType === option?.value
                            ? "bg-blue-700 border-blue-700"
                            : "border-black"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </StepCard>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StepCard title="Income Range" onBack={() => setStep(1)}>
                <div className="grid gap-4">
                  {incomeOptions?.map((option, idx) => (
                    <div
                      key={idx}
                      className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                        formData.incomeRange === option.value
                          ? "border-blue-700 bg-blue-50"
                          : ""
                      }`}
                      onClick={() =>
                        handleInputChange("incomeRange", option?.value)
                      }
                    >
                      <Label className="text-blue-800">{option?.label}</Label>
                      <div
                        className={`w-5 h-5 rounded-full border ${
                          formData?.incomeRange === option?.value
                            ? "bg-blue-700 border-blue-700"
                            : "border-black"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </StepCard>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StepCard title="Additional Details" onBack={() => setStep(2)}>
                <div className="grid gap-8">
                  <SelectDropDownMenu
                    items={bankOptions}
                    value={formData?.primaryBank}
                    onChange={(e) =>
                      handleInputChange("primaryBank", e.target.value)
                    }
                    placeholder="Select Your Bank"
                  />
                  <InputField
                    label="Current Company"
                    placeholder="Enter your current company"
                    value={formData?.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    error={errors.companyName}
                  />
                  <InputField
                    label="Residence City"
                    placeholder="Enter your residence city"
                    value={formData?.residenceCity}
                    onChange={(e) =>
                      handleInputChange("residenceCity", e.target.value)
                    }
                    error={errors?.residenceCity}
                  />
                  <InputField
                    label="Gross Annual Income"
                    placeholder="Enter your gross annual income"
                    value={formData?.annualIncome}
                    onChange={(e) =>
                      handleInputChange("annualIncome", e.target.value)
                    }
                    error={errors?.annualIncome}
                  />
                  <InputField
                    label="Desired Loan Amount"
                    placeholder="Enter your desired loan amount"
                    value={formData?.loanAmount}
                    onChange={(e) =>
                      handleInputChange("loanAmount", e.target.value)
                    }
                    error={errors?.loanAmount}
                  />
                  <InputField
                    label="Total EMI You Pay Currently"
                    placeholder="Enter your current EMI"
                    value={formData?.currentEMI}
                    onChange={(e) =>
                      handleInputChange("currentEMI", e.target.value)
                    }
                    error={errors?.currentEMI}
                  />
                </div>
                <Button className="mt-4 w-full" onClick={handleSubmit}>
                  Submit
                </Button>
              </StepCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
