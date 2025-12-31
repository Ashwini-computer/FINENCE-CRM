import { IoIosArrowBack } from "react-icons/io";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyMuted } from "./Typography";

export const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error = "",
  iconLeft: IconLeft,
  iconRight: IconRight,
  options = [],
  disabled = false,
}) => {
  const isSelect = type === "select";
  const isEmail = type === "email";

  return (
    <div className="w-full grid gap-3">
      <label className="block text-sm font-base opacity-80">{label}</label>
      <div className="flex items-center gap-2 border-b pb-2">
        {IconLeft && <IconLeft size={16} className="text-muted-foreground" />}

        {isSelect ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`flex-1 outline-none cursor-pointer bg-transparent text-sm ${disabled ? 'text-gray-700 font-medium' : 'text-blue-950 font-semibold'}`}
            disabled={disabled}
          >
            <option value="" disabled hidden>
              {label}
            </option>
            {options?.map((option, index) => (
              <option key={index} value={option?.value} className="cursor-pointer text-blue-950 font-medium">
                {option?.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={`flex-1 outline-none bg-transparent placeholder:text-xs text-sm ${disabled
              ? "text-gray-700 font-medium"
              : isEmail
              ? "text-blue-950 font-normal"
              : "text-blue-950 font-semibold capitalize"
              }`}
            type={type}
            name={name}
            value={isEmail ? value.toLowerCase() : value}
            onChange={onChange}
            placeholder={placeholder}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck="false"
            disabled={disabled}
          />
        )}

        {IconRight && <IconRight size={16} className="ml-2 text-gray-500" />}
      </div>
      {error && <TypographyMuted className="text-red-500 text-xs mt-2">{error}</TypographyMuted>}
    </div>
  );
};

export const StepCard = ({ title, children, onBack }) => (
    <Card className="shadow-none border-none sm:mt-3">
        <CardHeader>
            {onBack && (
                <div
                    className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                    onClick={onBack}
                >
                    <IoIosArrowBack />
                </div>
            )}
            <CardTitle className="text-lg text-blue-800 sm:mt-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto max-h-[80vh] pb-12">{children}</CardContent>
    </Card>
);

export const SelectDropDownMenu = ({ items, value, onChange, placeholder }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className="w-full border-b-2 p-2 text-sm focus:outline-none focus:border-primary cursor-pointer"
        >
            <option disabled value="">
                {placeholder || "Select an option"}
            </option>
            {items?.map((item, index) => (
                <option key={index} value={item?.label} className="hover:bg-muted cursor-pointer">
                    {item?.label}
                </option>
            ))}
        </select>
    );
};

