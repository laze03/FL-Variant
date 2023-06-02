import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import "../App.css";
import Footer from "../components/Footer";
import StackedBarChartComponent from "../components/StackedBarChartComponent";
import PieChartComponent from "../components/PieCHartComponent";
import BarChartComponent from "../components/BarChartComponent";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [NMPIPG, setNMPIPG] = useState([]);
  const [DIPM, setDIPM] = useState([]);
  const [DGPC, setDGPC] = useState([]);
  const [DPTM, setDPTM] = useState([]);
  const [NMPIPC, setNMPIPC] = useState([]);

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
            ([name, value]) => ({ name, "nombre de gènes mutés": value })
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

  function limit20Object(obj, listObj) {
    let newList = [];
    let list = [];
    for (let i = 0; i < 20; i++) {
      const key = getKeyOfMaxValue(obj);
      newList.push(obj[key]);
      delete obj[key];
    }
    console.log("newList: ", newList);
    console.log("listObj: ", listObj);

    for (let i = 0; i < listObj.length; i++) {
      for (let j = 0; j < newList.length; j++) {
        if (newList[j] === listObj[i].value) {
          list.push(listObj[i]);
          delete listObj[i];
          break;
        }
        if (list.length === 20) {
          break;
        }
      }
    }

    return list;
  }

  useEffect(() => {
    console.log(data);
    console.log("gene: ", NMPIPG);
    data.nombre_de_mutations_par_impact_par_gène &&
      // console.log(
      //   "limit20: ",
      //   limit20Object(data.nombre_de_mutations_par_impact_par_gène, NMPIPG)
      // );
      console.log(DIPM);
    console.log(DPTM);
  }, [data]);

  return (
    <>
      <Nav class="2" />
      <div className="dashboard">
        <div className="charts">
          <div className="chart upchart">
            <h2>
              Impact distribution per <br /> mutation
            </h2>
            <PieChartComponent
              data={DIPM}
              labelList={0}
              datakey="value"
              height={500}
            />
          </div>
          <div className="chart">
            <h2>
              {" "}
              Gene distribution by <br /> chromosome
            </h2>
            <BarChartComponent
              data={DGPC}
              Xdatakey="chromosome"
              Ydatakey="nombre de gènes mutés"
            />
          </div>
        </div>
        <div className="charts mcharts">
          <div className="chart mchart">
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
        </div>
        <div className="charts">
          <div className="chart upchart">
            <h2>Number of mutations per impact per gene</h2>
            <PieChartComponent
              data={NMPIPG}
              labelList={1}
              datakey="value"
              height={500}
            />
          </div>
          <div className="chart">
            <h2>Number of mutations per impact per chromosome</h2>
            <StackedBarChartComponent
              data={NMPIPC}
              dataKeys={["MODIFIER", "LOW", "MODERATE", "HIGH"]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
