import { useEffect, useState } from "react";
import { TypographyH3 } from "@/custom/Typography";
import { RightContainer } from '@/components/ui/RightContainer';
import { InputField } from '@/custom/Fields';
import { Button } from '@/components/ui/button';
import { generateOTP } from "@/lib/utils";
import OtpDialog from '@/custom/OtpDialog';
import { IoMdArrowBack } from "react-icons/io";
import { bankOptions, employmentOptions } from "../personal-loan/PersonalLoanApply";
import LoanAgainstDecription from "./LoanAgainstDecription";

const homeLoanBenefits = [
    "Low EMIs", "Immediate Funds Availability", "Fast and Easy Loan Processing",
    "Speedy Approvals", "Flexible Tenure", "Simple and Hassle Free Documentation",
    "Easy Balance Transferring"
];

const loanAmountOptions = [
    { label: "Upto 15 Lacs", value: "upto_15_lacs" },
    { label: "15 Lacs - 20 Lacs", value: "15_to_20_lacs" },
    { label: "20 Lacs - 30 Lacs", value: "20_to_30_lacs" },
    { label: "30 Lacs - 50 Lacs", value: "30_to_50_lacs" },
    { label: "50 Lacs - 75 Lacs", value: "50_to_75_lacs" },
    { label: "75 Lacs+", value: "75_lacs_plus" }
];

const propertyTypes = [
    { label: "Residential Property", value: "residential_property" },
    { label: "Commercial Property", value: "commercial_property" },
    { label: "Industrial Property", value: "industrial_property" },
    { label: "Agricultural Land", value: "agricultural_land" },
    { label: "Farm House", value: "farm_house" },
    { label: "Plot/Land", value: "plot_land" },
    { label: "Mixed Use Property", value: "mixed_use_property" },
    { label: "Warehouse", value: "warehouse" },
    { label: "Retail Shop", value: "retail_shop" },
    { label: "Office Space", value: "office_space" },
    { label: "Factory", value: "factory" },
    { label: "Godown", value: "godown" },
    { label: "Institutional Property", value: "institutional_property" },
    { label: "Heritage Property", value: "heritage_property" },
    { label: "Leasehold Property", value: "leasehold_property" },
    { label: "Freehold Property", value: "freehold_property" },
    { label: "Other", value: "other" },
];

