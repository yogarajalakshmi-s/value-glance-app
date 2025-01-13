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
    <div className="mb-4 flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium">Start Date</label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="YYYY"
          className="border p-2 rounded"
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
