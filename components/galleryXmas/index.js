import React from "react";
import {
  Naslov,
  WrapVideo,
  HeroTitle,
  HeroTitle2,
  HeroWrap,
  Veza,
} from "./style.js";
import YouTube from "react-youtube";
import useWindowSize from "../helper/usewindowsize";

function GalleryXmas() {
  const size = useWindowSize();

  const opts = {
    // height: "390",
    width: size > 600 ? "650" : "100%",
    height: size > 600 ? "390" : "100%",

    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <Naslov>Foto / Video</Naslov>;
      <WrapVideo>
        <YouTube className="youTubeVideo" videoId="W5l_aR-SeWA" opts={opts} />
      </WrapVideo>
    </>
  );
}

export default GalleryXmas;
