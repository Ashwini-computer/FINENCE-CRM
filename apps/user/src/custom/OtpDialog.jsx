import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquareText, PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { SendResendOTPTomobile, VerifyOTPToMobile } from "@/machine/OTP";
import {useContextFile} from '../context/contextFile'

export default function OtpDialog({ open, setOpen, mobile, onVerified, storage, navigate }) {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [timer, setTimer] = useState(60);
    const [otpResent, setOtpResent] = useState(false);
    const {setUser,setLoggedIn}=useContextFile();

    // Start timer when dialog opens or OTP is resent
    useEffect(() => {
        if (!open) return;

        setTimer(60);
        setOtpResent(false);

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [open, otpResent]);

    // Verify OTP
    const handleVerifyOtp = async () => {
        if (otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP.");
            return;
        }
        const userinfo = JSON.parse(sessionStorage.getItem('userinfo')); // to store google information after user verify
        console.log(userinfo)

        await VerifyOTPToMobile({ mobile, otp, setOpen, onVerified, setError, storage, navigate, userinfo,setUser,setLoggedIn });
    };

    // Resend OTP
    const handleResendOtp = async (method = "sms") => {
        setOtp("");
        setError("");
        setOtpResent(true);

        await SendResendOTPTomobile({ mobile, method, setError });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[430px]">
                <DialogHeader>
                    <DialogTitle className="text-center">Verify Mobile Number</DialogTitle>
                    <DialogDescription className="bg-gray-200 rounded-md py-2 mt-2 text-center text-blue-950">
                        OTP sent to +91-xxxxxx{mobile?.slice(-4)}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-1 mt-6">
                    <input
                        id="otp"
                        placeholder={"●".repeat(6 - otp.length)}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                        className={`border-b pb-3 text-center ${error ? "border-red-600" : "border-primary"
                            } placeholder:text-gray-300 text-2xl tracking-widest focus:outline-none placeholder:text-3xl placeholder:tracking-widest`}
                        maxLength={6}
                    />
                    {error && (
                        <p className="text-red-800 text-xs text-center">{error}</p>
                    )}
                </div>

                <div className="text-center text-xs text-blue-950 font-medium tracking-normal">
                    {timer > 0 ? (
                        <>Resend OTP in <span className="text-blue-600">{timer}s</span></>
                    ) : (
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-blue-950 font-semibold cursor-pointer">Resend via</span>

                            <button
                                type="button"
                                onClick={() => handleResendOtp("sms")}
                                className="border bg-gray-50 hover:bg-gray-100 text-blue-800 font-semibold flex gap-1 items-center py-1.5 px-3 rounded"
                            >
                                <MessageSquareText size={14} /> SMS
                            </button>

                            <button
                                type="button"
                                onClick={() => handleResendOtp("call")}
                                className="border bg-gray-50 hover:bg-gray-100 text-blue-800 font-semibold flex gap-1 items-center py-1.5 px-3 rounded"
                            >
                                <PhoneCall size={14} /> Call
                            </button>

                            <button
                                type="button"
                                onClick={() => handleResendOtp("whatsapp")}
                                className="border bg-gray-50 hover:bg-gray-100 text-blue-800 font-semibold flex gap-1 items-center py-1.5 px-3 rounded"
                            >
                                <BsWhatsapp size={14} /> WhatsApp
                            </button>
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button type="button" className="w-full" onClick={handleVerifyOtp}>
                        Verify & Login
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
