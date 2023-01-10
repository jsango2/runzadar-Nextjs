import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Rimac = dynamic(() => import("../components/rimac/rimacComponent3"), {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Rimac />
    </div>
  );
}
