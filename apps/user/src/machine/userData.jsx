import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

// Submit form data and store user ID in localStorage
export const userData = async (formData) => {
    try {
        const res = await axios.post(`${URL}/add-user`, formData);

        console.log("Form submitted successfully!", res.data);

        const token = res.data.token;

        if (token) {
            localStorage.setItem("token", token);
        } else {
            console.warn("No token received.");
        }

    } catch (err) {
        console.error("Error submitting form:", err.response?.data || err.message);
    }
};

// Fetch user data using x-user-id header
export const getUserData = async (setUser) => {
    console.log("getUserData is run ");

    try {
        const token = localStorage.getItem("token");

        if (!token) {
            console.warn("No token found in localStorage.");
            return;
        }

        const res = await axios.get(`${URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("Fetched user data:", res.data);
        setUser(res.data?.data);

    } catch (err) {
        console.error("Error fetching form data:", err.response?.data || err.message);
    }
};

export const updateUserData = async (updatedFields, id) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.put(`${URL}/user/update-user/${id}`, updatedFields, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("User updated:", res.data);
        return res.data;

    } catch (err) {
        console.error("Error updating user data:", err.response?.data || err.message);
    }
};

export const updateuserProfile = async (updateData) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.put(`${URL}/user/updateprofile`, {updateData},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        alert("User Profile Update Successfully")
    } catch (error) {
        console.log(error)
    }
}

export const getUserProfile = async (setKycinfo,id) => {
    console.log(id)
    try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(`${URL}/user/getprofile/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response)
        setKycinfo(response?.data?.userprofiledata)
    } catch (err) {
        console.error("Error updating user data:", err.response?.data || err.message);
    }
};
