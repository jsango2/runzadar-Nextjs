import React, { useRef } from "react";
import lottie from "lottie-web";
import animationData from "../components/v53.json";
import { animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

const LottieControl = () => {
  const target = useRef(null);
  const lottieRef = React.useRef(null);

  let length = 0;
  // useGesture(
  //   {
  //     onPinch: ({
  //       origin: [ox, oy],

  //       movement: [ms],
  //       offset: [s, a],

  //       distance: [dr],
  //       delta,
  //     }) => {
  //       length = length + delta[0];

  //       console.log(length);
  //       window.scrollTo({
  //         top: length,
  //         behavior: "smooth",
  //       });
  //     },
  //   },

  //   {
  //     target,
  //     eventOptions: { passive: false },
  //   }
  // );

  React.useEffect(() => {
    var animDuration = 15000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      loop: false,
      autoplay: false,
      animationData,
    });
    function animatebodymovin(duration) {
      let scrollPosition = window.scrollY;
      if (scrollPosition >= 150200) {
        window.scrollTo({
          top: 0,
          // behavior: "smooth",
        });
      }
      // const scrollPosition = pinc
      const maxFrames = anim.totalFrames;
      // const frame = (maxFrames / 1) * ((scrollPosition/1000) / (duration *10));
      const frame = (maxFrames / 1) * (scrollPosition / 10 / duration);
      anim.goToAndStop(frame, true);
    }
    animatebodymovin(animDuration);
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <animated.div ref={target}>
      <div style={{ height: "15000vh", position: "relative" }}>
        <div
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            display: "flex",
            touchAction: "none",
            left: "0",
          }}
          ref={lottieRef}
          id="myElement"
        ></div>
      </div>
    </animated.div>
  );
};

export default LottieControl;
