import React from "react";
import { useState } from "react";
import Accordian from "./Accordian";

const Records = ({ data, headers }) => {
  const [filteredData, setFilteredData] = useState(data);
  const buttonClickHandler = () => {
    setFilteredData((prev) =>
      prev.filter((data) => data.driver_name === "Jay Chauhan")
    );
  };
  return (
    <React.Fragment>
      <button onClick={buttonClickHandler}>This Week</button>
      <table className="table">
        <thead>
          <tr>
            {headers.map((data) => (
              <th scope="col">{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <Accordian
              total_trip_time={item.total_trip_time}
              drop_time={item.drop_time}
              pickup_time={item.pickup_time}
              trip_date={item.trip_date}
              journey_id={item.journey_id}
              driver_name={item.driver_name}
              total_trip_km={item.total_trip_km}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Records;
