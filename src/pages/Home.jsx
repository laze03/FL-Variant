import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRef } from "react";
import "../App.css";

const Home = () => {
  const inputRef = useRef(null);
  const handleFileUpload = () => {};
  const handleClick = () => {
    inputRef.current.click();
  };
  return (
    <>
      <Nav class="1" />
      <div className="main">
        <div className="upload-section">
          <p className="text">Upload the VCF file</p>
          <button type="button" onClick={handleClick} className="submit">
            Upload VCF
          </button>
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileUpload}
            accept=".vcf"
            placeholder="upload file"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
