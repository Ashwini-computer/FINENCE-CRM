import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

export const CreateRezorpayorder = async (amount) => {
    const token = localStorage.getItem("token");
    try {
        if (!token) {
            console.warn("No token found in localStorage.");
            return;
        }

        const response = await axios.post(`${URL}/payments/create-order`, { amount }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Payment Order Details=>", response)
        return response?.data
    } catch (error) {
        console.log(error);
    }
};

export const verifyRazorpayPayment = async (paymentDetails) => {
    try {

        if (!token) {
            console.warn("No token found in localStorage.");
            return;
        }

        const response = await axios.post(`${URL}/payments/verify-order`, { paymentDetails }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Payment Order Details=>", response)
        return response?.data
    } catch (error) {
        console.log(error);
    }
};


