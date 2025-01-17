import React, { useState } from "react";
import Papa from "papaparse";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CsvUpload = () => {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setCsvData(results.data.slice(0, 10)); // Display only the first 10 rows
          setHeaders(Object.keys(results.data[0] || {}));
          setIsFileUploaded(true);
        },
        error: (error) => {
          console.error("Error parsing CSV file:", error);
        },
      });
    }
  };

  const handleClearFile = () => {
    setCsvData([]);
    setHeaders([]);
    setIsFileUploaded(false);
  };

  const handleStoreData = async () => {
    try {
      const collectionRef = collection(firestore, "csvData");
      await Promise.all(
        csvData.map((row) => addDoc(collectionRef, row))
      );
      alert("Data successfully stored in Firestore!");
    } catch (error) {
      console.error("Error storing data in Firestore:", error);
      alert("Error storing data. Check the console for details.");
    }
  };

  return (
    <div className="csv-upload-container">
      <h1 className="app-title">Upload Your CSV</h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="file-input"
      />
      {isFileUploaded && (
        <>
          <div className="csv-preview">
            <h2>Preview CSV Data (First 10 Rows)</h2>
            <table className="csv-table">
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => (
                  <tr key={index}>
                    {headers.map((header) => (
                      <td key={header}>{row[header]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button-group">
            <button className="btn-primary" onClick={handleStoreData}>
              Store in Firestore
            </button>
            <button className="btn-secondary" onClick={handleClearFile}>
              Clear File
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CsvUpload;
