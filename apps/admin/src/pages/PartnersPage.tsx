import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const API_URL = "/api/partners";

const PartnersPage = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    type: "Bank",
    contactPerson: "",
    email: "",
    phone: "",
    commission: "",
  });

  // ================= FETCH PARTNERS =================
  const fetchPartners = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPartners(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  // ================= HANDLE INPUT =================
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= ADD PARTNER =================
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Add failed");

      setForm({
        name: "",
        type: "Bank",
        contactPerson: "",
        email: "",
        phone: "",
        commission: "",
      });

      setShowModal(false);
      fetchPartners();
    } catch (err) {
      alert("Add partner failed");
      console.error(err);
    }
  };

  // ================= DELETE PARTNER =================
  const handleDelete = async (id: string) => {
    if (!window.confirm("हा Partner delete करायचा आहे का?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      fetchPartners();
    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Partners</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          <Plus size={18} /> Add Partner
        </button>
      </div>

      {/* ================= PARTNER LIST ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partners.map((p) => (
          <div key={p._id} className="border rounded p-4 relative">
            <h2 className="font-semibold text-lg mb-1">
              Partner Name = {p.name}
            </h2>

            <p className="text-sm text-gray-600 mb-1">
              Type = {p.type}
            </p>

            <p className="text-sm mb-1">
              Contact Person = {p.contactPerson || "-"}
            </p>

            <p className="text-sm mb-1">
              Email = {p.email || "-"}
            </p>

            <p className="text-sm mb-1">
              Phone = {p.phone || "-"}
            </p>

            <p className="text-sm mb-1">
              Commission = {p.commission ? `${p.commission}%` : "-"}
            </p>

            <button
              onClick={() => handleDelete(p._id)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* ================= ADD MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded w-full max-w-md space-y-3"
          >
            <h2 className="text-xl font-bold">Add Partner</h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Partner Name"
              className="w-full border p-2"
              required
            />

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option>Bank</option>
              <option>NBFC</option>
              <option>Insurance</option>
            </select>

            <input
              name="contactPerson"
              value={form.contactPerson}
              onChange={handleChange}
              placeholder="Contact Person"
              className="w-full border p-2"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border p-2"
            />

            <input
              name="commission"
              value={form.commission}
              onChange={handleChange}
              placeholder="Commission %"
              className="w-full border p-2"
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PartnersPage;
