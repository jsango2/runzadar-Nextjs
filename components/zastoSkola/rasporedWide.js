import React from "react";
import {
  Naslov2,
  Raspored,
  RasporedWrap,
  WrapNaslovRaspored,
  Box,
} from "./style.js";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import useWindowSize from "../helper/usewindowsize";

const RasporedWide = () => {
  const size = useWindowSize();
  return (
    <Raspored>
      <WrapNaslovRaspored>
        <RasporedWrap>
          <Naslov2>Raspored treninga</Naslov2>
          <div className="wrapRaspored">
            <Box>
              <div>
                {size.width > 515 ? <h3>PONEDJELJAK</h3> : <h3>PON.</h3>}
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    marginTop: "10px",
                  }}
                >
                  <p className="lokacija">Park V. Nazora</p>
                </div>
                <p style={{ marginTop: "5px" }}>08:00 i 19:00</p>
              </div>
            </Box>
            <Box>
              <div>{size.width > 515 ? <h3>UTORAK</h3> : <h3>UTO.</h3>}</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    marginTop: "10px",
                  }}
                >
                  <p className="lokacija">Park V. Nazora</p>
                </div>
                <p style={{ marginTop: "5px" }}>19:00</p>
              </div>
            </Box>
            <Box>
              <div>{size.width > 515 ? <h3>SRIJEDA</h3> : <h3>SRI.</h3>}</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    marginTop: "10px",
                  }}
                >
                  {size.width > 420 ? (
                    <p className="lokacija">Staza Višnjik</p>
                  ) : (
                    <p className="lokacija">
                      Staza <br />
                      Višnjik
                    </p>
                  )}
                </div>
                <p style={{ marginTop: "5px" }}>08:00 i 19:00</p>
              </div>
            </Box>

            <Box>
              <div>{size.width > 515 ? <h3>ČETVRTAK</h3> : <h3>ČET.</h3>}</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    marginTop: "10px",
                  }}
                >
                  <p className="lokacija">Park V. Nazora</p>
                </div>
                <p style={{ marginTop: "5px" }}>19:00</p>
              </div>
            </Box>
            <Box>
              <div>{size.width > 515 ? <h3>PETAK</h3> : <h3>PET.</h3>}</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: "10px",
                  }}
                >
                  <p className="lokacija">Park V. Nazora</p>
                </div>
                <p style={{ marginTop: "5px" }}>18:30</p>
              </div>
            </Box>
            <Box>
              <div>{size.width > 515 ? <h3>SUBOTA</h3> : <h3>SUB.</h3>}</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",

                    marginTop: "10px",
                  }}
                >
                  <p className="lokacija">Park V. Nazora</p>
                </div>
                <p style={{ marginTop: "5px" }}>08:00</p>
              </div>
            </Box>
          </div>
        </RasporedWrap>
      </WrapNaslovRaspored>

      {size.width < 600 ? (
        <Parallax
          // className="zrakeParallaxRaspored"
          y={[-155, 25]}
        >
          <Image
            priority
            className="zrakeParallax"
            src="/Vector.png"
            alt=""
            width={1100}
            height={1000}
            layout="fixed"
          />
        </Parallax>
      ) : (
        <Parallax
          // className="zrakeParallaxRaspored"
          y={[-120, 20]}
        >
          <Image
            priority
            className="zrakeParallax"
            src="/Vector.png"
            alt=""
            width={1200}
            height={1100}
            layout="fixed"
          />
        </Parallax>
      )}
    </Raspored>
  );
};
export default RasporedWide;
