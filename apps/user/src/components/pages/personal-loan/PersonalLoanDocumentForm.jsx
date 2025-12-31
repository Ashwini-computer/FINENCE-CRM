import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import { useContextFile } from "../../../context/contextFile";

export default function PersonalLoanDocumentForm() {
  const { user } = useContextFile();
  const [files, setFiles] = useState({
    userId: user?._id,
    pancard: null,
    adharcard: null,
    salarySlips: [],
    bankStatements: [],
    form16: null,
    offerLetter: null,
    photo: null,
    cibilReport: null,
  });

  const isValidFile = (file, field) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
    if (field === "bankStatements") {
      return file.type === "application/pdf"; // only pdf
    }
    return allowedTypes.includes(file.type);
  };

  const handleSingleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file && isValidFile(file, field)) {
      setFiles({ ...files, [field]: file });
    } else {
      alert(`Invalid file for ${field}`);
    }
  };

const handleMultipleFilesChange = (e, field) => {
  const selectedFiles = Array.from(e.target.files);
  const existingFiles = files[field] || [];

  const newValidFiles = selectedFiles.filter((newFile) => {
    const isDuplicate = existingFiles.some(
      (existingFile) => existingFile.name === newFile.name && existingFile.size === newFile.size
    );
    return isValidFile(newFile, field) && !isDuplicate;
  });

  if (newValidFiles.length !== selectedFiles.length) {
    alert("Some files were already uploaded or invalid and were skipped.");
  }

  if (newValidFiles.length > 0) {
    const updatedFiles = [...existingFiles, ...newValidFiles];
    setFiles({ ...files, [field]: updatedFiles });
  }
};

  const removeBankStatement = (indexToRemove) => {
    const updated = files.bankStatements.filter((_, index) => index !== indexToRemove);
    setFiles({ ...files, bankStatements: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(files).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file, index) => {
          form.append(`${key}[${index}]`, file);
        });
      } else if (value) {
        form.append(key, value);
      }
    });

    try {
      const res = await fetch("/api/upload-cibil-docs", {
        method: "POST",
        body: form,
      });

      const result = await res.json();
      alert("Documents uploaded successfully.");
      console.log(result);
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-xl border"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <UploadCloud className="w-7 h-7 text-blue-600" />
        Upload Personal Loan Documents
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Required Documents */}
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4 border-b pb-2">
            Required Documents
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700 mb-1">PAN Card</label>
              <input
                type="file"
                required
                accept="application/pdf,image/*"
                onChange={(e) => handleSingleFileChange(e, "pancard")}
                className="w-full border rounded px-3 py-2 file:bg-blue-100 file:border-0"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Aadhaar Card</label>
              <input
                type="file"
                required
                accept="application/pdf,image/*"
                onChange={(e) => handleSingleFileChange(e, "adharcard")}
                className="w-full border rounded px-3 py-2 file:bg-blue-100 file:border-0"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Bank Statements (Last 12 Months)</label>
              <input
                type="file"
                multiple
                accept="application/pdf"
                onChange={(e) => handleMultipleFilesChange(e, "bankStatements")}
                className="w-full border rounded px-3 py-2 file:bg-blue-100 file:border-0"
              />
              {/* Show uploaded bank statements */}
              {files.bankStatements.length > 0 && (
                <div className="mt-4">
                  <p className="font-semibold text-gray-700 mb-2">
                    Uploaded Bank Statements ({files.bankStatements.length})
                  </p>
                  <ul className="space-y-1 text-sm">
                    {files.bankStatements.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between bg-gray-100 px-3 py-1 rounded"
                      >
                        <span className="truncate w-3/4">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeBankStatement(index)}
                          className="text-red-600 hover:underline text-sm"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Salary Slips (Last 3 Months)</label>
              <input
                type="file"
                multiple
                accept="application/pdf,image/*"
                onChange={(e) => handleMultipleFilesChange(e, "salarySlips")}
                className="w-full border rounded px-3 py-2 file:bg-blue-100 file:border-0"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Recent Passport Size Photo</label>
              <input
                type="file"
                required
                accept="image/*"
                onChange={(e) => handleSingleFileChange(e, "photo")}
                className="w-full border rounded px-3 py-2 file:bg-blue-100 file:border-0"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Optional Documents */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-600 mb-4 border-b pb-2">
            Optional Documents
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Form 16</label>
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={(e) => handleSingleFileChange(e, "form16")}
                className="w-full border rounded px-3 py-2 file:bg-yellow-100 file:border-0"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Offer Letter</label>
              <input
                type="file"
                accept="application/pdf,image/*"
                onChange={(e) => handleSingleFileChange(e, "offerLetter")}
                className="w-full border rounded px-3 py-2 file:bg-yellow-100 file:border-0"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">CIBIL Report</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleSingleFileChange(e, "cibilReport")}
                className="w-full border rounded px-3 py-2 file:bg-yellow-100 file:border-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <Button type="submit" className="w-full text-lg">
          Submit Documents
        </Button>
      </div>
    </form>
  );
}
