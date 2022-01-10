import React, { useEffect, useState } from "react";
import Button from "../button/button";
import { WrapForm } from "../../styles/calcStyles";
import Cleave from "cleave.js/react";
import { timeStringToFloat, minTommss, converter, minTommss2 } from "./formule";
import { useDelay } from "react-use-precision-timer";
import Zona from "./zona";

export default function ZoneKalkulator() {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [vrijemeTrcanja, setVrijemeTrcanja] = useState("");
  const [procjena5, setProcjena5] = useState("");
  const [procjena10, setProcjena10] = useState("");
  const [procjena21, setProcjena21] = useState("");
  const [procjena42, setProcjena42] = useState("");
  const [zona1, setZona1] = useState("");
  const [zona2, setZona2] = useState("");
  const [zona3, setZona3] = useState("");
  const [zona4, setZona4] = useState("");
  const [zona5, setZona5] = useState("");
  const [ispisVdot, setIspisVdot] = useState("");
  const [ispisDuzina, setIspisDuzina] = useState("");
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [udaljenost, setUdaljenost] = useState("");

  const handleTimeChange = (event) => {
    setVrijemeTrcanja(event.target.value);
  };

  // const Zona = ({ tag, data, delay, show, setShow }) => {
  //   console.log(delay);
  //   const [show, setShow] = useState(false);
  //   useDelay({ delay }, () => setShowZ1(true));
  //   return (
  //     <>
  //       {showZ1 ? (
  //         <div className="ispisCalcZoneColor">
  //           <div className="zTag">{tag} </div> {data} min/km
  //         </div>
  //       ) : (
  //         ""
  //       )}
  //     </>
  //   );
  // };
  // const Zona2 = () => {
  //   const [showZ2, setShowZ2] = useState(false);
  //   useDelay(700, () => setShowZ2(true));
  //   return (
  //     <>
  //       {showZ2 ? (
  //         <div className="ispisCalcZoneColor">
  //           <div className="zTag">Z2 </div> {zona2} min/km
  //         </div>
  //       ) : (
  //         ""
  //       )}
  //     </>
  //   );
  // };
  // const Zona3 = () => {
  //   const [showZ3, setShowZ3] = useState(false);
  //   useDelay(1100, () => setShowZ3(true));
  //   return (
  //     <>
  //       {showZ3 ? (
  //         <div className="ispisCalcZoneColor">
  //           <div className="zTag">Z3 </div> {zona3} min/km
  //         </div>
  //       ) : (
  //         ""
  //       )}
  //     </>
  //   );
  // };
  // const Zona4 = () => {
  //   const [showZ4, setShowZ4] = useState(false);
  //   useDelay(1500, () => setShowZ4(true));
  //   return (
  //     <>
  //       {showZ4 ? (
  //         <div className="ispisCalcZoneColor">
  //           <div className="zTag">Z4 </div> {zona4} min/km
  //         </div>
  //       ) : (
  //         ""
  //       )}
  //     </>
  //   );
  // };

  // const Zona5 = () => {
  //   const [showZ5, setShowZ5] = useState(false);
  //   useDelay(1900, () => setShowZ5(true));
  //   return (
  //     <>
  //       {showZ5 ? (
  //         <div className="ispisCalcZoneColor">
  //           <div className="zTag">Z5 </div> {zona5} min/km
  //         </div>
  //       ) : (
  //         ""
  //       )}
  //     </>
  //   );
  // };
  const ProjekcijaRez = () => {
    const [rez, setRez] = useState(false);
    useDelay(2300, () => setRez(true));
    return (
      <>
        {rez ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="ispisCalcZone" style={{ margin: " 30px 10px" }}>
              Projekcije rezultata:
            </div>
            <div className="ispisCalcZone">5k {procjena5}</div>
            <div className="ispisCalcZone">10k {procjena10}</div>
            <div className="ispisCalcZone">21k {procjena21}</div>
            <div className="ispisCalcZone">42k {procjena42}</div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (udaljenost == 5) {
      if (vrijemeTrcanja !== "") {
        var minute = timeStringToFloat(vrijemeTrcanja);
        var procjena10k = minute * 2.0817;
        var procjena21k = minute * 4.6;
        var procjena42k = minute * 9.45;
        setProcjena10(converter(procjena10k));
        setProcjena21(converter(procjena21k));
        setProcjena42(converter(procjena42k));
        setProcjena5(vrijemeTrcanja);
        setZona1(converter(procjena10k / 8.05).slice(3));
        setZona2(converter(procjena10k / 9.2).slice(3));
        setZona3(converter(procjena10k / 10.15).slice(3));
        setZona4(converter(procjena10k / 10.58).slice(3));
        setZona5(converter(procjena10k / 11.65).slice(3));
      }
    }

    if (udaljenost == 10) {
      console.log("DESTEKA");
      if (vrijemeTrcanja !== "") {
        var minute = timeStringToFloat(vrijemeTrcanja);
        var procjena5k = minute / 2.0867;
        var procjena21k = minute * 2.2;
        var procjena42k = minute * 4.61;
        setProcjena10(vrijemeTrcanja);
        setProcjena21(converter(procjena21k));
        setProcjena42(converter(procjena42k));
        setProcjena5(converter(procjena5k));
        setZona1(converter(minute / 8.05).slice(3));
        setZona2(converter(minute / 9.2).slice(3));
        setZona3(converter(minute / 10.15).slice(3));
        setZona4(converter(minute / 10.58).slice(3));
        setZona5(converter(minute / 11.65).slice(3));
      }
    }
    if (udaljenost == 21) {
      if (vrijemeTrcanja !== "") {
        var minute = timeStringToFloat(vrijemeTrcanja);
        var minute = timeStringToFloat(vrijemeTrcanja);
        var procjena5k = minute / 4.59;
        var procjena10k = minute / 2.215;
        var procjena42k = minute * 2.0826;
        setProcjena10(converter(procjena10k));
        setProcjena21(vrijemeTrcanja);
        setProcjena42(converter(procjena42k));
        setProcjena5(converter(procjena5k));
        setZona1(converter(procjena10k / 8.05).slice(3));
        setZona2(converter(procjena10k / 9.2).slice(3));
        setZona3(converter(procjena10k / 10.15).slice(3));
        setZona4(converter(procjena10k / 10.58).slice(3));
        setZona5(converter(procjena10k / 11.65).slice(3));
      }
    }
    if (udaljenost == 42) {
      console.log("FULL");
      if (vrijemeTrcanja !== "") {
        var minute = timeStringToFloat(vrijemeTrcanja);
        var minute = timeStringToFloat(vrijemeTrcanja);
        var procjena5k = minute / 9.56;
        var procjena10k = minute / 4.61;
        var procjena21k = minute / 2.0826;
        setProcjena10(converter(procjena10k));
        setProcjena21(converter(procjena21k));
        setProcjena42(vrijemeTrcanja);
        setProcjena5(converter(procjena5k));
        setZona1(converter(procjena10k / 8.05).slice(3));
        setZona2(converter(procjena10k / 9.2).slice(3));
        setZona3(converter(procjena10k / 10.15).slice(3));
        setZona4(converter(procjena10k / 10.58).slice(3));
        setZona5(converter(procjena10k / 11.65).slice(3));
      }
    }
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div className="allKalkulatorWrapZone">
        <h1 className="naslovKalkulatora">Kalkulator trenažnih zona</h1>
        <p style={{ marginTop: "10px", textAlign: "center", width: "80%" }}>
          Unesi najbolje vrijeme otrčano na standardnoj dužini. Kalkulator će ti
          predvidjeti vremena na svim standardnim trkačkim dionicama te će
          odrediti tvoje trenažne zone. Najtočnije vrijednosti se dobiju ako se
          navede najbolje otrčani rezultat na 5 ili 10k.
        </p>
        <WrapForm>
          <form onSubmit={handleSubmit} className="formCalc">
            {" "}
            <div className="wrapFormCalcZone">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: "600",
                      marginLeft: "18px",
                    }}
                  >
                    Vrijeme
                  </div>
                  <Cleave
                    value={vrijemeTrcanja}
                    placeholder="hh:mm:ss"
                    options={{ time: true, timePattern: ["h", "m", "s"] }}
                    onChange={handleTimeChange}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: "600",
                      marginLeft: "18px",
                    }}
                  >
                    Udaljenost
                  </div>
                  <select
                    value={udaljenost}
                    onChange={(e) => setUdaljenost(e.target.value)}
                    className="rounded"
                  >
                    <option value=""></option>
                    <option value="5">5k</option>
                    <option value="10">10k</option>
                    <option value="21">Polu maraton</option>
                    <option value="42">Maraton</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="formCalcSubmit">
              <input type="submit" value="IZRAČUNAJ" />
            </div>
            <div
              className="resetZone"
              onClick={() => {
                setVrijemeTrcanja("");
                setUdaljenost("");
                setIspisDuzina("");
                setIspisVdot("");
                setProcjena42("");
                setProcjena21("");
                setProcjena10("");
              }}
            >
              <Button
                title="Reset"
                width="160"
                height="37"
                fontWeight="700"
                colorText="black"
              />
            </div>
          </form>
        </WrapForm>
        {procjena10 ? (
          <>
            <div className="wrapResultCalcZone">
              <div className="ispisCalcZone" style={{ marginBottom: "30px" }}>
                Projekcije zona:
              </div>

              <div className="wrapZoneColor">
                <Zona tag="Z1" data={zona1} delay={300} />
                <Zona tag="Z2" data={zona2} delay={600} />
                <Zona tag="Z3" data={zona3} delay={900} />
                <Zona tag="Z4" data={zona4} delay={1200} />
                <Zona tag="Z5" data={zona5} delay={1500} />
                <ProjekcijaRez />
              </div>
            </div>{" "}
          </>
        ) : (
          <div className="ispisCalc"></div>
        )}
      </div>
    </div>
  );
}
