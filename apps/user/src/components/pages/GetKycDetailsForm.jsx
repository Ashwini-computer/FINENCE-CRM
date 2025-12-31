import React, { useState } from "react";
import { InputField } from "@/custom/Fields";
import { Button } from "@/components/ui/button";
import { useContextFile } from "@/context/contextFile";
import { getUserData } from "@/machine/userData";
import { checkCibilScore, submitCibilKycDetails } from "@/machine/Cibil";

export const GetKycDetailsForm = ({ fetchCibilReport }) => {
  const { user, setUser } = useContextFile();
  const [formData, setFormData] = useState({
    userId: user?._id || "",
    name: user?.name || "",
    mobile: user?.mobile || "",
    dob: user?.dob || "",
    panNumber: user?.panNumber || "",
    pinCode: user?.pinCode || "",
    iskyc: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field, value) => {
    if (field === "dob") {
      let cleaned = value.replace(/\D/g, "").slice(0, 8);
      if (cleaned.length >= 5)
        value = `${cleaned.slice(0, 2)}-${cleaned.slice(2, 4)}-${cleaned.slice(
          4
        )}`;
      else if (cleaned.length >= 3)
        value = `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
      else value = cleaned;
    }
    if (field === "pinCode") value = value.replace(/\D/g, "").slice(0, 6);
    if (field === "panNumber")
      value = value
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 10);
    if (field === "mobile") value = value.replace(/\D/g, "").slice(0, 10);

    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!/^\+91\d{10}$/.test(formData.mobile))
      errors.mobile = "10-digit mobile required";
    if (!/^\d{2}-\d{2}-\d{4}$/.test(formData.dob))
      errors.dob = "DOB must be in DD-MM-YYYY format";
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.panNumber))
      errors.panNumber = "Valid PAN required";
    if (!/^\d{6}$/.test(formData.pinCode))
      errors.pinCode = "6-digit pin code required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) return setFormErrors(errors);

    try {
      // Convert DOB from DD-MM-YYYY to YYYY-MM-DD
      const [dd, mm, yyyy] = formData.dob.split("-");
      const formattedDob = `${yyyy}-${mm}-${dd}`;

      const kycRes = await submitCibilKycDetails({
        ...formData,
        dob: formattedDob,
      });

      console.log("outer block run");
      if (kycRes?.status === 200) {
        console.log("enter in block run");

        await checkCibilScore(user._id);

        const updatedUser = await getUserData(setUser);
        if (updatedUser?.iskyc) {
          await fetchCibilReport();
        }
      } else {
        console.warn(
          "KYC submission failed or returned non-200 status:",
          kycRes
        );
      }
    } catch (err) {
      console.error("❌ Error updating KYC:", err);
    }
  };

  return (
    <div className="bg-white border rounded-xl shadow p-4 w-full max-w-5xl">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800">Complete Your KYC</h2>
        <p className="text-sm text-gray-600">
          Please fill out the form below to complete your KYC. Once done, your
          CIBIL report will be available instantly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm"
      >
        <InputField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={formErrors.name}
        />
        <InputField
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          error={formErrors.mobile}
        />
        <InputField
          label="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
          placeholder="DD-MM-YYYY"
          error={formErrors.dob}
        />
        <InputField
          label="PAN Number"
          name="panNumber"
          value={formData.panNumber}
          onChange={(e) => handleChange("panNumber", e.target.value)}
          error={formErrors.panNumber}
        />
        <InputField
          label="Pin Code"
          name="pinCode"
          value={formData.pinCode}
          onChange={(e) => handleChange("pinCode", e.target.value)}
          error={formErrors.pinCode}
        />
        <div className="flex items-end">
          <Button type="submit" className="w-full py-2 text-sm">
            Submit & Check CIBIL Score
          </Button>
        </div>
      </form>
    </div>
  );
};
