import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Select from "react-select";

const DropdownMenu = ({ options, onSelect, filter }) => {
  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    onSelect(selectedValues);
  };

  const dropdownOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div>
      <h3>{filter}</h3>
      <Select options={dropdownOptions} isMulti onChange={handleChange} />
    </div>
  );
};

const Filter = () => {
  const [csvData, setCsvData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const data = ["CHROM", "TYPE", "IMPACT", "NAME"];

  const handleSelect = (selectedOptions) => {
    console.log("Selected Options:", selectedOptions);
    // Perform any action with the selected options
  };

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

  // useEffect(() => {
  //   console.log(csvData);
  //   console.log("filter data: ", filterData);
  // }, [csvData, filterData]);

  return (
    <>
      <Nav class="3" />
      <div className="filter">
        <div className="filters">
          {data.map(
            (filter, index) =>
              filterData &&
              filterData[filter] &&
              filterData[filter].length > 0 && (
                <DropdownMenu
                  filter={filter}
                  options={filterData[filter]}
                  onSelect={handleSelect}
                />
              )
          )}
        </div>
        <div className="table">
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default Filter;
