import React, { useEffect, useState } from "react";
import {
  WrapAll,
  PozadinaLinija,
  Naslov,
  PhotoOfTheDay,
  Text,
  Text2,
  Frame,
  WrapFrame,
  Slika,
} from "./style.js";
import Polaroid from "../../images/polaroidframe.png";
import Trkac from "../../images/musapstan1.png";
import Banina from "../../images/banina.png";
import Banina2 from "../../images/banina2.png";
import Nin from "../../images/ninzadar.png";
import Sale from "../../images/sale.png";
import Xmasrun from "../../images/xmasrun.png";
import Skip from "../../images/znr2019.png";
import Image from "next/image";

// import { HeroWrap } from "./style.js"
const grupa = [
  <Image src="/banina.png" layout="fill" objectFit="cover" />,
  <Image src="/banina2.png" layout="fill" objectFit="cover" />,
  <Image src="/ninzadar.png" layout="fill" objectFit="cover" />,
  <Image src="/sale.png" layout="fill" objectFit="cover" />,
  <Image src="/znr2019.png" layout="fill" objectFit="cover" />,
];

const Blast = () => {
  const [currentImage, setCurrentImage] = useState(0);

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
  return (
    <WrapAll>
      <PozadinaLinija>
        <PhotoOfTheDay>
          <Naslov>Photo of the day</Naslov>
          <Text>BLAST FROM THE PAST</Text>
        </PhotoOfTheDay>
        <WrapFrame>
          <Slika>{grupa[currentImage]}</Slika>
          <Frame>
            <Image src="/polaroidframe.png" layout="fill" objectFit="cover" />
          </Frame>
        </WrapFrame>
        <Text2 style={{ marginLeft: "70px" }}>SINCE 2015</Text2>
      </PozadinaLinija>
    </WrapAll>
  );
};

export default Blast;
