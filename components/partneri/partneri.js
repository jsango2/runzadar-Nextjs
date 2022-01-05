import React, { useState } from "react";
import {
  WrapAll,
  Naslov,
  SponzorBox,
  WrapSponzori,
  Naslov2,
  Text,
} from "./style.js";
import Pozadina from "../../svg/pozadinTreneri.svg";
import Image from "next/image";
import Slider from "react-slick";

const Partneri = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <WrapAll>
      <Naslov>NAŠI PARTNERI</Naslov>

      <WrapSponzori>
        <SponzorBox>
          <a href="https://www.sport-moda.hr">
            <Image
              src="/sportmoda.png"
              // width={20}
              // height={20}
              layout="fill"
              objectFit="contain"
            />
          </a>
        </SponzorBox>
        <SponzorBox>
          {" "}
          <Image
            src="/wings.png"
            // width={20}
            // height={20}
            layout="fill"
            objectFit="contain"
          />
        </SponzorBox>{" "}
        <SponzorBox>
          {" "}
          <Image
            src="/tkzadar.png"
            // width={20}
            // height={20}
            layout="fill"
            objectFit="contain"
          />
        </SponzorBox>{" "}
        <SponzorBox>
          {" "}
          <a href="https://www.zadarnight.run">
            <Image
              src="/nightrunlogo-01.svg"
              // width={20}
              // height={20}
              layout="fill"
              objectFit="contain"
            />
          </a>
        </SponzorBox>{" "}
        <SponzorBox>
          {" "}
          <Image
            src="/logo bijeli.png"
            // width={20}
            // height={20}
            layout="fill"
            objectFit="contain"
          />
        </SponzorBox>{" "}
        <SponzorBox>
          {" "}
          <Image
            src="/4shelogo.png"
            // width={20}
            // height={20}
            layout="fill"
            objectFit="contain"
          />
        </SponzorBox>{" "}
        <SponzorBox>
          {" "}
          <Image
            src="/4f.png"
            // width={20}
            // height={20}
            layout="fill"
            objectFit="contain"
          />
        </SponzorBox>{" "}
        <SponzorBox>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h2>Sutra.hr</h2>
          </div>
        </SponzorBox>{" "}
        <SponzorBox>
          {" "}
          <Image
            src="/057.png"
            // width={20}
            // height={20}
            layout="fill"
            objectFit="contain"
          />
        </SponzorBox>{" "}
      </WrapSponzori>
    </WrapAll>
  );
};

export default Partneri;
