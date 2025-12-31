import { useState } from "react";
import { GiOpenTreasureChest } from "react-icons/gi";
import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "../../../custom/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IoIosArrowBack } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BussinessLoanapply } from "@/machine/Loans";

const employmentOptions = [
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
  { label: "Below ₹2 Lacs", value: "below_2_lacs" },
  { label: "₹2 - ₹5 Lacs", value: "2_5_lacs" },
  { label: "₹5 - ₹10 Lacs", value: "5_10_lacs" },
  { label: "₹10 - ₹20 Lacs", value: "10_20_lacs" },
  { label: "Above ₹20 Lacs", value: "above_20_lacs" },
];

const incomeRanges = [
  { label: "Below ₹5 Lacs", value: "below_5_lacs", min: 0, max: 500000 },
  {
    label: "₹5 Lacs - ₹10 Lacs",
    value: "5_10_lacs",
    min: 500000,
    max: 1000000,
  },
  {
    label: "₹10 Lacs - ₹25 Lacs",
    value: "10_25_lacs",
    min: 1000000,
    max: 2500000,
  },
  {
    label: "₹25 Lacs - ₹50 Lacs",
    value: "25_50_lacs",
    min: 2500000,
    max: 5000000,
  },
  {
    label: "₹50 Lacs - ₹75 Lacs",
    value: "50_75_lacs",
    min: 5000000,
    max: 7500000,
  },
  { label: "₹75 Lacs - ₹1 Cr", value: "75l_1cr", min: 7500000, max: 10000000 },
  { label: "Over ₹1 Cr", value: "over_1cr", min: 10000000, max: Infinity },
];

const cities = [
  { label: "Delhi", value: "delhi" },
  { label: "Mumbai", value: "mumbai" },
  { label: "Pune", value: "pune" },
  { label: "Chennai", value: "chennai" },
  { label: "Bengaluru", value: "bengaluru" },
  { label: "Hyderabad", value: "hyderabad" },
  { label: "Kolkata", value: "kolkata" },
  { label: "Ahmedabad", value: "ahmedabad" },
];

export const experienceRanges = [
  { label: "Under 1 year", value: "under_1" },
  { label: "1 - 2 years", value: "1_2" },
  { label: "2 - 3 years", value: "2_3" },
  { label: "3 - 5 years", value: "3_5" },
  { label: "Over 5 years", value: "over_5" },
];

export const professionOptions = [
  { label: "Doctor", value: "doctor" },
  { label: "Chartered Accountant", value: "chartered_accountant" },
  { label: "Others", value: "others" },
];

