import { useState } from "react";
import { TypographyH3, TypographyMuted, TypographySmall } from "./Typography";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import OtpDialog from "./OtpDialog";
import { SendOtpToMobile } from "@/machine/OTP";

export default function OtpCollection({
    heading,
    lendersHighlight,
    highlightColor = "text-primary",
    features = [],
    termsUrl,
    onOtpSuccess
}) {
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");
    const [openDialog, setOpenDialog] = useState(false);

    const handleCheckOffers = async (e) => {
        e.preventDefault();
        if (mobile.length !== 10) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        setError('');
        setOpenDialog(true);

        await SendOtpToMobile({ mobile: "+91" + mobile, setError });
    };

    const handleOtpVerified = () => {
        setOpenDialog(false);

        if (typeof onOtpSuccess === 'function') {
            onOtpSuccess();
        }
    };

    return (
        <div className="max-w-md mx-auto flex sm:mt-18 gap-3 flex-col px-4 pb-8 sm:py-8">
            {/* Heading and Features */}
            <div className="grid gap-3">
                <TypographyH3 className="text-accent sm:text-xl text-md tracking-normal">
                    {heading} <span className={`font-bold ${highlightColor}`}>{lendersHighlight}</span>
                </TypographyH3>
                <div className="w-14 h-0.5 bg-accent"></div>
            </div>

            {
                features && (
                    <div className="space-y-2">
                        {features?.map((feature, index) => (
                            <TypographyMuted key={index} className="flex gap-2">
                                <IoCheckmarkCircleOutline className="text-accent" size={18} />
                                {feature}
                            </TypographyMuted>
                        ))}
                    </div>
                )
            }
            {/* Form */}
            <form className="mt-8" onSubmit={handleCheckOffers}>
                <div>
                    <Label className="opacity-85">Mobile Number</Label>
                    <div className="flex items-center mt-3 justify-between px-2 gap-2 border-b-2 pb-2 w-full text-base font-semibold">
                        <div className="flex items-center gap-2">
                            <TypographySmall>+91</TypographySmall>
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="text-sm focus:outline-none font-semibold w-full"
                                value={mobile}
                                maxLength={10}
                                onChange={(e) => {
                                    setMobile(e.target.value.replace(/\D/g, ''));
                                    setError('');
                                }}
                                onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <span className="text-muted-foreground font-semibold text-[10px]">
                            {mobile.length}/10 digits
                        </span>
                    </div>
                    {!error && mobile.length <= 0 && (
                        <TypographyMuted className="text-[10px]">
                            We will check offer against your number
                        </TypographyMuted>
                    )}
                    {error && (
                        <TypographyMuted className="text-red-700 text-[10px] mt-1">
                            {error}
                        </TypographyMuted>
                    )}
                </div>

                <Button type="submit" className="bg-primary my-4 w-full cursor-pointer">
                    Proceed
                </Button>

                <TypographyMuted className="text-[10px]">
                    By clicking on proceed, you have read and agree to the Financesbazar
                    <Link to={termsUrl} className="text-blue-800 cursor-pointer">
                        {" "}Credit Report Terms of Use, Financesbazar Terms of Use & Privacy Policy.
                    </Link>
                </TypographyMuted>
            </form>

            {/* OTP Dialog */}
            <OtpDialog
                open={openDialog}
                setOpen={setOpenDialog}
                mobile={"+91" + mobile}
                onVerified={handleOtpVerified}
                storage={{
                    key: "otp_verified",
                    value: true
                }}
            />
        </div>
    );
}
