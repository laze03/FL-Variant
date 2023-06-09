import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Select from "react-select";

const Filter = () => {
  // The useState hook is used to store the data fetched from the backend.
  const data = ["CHROM", "TYPE", "IMPACT", "GENE"];
  const [csvData, setCsvData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selected, setSelected] = useState({});
  const [exist, setExist] = useState(false);
  const [analysisData, setAnalysisData] = useState([]);

  const handleSelect = (selectedOptions, filter) => {
    // The handleSelect function is used to handle the select event on the filter options.
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelected((prevState) => ({
      ...prevState,
      [filter]: selectedValues,
    }));
  };

  // The useEffect hook is used to fetch data from the backend.

  useEffect(() => {
    axios
      .get("http://localhost:5000/table")
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
        setSelected((prevState) => {
          const updatedSelected = {};
          data.forEach((filter) => {
            updatedSelected[filter] = [];
          });
          return { ...prevState, ...updatedSelected };
        });
      })
      .catch((error) => {
        console.error(
          "An error occurred while loading the filter data:",
          error
        );
      });
    axios.get("http://localhost:5000/analysis").then((response) => {
      setAnalysisData(response.data);
    });
  }, []);

  // The handleSubmit function is used to handle the submit event on the filter options.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected:", selected);
    setExist(true);

    axios
      .post("http://localhost:5000/table", selected)
      .then((response) => {
        setCsvData(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while filtering the data:", error);
      });

    axios.post("http://localhost:5000/analysis", selected).then((response) => {
      setAnalysisData(response.data);
    });
  };

  // The handleReport function is used to handle the report generation based on the filter options.

  function handleReport(e) {
    e.preventDefault();
    selected
      ? axios
          .post("http://localhost:5000/download", selected, {
            responseType: "blob",
          })
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "report.pdf");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          })
          .catch((error) => {
            console.error("Error downloading the file:", error);
            // Handle error
          })
      : axios
          .get("http://localhost:5000/download", { responseType: "blob" })
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "report.pdf");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
          })
          .catch((error) => {
            console.error("Error downloading the file:", error);
            // Handle error
          });
  }

  function convertJSONToCSV(jsonData) {
    // The convertJSONToCSV function is used to convert the JSON data to CSV.
    const header = Object.keys(jsonData[0]);
    const rows = jsonData.map((obj) => Object.values(obj));

    const csvContent = [header, ...rows].map((row) => row.join(",")).join("\n");

    return csvContent;
  }

  function handleDownload(e) {
    // The handleDownload function is used to handle the download event on the CSV file.
    e.preventDefault();
    const csvContent = convertJSONToCSV(csvData);
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "data.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <>
      <Nav class="3" />
      <div className="filter">
        <div className="up">
          <h1>Filters</h1>
          <div className="filters">
            {data.map(
              // The map function is used to iterate over the data array.
              (filter, index) =>
                filterData &&
                filterData[filter] &&
                filterData[filter].length > 0 && (
                  <div key={index} className={`filter${index % 2}`}>
                    <h3>{filter}</h3>
                    <Select // The Select component is used to display the filter options.
                      className="select"
                      options={filterData[filter].map((option) => ({
                        value: option,
                        label: option,
                      }))}
                      isMulti
                      onChange={(selectedOptions) =>
                        handleSelect(selectedOptions, filter)
                      }
                    />
                  </div>
                )
            )}
          </div>
          <div className="buttons">
            <button className="filterB" onClick={handleSubmit}>
              Apply Filters
            </button>
            <button className="csvB" onClick={handleDownload}>
              Donwload CSV
            </button>
            <button className="reportB" onClick={handleReport}>
              Generate Report
            </button>
          </div>
        </div>
        <div className="down">
          <div className="table">
            <h1>{!exist ? "Data" : "Filtered data"}</h1>
            <table className="csvTable">
              {csvData.length > 0 && (
                <tr className="head">
                  {Object.keys(csvData[0]).map(
                    (
                      key,
                      index // The map function is used to iterate over the keys of the first element of the csvData array.
                    ) => (
                      <th key={index} className={`H${index}`}>
                        {key}
                      </th>
                    )
                  )}
                </tr>
              )}
              <tbody>
                {csvData.map((row, rowIndex) => (
                  <tr className={`R${rowIndex % 2}`} key={rowIndex}>
                    {Object.values(row).map(
                      (
                        cell,
                        cellIndex // The map function is used to iterate over the values of the row.
                      ) => (
                        <td key={cellIndex} className={`D${cellIndex} `}>
                          {cell}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="analysis">
            <h1>Analysis</h1>
            <div className="analysisText">
              This table contains{" "}
              <span>
                {analysisData &&
                  analysisData["counts"] &&
                  Object.values(analysisData["counts"]).reduce(
                    (acc, curr) => acc + curr,
                    0
                  )}{" "}
                {analysisData && analysisData["mutationType"]}{" "}
              </span>
              consisting of the following types:
              <br />
              <br />
              {analysisData &&
                analysisData["counts"] &&
                Object.entries(analysisData["counts"]).map(([key, value]) => (
                  <p>
                    {`${key}: `}
                    <span>{`${value}`}</span>{" "}
                  </p>
                ))}
              <br />
              {analysisData &&
                analysisData["mutationType"] &&
                analysisData["mutationType"] === "INDEL" && (
                  <div className="divMargin">
                    Resulting in <span>{analysisData["insertionsCount"]}</span>{" "}
                    insertions & <span>{analysisData["deletionsCount"]}</span>{" "}
                    deletions.
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Filter;
