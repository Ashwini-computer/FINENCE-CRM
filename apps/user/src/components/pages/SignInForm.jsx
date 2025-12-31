import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/custom/Typography";
import { GoogleLogin } from "@react-oauth/google";
import OtpDialog from "@/custom/OtpDialog";
import { useContextFile } from "@/context/contextFile";
import { SendOtpToMobile, googleWithLogin } from "@/machine/OTP";
import { useDispatch } from "react-redux";
import { checkAuth } from "../../machine/authentication/UserAuthentication";
// import { sendOtp } from "../../machine/Authentication/UserAuthentication";

export default function SignInForm() {
  const { setLoggedIn } = useContextFile();
  const [mobile, setMobile] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Handle sending OTP
  const handleLogin = async () => {
    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setOpenDialog(true);
    await SendOtpToMobile({ mobile: "+91" + mobile, setError });

    // const result = await sendOtp({ phone: `+91${mobile}` });
  };

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await googleWithLogin(credentialResponse);
      const userinfo = response?.data?.user;
      if (userinfo) {
        sessionStorage.setItem("userinfo", JSON.stringify(userinfo));
        // setLoggedIn(true);
        // navigate("/myaccount/dashboard");
      } else {
        setError("Invalid login response.");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      setError("Failed to log in. Please try again.");
    }
  };
  return (
    <PageLayout>
      <div className="flex justify-center items-center sm:my-12 p-4 sm:p-6">
        <div id="invisible-recaptcha"></div>

        <Card className="flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          {/* QR Code Section */}
          <div className="bg-primary text-white flex-1 p-8 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Scan QR or Login</h3>
          </div>

          {/* Login Form Section */}
          <div className="flex-1 p-6 sm:p-8">
            <TypographyH3 className="text-blue-950 text-center mb-4">
              Login to your account
            </TypographyH3>

            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => setError("Google login failed. Please try again.")}
            />

            <div className="my-4 flex items-center">
              <hr className="flex-1 border-gray-300" />
              <span className="px-3 text-blue-900 text-sm font-semibold">
                or continue with mobile number
              </span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Mobile input with hardcoded +91 */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-md overflow-hidden focus-within:ring focus-within:ring-primary transition mt-6">
              <div className="pl-3 pr-2 font-semibold text-blue-950 text-sm">
                +91
              </div>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="flex-1 px-3 font-semibold text-blue-950 py-2 text-sm outline-none border-none"
                value={mobile}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setMobile(value);
                  if (value.length === 10) {
                    setError("");
                  }
                }}
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

            <Button
              onClick={handleLogin}
              type="submit"
              className="w-full mt-6 cursor-pointer"
            >
              Send with OTP
            </Button>

            {/* OTP Dialog */}
            <OtpDialog
              open={openDialog}
              setOpen={setOpenDialog}
              mobile={"+91" + mobile}
              onVerified={() => {
                dispatch(checkAuth());

                // localStorage.removeItem("userinfo"); // remove user info after login
              }}
              navigate={() => navigate("/myaccount/dashboard")}
            />

            <p className="text-center text-xs leading-7 text-gray-500 mt-4">
              By logging in, you agree to the following
              <br />
              <a href="#" className="text-blue-700 font-semibold">
                Credit Report Terms of Use
              </a>
              ,&nbsp;
              <a href="#" className="text-blue-700 font-semibold">
                Terms of Use
              </a>
              &nbsp;and&nbsp;
              <a href="#" className="text-blue-700 font-semibold">
                Privacy Policy
              </a>
            </p>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
