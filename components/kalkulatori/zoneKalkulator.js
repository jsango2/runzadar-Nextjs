import React, { useState } from "react";
import Button from "../button/button";
import { WrapForm } from "../../styles/calcStyles";
import Cleave from "cleave.js/react";
import { timeStringToFloat, minTommss, converter } from "./formule";
import { useDelay } from "react-use-precision-timer";
import Zona from "./zona";

const RACE_DISTANCES = {
  5: 5000,
  10: 10000,
  21: 21097.5,
  42: 42195,
};

const oxygenCost = (velocityMetersPerMin) =>
  -4.6 + 0.182258 * velocityMetersPerMin + 0.000104 * velocityMetersPerMin ** 2;

const raceTimeFactor = (timeMinutes) =>
  0.8 +
  0.1894393 * Math.exp(-0.012778 * timeMinutes) +
  0.2989558 * Math.exp(-0.1932605 * timeMinutes);

const vdotFromRace = (distanceMeters, timeMinutes) => {
  if (!distanceMeters || !timeMinutes) return null;
  const velocity = distanceMeters / timeMinutes;
  const fraction = raceTimeFactor(timeMinutes);
  if (velocity <= 0 || fraction <= 0) return null;
  return oxygenCost(velocity) / fraction;
};

const solveTimeForDistance = (distanceMeters, vdot) => {
  if (!distanceMeters || !vdot) return null;

  const evaluate = (timeMinutes) => {
    const estimate = vdotFromRace(distanceMeters, timeMinutes);
    if (!Number.isFinite(estimate)) return null;
    return estimate - vdot;
  };

  let low = distanceMeters / 450;
  let high = distanceMeters / 120;
  let fLow = evaluate(low);
  let fHigh = evaluate(high);

  let guard = 0;
  while (fHigh !== null && fHigh > 0 && guard < 30) {
    high *= 1.25;
    fHigh = evaluate(high);
    guard += 1;
  }

  guard = 0;
  while (fLow !== null && fLow < 0 && low > 1 && guard < 30) {
    low *= 0.75;
    fLow = evaluate(low);
    guard += 1;
  }

  if (
    !Number.isFinite(fLow) ||
    !Number.isFinite(fHigh) ||
    fLow <= 0 ||
    fHigh >= 0
  ) {
    return null;
  }

  for (let i = 0; i < 70; i += 1) {
    const mid = (low + high) / 2;
    const fMid = evaluate(mid);
    if (!Number.isFinite(fMid)) return null;

    if (fMid > 0) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
};

const paceFromVdotIntensity = (vdot, intensity) => {
  const targetVo2 = vdot * intensity;
  const a = 0.000104;
  const b = 0.182258;
  const c = -4.6 - targetVo2;
  const discriminant = b ** 2 - 4 * a * c;

  if (!Number.isFinite(discriminant) || discriminant <= 0) return null;

  const velocityMetersPerMin = (-b + Math.sqrt(discriminant)) / (2 * a);
  if (velocityMetersPerMin <= 0) return null;

  return 1000 / velocityMetersPerMin;
};

const formatPace = (pace) => (Number.isFinite(pace) ? minTommss(pace) : "");
const formatRange = (fastPace, slowPace) =>
  `${formatPace(fastPace)} - ${formatPace(slowPace)}`;
const HR_ZONE_RANGES = [
  { low: 0.5, high: 0.6 },
  { low: 0.6, high: 0.7 },
  { low: 0.7, high: 0.8 },
  { low: 0.8, high: 0.9 },
  { low: 0.9, high: 1.0 },
];

const karvonenRange = (restHr, maxHr, low, high) => {
  const reserve = maxHr - restHr;
  if (reserve <= 0) return "";
  const minHr = Math.round(restHr + reserve * low);
  const maxZoneHr = Math.round(restHr + reserve * high);
  return `${minHr} - ${maxZoneHr} bpm`;
};

export default function ZoneKalkulator() {
  const [vrijemeTrcanja, setVrijemeTrcanja] = useState("");
  const [restHr, setRestHr] = useState("");
  const [maxHr, setMaxHr] = useState("");
  const [procjena5, setProcjena5] = useState("");
  const [procjena10, setProcjena10] = useState("");
  const [procjena21, setProcjena21] = useState("");
  const [procjena42, setProcjena42] = useState("");
  const [zona1, setZona1] = useState("");
  const [zona2, setZona2] = useState("");
  const [zona3, setZona3] = useState("");
  const [zona4, setZona4] = useState("");
  const [zona5, setZona5] = useState("");
  const [zona1Hr, setZona1Hr] = useState("");
  const [zona2Hr, setZona2Hr] = useState("");
  const [zona3Hr, setZona3Hr] = useState("");
  const [zona4Hr, setZona4Hr] = useState("");
  const [zona5Hr, setZona5Hr] = useState("");
  const [ispisVdot, setIspisVdot] = useState("");
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
    if (!udaljenost || vrijemeTrcanja === "") return;

    const selectedDistanceKm = Number(udaljenost);
    const selectedDistanceMeters = RACE_DISTANCES[selectedDistanceKm];
    const raceHours = Number(timeStringToFloat(vrijemeTrcanja));
    const raceMinutes = raceHours * 60;

    const vdot = vdotFromRace(selectedDistanceMeters, raceMinutes);
    if (!Number.isFinite(vdot)) return;

    const projectionFromVdot = (distanceKm) => {
      if (selectedDistanceKm === distanceKm) return vrijemeTrcanja;
      const predictedMinutes = solveTimeForDistance(
        RACE_DISTANCES[distanceKm],
        vdot,
      );
      if (!Number.isFinite(predictedMinutes)) return "";
      return converter(predictedMinutes / 60);
    };

    setIspisVdot(vdot.toFixed(1));
    setProcjena5(projectionFromVdot(5));
    setProcjena10(projectionFromVdot(10));
    setProcjena21(projectionFromVdot(21));
    setProcjena42(projectionFromVdot(42));

    const easyFast = paceFromVdotIntensity(vdot, 0.74);
    const easySlow = paceFromVdotIntensity(vdot, 0.59);
    const marathonFast = paceFromVdotIntensity(vdot, 0.84);
    const marathonSlow = paceFromVdotIntensity(vdot, 0.8);
    const thresholdFast = paceFromVdotIntensity(vdot, 0.9);
    const thresholdSlow = paceFromVdotIntensity(vdot, 0.86);
    const intervalFast = paceFromVdotIntensity(vdot, 1.0);
    const intervalSlow = paceFromVdotIntensity(vdot, 0.95);
    const repetitionFast = paceFromVdotIntensity(vdot, 1.1);
    const repetitionSlow = paceFromVdotIntensity(vdot, 1.05);

    setZona1(formatRange(easyFast, easySlow));
    setZona2(formatRange(marathonFast, marathonSlow));
    setZona3(formatRange(thresholdFast, thresholdSlow));
    setZona4(formatRange(intervalFast, intervalSlow));
    setZona5(formatRange(repetitionFast, repetitionSlow));

    const parsedRestHr = Number(restHr);
    const parsedMaxHr = Number(maxHr);
    const hasHrInput =
      Number.isFinite(parsedRestHr) &&
      Number.isFinite(parsedMaxHr) &&
      parsedRestHr > 0 &&
      parsedMaxHr > parsedRestHr;

    if (hasHrInput) {
      setZona1Hr(
        karvonenRange(
          parsedRestHr,
          parsedMaxHr,
          HR_ZONE_RANGES[0].low,
          HR_ZONE_RANGES[0].high,
        ),
      );
      setZona2Hr(
        karvonenRange(
          parsedRestHr,
          parsedMaxHr,
          HR_ZONE_RANGES[1].low,
          HR_ZONE_RANGES[1].high,
        ),
      );
      setZona3Hr(
        karvonenRange(
          parsedRestHr,
          parsedMaxHr,
          HR_ZONE_RANGES[2].low,
          HR_ZONE_RANGES[2].high,
        ),
      );
      setZona4Hr(
        karvonenRange(
          parsedRestHr,
          parsedMaxHr,
          HR_ZONE_RANGES[3].low,
          HR_ZONE_RANGES[3].high,
        ),
      );
      setZona5Hr(
        karvonenRange(
          parsedRestHr,
          parsedMaxHr,
          HR_ZONE_RANGES[4].low,
          HR_ZONE_RANGES[4].high,
        ),
      );
    } else {
      setZona1Hr("");
      setZona2Hr("");
      setZona3Hr("");
      setZona4Hr("");
      setZona5Hr("");
    }
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div className="allKalkulatorWrapZone">
        <h1 className="naslovKalkulatora">
          Kalkulator trenažnih zona te predviđanje vremena na utrkama
        </h1>
        <p style={{ marginTop: "10px", textAlign: "center", width: "94%" }}>
          Unesi najbolje vrijeme otrčano na standardnoj dužini. Kalkulator će ti
          predvidjeti vremena na svim standardnim trkačkim dionicama te će
          odrediti tvoje trenažne zone (od Zone 1 do Zone 5). Najtočnije
          vrijednosti se dobiju ako se navede najbolje otrčani rezultat na 5 ili
          10k. Po želji možeš dodati Rest i Max HR za Karvonen HR intervale po
          zoni.
        </p>
        <WrapForm style={{ height: "auto", overflow: "visible" }}>
          <form onSubmit={handleSubmit} className="formCalc">
            <div
              className="wrapFormCalcZone"
              style={{
                flexDirection: "column",
                width: "100%",
                maxWidth: "900px",
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                  width: "100%",
                  flexWrap: "wrap",
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
                    Vrijeme
                  </div>
                  <Cleave
                    value={vrijemeTrcanja}
                    placeholder="hh:mm:ss"
                    options={{ time: true, timePattern: ["h", "m", "s"] }}
                    onChange={handleTimeChange}
                  />
                </div>

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

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                  width: "100%",
                  flexWrap: "wrap",
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
                    Rest HR (nije obavezno)
                  </div>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={restHr}
                    placeholder="npr. 55"
                    onChange={(e) => setRestHr(e.target.value)}
                  />
                </div>

                <div>
                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: "600",
                      marginLeft: "18px",
                    }}
                  >
                    Max HR (nije obavezno)
                  </div>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={maxHr}
                    placeholder="npr. 190"
                    onChange={(e) => setMaxHr(e.target.value)}
                  />
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
                setRestHr("");
                setMaxHr("");
                setUdaljenost("");
                setIspisVdot("");
                setProcjena5("");
                setProcjena42("");
                setProcjena21("");
                setProcjena10("");
                setZona1("");
                setZona2("");
                setZona3("");
                setZona4("");
                setZona5("");
                setZona1Hr("");
                setZona2Hr("");
                setZona3Hr("");
                setZona4Hr("");
                setZona5Hr("");
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
                Daniels VDOT zone:
              </div>
              <div className="ispisCalcZone" style={{ marginBottom: "30px" }}>
                VDOT: {ispisVdot}
              </div>

              <div className="wrapZoneColor">
                <Zona
                  pointer={true}
                  tag="E"
                  data={zona1}
                  hrRange={zona1Hr}
                  delay={300}
                  text="Easy (E) zona za lagano i regeneracijsko trčanje. U Daniels sustavu to je raspon tempa, a ne jedna točka."
                />
                <Zona
                  pointer={false}
                  tag="M"
                  data={zona2}
                  hrRange={zona2Hr}
                  delay={600}
                  text="Marathon (M) tempo za kontinuirani aerobni rad i duže dionice."
                />
                <Zona
                  pointer={false}
                  tag="T"
                  data={zona3}
                  hrRange={zona3Hr}
                  delay={900}
                  text="Threshold (T) tempo oko anaerobnog praga, tipično tempo koji je održiv oko 60 minuta."
                />
                <Zona
                  pointer={false}
                  tag="I"
                  data={zona4}
                  hrRange={zona4Hr}
                  delay={1200}
                  text="Interval (I) tempo za VO2max intervale srednje duljine (npr. 600 m - 1200 m)."
                />
                <Zona
                  pointer={false}
                  tag="R"
                  data={zona5}
                  hrRange={zona5Hr}
                  delay={1500}
                  text="Repetition (R) tempo za kratke dionice i razvoj ekonomije trčanja."
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
