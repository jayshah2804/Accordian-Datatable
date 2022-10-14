import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./components/Records";
import Pagination from "./components/Pagination";

const TRIP_DATA = [
  {
    id: 1,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "419 KM",
  },
  {
    id: 2,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "196 KM",
  },
  {
    id: 3,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 4,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "76 KM",
  },
  {
    id: 5,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "66 KM",
  },
  {
    id: 6,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "56 KM",
  },
  {
    id: 7,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 8,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 9,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 10,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 11,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 12,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 13,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 14,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 15,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 16,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 17,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 18,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 19,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 20,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 21,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 22,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 23,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 24,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
];

const TRIP_TITLE = [
  "Driver Name",
  "Journey_ID",
  "Trip Date",
  "Pickup Start Time",
  "Drop End Time",
  "Total Trip Time",
  "Total Trip KM",
];

let myClick = false;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState(TRIP_DATA);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  console.log(indexOfFirstRecord, indexOfLastRecord);
  let currentRecords;
  // if (myClick) {
  currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  // } else {
  // currentRecords = filteredData;
  // }
  const nPages = Math.ceil(filteredData.length / recordsPerPage);

  let fromRecords = 0;
  if (currentPage === 1) fromRecords = 1;
  else fromRecords = (currentPage - 1) * recordsPerPage;
  let toRecords = 0;
  if (
    (myClick
      ? currentPage * recordsPerPage - (filteredData.length % recordsPerPage)
      : currentPage * recordsPerPage +
        recordsPerPage -
        (filteredData.length % recordsPerPage)) > filteredData.length
  )
    toRecords = filteredData.length;
  else toRecords = currentPage * recordsPerPage;
  // toRecords = currentPage * recordsPerPage;
  const buttonClickHandler = () => {
    setCurrentPage(1);
    myClick = true;
    console.log(TRIP_DATA);
    setFilteredData(
      TRIP_DATA.filter((data) => data.driver_name === "Jay Chauhan")
    );
  };
  return (
    <div className="container mt-5">
      <h2> Simple Pagination Example in React </h2>
      <button onClick={buttonClickHandler}>This Week</button>
      <Records data={currentRecords} headers={TRIP_TITLE} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          Showing {fromRecords} to {toRecords} of {filteredData.length} entries{" "}
        </p>
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
