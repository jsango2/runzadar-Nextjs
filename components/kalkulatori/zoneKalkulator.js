import React, { useEffect, useState } from "react";
import Button from "../button/button";
import { WrapForm } from "../../styles/calcStyles";
import Cleave from "cleave.js/react";
import { timeStringToFloat, minTommss, converter, minTommss2 } from "./formule";
import { useDelay } from "react-use-precision-timer";
import Zona from "./zona";
import Image from "next/image";

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

  const ProjekcijaRez = (procjena) => {
    const [rez, setRez] = useState(false);
    useDelay(2300, () => setRez(true));
    return (
      <>
        {rez ? (
          <div className="projekcijaRezultata">
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
        setZona2(converter(procjena10k / 9.45).slice(3));
        setZona3(converter(procjena10k / 10.05).slice(3));
        setZona4(converter(procjena10k / 10.38).slice(3));
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
        <h1 className="naslovKalkulatora">Kalkulator trena??nih zona</h1>
        <p style={{ marginTop: "10px", textAlign: "center", width: "94%" }}>
          Unesi najbolje vrijeme otr??ano na standardnoj du??ini. Kalkulator ??e ti
          predvidjeti vremena na svim standardnim trka??kim dionicama te ??e
          odrediti tvoje trena??ne zone (od Zone 1 do Zone 5). Najto??nije
          vrijednosti se dobiju ako se navede najbolje otr??ani rezultat na 5 ili
          10k.
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
                    <option value="">Unesi udaljenost</option>
                    <option value="5">5k</option>
                    <option value="10">10k</option>
                    <option value="21">Polu maraton</option>
                    <option value="42">Maraton</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="formCalcSubmit">
              <input type="submit" value="IZRA??UNAJ" />
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
                <Zona
                  pointer={true}
                  tag="<"
                  data={zona1}
                  delay={300}
                  text={`Tempo <${zona1} min/km je va??a zona laganog tr??anja. Tr??anje u ovoj zoni se koristi za zagrijavanje, regeneraciju ili kao lagani du??inski trening.`}
                />
                <Zona
                  pointer={false}
                  // tag="Z2"
                  data={zona2}
                  delay={600}
                  text={` Zona intenzivnog aerobnog treninga je na tempu oko ${zona2} min/km. Cilj tr??anja u ovom intenzitetu je razvoj aerobnog kapaciteta. Ovaj intenzitet koristimo u fartlek tr??anjima te na du??im dionicama. Ovaj tempo je pribli??an va??em tempu tr??anja polumaratona`}
                />
                <Zona
                  pointer={false}
                  // tag="Z3"
                  data={zona3}
                  delay={900}
                  text="Tr??anje oko ove zone odgovara intenzitetu va??eg anaerobnog praga. 
                  Na ovom intenzitetu je mogu??e tr??ati 40-60 minuta pa tempo odgovara tempu tr??anja na 10km.
                  Obi??no u ovom tempu tr??imo kad ??elimo posti??i intenzivni aerobni trening."
                />
                <Zona
                  pointer={false}
                  // tag="Z4"
                  data={zona4}
                  delay={1200}
                  text="Zona iznad anaerobnog praga. Ovaj tempo je blizak tempu tr??anja utrke na 5km. Koristi se naj??e????e u intervalnom radu (npr. 8x1km sa 2min pauze)."
                />
                <Zona
                  pointer={false}
                  tag=">"
                  data={zona5}
                  delay={1500}
                  text="Ovo je zona max primitka kisika. Koristi se kod kra??ih intervala od 400 - 800m. Primjer treninga je 15x400m sa 2-3' pauze. Preporu??a se samo spremnijim trka??ima."
                />
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
