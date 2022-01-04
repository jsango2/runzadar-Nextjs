import React from "react";
import {
  WrapAll,
  WrapDiv,
  Naslov,
  Naslov2,
  Text,
  Trkac,
  Raspored,
  Zrake,
  RasporedWrap,
  WrapNaslovRaspored,
  Box,
  Clanarina,
  Overlay,
} from "./style.js";
import LocationIcon from "../../svg/location.svg";
import KosaCrta from "../../svg/kosacrta.svg";
import { Parallax } from "react-scroll-parallax";
import nightRunZrake from "../../images/Vector.png";
import Image from "next/image";
import useWindowSize from "../helper/usewindowsize";

// import { HeroWrap } from "./style.js"

const ZastoSkola = () => {
  const size = useWindowSize();
  return (
    <WrapAll>
      <WrapDiv>
        <Naslov>Zašto odabrati trčanje i Školu trčanja Zadar?</Naslov>
        <div style={{ height: "47px" }}></div>
        <Text>
          Škola trčanja Zadar nudi siguran i temeljit pristup treningu za trkače
          rekreativce na svim razinama treniranosti. Treninzi su detaljno
          planirani i temeljeni na dugogodišnjim spoznajama struke, a pristup
          članovima je individualiziran. <br />
          <br />
          <KosaCrta
            style={{ position: "absolute", transform: "translate(-35px,-5px" }}
          />
          Trčanje je najbolji način za regulaciju tjelesne težine. <br />
          <br />
          <KosaCrta
            style={{ position: "absolute", transform: "translate(-35px,-5px" }}
          />
          Treniranje u grupi zajedno s trkačima istih mogućnostima znači dodatnu
          motivaciju trkaču i postizanje optimalnih pomaka u sposobnostima.{" "}
          <br />
          <br />
          <KosaCrta
            style={{ position: "absolute", transform: "translate(-35px,-5px" }}
          />
          Edukacija korisnika o pravilnoj prehrani, osnovama treninga i važnosti
          pravilnog odabira opreme za trčanje.
        </Text>
        <Overlay />
        <Trkac />
        <Raspored>
          <WrapNaslovRaspored>
            <Naslov2>Raspored treninga</Naslov2>
            <RasporedWrap>
              <Box>
                <div>
                  <h3>PON.</h3>
                </div>
                <div>
                  <p style={{ marginTop: "15px", fontSize: "16px" }}>08:00</p>
                  <p style={{ marginTop: "5px", fontSize: "16px" }}>19:00</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",

                      marginTop: "10px",
                    }}
                  >
                    <LocationIcon style={{ marginRight: "10px" }} />{" "}
                    <p
                      className="lokacija"
                      style={{ textTransform: "uppercase" }}
                    >
                      park V. NAZORA
                    </p>
                  </div>
                </div>
              </Box>
              <Box>
                <div>
                  <h3>UTO.</h3>
                </div>
                <div>
                  <p style={{ marginTop: "5px", fontSize: "16px" }}>19:00</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",

                      marginTop: "10px",
                    }}
                  >
                    <LocationIcon style={{ marginRight: "10px" }} />{" "}
                    <p className="lokacija">PARK V. NAZORA</p>
                  </div>
                </div>
              </Box>
              <Box>
                <div>
                  <h3>SRI.</h3>
                </div>
                <div>
                  <p style={{ marginTop: "15px", fontSize: "16px" }}>08:00</p>
                  <p style={{ marginTop: "5px", fontSize: "16px" }}>19:00</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",

                      marginTop: "10px",
                    }}
                  >
                    <LocationIcon style={{ marginRight: "10px" }} />{" "}
                    <p className="lokacija">STAZA VIŠNJIK</p>
                  </div>
                </div>
              </Box>
              <Box>
                <div>
                  <h3>ČET.</h3>
                </div>
                <div>
                  <p style={{ marginTop: "5px", fontSize: "16px" }}>19:00</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",

                      marginTop: "10px",
                    }}
                  >
                    <LocationIcon style={{ marginRight: "10px" }} />{" "}
                    <p className="lokacija">PARK V. NAZORA</p>
                  </div>
                </div>
              </Box>
              <Box>
                <div>
                  <h3>PET.</h3>
                </div>
                <div>
                  <p style={{ marginTop: "5px", fontSize: "16px" }}>19:00</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      marginTop: "10px",
                    }}
                  >
                    <LocationIcon style={{ marginRight: "10px" }} />{" "}
                    <p className="lokacija">PARK V. NAZORA</p>
                  </div>
                </div>
              </Box>
              <Box>
                <div>
                  <h3>SUB.</h3>
                </div>
                <div>
                  <p style={{ marginTop: "15px", fontSize: "16px" }}>08:00</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",

                      marginTop: "10px",
                    }}
                  >
                    <LocationIcon style={{ marginRight: "10px" }} />{" "}
                    <p className="lokacija">PARK V. NAZORA</p>
                  </div>
                </div>
              </Box>
            </RasporedWrap>
          </WrapNaslovRaspored>
          {size.width < 600 ? (
            <Parallax
              // className="zrakeParallaxRaspored"
              y={[-95, -15]}
            >
              <Image
                className="zrakeParallax"
                src="/Vector.png"
                alt=""
                width={800}
                height={700}
                layout="fixed"
              />
            </Parallax>
          ) : (
            <Parallax
              // className="zrakeParallaxRaspored"
              y={[-65, -18]}
            >
              <Image
                className="zrakeParallax"
                src="/Vector.png"
                alt=""
                width={1200}
                height={700}
                layout="fixed"
              />
            </Parallax>
          )}
        </Raspored>
        <Clanarina>
          <div style={{ margin: "auto" }}>
            Povoljna članarina{" "}
            <b>od 180 kn/mjesečno osigurava 3 treninga tjedno</b>
            vrhunskog trenažnog procesa, osmišljenog da vas dovede do vaših
            maksimalnih trkačkih mogućnosti.
          </div>
        </Clanarina>
      </WrapDiv>
    </WrapAll>
  );
};

export default ZastoSkola;
