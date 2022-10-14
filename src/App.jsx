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
    total_trip_km: "49 KM",
  },
  {
    id: 2,
    driver_image: "",
    driver_name: "Anil shah",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "15/09/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "96 KM",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = TRIP_DATA.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(TRIP_DATA.length / recordsPerPage);
  console.log(indexOfLastRecord);
  console.log(indexOfFirstRecord);
  console.log(currentRecords);
  let fromRecords = 0;
  if (currentPage === 1) fromRecords = 1;
  else fromRecords = (currentPage - 1) * recordsPerPage;
  let toRecords = 0;
  if (
    currentPage * recordsPerPage +
      recordsPerPage -
      (TRIP_DATA.length % recordsPerPage) >
    TRIP_DATA.length
  )
    toRecords = TRIP_DATA.length;
  else toRecords = currentPage * recordsPerPage;

  return (
    <div className="container mt-5">
      <h2> Simple Pagination Example in React </h2>
      <Records data={currentRecords} headers={TRIP_TITLE} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          Showing {fromRecords} to {toRecords} of {TRIP_DATA.length} entries{" "}
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
