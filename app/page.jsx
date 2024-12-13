"use client";

import { ImageGenerator } from "@/src/ImageGenerator";
import { Settings } from "@/src/Settings";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [settings, setSettings] = useState({
    padding: 2,
    shadow: 0,
    radius: 0,
  });

  return (
    <main className="flex flex-col justify-center items-center m-auto max-w-4xl lg:flex-row gap-8 min-h-full">
      <Settings
        image={image}
        setImage={setImage}
        settings={settings}
        setSettings={setSettings}
      />
      <div className="w-full h-fit border rounded-md">
        <ImageGenerator image={image} settings={settings} />
      </div>

      {/* <div>{image ? <img src={image.src} /> : null}</div> */}
    </main>
  );
}
