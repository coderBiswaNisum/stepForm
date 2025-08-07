import React from "react";
import { useSelector } from "react-redux";

function SubmittedData() {
  // const data = useSelector((c) => console.log(c));
  return (
    <div>
      {/* <div style={{ maxWidth: 600, margin: "auto", fontFamily: "sans-serif" }}>
      <h2>Entered Data</h2>

      {Object.entries(data).map(([sectionKey, sectionValue]) => (
        <div key={sectionKey} style={{ marginBottom: 20 }}>
          <h3>{sectionKey}</h3>
          <ul>
            {Object.entries(sectionValue).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong>{" "}
                {typeof value === "boolean" ? (value ? "Yes" : "No") : value || "(empty)"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}
    </div>
  );
}

export default SubmittedData;
