import Image from "next/image";
import React, { useState } from "react";
import Button from "../components/button/button";
import PaceKalkulator from "../components/kalkulatori/paceKalkulator";
import ZoneKalkulator from "../components/kalkulatori/zoneKalkulator";
import Head from "next/head";

import Layout from "../components/layout";
import { Naslov, WrapNaslovButton, TextNaslovni } from "../styles/calcStyles";

// import Seo from "../components/seo"
// import Bart from "../images/bart.png"
export default function Kalkulator() {
  const [vrijemeTrcanja, setVrijemeTrcanja] = useState("");
  const [tempo, setTempo] = useState("");
  const [ispisTempo, setIspisTempo] = useState("");
  const [ispisVrijeme, setIspisVrijeme] = useState("");
  const [ispisDuzina, setIspisDuzina] = useState("");
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [udaljenost, setUdaljenost] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (tempo == "") {
      if (vrijemeTrcanja == "") {
        console.log("Unesi temp ili T");
      }
    }

    if (tempo == "") {
      if (udaljenost == "") {
        console.log("Unesi temp ili D");
      }
    }
    if (vrijemeTrcanja == "") {
      if (udaljenost == "") {
        console.log("Unesi T ili D");
      }
    }
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

          setIspisTempo(minTommss(minute));
          function minTommss(minutes) {
            var sign = minutes < 0 ? "-" : "";
            var min = Math.floor(Math.abs(minutes));
            var sec = Math.floor((Math.abs(minutes) * 60) % 60);
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

    function timeStringToFloat(time) {
      var hoursMinutes = time.split(/[.:]/);
      var hours = parseInt(hoursMinutes[0], 10);
      var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
      var seconds = hoursMinutes[2] ? parseInt(hoursMinutes[2], 10) : 0;
      return hours + minutes / 60 + seconds / 600;
    }
  };
  return (
    <Layout>
      <Head>
        <title>Kalkulator - Škola trčanja Zadar</title>
        <meta
          property="og:title"
          content="Kalkulator - Škola trčanja Zadar"
          key="title"
        />
        <link
          rel="canonical"
          href="https://www.runzadar.com/kalkulator"
          key="canonical"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content="https://www.runzadar.com/kalkulator" />

        <meta name="twitter:title" content="Kalkulator - Škola trčanja Zadar" />

        <meta
          property="og:image"
          content="https://www.sportzone.hr/wp-content/uploads/2022/01/mockup2.png"
        />
        <meta
          name="description"
          content="Praktični kalkulator trčanja za izračun tempa, procjenu trkačkih zona i vremena trčanja na nekim standardnim dionicama."
          key="desc"
        />
        <meta
          property="og:description"
          content="Praktični kalkulator trčanja za izračun tempa, procjenu trkačkih zona i vremena trčanja na nekim standardnim dionicama."
        />
        <meta
          property="twitter:description"
          content="Praktični kalkulator trčanja za izračun tempa, procjenu trkačkih zona i vremena trčanja na nekim standardnim dionicama."
        />
      </Head>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "375px",
          zIndex: "-1",
          borderRadius: "39px 39px 0 0 ",
          backgroundImage: `url(/slikatartana.png)`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover ",
        }}
      >
        <WrapNaslovButton>
          <Naslov>
            <div className="blogPostCrta">
              <Image src="/kosacrta.svg" layout="fill" />
            </div>
            KALKULATOR TRČANJA
          </Naslov>
        </WrapNaslovButton>
      </div>
      <div className="wrapCijeliKalkulator">
        {/* <div style={{ position: "absolute" }}>
          <Image
            className="zrakeParallaxCalc"
            src="/Vector.png"
            alt=""
            width={1200}
            height={1100}
            layout="fixed"
          />
        </div> */}

        <div>
          <TextNaslovni>
            Kreirali smo alate koji vam mogu pomoći u planiranju treninga,
            procjeni vaših trenažnih zona ili procjeni rezultata na različitim
            utrkama.
          </TextNaslovni>
        </div>
        <PaceKalkulator />
        <div
          style={{ width: "100px", height: "2px", backgroundColor: "white" }}
        ></div>
        <ZoneKalkulator />
      </div>
    </Layout>
  );
}