export default function LoanAgainstProperty() {
    const [currentPanel, setCurrentPanel] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        email: '',
        pan: '',
        mobile: '',
        gender: '',
        reqiredLoanAmount: 'upto_15_lacs',
        propertyCity: '',
        pinCode: '',
        netMontlyIncome: '',
        employmentType: '',
        bankAccount: '',
        propertyValue: '',
        propertyType: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedData = sessionStorage.getItem("loan-against-property");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (parsedData?.formData) {
                setFormData(parsedData.formData);
                setCurrentPanel(2);
            }
        }
    }, []);

    const validateFields = (fields) => {
        const newErrors = {};
        fields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = `Please select your ${field} is required.`;
            } else if (field === "dob" && !/^\d{2}-\d{2}-\d{2}$/.test(formData.dob)) {
                newErrors.dob = "Date of Birth must be in DD-MM-YY format.";
            } else if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = "Invalid email address.";
            } else if (field === "pan" && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
                newErrors.pan = "Invalid PAN format (e.g., ABCDE1234F).";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === "dob") {
            // Format DOB as DD-MM-YY
            formattedValue = value.replace(/[^0-9]/g, "").slice(0, 6);
            if (formattedValue.length > 2) formattedValue = `${formattedValue.slice(0, 2)}-${formattedValue.slice(2)}`;
            if (formattedValue.length > 5) formattedValue = `${formattedValue.slice(0, 5)}-${formattedValue.slice(5)}`;
        } else if (name === "pan") {
            // Convert PAN to uppercase
            formattedValue = value.toUpperCase();
        } else if (name === "pinCode") {
            // Allow only numbers and limit to 6 characters
            formattedValue = value.replace(/[^0-9]/g, "").slice(0, 6);
        }

        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleProceed = () => {
        if (validateFields(['mobile', 'reqiredLoanAmount', 'propertyCity'])) {
            setOpenDialog(true);
            generateOTP();
        }
    };

    const handleContinue = () => {
        if (currentPanel === 2 && validateFields(['fullName', 'dob', 'email', 'pan'])) {
            setCurrentPanel(3);
        } else if (currentPanel === 3 && validateFields(['pinCode', 'netMontlyIncome', 'employmentType', 'bankAccount', 'propertyValue', 'propertyType'])) {
            console.log(formData);
        }
    };

    const panels = {
        1: (
            <>
                <div className="grid gap-2">
                    <TypographyH3 className="uppercase font-extrabold tracking-wide text-blue-950">
                        Loan Against Property
                    </TypographyH3>
                    <div className="sm:w-22 w-10 h-0.5 bg-accent"></div>
                </div>
                <InputField
                    label="Mobile Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your Mobile Number"
                    error={errors.mobile}
                />
                <InputField
                    label="Required Loan Amount"
                    name="reqiredLoanAmount"
                    value={formData.reqiredLoanAmount}
                    onChange={handleChange}
                    type="select"
                    options={loanAmountOptions}
                    error={errors.reqiredLoanAmount}
                />
                <InputField
                    label="Property City"
                    name="propertyCity"
                    value={formData.propertyCity}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Property City"
                    error={errors.propertyCity}
                />
                <Button onClick={handleProceed}>Proceed</Button>
            </>
        ),
        2: (
            <>
                <InputField
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="As per PAN card"
                    error={errors.fullName}
                />
                <InputField
                    label="Date of Birth"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    type="text"
                    placeholder="DD-MM-YY"
                    error={errors.dob}
                />
                <InputField
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    error={errors.email}
                />
                <InputField
                    label="PAN Number"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    type="text"
                    placeholder="ABCDE1234F"
                    error={errors.pan}
                />
                <Button onClick={handleContinue}>Continue</Button>
            </>
        ),
        3: (
            <>
                <InputField
                    label="Property Pincode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Pincode"
                    error={errors.pinCode}
                />
                <InputField
                    label="Net Monthly Income"
                    name="netMontlyIncome"
                    value={formData.netMontlyIncome}
                    onChange={handleChange}
                    type="select"
                    options={[
                        { label: "Upto 25000", value: "upto_25000" },
                        { label: "25000-50000", value: "25000_50000" },
                        { label: "50000-1 Lac", value: "50000_1lac" },
                        { label: "1 Lac+", value: "1lac_plus" },
                    ]}
                    error={errors.netMontlyIncome}
                />
                <InputField
                    label="Employment Type"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    type="select"
                    options={employmentOptions}
                    error={errors.employmentType}
                />
                <InputField
                    label="Primary Bank Account"
                    name="bankAccount"
                    value={formData.bankAccount}
                    onChange={handleChange}
                    type="select"
                    options={bankOptions}
                    error={errors.bankAccount}
                />
                <InputField
                    label="Property Value"
                    name="propertyValue"
                    value={formData.propertyValue}
                    onChange={handleChange}
                    type="select"
                    options={[
                        { label: "Upto 30 Lacs", value: "upto_30lacs" },
                        { label: "30 Lacs-60 Lacs", value: "30_60lacs" },
                        { label: "60 Lacs-1 Cr", value: "60lacs_1cr" },
                        { label: "1 Cr+", value: "above_1cr" },
                    ]}
                    error={errors.propertyValue}
                />
                <InputField
                    label="Property Type"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    type="select"
                    options={propertyTypes}
                    error={errors.propertyType}
                />
                <Button onClick={handleContinue}>Submit</Button>
            </>
        )
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 w-full sm:h-screen">
            <RightContainer
                title="Take Loan against Property (LAP)"
                paragraph="Fulfill your financial needs by getting a loan from the bank against the mortgage of your property."
                items={homeLoanBenefits}
            />
            <div className="flex justify-center w-full sm:mt-16 px-6 my-6">
                <div className="sm:w-[65%] w-full flex flex-col gap-6">
                    {currentPanel > 1 && (
                        <div
                            onClick={() => setCurrentPanel(currentPanel - 1)}
                            className="flex items-center gap-1 text-sm font-semibold opacity-75 cursor-pointer"
                        >
                            <IoMdArrowBack size={18} />
                            <span>Back</span>
                        </div>
                    )}
                    {panels[currentPanel]}
                </div>
            </div>
            <OtpDialog
                open={openDialog}
                setOpen={setOpenDialog}
                mobile={formData.mobile}
                sessionStorage={{
                    key: "loan-against-property",
                    value: { OTP_Verify: true, formData: formData },
                }}
                onVerified={() => setCurrentPanel(2)}
            />
            <LoanAgainstDecription />
        </div>
    );
}