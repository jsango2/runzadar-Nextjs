import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/layout";
import Script from "next/script";
import Head from "next/head";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

function success() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(15.4771);
  const [lat, setLat] = useState(44.2796);
  const [zoom, setZoom] = useState(12);
  const [pitch, setPitch] = useState(60);
  const [bearing, setBearing] = useState(0);

  function rotateCamera(timestamp) {
    // rotate at approximately ~10 degrees per second
    map.current.rotateTo((timestamp / 100) % 360, { duration: 0 });
    // request the next frame of the animation
    requestAnimationFrame(rotateCamera);
  }
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/lovreperaic/cky49y5uf7bwb14l5ro8nd0id",
      center: [lng, lat],
      zoom: zoom,
      pitch: 75, // starting pitch in degrees
      bearing: 0, // starting bearing in degree
    });
    // map.current.addControl(new mapboxgl.NavigationControl());
    map.current.on("load", function () {
      // start the animation
      rotateCamera(0);
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      setPitch(map.current.getPitch().toFixed(2));
      setBearing(map.current.getBearing().toFixed(2));
    });
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/0.53.1/mapbox-gl.css"
        />
      </Head>
      <div className="mapWrapper">
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} I Pitch: {pitch} I
          Bearing: {bearing}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/0.53.1/mapbox-gl.js" />
    </>
  );
}

export default success;
