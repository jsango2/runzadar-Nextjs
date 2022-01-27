import React from "react";
import {
  WrapAll,
  WrapDiv,
  Naslov,
  Naslov2,
  Text,
  Trkac,
  Raspored,
  Zrake,
  RasporedWrap,
  WrapNaslovRaspored,
  Box,
  Clanarina,
  Overlay,
} from "./style.js";
import LocationIcon from "../../svg/location.svg";
import KosaCrta from "../../svg/kosacrta.svg";
import { Parallax } from "react-scroll-parallax";
import nightRunZrake from "../../images/Vector.png";
import Image from "next/image";
import useWindowSize from "../helper/usewindowsize";
import RasporedWide from "./rasporedWide.js";

// import { HeroWrap } from "./style.js"

const ZastoSkola = () => {
  const size = useWindowSize();
  return (
    <WrapAll>
      <WrapDiv>
        <Naslov>Zašto odabrati trčanje i Školu trčanja Zadar?</Naslov>
        <div style={{ height: "47px" }}></div>
        <Text>
          Škola trčanja Zadar nudi siguran i temeljit pristup treningu za trkače
          rekreativce na svim razinama treniranosti. Treninzi su detaljno
          planirani i temeljeni na dugogodišnjim spoznajama struke, a pristup
          članovima je individualiziran. <br />
          <br />
          <KosaCrta
            style={{ position: "absolute", transform: "translate(-35px,-5px" }}
          />
          Trčanje je najbolji način za regulaciju tjelesne težine. <br />
          <br />
          <KosaCrta
            style={{ position: "absolute", transform: "translate(-35px,-5px" }}
          />
          Treniranje u grupi zajedno s trkačima istih mogućnostima znači dodatnu
          motivaciju trkaču i postizanje optimalnih pomaka u sposobnostima.{" "}
          <br />
          <br />
          <KosaCrta
            style={{ position: "absolute", transform: "translate(-35px,-5px" }}
          />
          Edukacija korisnika o pravilnoj prehrani, osnovama treninga i važnosti
          pravilnog odabira opreme za trčanje.
        </Text>
        <Overlay />
        <Trkac />
        <RasporedWide />
        <Clanarina>
          <div style={{ margin: "auto" }}>
            Povoljna članarina{" "}
            <b>od 180 kn/mjesečno osigurava 3 treninga tjedno </b>
            vrhunskog trenažnog procesa, osmišljenog da vas dovede do vaših
            maksimalnih trkačkih mogućnosti.
          </div>
        </Clanarina>
      </WrapDiv>
    </WrapAll>
  );
};

export default ZastoSkola;
