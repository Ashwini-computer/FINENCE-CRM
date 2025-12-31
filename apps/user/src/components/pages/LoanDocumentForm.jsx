'use client';

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, XCircle, Info } from "lucide-react";
import { useContextFile } from "@/context/contextFile";
import { uploadpersonalLoanDocuments } from "@/machine/Loans";
import { useParams } from "react-router-dom";

const loanFieldConfig = {
  personal: {
    required: ["pancard", "adharcard", "photo", "form16", "bankStatements", "salarySlips"],
    optional: ["offerLetter", "cibilReport"]
  },
  home: {
    required: ["pancard", "adharcard", "photo", "form16", "bankStatements"],
    optional: ["propertyDocs"]
  },
  business: {
    required: ["pancard", "adharcard", "photo", "form16", "bankStatements", "itrDocs"],
    optional: ["gstReturn"]
  },
  mortgage: {
    required: ["pancard", "adharcard", "photo", "propertyDocs"],
    optional: ["loanSanctionLetter"]
  }
};

export default function LoanDocumentForm(props) {
  const { user } = useContextFile();
  const { loanType: paramLoanType } = useParams();

  const loanType = props.loanType || paramLoanType;
  const [shiftForm, setShiftForm] = useState(true);
  const [error, setError] = useState("");
  const [files, setFiles] = useState({ userId: null });

  useEffect(() => {
    if (user && user._id) {
      setFiles((prev) => ({ ...prev, userId: user._id }));
    }
  }, [user]);

  const isValidFile = (file, field) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
    if (["bankStatements", "salarySlips"].includes(field)) return file.type === "application/pdf";
    return allowedTypes.includes(file.type);
  };

  const handleSingleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file && isValidFile(file, field)) {
      setFiles((prev) => ({ ...prev, [field]: file }));
      setError("");
      if (field === "form16") setShiftForm(true);
    } else {
      setError(`Invalid file type for ${field}.`);
    }
  };

  const handleMultipleFilesChange = (e, field) => {
    const selectedFiles = Array.from(e.target.files);
    const uniqueFiles = selectedFiles.filter(
      (newFile) => !files[field]?.some((existing) => existing.name === newFile.name && existing.size === newFile.size)
    );
    const updatedFiles = [...(files[field] || []), ...uniqueFiles].slice(0, 12);
    setFiles((prev) => ({ ...prev, [field]: updatedFiles }));
    setError("");
    if (field === "bankStatements") setShiftForm(false);
  };

  const validateBeforeSubmit = () => {
    if (!files.userId) return "User ID missing.";

    const requiredFields = loanFieldConfig[loanType]?.required || [];

    for (const field of requiredFields) {
      if (field === "form16" && shiftForm && !files[field]) return "Form 16 is required.";
      if (field === "bankStatements" && !shiftForm && (!files[field] || files[field].length < 12)) {
        return "12 months of bank statements required.";
      }
      if (!["form16", "bankStatements"].includes(field) && !files[field]) {
        return `${field.replace(/([A-Z])/g, ' $1')} is required.`;
      }
    }
    return null;
  };

  const onRemove = (removeFile) => {
    const updatedFiles = files?.bankStatements?.filter(
      (file) => file?.name !== removeFile?.name || file?.size !== removeFile?.size
    );
    setFiles((prev) => ({ ...prev, bankStatements: updatedFiles }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateBeforeSubmit();
    if (errorMsg) return setError(errorMsg);

    const form = new FormData();
    for (const key in files) {
      if (Array.isArray(files[key])) {
        files[key].forEach((file) => form.append(key, file));
      } else if (files[key]) {
        form.append(key, files[key]);
      }
    }

    try {
      await uploadpersonalLoanDocuments(loanType, form);
      setError("");
      setFiles({ userId: user?._id || null });
    } catch (err) {
      setError(`Upload failed. ${err.response?.data?.message || err.message}`);
    }
  };

  const labelMap = {
    pancard: "PAN Card",
    adharcard: "Aadhaar Card",
    photo: "Passport Photo",
    salarySlips: "Recent 3 Months Salary Slips",
    bankStatements: "12 Months Bank Statements",
    form16: "Form 16",
    offerLetter: "Offer Letter",
    cibilReport: "CIBIL Report",
    propertyDocs: "Property Documents",
    gstReturn: "GST Return",
    itrDocs: "ITR Documents (4 years)",
    loanSanctionLetter: "Loan Sanction Letter"
  };

  const renderField = (field) => {
    const multiple = ["salarySlips", "bankStatements", "itrDocs"].includes(field);
    const removable = ["form16", "bankStatements", "itrDocs"].includes(field);
    if (field === "form16" || field === "bankStatements") return null;

    return (
      <File
        key={field}
        label={labelMap[field] || field}
        multiple={multiple}
        value={files[field]}
        values={files[field]}
        onChange={(e) => (multiple ? handleMultipleFilesChange(e, field) : handleSingleFileChange(e, field))}
        removable={removable}
      />
    );
  };

  const config = loanFieldConfig[loanType] || {};
  const requiredFields = config.required || [];
  const optionalFields = config.optional || [];

  return (
    <Card className="max-w-4xl">
      <CardHeader className="flex flex-col sm:flex-row items-center gap-3 pb-2">
        <UploadCloud className="w-7 h-7 text-blue-600" />
        <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 capitalize text-center sm:text-left">
          Upload Documents For {loanType?.replace("-", " ")} Loan
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 px-4 py-2 rounded bg-red-50 text-red-700 border border-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">Required Documents</h3>
            </div>
            {requiredFields.map(renderField)}
            {requiredFields.includes("form16") && requiredFields.includes("bankStatements") && (
              <div className="md:col-span-2">
                <label className="font-semibold text-gray-800">Income Proof (One)</label>
                <div className="mt-2 flex flex-col sm:flex-row gap-4">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      checked={shiftForm}
                      disabled={!!files.bankStatements?.length}
                      onChange={() => setShiftForm(true)}
                    />
                    Form 16
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      checked={!shiftForm}
                      disabled={!!files.form16}
                      onChange={() => setShiftForm(false)}
                    />
                    Recent 12 Months Salary Slips
                  </label>
                </div>
                <div className="mt-2">
                  {shiftForm ? (
                    <File
                      value={files.form16}
                      onChange={(e) => handleSingleFileChange(e, "form16")}
                      removable
                    />
                  ) : (
                    <File
                      multiple
                      values={files.bankStatements}
                      onChange={(e) => handleMultipleFilesChange(e, "bankStatements")}
                      removable
                      onRemove={onRemove}
                      info={`Uploaded: ${files.bankStatements?.length || 0}/12`}
                    />
                  )}
                </div>
              </div>
            )}

            <div className="md:col-span-2">
              <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">Optional Documents</h3>
            </div>
            {optionalFields.map(renderField)}
          </div>

          <Button
            type="submit"
            className=""
          >
            Submit Documents
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function File({ label, onChange, multiple = false, value, values, removable = false, onRemove, info }) {
  return (
    <div className="space-y-1">
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="file"
        onChange={onChange}
        multiple={multiple}
        className="block w-full border rounded px-3 py-2 text-sm file:bg-blue-100 file:border-0 file:px-3 file:py-1 file:rounded file:text-blue-700"
      />
      {info && (
        <div className="flex items-center text-xs text-gray-600 mt-1">
          <Info className="w-4 h-4 mr-1 text-blue-400" />
          <span>{info}</span>
        </div>
      )}
      {!multiple && value && <div className="text-sm mt-1">{value.name}</div>}
      {multiple && values && (
        <ul className="mt-1 space-y-1 text-sm">
          {values.map((file, i) => (
            <li key={i} className="flex justify-between items-center">
              <span className="truncate max-w-[180px]">{file.name}</span>
              {removable && (
                <button type="button" onClick={() => onRemove(file)}>
                  <XCircle size={16} className="text-red-500 cursor-pointer" />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}