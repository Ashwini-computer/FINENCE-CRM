import axios from "axios";
import { jwtDecode } from "jwt-decode";

const URL = import.meta.env.VITE_API_BASE_URL;

// Send OTP to mobile
export const SendOtpToMobile = async ({ mobile, setError }) => {
  try {
    const response = await axios.post(`${URL}/auth/send-otp`, { mobile });
    if (response.data.success) {
      console.log("OTP sent successfully");
    } else {
      setError(response.data.message || "Error sending OTP");
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    setError("Error sending OTP. Please try again later.");
  }
};

// Resend OTP
export const SendResendOTPTomobile = async ({ mobile, method, setError }) => {
  try {
    const response = await axios.post(`${URL}/auth/send-otp`, {
      mobile,
      method,
    });
    if (response.data.success) {
      console.log("OTP resent successfully via", method);
    } else {
      setError(response.data.message || "Error resending OTP");
    }
  } catch (error) {
    console.error("Error resending OTP:", error);
    setError("Error resending OTP. Please try again later.");
  }
};

// Verify OTP and login or create user
export const VerifyOTPToMobile = async ({
  mobile,
  otp,
  setOpen,
  onVerified,
  setError,
  navigate,
  userinfo,
  setUser, // for store recive user information from data from in context
  setLoggedIn,
}) => {
  try {
    const response = await axios.post(
      `${URL}/auth/verify-otp`,
      {
        mobile,
        otp,
        userinfo,
      },
      { withCredentials: true }
    );
    console.log(response);
    if (response?.data?.success) {
      setLoggedIn(true);
      setOpen(false);
      if (onVerified) onVerified();
      if (navigate) navigate();
    } else {
      setError(response.data.message || "Invalid OTP");
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    setError(error?.response?.data?.message || "Error verifying OTP");
  }
};

// Google Login Handler
export const googleWithLogin = async (credentialResponse) => {
  try {
    const response = await axios.post(`${URL}/auth/google`, {
      token: credentialResponse.credential,
    });
    return response;
  } catch (err) {
    console.error("Error during Google login:", err);
    throw new Error("Login failed, please try again.");
  }
};
