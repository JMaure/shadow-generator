"use client";

import { ImageGenerator } from "@/src/ImageGenerator";
import { Settings } from "@/src/Settings";
import { renderPNG } from "./render-png";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [settings, setSettings] = useState({
    padding: 2,
    shadow: 0,
    radius: 0,
  });
  const [loading, setLoading] = useState("idle");

  const handleDownload = async (isCopy) => {
    setLoading(isCopy ? "copying" : "downloading");
    const { blob } = await renderPNG({
      image,
      settings,
    });
    const url = URL.createObjectURL(blob);

    if (isCopy) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
    } else {
      const a = document.createElement("a");
      a.href = url;
      a.download = image.name.replace(".png", "-shadow.png");
      a.click();
    }
    setLoading("idle");
  };

  return (
    <main className="flex flex-col justify-center items-center m-auto max-w-4xl lg:flex-row gap-8 min-h-full">
      <Settings
        image={image}
        setImage={setImage}
        settings={settings}
        setSettings={setSettings}
      />
      <div
        style={{
          maxWidth: 400,
        }}
        className="flex flex-col w-fit h-fit max-w-md lg:maw-w-none border rounded-md items-center gap-4"
      >
        <ImageGenerator image={image} settings={settings} />
        <div className="flex gap-4">
          <button
            className="btn btn-primary rounded-md"
            disabled={!image}
            onClick={() => handleDownload(false)}
            disabled={loading !== "idle"}
          >
            Download{" "}
            {loading === "downloading" ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : null}
          </button>
          <button
            className="btn btn-secondary rounded-md"
            disabled={!image}
            onClick={() => handleDownload(true)}
            disabled={loading !== "idle"}
          >
            Copy{" "}
            {loading === "copying" ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : null}
          </button>
        </div>
      </div>
    </main>
  );
}
