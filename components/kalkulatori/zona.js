import React, { useEffect, useState } from "react";
import { useDelay } from "react-use-precision-timer";

export default function Zona({ tag, data, delay }) {
  console.log(delay);
  const [show, setShow] = useState(false);
  useDelay(delay, () => setShow(true));
  return (
    <>
      {show ? (
        <div className="ispisCalcZoneColor">
          <div className="zTag">{tag} </div> {data} min/km
        </div>
      ) : (
        ""
      )}
    </>
  );
}
