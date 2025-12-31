import axios from "axios";
const URL = import.meta.env.VITE_API_BASE_URL;

export const getCibilReportData = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found in localStorage.");
      return;
    }

    const response = await axios.get(`${URL}/cibil/getcibilreport/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("get Cibil Report Data =>", response?.data?.cibilScore);
    return response?.data?.cibilReport ?? response?.data?.cibilScore;
  } catch (error) {
    console.log(error);
  }
};

export const checkCibilScore = async (userId) => {
  console.log("checkCibilScore is run ");
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found in localStorage.");
      return;
    }

    const response = await axios.post(
      `${URL}/cibil/check`,
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response?.data?.report);
    return response?.data?.report;
  } catch (error) {
    console.log(error);
  }
};

export const submitCibilKycDetails = async (formData) => {
  // user Id share in formdata
  console.log("submitCibilKycDetails is run ");

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found in localStorage.");
      return;
    }

    const response = await axios.post(
      `${URL}/cibil/CibilKycDetails`,
      { formData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log(error);
  }
};
export const downloadCreditReport = async (reportId) => {
  try {
    const response = await axios.get(
      `${URL}/cibil/credit-report/${reportId}/download`,
      { responseType: "blob" }
    );

    const blob = new Blob([response.data], {
      type: response.headers["content-type"] || "application/pdf",
    });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `credit-report-${reportId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("❌ Failed to download credit report:", err);
  }
};
