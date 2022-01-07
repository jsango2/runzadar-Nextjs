import React, { useState } from "react";
import Button from "../button/button";
import { WrapForm } from "../../styles/calcStyles";
import Cleave from "cleave.js/react";
export default function ZoneKalkulator() {
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

  // var DECIMAL_REGEXP = /(?<=^.{2}$)/g;
  // function handleKeyUp(e) {
  //   var target = e.target;
  //   var charCode = e.which || e.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   target.value = target.value.replace(DECIMAL_REGEXP, ":");
  //   return true;
  // }

  // Collapse double colons after keydown

  function converter(decimalTime) {
    decimalTime = decimalTime * 60 * 60;
    var hours = Math.floor(decimalTime / (60 * 60));
    decimalTime = decimalTime - hours * 60 * 60;
    var minutes = Math.floor(decimalTime / 60);
    decimalTime = decimalTime - minutes * 60;
    var seconds = Math.round(decimalTime);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return "" + hours + ":" + minutes + ":" + seconds;
  }
  const handleTimeChange = (event) => {
    setVrijemeTrcanja(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (udaljenost == 5) {
      if (vrijemeTrcanja !== "") {
        var minute = timeToDecimal(vrijemeTrcanja);
        var procjena10k = minute * 2.0817;
        var procjena21k = minute * 4.6;
        var procjena42k = minute * 9.45;
        setProcjena10(converter(procjena10k));
        setProcjena21(converter(procjena21k));
        setProcjena42(converter(procjena42k));
        setProcjena5(vrijemeTrcanja);
        // var izracunBodova =
        //   -651.26 * Math.pow(minute, 3) +
        //   1126.8 * Math.pow(minute, 2) -
        //   709.76 * minute +
        //   185.43;
        // if (minute < 0.81) {
        //   setIspisVdot(Math.round(izracunBodova));
        // } else {
        //   setIspisVdot("Pre spori ste za naš kalkulator");
        // }
        setZona1(converter(procjena10k / 8.05));
        setZona2(converter(procjena10k / 9.2));
        setZona3(converter(procjena10k / 10.15));
        setZona4(converter(procjena10k / 10.58));
        setZona5(converter(procjena10k / 11.65));
      }
    }

    if (udaljenost == 10) {
      console.log("DESTEKA");
      if (vrijemeTrcanja !== "") {
        var minute = timeToDecimal(vrijemeTrcanja);
        var procjena5k = minute / 2.0867;
        var procjena21k = minute * 2.2;
        var procjena42k = minute * 9.45;
        setProcjena10(vrijemeTrcanja);
        setProcjena21(converter(procjena21k));
        setProcjena42(converter(procjena42k));
        setProcjena5(converter(procjena5k));
        // console.log(minute);
        // var izracunBodova =
        //   47.244 * Math.pow(minute, 2) - 139.17 * minute + 123.96;
        // if (minute < 1.5) {
        //   setIspisVdot(Math.round(izracunBodova));
        // } else {
        //   setIspisVdot("Pre spori ste za naš kalkulator");
        // }
      }
    }
    if (udaljenost == 21) {
      console.log("HALF");
      if (vrijemeTrcanja !== "") {
        var minute = timeToDecimal(vrijemeTrcanja);
        console.log(minute);
        var minute = timeToDecimal(vrijemeTrcanja);
        var procjena5k = minute / 4.59;
        var procjena10k = minute / 2.215;
        var procjena42k = minute * 2.0826;
        setProcjena10(converter(procjena10k));
        setProcjena21(vrijemeTrcanja);
        setProcjena42(converter(procjena42k));
        setProcjena5(converter(procjena5k));
        // var izracunBodova =
        //   11.435 * Math.pow(minute, 2) - 70.13 * minute + 130.88;
        // if (minute < 3) {
        //   setIspisVdot(Math.round(izracunBodova));
        // } else {
        //   setIspisVdot("Pre spori ste za naš kalkulator");
        // }
      }
    }
    if (udaljenost == 42) {
      console.log("FULL");
      if (vrijemeTrcanja !== "") {
        var minute = timeToDecimal(vrijemeTrcanja);
        console.log(minute);
        var minute = timeToDecimal(vrijemeTrcanja);
        var procjena5k = minute / 9.56;
        var procjena10k = minute / 4.61;
        var procjena21k = minute / 2.0826;
        setProcjena10(converter(procjena10k));
        setProcjena21(converter(procjena21k));
        setProcjena42(vrijemeTrcanja);
        setProcjena5(converter(procjena5k));
        // var izracunBodova =
        //   11.435 * Math.pow(minute, 2) - 70.13 * minute + 130.88;
        // if (minute < 3) {
        //   setIspisVdot(Math.round(izracunBodova));
        // } else {
        //   setIspisVdot("Pre spori ste za naš kalkulator");
        // }
      }
    }
    function timeToDecimal(t) {
      var arr = t.split(":").map(Number);
      return (arr[0] + arr[1] / 60 + arr[2] / 3600).toFixed(4);
    }
    // setUdaljenost("");
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div className="allKalkulatorWrap">
        <h2 className="naslovKalkulatora">Kalkulator trenažnih zona</h2>
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Unesi najbolje vrijeme otrčano na standardnoj dužini
        </p>
        <WrapForm>
          <form onSubmit={handleSubmit} className="formCalc">
            {" "}
            <div className="formCalcSubmit">
              <input type="submit" value="IZRAČUNAJ" />
            </div>
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
                  {/* <input
                    id="duration-input2"
                    type="text"
                    pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
                    title="Write a duration in the format hh:mm:ss:ms"
                    value={vrijemeTrcanja}
                    placeholder="00:00:00"
                    onChange={(e) => setVrijemeTrcanja(e.target.value)}
                    step="1"
                    onKeyPress={(event) => handleKeyUp(event)}
                  /> */}
                  <Cleave
                    value={vrijemeTrcanja}
                    placeholder="hh:mm:ss"
                    options={{ time: true, timePattern: ["h", "m", "s"] }}
                    onChange={handleTimeChange}
                  />
                </div>
              </div>

              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0",
                }}
              >
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: "600",
                      marginLeft: "18px",
                    }}
                  >
                    Tempo
                  </div>

                  <input
                    type="time"
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                    placeholder="min/km"
                    className="dateclass placeholderclass"
                  />
                </div>
              </div> */}

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

                  {/* <input
                    type="number"
                    value={udaljenost}
                    onChange={(e) => setUdaljenost(e.target.value)}
                    placeholder="km"
                  /> */}
                  <select
                    value={udaljenost}
                    onChange={(e) => setUdaljenost(e.target.value)}
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
          </form>
        </WrapForm>
        {procjena10 ? (
          <div className="wrapResultCalcZone">
            <div className="ispisCalcZone" style={{ marginBottom: "10px" }}>
              Projekcije rezultata:
            </div>
            <div className="ispisCalcZone">5k {procjena5}</div>
            <div className="ispisCalcZone">10k {procjena10}</div>
            <div className="ispisCalcZone">21k {procjena21}</div>
            <div className="ispisCalcZone">42k {procjena42}</div>
            <div className="ispisCalcZone" style={{ margin: "25px 0 15px 0" }}>
              Projekcije Zona:
            </div>
            <div className="ispisCalcZone">Zona1: {zona1}</div>
            <div className="ispisCalcZone">Zona2: {zona2}</div>
            <div className="ispisCalcZone">Zona3: {zona3}</div>
            <div className="ispisCalcZone">Zona4 {zona4}</div>
            <div className="ispisCalcZone">Zona5: {zona5}</div>
            <div
              style={{ margin: "30px 0" }}
              onClick={() => {
                console.log("klik");
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
                width="180"
                height="47"
                fontWeight="700"
                colorText="black"
              />
            </div>
          </div>
        ) : (
          <div className="ispisCalc"></div>
        )}
      </div>
    </div>
  );
}
