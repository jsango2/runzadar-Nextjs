import React, { useState } from "react";
import { useDelay } from "react-use-precision-timer";
import { FaRegHandPointer } from "react-icons/fa";

export default function Zona({ tag, data, hrRange, delay, text, pointer }) {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(true);
  useDelay(delay, () => setShow(true));
  const collapsedHeightClass = hrRange ? "heightHr" : "height58";
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {show ? (
        <>
          <div
            className={`ispisCalcZoneColor ${
              isActive ? collapsedHeightClass : "heightAuto"
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
              {hrRange ? (
                <div style={{ fontSize: "15px", fontWeight: "700", marginTop: "4px" }}>
                  HR: {hrRange}
                </div>
              ) : null}
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
