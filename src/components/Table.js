import React, { useState, useEffect } from "react";

const Table = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const newSortedData = [...data].sort((a, b) => {
      if (direction === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });
    setSortedData(newSortedData);
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th onClick={() => handleSort('date')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
              Date {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('revenue')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
              Revenue {sortConfig.key === 'revenue' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('netIncome')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200">
              Net Income {sortConfig.key === 'netIncome' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross Profit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EPS</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operating Income</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.revenue}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.netIncome}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.grossProfit}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.eps}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
