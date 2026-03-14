import React, { useMemo, useState } from "react";
import Button from "../button/button";
import { WrapForm } from "../../styles/calcStyles";

const BMI_MIN = 12;
const BMI_MAX = 45;
const EU_OVERWEIGHT_SHARE = 50.6;
const EU_OBESITY_SHARE = 14.6;
const EU_PREOBESE_SHARE = Number(
  (EU_OVERWEIGHT_SHARE - EU_OBESITY_SHARE).toFixed(1),
);
const EU_BMI_LT25_SHARE = Number((100 - EU_OVERWEIGHT_SHARE).toFixed(1));

const BMI_DISTRIBUTION_EU = [
  {
    label: "BMI < 25",
    min: 12,
    max: 25,
    share: EU_BMI_LT25_SHARE,
    color: "#b2ea70",
  },
  {
    label: "25 - 29.9",
    min: 25,
    max: 30,
    share: EU_PREOBESE_SHARE,
    color: "#fbd148",
  },
  {
    label: "BMI >= 30",
    min: 30,
    max: 45,
    share: EU_OBESITY_SHARE,
    color: "#c85c5c",
  },
];

const maxDistributionShare = Math.max(
  ...BMI_DISTRIBUTION_EU.map((x) => x.share),
);

const getBmiCategory = (bmi) => {
  if (bmi < 18.5) return "Pothranjenost";
  if (bmi < 25) return "Normalna tjelesna masa";
  if (bmi < 30) return "Prekomjerna tjelesna masa";
  if (bmi < 35) return "Pretilost (I stupanj)";
  if (bmi < 40) return "Pretilost (II stupanj)";
  return "Pretilost (III stupanj)";
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const xToPercent = (bmi) => ((bmi - BMI_MIN) / (BMI_MAX - BMI_MIN)) * 100;

const markerSegmentForBmi = (bmi) => {
  const exact = BMI_DISTRIBUTION_EU.find(
    (segment) => bmi >= segment.min && bmi < segment.max,
  );
  return exact || BMI_DISTRIBUTION_EU[BMI_DISTRIBUTION_EU.length - 1];
};

export default function BmiKalkulator() {
  const [tezina, setTezina] = useState("");
  const [visina, setVisina] = useState("");
  const [godinaRodenja, setGodinaRodenja] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const currentYear = new Date().getFullYear();

  const chartData = useMemo(() => {
    if (!result?.isAdult) return null;

    const clampedBmi = clamp(result.bmi, BMI_MIN, BMI_MAX);
    const markerSegment = markerSegmentForBmi(result.bmi);

    return {
      clampedBmi,
      markerLeft: xToPercent(clampedBmi),
      markerHeight: (markerSegment.share / maxDistributionShare) * 100,
    };
  }, [result]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setError("");

    const weightKg = Number(String(tezina).replace(",", "."));
    const heightCm = Number(String(visina).replace(",", "."));
    const birthYear = Number(godinaRodenja);

    if (
      !Number.isFinite(weightKg) ||
      !Number.isFinite(heightCm) ||
      !Number.isFinite(birthYear)
    ) {
      setError("Unesi ispravne brojčane vrijednosti.");
      return;
    }

    if (weightKg <= 0 || heightCm <= 0) {
      setError("Težina i visina moraju biti veće od nule.");
      return;
    }

    if (birthYear < 1900 || birthYear > currentYear) {
      setError("Godina rođenja nije ispravna.");
      return;
    }

    const age = currentYear - birthYear;
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    if (!Number.isFinite(bmi)) {
      setError("Izračun BMI nije uspio. Provjeri unesene podatke.");
      return;
    }

    setResult({
      age,
      bmi,
      category: getBmiCategory(bmi),
      isAdult: age >= 16,
    });
  };

  const handleReset = () => {
    setTezina("");
    setVisina("");
    setGodinaRodenja("");
    setResult(null);
    setError("");
  };

  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div className="allKalkulatorWrapZone">
        <h1 className="naslovKalkulatora">BMI kalkulator</h1>
        <p style={{ marginTop: "10px", textAlign: "center", width: "94%" }}>
          Unesi težinu, visinu i godinu rođenja. Dobit ćeš svoj BMI, kategoriju
          i prikaz položaja na distribuciji BMI za Europu.
        </p>
        <WrapForm style={{ height: "auto", overflow: "visible" }}>
          <form onSubmit={handleSubmit} className="formCalc">
            <div className="wrapFormCalcZone bmiFormFields">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: "600",
                      marginLeft: "18px",
                    }}
                  >
                    Težina (kg)
                  </div>
                  <input
                    type="number"
                    min="1"
                    step="0.1"
                    value={tezina}
                    placeholder="npr. 72.5"
                    onChange={(e) => setTezina(e.target.value)}
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
                    Visina (cm)
                  </div>
                  <input
                    type="number"
                    min="1"
                    step="0.1"
                    value={visina}
                    placeholder="npr. 178"
                    onChange={(e) => setVisina(e.target.value)}
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
                    Godina rođenja
                  </div>
                  <input
                    type="number"
                    min="1900"
                    max={currentYear}
                    step="1"
                    value={godinaRodenja}
                    placeholder="npr. 1992"
                    onChange={(e) => setGodinaRodenja(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="formCalcSubmit">
              <input type="submit" value="IZRAČUNAJ BMI" />
            </div>
            <div className="resetZone" onClick={handleReset}>
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

        {error ? <div className="bmiError">{error}</div> : null}

        {result ? (
          <div className="wrapResultCalcZone bmiResultWrap">
            <div className="ispisCalcZone">BMI: {result.bmi.toFixed(1)}</div>
            <div className="ispisCalcZone">{result.category}</div>
            <div className="bmiMeta">Dob: {result.age} godina</div>

            {result.isAdult ? (
              <div className="bmiChartCard">
                <div className="bmiChartTitle">
                  Distribucija BMI (Europa, 16+, EU-SILC 2022)
                </div>
                {/* <div className="bmiMeta">
                  U EU je 2022. bilo {EU_OVERWEIGHT_SHARE}% osoba s BMI >= 25, od
                  čega {EU_OBESITY_SHARE}% s BMI >= 30.
                </div>
                <div className="bmiMeta">
                  Udio prekomjerne težine raste s dobi: 20.3% (16-24) do 63.6%
                  (65-74).
                </div> */}
                <div className="bmiChartWrap">
                  {BMI_DISTRIBUTION_EU.map((segment) => {
                    const left = xToPercent(segment.min);
                    const width =
                      xToPercent(segment.max) - xToPercent(segment.min);
                    const height = (segment.share / maxDistributionShare) * 100;

                    return (
                      <div
                        key={segment.label}
                        className="bmiSegment"
                        style={{
                          left: `${left}%`,
                          width: `${width}%`,
                          height: `${height}%`,
                          backgroundColor: segment.color,
                        }}
                      >
                        <div className="bmiSegmentLabel">
                          {segment.label}
                          <br />
                          {segment.share}%
                        </div>
                      </div>
                    );
                  })}

                  {chartData ? (
                    <>
                      <div
                        className="bmiMarkerLine"
                        style={{ left: `${chartData.markerLeft}%` }}
                      />
                      <div
                        className="bmiMarkerDot"
                        style={{
                          left: `${chartData.markerLeft}%`,
                          bottom: `${chartData.markerHeight}%`,
                        }}
                      />
                      <div
                        className="bmiMarkerText"
                        style={{ left: `${chartData.markerLeft}%` }}
                      >
                        Vi: {result.bmi.toFixed(1)}
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="bmiAxis">
                  <span>12</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40</span>
                  <span>45</span>
                </div>
                <div className="bmiSource">
                  Izvor podataka:{" "}
                  <a
                    href="https://ec.europa.eu/eurostat/statistics-explained/SEPDF/cache/12376.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Eurostat - Overweight and obesity (EU-SILC 2022)
                  </a>{" "}
                  i{" "}
                  <a
                    href="https://eurohealthobservatory.who.int/docs/librariesprovider3/country-health-profiles/chp2025pdf/soheu-synthesis-report-final-web-2-fixed.pdf?sfvrsn=401350a5_1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    State of Health in the EU 2025 (obesity 14.6%)
                  </a>
                  .
                </div>
              </div>
            ) : (
              <div className="bmiMeta">
                Za osobe mlađe od 16 godina koristi se BMI-for-age percentil, pa
                ovaj graf za odrasle nije primjenjiv.
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
