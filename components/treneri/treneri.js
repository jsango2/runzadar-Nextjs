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
import TrenerComp from "./TrenerComp.js";

const Treneri = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.35,
  });
  return (
    <WrapAll>
      <Naslov>VAŠI TRENERI</Naslov>
      <Pozadina
        style={{
          position: "absolute",
          top: "20px",
        }}
      />

      <Tilt
        className="treneriCrta"
        transitionEasing={"cubic-bezier(.14,.58,.51,.99)  "}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "310px",
            top: "-85px",
            left: "0px",
            zIndex: "-1",
          }}
        >
          <Image src="/linijaForm.svg" layout="fill" objectFit="cover" />
        </div>
      </Tilt>

      <WrapTreneri>
        <TrenerComp
          slika="/jure.png"
          ime="JURE ŠANGO"
          text="Školu trčanja Zadar organizira i vodi magistar kineziologije Jure
            Šango, kondicijski trener sa petnaestogodišnjim iskustvom u radu sa
            sportašima i rekreativcima. Deset godina kondicijski trener u
            košarkaškom klubu Zadar te trener Hrvatske i BiH košarkaške
            reprezentacije na Europskim prvenstvima. Kondicijski trener Hrvatske
            košarkaške reprezentacije na Olimpijskim igrama u Riju 2016. godine.
            Trener triatlona a i sam rekreativni triatlonac. Vanjski
            suradnik-predavač na Kineziološkom fakultetu u Zagrebu i Splitu.
            Aktivan u radu Triatlon kluba Zadar. Predsjednik Udruge kondicijskih
            trenera zadarske županije."
        />
        <TrenerComp
          slika="/tuta.png"
          ime="IVAN TUTA"
          text=" Suradnik Škole trčanja Zadar je naš iskusni triatlonac Ivan Tuta.
            Ivan Tuta je apsolvent kineziološkog fakulteta sa usmjerenjem
            kondicijske pripreme sportaša. Bavi se triatlonom već deset godina i
            postiže zapažene rezultate. Višestruki je finisher na Ironman
            natjecanjima. Natječe se i na brojnim dugoprugaškim trkačkim
            natjecanjima u Hrvatskoj. Trener je u triatlon klubu Zadar. ‍
            “Postigli smo tako lijepe stvari sa našim programima u Školi
            trčanja. Jako veliki broj ljudi je u potpunosti promjenilo svoj stil
            života i na to smo jako ponosni.” – Ivan Tuta"
        />
      </WrapTreneri>
    </WrapAll>
  );
};

export default Treneri;
