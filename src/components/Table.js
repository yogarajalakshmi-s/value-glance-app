import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Date</th>
            <th className="px-6 py-3 text-left">Revenue</th>
            <th className="px-6 py-3 text-left">Net Income</th>
            <th className="px-6 py-3 text-left">Gross Profit</th>
            <th className="px-6 py-3 text-left">EPS</th>
            <th className="px-6 py-3 text-left">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-6 py-2">{row.date}</td>
              <td className="px-6 py-2">{row.revenue}</td>
              <td className="px-6 py-2">{row.netIncome}</td>
              <td className="px-6 py-2">{row.grossProfit}</td>
              <td className="px-6 py-2">{row.eps}</td>
              <td className="px-6 py-2">{row.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
