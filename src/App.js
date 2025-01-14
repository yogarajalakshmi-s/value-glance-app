import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./components/Filters";
import Table from "./components/Table";
import './index.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async (filters = {}) => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/financial-data', {
            params: filters,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        setData(response.data);
        setFilteredData(response.data);
    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            console.error('Network error:', error.message);
        } else {
            console.error('Error fetching data:', error);
        }
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const applyFilters = (filters) => {
    fetchData(filters);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Apple (AAPL) Financial Data</h1>
      <Filters onFilter={applyFilters} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;
