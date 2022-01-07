import React, { useState } from "react";
import Button from "../button/button";
import { WrapForm } from "../../styles/calcStyles";

export default function ZoneKalkulator() {
  const [vrijemeTrcanja, setVrijemeTrcanja] = useState("");
  const [procjena5, setProcjena5] = useState("");
  const [procjena10, setProcjena10] = useState("");
  const [procjena21, setProcjena21] = useState("");
  const [procjena42, setProcjena42] = useState("");
  const [ispisVdot, setIspisVdot] = useState("");
  const [ispisDuzina, setIspisDuzina] = useState("");
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [udaljenost, setUdaljenost] = useState("");

  // function minTommss(minutes) {
  //   var sign = minutes < 0 ? "-" : "";
  //   var min = Math.floor(Math.abs(minutes));
  //   var sec = Math.round((Math.abs(minutes) * 60) % 60);
  //   return (
  //     sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec
  //   );

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
        var izracunBodova =
          -651.26 * Math.pow(minute, 3) +
          1126.8 * Math.pow(minute, 2) -
          709.76 * minute +
          185.43;
        if (minute < 0.81) {
          setIspisVdot(Math.round(izracunBodova));
        } else {
          setIspisVdot("Pre spori ste za naš kalkulator");
        }
      }
    }
    // if (udaljenost == 10) {
    //   console.log("desetka je");
    // } else if (udaljenost == 5) {
    //   console.log("petica");
    // } else if (udaljenost == 21) {
    //   console.log("half");
    // } else {
    //   console.log("full");
    // }
    if (udaljenost == 10) {
      console.log("DESTEKA");
      if (vrijemeTrcanja !== "") {
        var minute = timeToDecimal(vrijemeTrcanja);
        console.log(minute);
        var izracunBodova =
          47.244 * Math.pow(minute, 2) - 139.17 * minute + 123.96;
        if (minute < 1.5) {
          setIspisVdot(Math.round(izracunBodova));
        } else {
          setIspisVdot("Pre spori ste za naš kalkulator");
        }
      }
    }
    if (udaljenost == 21) {
      console.log("HALF");
      if (vrijemeTrcanja !== "") {
        var minute = timeToDecimal(vrijemeTrcanja);
        console.log(minute);

        var izracunBodova =
          11.435 * Math.pow(minute, 2) - 70.13 * minute + 130.88;
        if (minute < 3) {
          setIspisVdot(Math.round(izracunBodova));
        } else {
          setIspisVdot("Pre spori ste za naš kalkulator");
        }
      }
    }
    function timeToDecimal(t) {
      var arr = t.split(":");
      var dec = parseInt((arr[1] / 6) * 10, 10);
      return parseFloat(
        parseInt(arr[0], 10) + "." + (dec < 10 ? "0" : "") + dec
      );
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
                  <input
                    type="time"
                    value={vrijemeTrcanja}
                    onChange={(e) => setVrijemeTrcanja(e.target.value)}
                    step="2"
                    placeholder="hh:mm:ss"
                    className="dateclass placeholderclass"
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
        {ispisVdot ? (
          <div className="wrapResultCalcZone">
            <div className="ispisCalcZone" style={{ marginBottom: "10px" }}>
              Projekcije rezultata:
            </div>
            <div className="ispisCalcZone">5k {procjena5}</div>
            <div className="ispisCalcZone">10k {procjena10}</div>
            <div className="ispisCalcZone">21k {procjena21}</div>
            <div className="ispisCalcZone">42k {procjena42}</div>
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
