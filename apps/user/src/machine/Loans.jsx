import axios from "axios";
const URL = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem("token");

export const personalLoanapply = async (formData) => {
    try {
        const response = await axios.post(`${URL}/loan/personal-loan`,{formData}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(response.status===201){
            alert("Personal loan Data Stored In Database");
            return response?.data
        }

    } catch (err) {
        console.error("Error submitting form:", err.response?.data || err.message);
    }
};

export const BussinessLoanapply = async (formData) => {
    try {
        const response = await axios.post(`${URL}/loan/bussiness-loan`,{formData}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(response.status===201){
            alert("bussiness loan Data Stored In Database");
            return response?.data
        }

    } catch (err) {
        console.error("Error submitting form:", err.response?.data || err.message);
    }
};

export const uploadpersonalLoanDocuments=async(loanType,form)=>{
        try {
        const response = await axios.post(`${URL}/loan/${loanType}-loan/upload/docs`,form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(response.status===200){
            alert("Personal loan Documents Stored In Database");
            return response?.data
        }

    } catch (err) {
        console.error("Error submitting form:", err.response?.data || err.message);
    }
}
