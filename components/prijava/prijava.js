import React, { useState, useEffect, forwardRef, useRef } from "react";

import { WrapAll, WrapForm, Left, Right, Naslov2, Foto } from "./style.js";
import axios from "axios";
import Lottie from "lottie-react";

import Swish from "../../svg/Swish.svg";
import KosaCrta from "../../svg/kosacrta.svg";
import CrteCesta from "../../svg/linijaForm.svg";
import Banina from "../../images/banina.png";
import Banina2 from "../../images/banina2.png";
import Nin from "../../images/ninzadar.png";
import Sale from "../../images/sale.png";
import Xmasrun from "../../images/xmasrun.png";
import Skip from "../../images/skip.png";
import { Parallax } from "react-scroll-parallax";
import animacijaIkona from "./animacijaIkona.js";
import animacijaFotke1150 from "./animacijaFotke1150.js";
import animacijaFotke600 from "./animacijaFotke600.js";
import useWindowSize from "../helper/usewindowsize";
import DropdownYears from "../helper/dropdownYears.js";

// import { HeroWrap } from "./style.js"

const Prijava = () => {
  const [value, setValue] = useState({});
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);
  const [issubmiting, setIssubmiting] = useState(false);
  const [poslano, setPoslano] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const grupa = [Banina, Banina2, Skip, Nin];
  const grupa2 = [Xmasrun, Skip, Banina2, Sale];

  const size = useWindowSize();

  useEffect(() => {
    const switchImage = setInterval(() => {
      if (currentImage < grupa.length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
      return currentImage;
    }, 3000);
    return () => clearInterval(switchImage);
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // setIssubmiting(true);
    console.log("Sending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inputs }),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        setInputs({ ime: "" }, { prezime: "" }, { datum: "" }, { email: "" });
      }
    });
  };

  return (
    <section id="prijava">
      <WrapAll>
        <Parallax y={[-20, 50]}>
          <CrteCesta
            style={{
              position: "relative",
              top: "180px",
            }}
          />
        </Parallax>
        <WrapForm>
          <Left>
            <Naslov2>
              <KosaCrta
                style={{
                  position: "absolute",
                  transform: "translate(-35px,0px",
                }}
              />
              Prijava na besplatni prvi trening
            </Naslov2>
            <form
              className="formular"
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" placeholder="Ime" name="ime" required />
              <input
                type="text"
                placeholder="Prezime"
                name="prezime"
                required
              />
              {/* <input
                type="date"
                placeholder="Datum rođenja"
                name="datum"
                required
              /> */}
              <DropdownYears />
              <input type="email" placeholder="Email" name="email" required />
              <input className="submitButton" value="Prijava" type="submit" />
              {issubmiting ? (
                <div className="isSubmitinig">
                  <div>Šaljem prijavu....</div>
                  <Lottie
                    className="lottieTrkac"
                    animationData={animacijaIkona}
                    loop={true}
                  />
                </div>
              ) : (
                ""
              )}{" "}
              <div className="poslanoForm">{poslano}</div>
            </form>
          </Left>
          <Right>
            <Lottie
              animationData={
                size.width < 900 ? animacijaFotke600 : animacijaFotke1150
              }
              className={`${
                size.width < 900 ? "sliderPrijava900" : "sliderPrijava1150"
              }`}
              loop={true}
            />
          </Right>
          <Swish style={{ position: "absolute" }} />
        </WrapForm>
      </WrapAll>
    </section>
  );
};

export default Prijava;
