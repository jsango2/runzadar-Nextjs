import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, subDays } from "date-fns";
import { getCalendarData } from "../lib/api";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Example(allEvents) {
  let excludedArray = allEvents.allEvents.edges.map((el) => ({
    start: new Date(el.node.startDate),
    end: new Date(el.node.endDate),
  }));
  console.log(allEvents);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="datePicker">
      <DatePicker
        showPopperArrow={false}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        strictParsing
        monthsShown={2}
        // excludeDates={[addDays(new Date(), 4)]}
        // excludeDateIntervals={[
        //   { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
        //   { start: subDays(new Date(), 22), end: subDays(new Date(), 20) },
        // ]}
        excludeDateIntervals={excludedArray}
        selectsRange
        selectsDisabledDaysInRange
        isClearable={true}
        withPortal
        // inline
      />
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = await getCalendarData();
  return {
    props: { allEvents },
  };
}
