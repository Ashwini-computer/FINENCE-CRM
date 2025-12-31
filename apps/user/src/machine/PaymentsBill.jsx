import { CreateRezorpayorder, verifyRazorpayPayment } from "./Payments";

// Razorpay handler
export const PaymentBill = async (user) => {
  if (!user._id)
    return console.log("Something went wrong. Please login again.");

  try {
    const price = 10;
    const order = await CreateRezorpayorder(price);
    if (!order || !order.id) {
      return console.log("Failed to create Razorpay order. Please try again.");
    }

    const { id: order_id, currency, amount } = order;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount,
      currency,
      name: "Finance Bazar",
      description: "CIBIL Report Access",
      order_id,
      handler: async function (response) {
        const verifyRes = await verifyRazorpayPayment({
          userId: user?._id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        alert(verifyRes.message);
      },
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: user?.mobile || user?.phone,
      },
      theme: {
        color: "#4F46E5", // Indigo
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    console.error("Razorpay Error:", error);
  }
};
