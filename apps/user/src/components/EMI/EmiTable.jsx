import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function EmiTable({ data, startYear = new Date().getFullYear() }) {
  const [expandedYear, setExpandedYear] = useState(null);
  const groupedData = groupDataByYear(data, startYear);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="mt-6 overflow-auto border">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-blue-400 text-white font-semibold">
          <tr>
            <th className="py-2 px-4 border">Year</th>
            <th className="py-2 px-4 border">Month</th>
            <th className="py-2 px-4 border">EMI (₹)</th>
            <th className="py-2 px-4 border">Principal Paid (₹)</th>
            <th className="py-2 px-4 border">Interest Paid (₹)</th>
            <th className="py-2 px-4 border">Remaining Balance (₹)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([year, rows]) => {
            const isExpanded = expandedYear === year;

            const yearSummary = rows.reduce(
              (acc, curr) => {
                acc.emi += curr.emi;
                acc.principal += curr.principal;
                acc.interest += curr.interest;
                acc.lastBalance = curr.balance;
                return acc;
              },
              { emi: 0, principal: 0, interest: 0, lastBalance: 0 }
            );

            return (
              <>
                <tr
                  key={`year-${year}`}
                  className={`cursor-pointer border border-gray-300 ${isExpanded ? "bg-gray-50" : "bg-transparent"
                    }`}
                  onClick={() => toggleYear(year)}
                >
                  <td className="flex gap-2 items-center p-3 text-blue-600 font-semibold">
                    {year}
                    {isExpanded ? (
                      <FiMinus className="bg-blue-300 text-white rounded" />
                    ) : (
                      <FiPlus className="bg-blue-300 text-white rounded" />
                    )}
                  </td>
                  <td className="py-2 px-4 border text-gray-500 font-medium">—</td>
                  <td className="py-2 px-4 border font-medium">₹{yearSummary.emi.toFixed(2)}</td>
                  <td className="py-2 px-4 border font-medium">₹{yearSummary.principal.toFixed(2)}</td>
                  <td className="py-2 px-4 border font-medium">₹{yearSummary.interest.toFixed(2)}</td>
                  <td className="py-2 px-4 border font-medium">₹{yearSummary.lastBalance.toFixed(2)}</td>
                </tr>

                {isExpanded &&
                  rows.map((row, idx) => (
                    <tr key={`month-${row.month}-${year}`} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border"></td>
                      <td className="py-2 px-4 border">{row.monthName}</td>
                      <td className="py-2 px-4 border">₹{row.emi}</td>
                      <td className="py-2 px-4 border">₹{row.principal}</td>
                      <td className="py-2 px-4 border">₹{row.interest}</td>
                      <td className="py-2 px-4 border">₹{row.balance}</td>
                    </tr>
                  ))}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Helper outside component
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function groupDataByYear(data, startYear) {
  const grouped = {};
  data.forEach((row, index) => {
    const year = startYear + Math.floor(index / 12);
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push({ ...row, monthName: monthNames[index % 12] });
  });
  return grouped;
}
