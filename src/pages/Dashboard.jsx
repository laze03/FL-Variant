import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import "../App.css";
import Footer from "../components/Footer";
import StackedBarChartComponent from "../components/StackedBarChartComponent";
import PieChartComponent from "../components/PieCHartComponent";
import BarChartComponent from "../components/BarChartComponent";
const Dashboard = () => {
  // The useState hook is used to store the data fetched from the backend.

  const [data, setData] = useState([]);
  const [NMPIPG, setNMPIPG] = useState([]);
  const [DIPM, setDIPM] = useState([]);
  const [DGPC, setDGPC] = useState([]);
  const [DPTM, setDPTM] = useState([]);
  const [NMPIPC, setNMPIPC] = useState([]);

  // The useEffect hook is used to fetch data from the backend.
  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard")
      .then((res) => {
        setData(res.data);
        setNMPIPG(res.data.nombre_de_mutations_par_impact_par_gène);
        setDIPM(
          Object.entries(res.data.distribution_impact_par_mutation).map(
            ([name, value]) => ({ name, value })
          )
        );
        setDGPC(
          Object.entries(res.data.distribution_des_gènes_par_chromosome).map(
            ([name, value]) => ({ name, "number of mutated genes": value })
          )
        );
        setDPTM(res.data.distribution_par_type_de_mutation);
        setNMPIPC(
          Object.entries(
            res.data.nombre_mutation_par_impact_par_chromosome
          ).map(([name, value]) => ({
            name,
            MODIFIER: value.MODIFIER,
            MODERATE: value.MODERATE,
            HIGH: value.HIGH,
            LOW: value.LOW,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // The getKeyOfMaxValue function is used to get the key of the maximum value in an object.
  function getKeyOfMaxValue(obj) {
    let max = 0;
    let keyOfMax = "";
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] > max) {
          max = obj[key];
          keyOfMax = key;
        }
      }
    }
    return keyOfMax;
  }

  return (
    <>
      <Nav class="2" />
      <div className="dashboard">
        <div className=" c1 charts">
          <h2>
            Impact distribution per <br /> mutation
          </h2>
          <PieChartComponent // The PieChartComponent is used to render the pie chart.
            data={DIPM}
            labelList={0}
            datakey="value"
            height={500}
          />
        </div>
        <div className=" c2 charts">
          <h2>
            Gene distribution by <br /> chromosome
          </h2>
          <BarChartComponent // The BarChartComponent is used to render the bar chart.
            data={DGPC}
            Xdatakey="chromosome"
            Ydatakey="number of mutated genes"
          />
        </div>
        <div className="c3  charts">
          <h2>Distribution by mutation type</h2>
          <PieChartComponent
            data={DPTM}
            labelList={1}
            datakey="nombre de mutation"
            height={1030}
            width={600}
            radius={280}
          />
        </div>
        <div className="c4 charts">
          <h2>Number of mutations per impact per gene</h2>
          <PieChartComponent
            data={NMPIPG}
            labelList={1}
            datakey="value"
            height={500}
          />
        </div>
        <div className="c5 charts">
          <h2>Number of mutations per impact per chromosome</h2>
          <StackedBarChartComponent // The StackedBarChartComponent is used to render the stacked bar chart.
            data={NMPIPC}
            dataKeys={["MODIFIER", "LOW", "MODERATE", "HIGH"]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
