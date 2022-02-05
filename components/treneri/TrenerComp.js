import React, { useState } from "react";
import {
  WrapAll,
  Naslov,
  WrapTreneri,
  Trener,
  Naslov2,
  Text,
} from "./style.js";
import Pozadina from "../../svg/pozadinTreneri.svg";
import { useInView } from "react-intersection-observer";
import KosaCrta from "../../svg/kosacrta.svg";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const TrenerComp = ({ slika, ime, text }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.25,
    // triggerOnce: true,
  });
  console.log(slika);
  return (
    <Trener
      ref={ref}
      className={` ${inView ? "trenerCardSlideUp" : "trenerCard"}`}
    >
      <div className="trenerImg">
        <Image
          priority
          src={slika}
          alt="coach Jure"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Naslov2>
        <KosaCrta
          style={{
            position: "absolute",
            transform: "translate(-25px,0)",
          }}
        />
        {ime}
      </Naslov2>
      <Text>{text}</Text>
    </Trener>
  );
};

export default TrenerComp;
