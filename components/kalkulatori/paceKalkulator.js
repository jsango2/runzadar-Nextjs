import Image from "next/image";
import React, { useState, useEffect } from "react";
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
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import {
  timeStringToFloat,
  timeStringToFloatMMSS,
  minTommss,
  decTohhmmss,
} from "./formule";

// import Seo from "../components/seo"
// import Bart from "../images/bart.png"
export default function PaceKalkulator() {
  const [vrijemeTrcanja, setVrijemeTrcanja] = useState("");
  const [tempo, setTempo] = useState("");
  const [ispisBrzine, setIspisBrzine] = useState("");
  const [sliderTimeVal, setSliderTimeVal] = useState(100);
  const [sliderTimeValRender, setSliderTimeValRender] = useState("01:00:00");
  const [sliderLengthVal, setSliderLengthVal] = useState(100);
  const [sliderLengthValRender, setSliderLengthValRender] = useState(10);
  const [sliderPaceVal, setSliderPaceVal] = useState(100);
  const [sliderPaceValRender, setSliderPaceValRender] = useState(10);
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
    evt.preventDefault();
    if (tempo !== "") {
      if (vrijemeTrcanja !== "") {
        if (udaljenost == "") {
          var vrijemeUkupnoDec = timeStringToFloat(vrijemeTrcanja);
          var tempoDec = timeStringToFloatMMSS(tempo);
          console.log(vrijemeUkupnoDec, tempoDec);
          setIspisDuzina((vrijemeUkupnoDec / tempoDec).toFixed(1));
        }
      }
    }
    if (tempo !== "") {
      if (udaljenost !== "") {
        if (vrijemeTrcanja == "") {
          var tempoInt = timeStringToFloatMMSS(tempo);
          var vrijemeDecimal = tempoInt * udaljenost;
          setIspisVrijeme(decTohhmmss(vrijemeDecimal));
        }
      }
    }
    if (vrijemeTrcanja !== "") {
      if (udaljenost !== "") {
        if (tempo == "") {
          var minute = (timeStringToFloat(vrijemeTrcanja) / udaljenost) * 60;
          setIspisTempo(minTommss(minute));
        }
      }
    }
    if (vrijemeTrcanja !== "") {
      if (udaljenost !== "") {
        if (tempo !== "") console.log("Previše unesenih polja");
      }
    }
  };
  const onSliderChangeTime = (value) => {
    setSliderTimeVal(value);
    setSliderTimeValRender(decTohhmmss(value / 100));
  };
  const onSliderChangeLength = (value) => {
    setSliderLengthVal(value);
    setSliderLengthValRender((value / 10).toFixed(1));
  };

  useEffect(() => {
    let izracun = sliderLengthValRender / (sliderTimeVal / 100);
    var minute = (sliderTimeVal / 100 / (sliderLengthVal / 10)) * 60;
    setSliderPaceValRender(minTommss(minute));
  }, [sliderTimeVal, sliderLengthVal]);
  //   useEffect(() => {
  //     setSliderLengthVal(sliderPaceVal / sliderTimeVal);
  //   });
  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div className="allKalkulatorWrap">
        <h1 className="naslovKalkulatora">Tempo kalkulator</h1>
        <div style={{ marginTop: "30px", width: "90%" }}>
          <div className="ispisCalc">Vrijeme:</div>
          <div className="ispisCalc">{sliderTimeValRender}</div>
          <div style={{ marginBottom: "20px" }}></div>
          <Slider
            value={sliderTimeVal}
            onChange={onSliderChangeTime}
            step={0.03}
            min={1}
            max={250}
            railStyle={{ backgroundColor: "white", height: 8 }}
            trackStyle={{ backgroundColor: "#f9ff00 ", height: 10 }}
          />
        </div>
        <div style={{ marginTop: "30px", width: "90%" }}>
          <div className="ispisCalc">Dužina(km):</div>
          <div className="ispisCalc">{sliderLengthValRender} </div>
          <div style={{ marginBottom: "20px" }}></div>

          <Slider
            value={sliderLengthVal}
            onChange={onSliderChangeLength}
            step={0.9}
            min={1}
            max={211}
            railStyle={{ backgroundColor: "white", height: 8 }}
            trackStyle={{ backgroundColor: "#f9ff00 ", height: 10 }}
          />
        </div>
        <div className="tempoCircleIspis">
          <div className="ispisCalcCircle">
            Tempo
            <br /> (min/km)
          </div>
          <div className="ispisCalcTempoBroj">{sliderPaceValRender} </div>
        </div>
      </div>
    </div>
  );
}
