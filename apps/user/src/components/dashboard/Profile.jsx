import {
  LockKeyhole,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Map,
  BriefcaseBusiness,
  Landmark,
  BanknoteArrowUp,
} from "lucide-react";
import { TypographyH3, TypographyH4 } from "@/custom/Typography";
import { InputField } from "@/custom/Fields";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { employmentOptions } from "@/components/pages/personal-loan/PersonalLoanApply";
import { useContextFile } from "@/context/contextFile";
import { getUserData, updateuserProfile, getUserProfile } from "@/machine/userData";

export default function Profile() {
  const { user, setUser } = useContextFile();
  const [userInfo, setUserInfo] = useState(null);
  const [kycinfo, setKycinfo] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  // First: Load basic user info
  useEffect(() => {
    getUserData(setUser);
  }, []);

  // Second: When user is loaded, load KYC profile
  useEffect(() => {
    if (user?._id) {
      getUserProfile(setKycinfo, user._id);
    }
  }, [user?._id]);

  // Third: Populate userInfo when both user & kycinfo are ready
  useEffect(() => {
    if (user && kycinfo) {
      setUserInfo({
        userId: user._id || "",
        email: user.email || "",
        address: user.address || "",
        employmentType: user.employmentType || "",
        employerName: user.employerName || "",
        monthlyIncome: user.monthlyIncome || "",
      });
      setLoading(false);
    }
  }, [user, kycinfo]);

  const handleChange = (e) => {
    if (isSaved) return;
    const { name, value } = e.target;
    let formattedValue = value;

    switch (name) {
      case "address":
        formattedValue = value.toUpperCase();
        break;
      case "mobile":
      case "pinCode":
      case "panNumber":
      case "dob":
      case "name":
        return; // block KYC fields
      default:
        break;
    }

    setUserInfo((prev) => ({ ...prev, [name]: formattedValue }));
    validateField(name, formattedValue);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        error = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
          ? ""
          : "Enter a valid email.";
        break;
      case "address":
        error = value.trim() === "" ? "Address is required." : "";
        break;
      default:
        if (!value.trim()) error = "This field is required.";
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSave = async () => {
    const finalData = { ...userInfo };
    await updateuserProfile(finalData);
    setUserInfo(finalData);
    setIsSaved(true);
  };
  console.log(userInfo)

  // const isDataMissing =
  //   !userInfo || Object.values(userInfo).some((value) => !value);
  const isDataMissing =
    !userInfo ||
    ["email", "address", "employmentType", "employerName", "monthlyIncome"].some(
      (key) => {
        const value = userInfo[key];
        return typeof value === "string"
          ? value.trim() === ""
          : !value;
      }
    );


  return (
    <div className="mx-4 sm:mx-0">
      <TypographyH3 className="text-blue-950 text-xl font-bold capitalize tracking-normal mb-4">
        Welcome {kycinfo?.name?.split(" ")[0] || "User"}
      </TypographyH3>

      {isDataMissing && !loading && (
        <div className="bg-yellow-100 p-4 rounded-md mb-4">
          <TypographyH4 className="text-yellow-800">
            Your profile is incomplete. Please update your information.
          </TypographyH4>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-4">
        <TypographyH4 className="text-blue-950 tracking-normal">
          Personal Details
        </TypographyH4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
              <Skeleton key={idx} className="h-16 w-full rounded-md" />
            ))
            : [
              {
                label: "Name",
                name: "name",
                value: kycinfo?.name || "",
                iconLeft: User,
                disabled: true,
              },
              {
                label: "Date of Birth",
                name: "dob",
                value: kycinfo?.dob || "",
                iconLeft: Calendar,
                disabled: true,
              },
              {
                label: "Email",
                name: "email",
                value: userInfo.email,
                iconLeft: Mail,
              },
              {
                label: "Mobile Number",
                name: "mobile",
                value: kycinfo?.mobile || "",
                iconLeft: Phone,
                disabled: true,
              },
              {
                label: "Address",
                name: "address",
                value: userInfo.address,
                iconLeft: Map,
              },
              {
                label: "Pin Code",
                name: "pinCode",
                value: kycinfo?.pinCode || "",
                iconLeft: MapPin,
                disabled: true,
              },
              {
                label: "PAN Number",
                name: "panNumber",
                value: kycinfo?.panNumber || "",
                iconLeft: LockKeyhole,
                disabled: true,
              },
            ].map(({ label, name, iconLeft, value, disabled }) => (
              <InputField
                key={name}
                label={label}
                name={name}
                value={value}
                onChange={handleChange}
                error={errors[name]}
                type={name === "email" ? "email" : "text"}
                iconLeft={iconLeft}
                iconRight={disabled ? LockKeyhole : null}
                placeholder={`Enter ${label}`}
                maxLength={
                  name === "mobile"
                    ? 10
                    : name === "pinCode"
                      ? 6
                      : name === "dob"
                        ? 10
                        : undefined
                }
                disabled={disabled}
              />
            ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-8">
        <TypographyH4 className="text-blue-950 tracking-normal">
          Employment Details
        </TypographyH4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
          {loading ? (
            <>
              <Skeleton className="h-16 w-full rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
            </>
          ) : (
            <>
              <InputField
                label="Employment Type"
                name="employmentType"
                value={userInfo.employmentType}
                onChange={handleChange}
                type="select"
                options={employmentOptions}
                iconLeft={BriefcaseBusiness}
                placeholder="Select Employment Type"
              />
              <InputField
                label="Employer Name"
                name="employerName"
                value={userInfo.employerName}
                onChange={handleChange}
                type="text"
                iconLeft={Landmark}
                placeholder="Your Company Name"
                error={errors.employerName}
              />
              <InputField
                label="Monthly Income"
                name="monthlyIncome"
                value={userInfo.monthlyIncome}
                onChange={handleChange}
                type="text"
                iconLeft={BanknoteArrowUp}
                placeholder="Your Monthly Income"
                error={errors.monthlyIncome}
              />
            </>
          )}
        </div>
      </div>

      {!loading && !isSaved && (
        <div className="text-right mb-20 mt-8">
          <Button onClick={handleSave} className="px-10">
            Save Profile
          </Button>
        </div>
      )}
    </div>
  );
}
