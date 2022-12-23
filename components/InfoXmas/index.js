import React from "react";
import {
  Naslov,
  Segment,
  Wrap,
  HeroTitle,
  HeroTitle2,
  HeroWrap,
  Veza,
} from "./style.js";

const InfoXmas = () => {
  return (
    <>
      <Naslov>Info za trkače</Naslov>
      <Wrap>
        <Segment>
          <b>Organizatori utrke:</b> Škola trčanja Zadar, Triatlon klub Zadar,
          Sport Zone j.d.o.o.‍
        </Segment>
        <Segment>
          <b>Partner utrke: </b> Turistička zajednica Grada Zadra‍, Turistička
          zajednica zadarske županije
        </Segment>
        <Segment>
          <b>Vrijeme održavanja:</b> 23.12. 2022. u 16.30 h (petak)‍
        </Segment>
        <Segment>
          <b>Duljina:</b> 5 km‍
        </Segment>{" "}
        <Segment>
          <b> Start utrke:</b> Puntamika - D-Marin Borik‍
        </Segment>{" "}
        <Segment>
          <b>Cilj utrke:</b> Advent Zadar - Trg 5 Bunara‍
        </Segment>{" "}
        <Segment>
          <b>Presvlačenje i oprema:</b> Trkači mogu svoju opremu predati na
          startu a ista će ih dočekati u cilju utrke u zoni za presvlačenje‍
        </Segment>{" "}
        <Segment>
          <b>Vremenski limit:</b> 45 minuta‍
        </Segment>{" "}
        <Segment>
          <b>Prijava:</b> Do 22.12.2022.‍
        </Segment>{" "}
        <Segment>
          <b>Podjela startnih paketa:</b> Na dan utrke od 13h-15.30h‍
        </Segment>{" "}
        <Segment>
          <b> Startnina:</b> 130kn. Za djecu rođenu 2010.g i mlađe, startnina
          iznosi 80kn.
        </Segment>{" "}
        <Segment>
          {" "}
          U cijenu startnine uračunat je startni broj, čip za mjerenje vremena,
          crvena božićna kapica, okrijepa na startu i cilju, fotografije sa
          utrke. Nagrade sponzora za prvoplasirane u muškoj i ženskoj
          konkurenciji. Trkači koji uplate startninu do 10.12.2022., u startnom
          paketu dobivaju i majicu utrke!‍‍
        </Segment>
        <Segment>
          <b>Informacije:</b>+385914428097
        </Segment>
        <Segment>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="info@runzadar.com"
          >
            <b>info@runzadar.com</b>
          </a>
        </Segment>
      </Wrap>
    </>
  );
};

export default InfoXmas;
