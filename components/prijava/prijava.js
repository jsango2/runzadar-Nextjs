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
              <select id="year" name="Godina rodjenja">
                <option>Godina rođenja</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
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
