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

import Image from "next/image";

// import { HeroWrap } from "./style.js"
const grupa = [
  <Image src="/foto1.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto2.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto3.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto4.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto5.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto6.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto7.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto8.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto9.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto10.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto11.jpg" layout="fill" objectFit="cover" />,
  <Image src="/foto12.jpg" layout="fill" objectFit="cover" />,
];

const Blast = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(Math.floor(Math.random() * grupa.length));
    // const switchImage = setInterval(() => {
    //   if (currentImage < grupa.length - 1) {
    //     setCurrentImage(currentImage + 1);
    //   } else {
    //     setCurrentImage(0);
    //   }
    //   return currentImage;
    // }, 1000);
    // return () => clearInterval(switchImage);
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
