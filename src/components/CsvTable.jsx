import React, { useEffect, useState } from "react";
import axios from "axios";

const CsvTable = () => {
  const [csvData, setCsvData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/table") // Update the URL if your server is running on a different port or domain
      .then((response) => {
        setCsvData(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while loading the CSV data:", error);
      });
    axios
      .get("http://localhost:5000/filters")
      .then((response) => {
        setFilterData(response.data);
      })
      .catch((error) => {
        console.error(
          "An error occurred while loading the filter data:",
          error
        );
      });
  }, []);

  useEffect(() => {
    console.log(csvData);
    console.log(filterData);
  }, [csvData, filterData]);

  return (
    <div>
      <h1>Affichage des données filtrées</h1>
      <table id="csvTable">
        <tbody>
          {csvData.length > 0 && (
            <tr>
              {Object.keys(csvData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          )}
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvTable;
