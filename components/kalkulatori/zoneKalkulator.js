import React, { useState } from "react";
import Button from "../button/button";
import { WrapForm } from "../../styles/calcStyles";
import Cleave from "cleave.js/react";
import { timeStringToFloat } from "./formule";

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
        var minute = timeStringToFloat(vrijemeTrcanja);
        var procjena10k = minute * 2.0817;
        var procjena21k = minute * 4.6;
        var procjena42k = minute * 9.45;
        setProcjena10(converter(procjena10k));
        setProcjena21(converter(procjena21k));
        setProcjena42(converter(procjena42k));
        setProcjena5(vrijemeTrcanja);
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
        var minute = timeStringToFloat(vrijemeTrcanja);
        var procjena5k = minute / 2.0867;
        var procjena21k = minute * 2.2;
        var procjena42k = minute * 4.61;
        setProcjena10(vrijemeTrcanja);
        setProcjena21(converter(procjena21k));
        setProcjena42(converter(procjena42k));
        setProcjena5(converter(procjena5k));
        setZona1(converter(minute / 8.05));
        setZona2(converter(minute / 9.2));
        setZona3(converter(minute / 10.15));
        setZona4(converter(minute / 10.58));
        setZona5(converter(minute / 11.65));
      }
    }
    if (udaljenost == 21) {
      console.log("HALF");
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
        setZona1(converter(procjena10k / 8.05));
        setZona2(converter(procjena10k / 9.2));
        setZona3(converter(procjena10k / 10.15));
        setZona4(converter(procjena10k / 10.58));
        setZona5(converter(procjena10k / 11.65));
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
        setZona1(converter(procjena10k / 8.05));
        setZona2(converter(procjena10k / 9.2));
        setZona3(converter(procjena10k / 10.15));
        setZona4(converter(procjena10k / 10.58));
        setZona5(converter(procjena10k / 11.65));
      }
    }
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div className="allKalkulatorWrapZone">
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
            <div className="ispisCalcZone">Zona1: {zona1} min/km</div>
            <div className="ispisCalcZone">Zona2: {zona2} min/km</div>
            <div className="ispisCalcZone">Zona3: {zona3} min/km</div>
            <div className="ispisCalcZone">Zona4: {zona4} min/km</div>
            <div className="ispisCalcZone">Zona5: {zona5} min/km</div>
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
