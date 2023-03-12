import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const Rimac = dynamic(() => import("../components/rimac/4k"), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <Rimac />
    </div>
  );
}
