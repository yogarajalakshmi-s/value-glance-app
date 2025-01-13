import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./components/Filters";
import Table from "./components/Table";
import './index.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async (filters = {}) => {
    const url = new URL("http://127.0.0.1:5000/financial-data");
    Object.keys(filters).forEach((key) =>
      filters[key] ? url.searchParams.append(key, filters[key]) : null
    );

    try {
      const response = await axios.get(url.toString());
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilters = (filters) => {
    fetchData(filters);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Apple Financial Data</h1>
      <Filters onFilter={applyFilters} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;
