import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const OTP_EXPIRY_TIME = 60 * 1000; // 60 seconds in milliseconds

// Function to generate and store OTP
export function generateOTP(length = 6) {
  const otp = Math.floor(100000 + Math.random() * 900000)
    .toString()
    .substring(0, length);

  const data = {
    otp,
    timestamp: Date.now(),
  };

  sessionStorage.setItem("otp_data", JSON.stringify(data));

  // Auto remove OTP after expiry
  setTimeout(() => {
    const stored = sessionStorage.getItem("otp_data");
    if (stored) {
      const { timestamp } = JSON.parse(stored);
      if (Date.now() - timestamp >= OTP_EXPIRY_TIME) {
        sessionStorage.removeItem("otp_data");
      }
    }
  }, OTP_EXPIRY_TIME);

  return otp;
}

// Function to get OTP only if it's not expired
export function getStoredOTP() {
  const data = sessionStorage.getItem("otp_data");

  if (!data) return "";

  try {
    const { otp, timestamp } = JSON.parse(data);

    if (Date.now() - timestamp > OTP_EXPIRY_TIME) {
      // Expired: remove from session storage
      sessionStorage.removeItem("otp_data");
      return "";
    }

    return otp;
  } catch (error) {
    console.error("Failed to parse OTP data:", error);
    return "";
  }
}

// Optional: Clear OTP manually
export function clearOTP() {
  sessionStorage.removeItem("otp_data");
}

export function AddSessionStorage(key, value) {
  const stringified = typeof value === "string" ? value : JSON.stringify(value);
  sessionStorage.setItem(key, stringified);
}

export const AddLoacalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export function calculateEMI(P: number, R: number, N: number): number {
  const r = R / (12 * 100);
  const n = N * 12;
  const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi);
}

export function generateEmiTable(P: number, R: number, N: number, emi: number) {
  const result = [];
  let balance = P;
  const monthlyRate = R / (12 * 100);

  for (let i = 1; i <= N * 12; i++) {
    const interest = +(balance * monthlyRate).toFixed(2);
    const principal = +(emi - interest).toFixed(2);
    balance = +(balance - principal).toFixed(2);
    result.push({
      month: i,
      emi,
      principal,
      interest,
      balance: balance > 0 ? balance : 0,
    });
  }

  return result;
}

export function formatDateDDMMYYYY(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const year = String(date.getFullYear()).slice(-2);

  return `${day} ${month}' ${year}`;
}

export function formatDateMMYY(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const year = String(date.getFullYear()).slice(-2);

  return `${month}' ${year}`;
}
