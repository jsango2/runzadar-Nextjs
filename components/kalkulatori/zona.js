import React, { useEffect, useState } from "react";
import { useDelay } from "react-use-precision-timer";
import { FaRegHandPointer } from "react-icons/fa";

export default function Zona({ tag, data, delay, text, pointer }) {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(true);
  useDelay(delay, () => setShow(true));
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {show ? (
        <>
          <div
            className={`ispisCalcZoneColor ${
              isActive ? "height58" : "heightAuto"
            }`}
            onClick={handleToggle}
          >
            {pointer && (
              <div
                style={{
                  position: "absolute",
                  width: "30px",
                  height: "30px",
                  left: "20px",
                  transform: "rotate(35deg)",
                }}
              >
                <FaRegHandPointer />
              </div>
            )}
            <div>
              <div className="zTag">{tag} </div>
              {data} min/km
            </div>

            <div className="textIspodZone"> {text}</div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
