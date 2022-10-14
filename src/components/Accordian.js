import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Accordian = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <tr
        style={{ cursor: "pointer" }}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <td>{props.driver_name} </td>
        <td>{props.journey_id} </td>
        <td>{props.trip_date} </td>
        <td>{props.pickup_time} </td>
        <td>{props.drop_time} </td>
        <td>{props.total_trip_time} </td>
        <td>
          {props.total_trip_km}{" "}
          {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}{" "}
        </td>
      </tr>
      {isActive && (
        <td colspan="7">
          {props.driver_name} has completed {props.total_trip_km}
        </td>
      )}
    </React.Fragment>
  );
};

export default Accordian;
