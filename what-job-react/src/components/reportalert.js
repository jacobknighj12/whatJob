import axios from "axios";
import React, { useState } from "react";

export function ReportAlert() {
  const [reportData, setReportData] = useState([]);

  const handleOnClick = (event) => {
    var config = {
      method: "get",
      url: "http://localhost:3000/api/reportalert",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setReportData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onClickTwo = (event) => {
    console.log(typeof reportData);
    console.log(reportData);
  };

  return (
    <>
      <div>
        <button onClick={handleOnClick}>Test</button>
        <button onClick={onClickTwo}>Test 2 </button>
        <ul>
          {reportData &&
            reportData.map((item, i) => {
              return <li key={i}>{item.id}</li>;
            })}
        </ul>
      </div>
      <div></div>
    </>
  );
}
