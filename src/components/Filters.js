import React, { useState } from "react";

const Filters = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minRevenue, setMinRevenue] = useState("");
  const [maxRevenue, setMaxRevenue] = useState("");

  const handleFilter = () => {
    onFilter({ startDate, endDate, minRevenue, maxRevenue });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 bg-white p-6 rounded-lg shadow-sm">
      <div>
        <label className="block text-sm font-medium mb-1">Start Date</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="YYYY"
          className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">End Date</label>
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="YYYY"
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Min Revenue</label>
        <input
          type="number"
          value={minRevenue}
          onChange={(e) => setMinRevenue(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Max Revenue</label>
        <input
          type="number"
          value={maxRevenue}
          onChange={(e) => setMaxRevenue(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
