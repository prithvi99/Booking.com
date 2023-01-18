import {
  faCalendar,
  faCalendarAlt,
  faCalendarDay,
  faCalendarDays,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import "./listSearch.css";

const ListSearch = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="listSearch">
      <h1 className="">Search</h1>
      <h2>Destination/property name:</h2>
      <input placeholder={destination} className="listSearchInput"></input>
      <h2>Check-in date</h2>

      <span onClick={() => setOpenDate(!openDate)} className="listSearchInput">
        <FontAwesomeIcon className="faIcon" icon={faCalendarAlt} />
        {`${format(date[0].startDate, "MMM d, yyyy")} `}
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </span>

      <h2>Check-out date</h2>
      <span onClick={() => setOpenDate(!openDate)} className="listSearchInput">
        <FontAwesomeIcon className="faIcon" icon={faCalendarAlt} />

        {`${format(date[0].endDate, "MMM d, yyyy")} `}
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </span>
      <h2>6-night stay</h2>
      <input
        placeholder={`${options.adult} Adults . ${options.children} Children . ${options.room} Room`}
        className="listSearchInput"
      ></input>
      <button className="listSearchButton">Search</button>
    </div>
  );
};

export default ListSearch;
