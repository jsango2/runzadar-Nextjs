import React from "react";
import {
  Naslov,
  Segment,
  SegmentTop,
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
        <SegmentTop>
          <b>Božićni duh:</b> zadarska tvrtka Rentlio će za svaki tvoj pretrčani
          kilometar donirati 1 Euro za potrebe djece u sklopu Centra za pružanje
          usluga u zajednici Zadar
        </SegmentTop>
        <Segment>
          <b>Organizatori utrke:</b> Škola trčanja Zadar, Triatlon klub Zadar,
          Sport Zone j.d.o.o.‍
        </Segment>
        <Segment>
          <b>Partner utrke: </b> Turistička zajednica Grada Zadra‍, Turistička
          zajednica zadarske županije
        </Segment>
        <Segment>
          <b>Vrijeme održavanja:</b> 16.12. 2023. u 16.00 h (subota)‍
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
          <b>Prijava:</b> Do 15.12.2023.‍
        </Segment>{" "}
        <Segment>
          <b>Podjela startnih paketa:</b> Na dan utrke od 13h-15.30h‍
        </Segment>{" "}
        <Segment>
          <b> Startnina:</b> 16Eur. Za djecu rođenu 2011.g i mlađe, startnina
          iznosi 10Eur.
        </Segment>{" "}
        <Segment>
          {" "}
          U cijenu startnine uračunat je startni broj, čip za mjerenje vremena,
          crvena božićna kapica, okrijepa na startu i cilju, fotografije sa
          utrke. Nagrade sponzora za prvoplasirane u muškoj i ženskoj
          konkurenciji. Trkači koji uplate startninu do 6.12.2023., u startnom
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
