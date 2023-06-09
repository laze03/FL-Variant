//The imports section includes the necessary components and dependencies for the home page.

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Chromosome from "../components/Chromosome";
import axios from "axios";
import { useRef } from "react";
import "../App.css";
import science from "../assets/science.png";

//The Home component is the main page of the website. It includes the upload section, animation section, and about section.
const Home = () => {
  const inputRef = useRef(null);
  const dashboardRef = useRef(null);
  // The useEffect hook is used to fetch data from the backend.
  const handleFileUpload = (files) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    // The axios library is used to make a POST request to the backend.
    axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        dashboardRef.current.click(); // Redirect to dashboard
      });
  };
  // The handleClick function is used to handle the click event on the upload button.
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDownload = async () => {
    console.log("Current directory:", window.location.pathname);
    const response = await fetch("./sample.vcf"); // Replace with the actual path to the sample.vcf file
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sample.vcf";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Nav class="1" dashboardRef={dashboardRef} />
      <div className="home">
        <div className="main">
          <div className="upload-section">
            <h1 className="title">
              Variant analysis & visualization dashboard
            </h1>
            <br />
            <p className="text">
              Welcome to our website dedicated to data visualization, providing
              you with an interactive and user-friendly experience to explore
              and understand the world of genetic variations.
            </p>
            <br />
            <p>get started by uploading your file now!</p>
            <div className="buttons">
              <button type="button" onClick={handleClick} className="submit">
                Upload VCF file
              </button>
              <button className="vcf" onClick={handleDownload}>
                Download VCF sample
              </button>
            </div>
            <input
              ref={inputRef} // The inputRef is used to reference the input element.
              type="file" // The input element is used to upload the file.
              onChange={(e) => handleFileUpload(e.target.files)} // The onChange event is used to handle the file upload.
              multiple // The multiple attribute is used to allow multiple files to be uploaded.
              accept=".vcf" // The accept attribute is used to specify the file types that the server accepts.
              placeholder="upload file" // The placeholder attribute is used to specify a short hint that describes the expected value of the input field.
            />
          </div>
          <div className="animation-section">
            <Chromosome /* the interactive Chromosome */ />
          </div>
        </div>

        <div className="about">
          <h2>About FL Variant</h2>
          <div className="section">
            <div className="text">
              <p>
                With FL Variant, you can easily upload data from multiple
                patients and gain comprehensive insights into mutation types for
                each individual. The dashboard allows you to filter results
                based on various criteria such as genes, mutation types, or
                genomic impact.
              </p>
            </div>
            <div className="img">
              <img src={science} alt="science" />
            </div>
            <div className="text">
              <p>
                At FL Variant, we prioritize data visualization to enhance your
                understanding. Through interactive graphs and visual schematics,
                you can explore key information including genes, mutations
                (SNP/indel), and chromosomes.
              </p>
            </div>
          </div>

          <h2>Key features in FL Variant</h2>
          <div className="section">
            <div className="text">
              <h3>Interactives charts</h3>
              <p>
                Gain valuable insights and make informed decisions as you
                navigate through the interactive charts on FL Variant
              </p>
            </div>
            <div className="text">
              <h3>Personalized filters</h3>
              <p>
                With personalized filters, you can refine and narrow down your
                analysis based on specific criteria such as genes, mutation
                types, genomic impacts. Tailor the data view to suit your
                research needs and focus on the aspects that matter most.
              </p>
            </div>

            <div className="text">
              <h3>Reports</h3>
              <p>
                With the reports feature of the FL Variant website, you can
                efficiently communicate your analysis outcomes and contribute to
                the advancement of genomic understanding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
