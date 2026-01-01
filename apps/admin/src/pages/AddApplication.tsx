import React, { useState } from "react";
import axios from "axios";

/* ================= API ================= */

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

/* ================= COMPONENT ================= */

const AddApplicationPage: React.FC = () => {
  const [form, setForm] = useState({
    user: "",
    product: "",
    amount: "",
    status: "pending",
    applied: "",
  });

  const [loading, setLoading] = useState(false);

  /* ================= HANDLERS ================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/applications", {
        user: form.user,
        product: form.product,
        amount: Number(form.amount),
        status: form.status,
        appliedAt: form.applied,
      });

      alert("Application added successfully ✅");

      setForm({
        user: "",
        product: "",
        amount: "",
        status: "pending",
        applied: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add application ❌");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Application</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        {/* USER */}
        <div>
          <label className="block text-sm font-medium mb-1">User</label>
          <input
            type="text"
            name="user"
            value={form.user}
            onChange={handleChange}
            placeholder="User Name / Email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* PRODUCT */}
        <div>
          <label className="block text-sm font-medium mb-1">Product</label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="Loan / Credit Card"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* AMOUNT */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="₹ Amount"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* STATUS */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* APPLIED DATE */}
        <div>
          <label className="block text-sm font-medium mb-1">Applied</label>
          <input
            type="date"
            name="applied"
            value={form.applied}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Saving..." : "Save"}
          </button>

          <button
            type="button"
            onClick={() =>
              setForm({
                user: "",
                product: "",
                amount: "",
                status: "pending",
                applied: "",
              })
            }
            className="border px-5 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApplicationPage;
