import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/button/button";
import Layout from "../../components/layout";
import {
  WrapAll,
  WrapForm,
  Left,
  Right,
  Naslov,
  Foto,
  WrapNaslovButton,
  TextNaslovni,
} from "../../styles/calcStyles";
import Cleave from "cleave.js/react";

import KosaCrta from "../../svg/kosacrta.svg";

// import Seo from "../components/seo"
// import Bart from "../images/bart.png"
export default function PaceKalkulator() {
  const [vrijemeTrcanja, setVrijemeTrcanja] = useState("");
  const [tempo, setTempo] = useState("");
  const [ispisTempo, setIspisTempo] = useState("");
  const [ispisVrijeme, setIspisVrijeme] = useState("");
  const [ispisDuzina, setIspisDuzina] = useState("");
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [udaljenost, setUdaljenost] = useState("");
  const handleTimeChange = (event) => {
    setVrijemeTrcanja(event.target.value);
  };
  const handlePaceChange = (event) => {
    setTempo(event.target.value);
  };
  const handleSubmit = (evt) => {
    let varTempo;
    let varUdaljenost;
    let varVrijemeTrcanja;
    evt.preventDefault();

    if (tempo !== "") {
      if (vrijemeTrcanja !== "") {
        if (udaljenost == "") {
          var vrijemeUkupnoDec = timeStringToFloat(vrijemeTrcanja);
          var tempoDec = timeStringToFloat(tempo);
          setIspisDuzina(((vrijemeUkupnoDec * 60) / tempoDec).toFixed(1));
        }
      }
    }
    if (tempo !== "") {
      if (udaljenost !== "") {
        if (vrijemeTrcanja == "") {
          var tempoInt = timeStringToFloat(tempo);
          var vrijemeDecimal = tempoInt * udaljenost;
          var vrijemeHHMM = new Date(vrijemeDecimal * 60 * 1000)
            .toISOString()
            .substr(11, 8);
          console.log(vrijemeHHMM);
          setIspisVrijeme(vrijemeHHMM);
        }
      }
    }
    if (vrijemeTrcanja !== "") {
      if (udaljenost !== "") {
        if (tempo == "") {
          var minute = (timeStringToFloat(vrijemeTrcanja) / udaljenost) * 60;
          console.log("u dec:", timeStringToFloat(vrijemeTrcanja));
          //   console.log(udaljenost);
          //   console.log(minute);
          setIspisTempo(minTommss(minute));
          function minTommss(minutes) {
            var sign = minutes < 0 ? "-" : "";
            var min = Math.floor(Math.abs(minutes));
            var sec = Math.floor((Math.abs(minutes) * 60) % 60);
            // var min = Math.abs(minutes);
            // var sec = (Math.abs(minutes) * 60) % 60;
            // var min = Math.round(Math.abs(minutes));
            // var sec = Math.round((Math.abs(minutes) * 60) % 60);
            return (
              sign +
              (min < 10 ? "0" : "") +
              min +
              ":" +
              (sec < 10 ? "0" : "") +
              sec
            );
          }
        }
      }
    }
    if (vrijemeTrcanja !== "") {
      if (udaljenost !== "") {
        if (tempo !== "") console.log("Previše unesenih polja");
      }
    }
    function timeStringToFloat(t) {
      var arr = t.split(":").map(Number);
      return (arr[0] + arr[1] / 60 + arr[2] / 3600).toFixed(4);
    }

    // function timeStringToFloat(t) {
    //   var arr = t.split(":");
    //   console.log(arr);
    //   //   var dec = parseInt((arr[1] / 6) * 10, 10);
    //   //   console.log((arr[1] / 6) * 10);
    //   var dec = (arr[1] / 6) * 10;
    //   //   console.log(dec);
    //   return parseFloat(
    //     parseInt(arr[0], 10) + "." + (dec < 10 ? "0" : "") + dec
    //   );
    // }
    // function timeStringToFloat(time) {
    //   var hoursMinutes = time.split(/[.:]/);
    //   var hours = parseInt(hoursMinutes[0], 10);
    //   var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    //   var seconds = hoursMinutes[2] ? parseInt(hoursMinutes[2], 10) : 0;
    //   return hours + minutes / 60 + seconds / 600;
    // }
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div className="allKalkulatorWrap">
        <h2 className="naslovKalkulatora">
          Tempo / Vrijeme / Dužina kalkulator
        </h2>
        <WrapForm>
          <form onSubmit={handleSubmit} className="formCalc">
            {" "}
            <div className="formCalcSubmit">
              <input type="submit" value="IZRAČUNAJ" />
            </div>
            <div className="wrapFormCalc">
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

              <div
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

                  <Cleave
                    placeholder="mm:ss /km"
                    value={tempo}
                    options={{ time: true, timePattern: ["m", "s"] }}
                    onChange={handlePaceChange}
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

                  <input
                    type="number"
                    value={udaljenost}
                    onChange={(e) => setUdaljenost(e.target.value)}
                    placeholder="km"
                  />
                </div>
              </div>
            </div>
          </form>
        </WrapForm>
        {ispisTempo ? (
          <div className="wrapResultCalc">
            <div className="ispisCalc">Tempo</div>

            <div className="ispisCalc">{ispisTempo} min/km</div>
            <div
              style={{ margin: "30px 0" }}
              onClick={() => {
                console.log("klik");
                setTempo("");
                setVrijemeTrcanja("");
                setUdaljenost("");
                setIspisTempo("");
                setIspisVrijeme("");
                setIspisDuzina("");
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
        {ispisVrijeme ? (
          <div className="wrapResultCalc">
            <div className="ispisCalc">Ukupno vrijeme</div>
            <div className="ispisCalc">{ispisVrijeme} </div>
            <div
              style={{ margin: "30px 0" }}
              onClick={() => {
                console.log("klik");
                setTempo("");
                setVrijemeTrcanja("");
                setUdaljenost("");
                setIspisTempo("");
                setIspisVrijeme("");
                setIspisDuzina("");
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
        {ispisDuzina ? (
          <div className="wrapResultCalc">
            <div className="ispisCalc">Ukupna dužina</div>
            <div className="ispisCalc">{ispisDuzina} km</div>
            <div
              style={{ margin: "30px 0" }}
              onClick={() => {
                console.log("klik");
                setTempo("");
                setVrijemeTrcanja("");
                setUdaljenost("");
                setIspisTempo("");
                setIspisVrijeme("");
                setIspisDuzina("");
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