export default function BusinessLoanApply() {
  const [openDialog, setOpenDialog] = useState(false);

  const [formData, setFormData] = useState({
    employmentType: "",
    desiredLoanAmount: "",
    annualTurnOver: "",
    bussinessCity: "",
    bussinessYearExprience: "",
    profession: "",
  });

  const [errors, setErrors] = useState({
    employmentType: "",
    desiredLoanAmount: "",
    annualTurnOver: "",
    bussinessCity: "",
    bussinessYearExprience: "",
    profession: "",
  });

  const [step, setStep] = useState(1);

  const handleEmploymentSelect = (value) => {
    setFormData((prev) => ({ ...prev, employmentType: value }));
    setErrors((prev) => ({ ...prev, employmentType: "" }));
    setStep(2);
  };

  const handleDesiredLoanAmount = (value) => {
    setFormData((prev) => ({ ...prev, desiredLoanAmount: value }));
    setErrors((prev) => ({ ...prev, desiredLoanAmount: "" }));
    setStep(3);
  };

  const handleAnnualTurnOver = (value) => {
    setFormData((prev) => ({ ...prev, annualTurnOver: value }));
    setErrors((prev) => ({ ...prev, annualTurnOver: "" }));
    setStep(4);
  };

  const handleBussinessCity = (value) => {
    setFormData((prev) => ({ ...prev, bussinessCity: value }));
    setErrors((prev) => ({ ...prev, bussinessCity: "" }));
    setStep(5);
  };

  const handleBussinessYearExprience = (value) => {
    setFormData({ ...formData, bussinessYearExprience: value });
    setErrors({ ...errors, bussinessYearExprience: "" });
    if (formData?.employmentType === "professional") {
      setStep(6);
    }
  };

  const handleBussinessprofession = (value) => {
    setFormData({ ...formData, bussinessYearExprience: value });
    setErrors({ ...errors, bussinessYearExprience: "" });
    if (formData?.employmentType === "professional") {
      setStep(6);
    }
  };
  const handlesubmit = async () => {
    const res = await BussinessLoanapply(formData);
    console.log(res);
  };
  console.log("Bussiness_formdata", formData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:h-screen sm:overflow-y-hidden">
      <div className="bg-[#CAD7FE] sm:p-8 p-6 relative">
        <img
          loading="lazy"
          src="/logo.png"
          alt="logo"
          className="sm:w-64 w-56"
        />
        <div className="max-w-lg mx-auto sm:mt-10 mt-4 relative">
          <TypographyH3 className="text-[#090a62]">Bussiness Loan</TypographyH3>
          <TypographyMuted className="mt-8 text-blue-900 leading-7">
            Every business needs capital to grow and at Financesbazar, we ensure
            you get the best of what you need. Whether you are launching or
            expanding your business, we pledge to give you best business loan
            offers.
          </TypographyMuted>
        </div>
        <div className="hidden sm:block absolute">
          <img
            loading="lazy"
            src="/assets/bussiness-loan.svg"
            alt="personal-loan"
            className="w-full"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-xl mx-auto w-full px-4 relative overflow-hidden">
        {/* Employment Type Step */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="shadow-none border-none sm:mt-24">
                <CardHeader>
                  <CardDescription className="text-xs flex items-center gap-4">
                    <GiOpenTreasureChest size={32} />
                    BUSSINESS LOAN
                  </CardDescription>
                  <CardTitle className="text-lg text-blue-800 mt-8">
                    Employment Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:gap-6">
                    {employmentOptions?.map((item) => (
                      <div
                        key={item?.value}
                        className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                          formData.employmentType === item?.value
                            ? "border-blue-700 bg-blue-50"
                            : ""
                        }`}
                        onClick={() => handleEmploymentSelect(item?.value)}
                      >
                        <div className="grid gap-1">
                          <Label className="text-blue-800">{item?.label}</Label>
                          <TypographyMuted className="text-xs">
                            {item?.description}
                          </TypographyMuted>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border ${
                            formData.employmentType === item?.value
                              ? "bg-blue-700 border-blue-700"
                              : "border-black"
                          }`}
                        />
                      </div>
                    ))}
                    {errors.employmentType && (
                      <p className="text-red-500 text-sm">
                        {errors.employmentType}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
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
              <Card className="shadow-none border-none sm:mt-16">
                <CardHeader>
                  <CardDescription
                    onClick={() => setStep(1)}
                    className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                  >
                    <IoIosArrowBack />
                  </CardDescription>
                  <CardTitle className="text-lg text-blue-800 mt-8">
                    Desired Loan Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:gap-6">
                    {incomeOptions?.map((option, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                          formData.desiredLoanAmount === option?.value
                            ? "border-blue-700 bg-blue-50"
                            : ""
                        }`}
                        onClick={() => handleDesiredLoanAmount(option?.value)}
                      >
                        <div className="grid gap-1">
                          <Label className="text-blue-800">
                            {option?.label}
                          </Label>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border ${
                            formData.desiredLoanAmount === option?.value
                              ? "bg-blue-700 border-blue-700"
                              : "border-black"
                          }`}
                        />
                      </div>
                    ))}
                    {errors.desiredLoanAmount && (
                      <p className="text-red-500 text-sm">
                        {errors.desiredLoanAmount}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
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
              <Card className="shadow-none border-none sm:mt-8">
                <CardHeader>
                  <CardDescription
                    onClick={() => setStep(2)}
                    className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                  >
                    <IoIosArrowBack />
                  </CardDescription>
                  <CardTitle className="text-lg text-blue-800 mt-8">
                    Gross Annual Turnover?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:gap-6">
                    {incomeRanges?.map((option, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                          formData.annualTurnOver === option?.value
                            ? "border-blue-700 bg-blue-50"
                            : ""
                        }`}
                        onClick={() => handleAnnualTurnOver(option?.value)}
                      >
                        <div className="grid gap-1">
                          <Label className="text-blue-800">
                            {option?.label}
                          </Label>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border ${
                            formData.annualTurnOver === option?.value
                              ? "bg-blue-700 border-blue-700"
                              : "border-black"
                          }`}
                        />
                      </div>
                    ))}
                    {errors.annualTurnOver && (
                      <p className="text-red-500 text-sm">
                        {errors.annualTurnOver}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="shadow-none border-none sm:mt-16">
                <CardHeader>
                  <CardDescription
                    onClick={() => setStep(3)}
                    className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                  >
                    <IoIosArrowBack />
                  </CardDescription>
                  <CardTitle className="text-lg text-blue-800 mt-8">
                    Current Business City
                  </CardTitle>
                </CardHeader>
                <CardContent className="overflow-y-auto max-h-[80vh] pb-12">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {cities?.map((city, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                          formData.bussinessCity === city?.value
                            ? "border-blue-700 bg-blue-50"
                            : ""
                        }`}
                        onClick={() => handleBussinessCity(city?.value)}
                      >
                        <TypographySmall className="text-[10px]">
                          {city?.label}
                        </TypographySmall>
                        <div
                          className={`w-5 h-5 rounded-full border ${
                            formData.bussinessCity === city?.value
                              ? "bg-blue-700 border-blue-700"
                              : "border-black"
                          }`}
                        />
                      </div>
                    ))}
                    {errors.bussinessCity && (
                      <p className="text-red-500 text-sm">
                        {errors.bussinessCity}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="shadow-none border-none sm:mt-10">
                <CardHeader>
                  <CardDescription
                    onClick={() => setStep(4)}
                    className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                  >
                    <IoIosArrowBack />
                  </CardDescription>
                  <CardTitle className="text-lg text-blue-800 mt-8">
                    Years in Current{" "}
                    {formData?.employmentType === "professional"
                      ? "Profession"
                      : "Business"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:gap-6">
                    {experienceRanges?.map((option, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                          formData.bussinessYearExprience === option?.value
                            ? "border-blue-700 bg-blue-50"
                            : ""
                        }`}
                        onClick={() =>
                          handleBussinessYearExprience(option?.value)
                        }
                      >
                        <div className="grid gap-1">
                          <Label className="text-blue-800">
                            {option?.label}
                          </Label>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border ${
                            formData.bussinessYearExprience === option?.value
                              ? "bg-blue-700 border-blue-700"
                              : "border-black"
                          }`}
                        />
                      </div>
                    ))}
                    {formData?.employmentType === "business" && (
                      <Button
                        disabled={!formData?.bussinessYearExprience}
                        onClick={handlesubmit}
                        className="w-full cursor-pointer"
                      >
                        Submit
                      </Button>
                    )}
                    {errors.bussinessYearExprience && (
                      <p className="text-red-500 text-sm">
                        {errors.bussinessYearExprience}
                      </p>
                    )}
                  </div>
                </CardContent>

                {/* {
                                        formData?.employmentType === "business" && <CardFooter>
                                            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                                                <DialogTrigger asChild>
                                                    <Button disabled={!formData?.bussinessYearExprience} type='submit' className="w-full cursor-pointer">
                                                        Continue
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-center">Verify Mobile Number</DialogTitle>
                                                        <DialogDescription className="bg-gray-200 rounded-md py-2 mt-2 text-center">
                                                            OTP sent on Mobile Number +91-9673170912
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="grid gap-4 mt-6">
                                                        <input
                                                            id="otp"
                                                            placeholder='Enter OTP received on your phone'
                                                            className="border-b pb-3 border-primary focus:outline-none"
                                                            maxLength={4}
                                                        />
                                                        <p className='text-red-800 text-xs text-center'>Invalid OTP</p>
                                                    </div>
                                                    <DialogFooter>
                                                        <Button
                                                            type="button"
                                                            className="w-full cursor-pointer"
                                                        >
                                                            Verify & Login
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </CardFooter>
                                    } */}
              </Card>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="shadow-none border-none sm:mt-24">
                <CardHeader>
                  <CardDescription
                    onClick={() => setStep(5)}
                    className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                  >
                    <IoIosArrowBack />
                  </CardDescription>
                  <CardTitle className="text-lg text-blue-800 mt-8">
                    Years in Current{" "}
                    {formData?.employmentType === "professional"
                      ? "Profession"
                      : "Business"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:gap-6">
                    {professionOptions.map((option, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${
                          formData.profession === option.value
                            ? "border-blue-700 bg-blue-50"
                            : ""
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, profession: option.value })
                        }
                      >
                        <div className="grid gap-1">
                          <Label className="text-blue-800">
                            {option.label}
                          </Label>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border ${
                            formData.profession === option.value
                              ? "bg-blue-700 border-blue-700"
                              : "border-black"
                          }`}
                        />
                      </div>
                    ))}
                    {/* Thid button is just for teasting its here or not is decide on actual production */}
                    <Button
                      disabled={!formData.profession}
                      onClick={handlesubmit}
                      className="w-full cursor-pointer"
                    >
                      Submit
                    </Button>
                    {errors.profession && (
                      <p className="text-red-500 text-sm">
                        {errors.profession}
                      </p>
                    )}
                  </div>
                </CardContent>
                {/* {
                                        formData?.employmentType === "professional" && <CardFooter>
                                            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                                                <DialogTrigger asChild>
                                                    <Button disabled={!formData.profession} type='submit' className="w-full cursor-pointer">
                                                        Continue
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-center">Verify Mobile Number</DialogTitle>
                                                        <DialogDescription className="bg-gray-200 rounded-md py-2 mt-2 text-center">
                                                            OTP sent on Mobile Number +91-9673170912
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="grid gap-4 mt-6">
                                                        <input
                                                            id="otp"
                                                            placeholder='Enter OTP received on your phone'
                                                            className="border-b pb-3 border-primary focus:outline-none"
                                                            maxLength={4}
                                                        />
                                                        <p className='text-red-800 text-xs text-center'>Invalid OTP</p>
                                                    </div>
                                                    <DialogFooter>
                                                        <Button
                                                            type="button"
                                                            className="w-full cursor-pointer"
                                                        >
                                                            Verify & Login
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </CardFooter>
                                    } */}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
