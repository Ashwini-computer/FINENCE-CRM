import { useState } from "react";
import { InputField } from "@/custom/Fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyH3, TypographyMuted } from "@/custom/Typography";
import { useContextFile } from "@/context/contextFile";
export default function beforeUserLoaninformationForm() {
  const { user } = useContextFile();
  console.log(user)
  const [formData, setFormData] = useState({
    name: user?.employerName,
    mobile: user?.mobile,
    dob: user?.dob,
    panNumber: "",
    pinCode: "",
    employmentType: user?.employmentType,
    incomeRange: "",
    primaryBank: "",
    companyName: user?.employerName,
    residenceCity: user?.address,
    annualIncome: user?.monthlyIncome,
    loanAmount: "",
    currentEMI: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add validation here
    console.log("Submitted Data:", formData);
  };

  return (
    <Card className="p-4">
      {/* <TypographyH3 className="text-center text-blue-700 mb-1">Apply for Personal Loan</TypographyH3> */}
      {/* <TypographyMuted className="text-center mb-6 text-sm text-gray-500">
        Fill out the form to apply for a personal loan and get your CIBIL score instantly.
      </TypographyMuted> */}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* KYC Fields */}
        <InputField
          label="Full Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
        />
        <InputField
          label="Mobile Number"
          value={formData.mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          error={errors.mobile}
        />
        <InputField
          label="Date of Birth"
          placeholder="DD-MM-YYYY"
          value={formData.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
          error={errors.dob}
        />
        <InputField
          label="PAN Number"
          value={formData.panNumber}
          onChange={(e) => handleChange("panNumber", e.target.value)}
          error={errors.panNumber}
        />
        <InputField
          label="Pin Code"
          value={formData.pinCode}
          onChange={(e) => handleChange("pinCode", e.target.value)}
          error={errors.pinCode}
        />

        {/* Personal Loan Fields */}
        <InputField
          label="Employment Type"
          placeholder="e.g. Salaried / Business / Professional"
          value={formData.employmentType}
          onChange={(e) => handleChange("employmentType", e.target.value)}
          error={errors.employmentType}
        />
        <InputField
          label="Income Range"
          placeholder="e.g. ₹3 - ₹5 Lacs"
          value={formData.incomeRange}
          onChange={(e) => handleChange("incomeRange", e.target.value)}
          error={errors.incomeRange}
        />
        <InputField
          label="Primary Bank"
          placeholder="e.g. HDFC Bank"
          value={formData.primaryBank}
          onChange={(e) => handleChange("primaryBank", e.target.value)}
          error={errors.primaryBank}
        />
        <InputField
          label="Current Company"
          value={formData.companyName}
          onChange={(e) => handleChange("companyName", e.target.value)}
          error={errors.companyName}
        />
        <InputField
          label="Residence City"
          value={formData.residenceCity}
          onChange={(e) => handleChange("residenceCity", e.target.value)}
          error={errors.residenceCity}
        />
        <InputField
          label="Gross Annual Income"
          placeholder="e.g. 500000"
          value={formData.annualIncome}
          onChange={(e) => handleChange("annualIncome", e.target.value)}
          error={errors.annualIncome}
        />
        <InputField
          label="Desired Loan Amount"
          placeholder="e.g. 200000"
          value={formData.loanAmount}
          onChange={(e) => handleChange("loanAmount", e.target.value)}
          error={errors.loanAmount}
        />
        <InputField
          label="Total EMI Currently Paying"
          placeholder="e.g. 5000"
          value={formData.currentEMI}
          onChange={(e) => handleChange("currentEMI", e.target.value)}
          error={errors.currentEMI}
        />

        {/* Submit Button */}
        <div className="md:col-span-3">
          <Button type="submit" className="text-sm">
            Next Procced
          </Button>
        </div>
      </form>
    </Card>
  );
}
