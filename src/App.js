import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    startYear: '',
    endYear: '',
    minRevenue: '',
    maxRevenue: '',
    minNetIncome: '',
    maxNetIncome: '',
  });
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    fetchData();
  }, [filters, sortBy, sortOrder]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/income-statement', {
      params: {
        ...filters,
        sort_by: sortBy,
        sort_order: sortOrder,
      },
    });
    setData(response.data);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Apple Inc. Annual Income Statement</h1>

      <div className="mb-4 grid grid-cols-3 gap-4">
        <input
          type="number"
          name="startYear"
          placeholder="Start Year"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="endYear"
          placeholder="End Year"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="minRevenue"
          placeholder="Min Revenue"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="maxRevenue"
          placeholder="Max Revenue"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="minNetIncome"
          placeholder="Min Net Income"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="maxNetIncome"
          placeholder="Max Net Income"
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 cursor-pointer" onClick={() => handleSort('date')}>Date</th>
              <th className="p-2 cursor-pointer" onClick={() => handleSort('revenue')}>Revenue</th>
              <th className="p-2 cursor-pointer" onClick={() => handleSort('netIncome')}>Net Income</th>
              <th className="p-2">Gross Profit</th>
              <th className="p-2">EPS</th>
              <th className="p-2">Operating Income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.date} className="border-b">
                <td className="p-2">{item.date}</td>
                <td className="p-2">{item.revenue.toLocaleString()}</td>
                <td className="p-2">{item.netIncome.toLocaleString()}</td>
                <td className="p-2">{item.grossProfit.toLocaleString()}</td>
                <td className="p-2">{item.eps.toFixed(2)}</td>
                <td className="p-2">{item.operatingIncome.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
