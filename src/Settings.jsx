import { useState } from "react";

export const Settings = ({ image, setImage, settings, setSettings }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;

    if (file.type !== "image/png") {
      e.target.value = "";
      alert("We only accept PNG");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();

      img.onload = () =>
        setImage({
          src: img.src,
          width: img.width,
          height: img.height,
          name: fileName,
        });
      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Settings</h2>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">File</span>
            </div>
            <input
              type="file"
              onChange={handleImageUpload}
              className="file-input file-input-bordered file-input-primary w-full max-w-xs rounded-md"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Padding {settings.padding}</span>
            </div>
            <input
              type="range"
              min={0}
              max="99"
              value={settings.padding}
              onChange={(e) =>
                setSettings({ ...settings, padding: Number(e.target.value) })
              }
              className="range range-sm range-primary"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Shadow {settings.shadow}</span>
            </div>
            <input
              type="range"
              min={0}
              max="99"
              value={settings.shadow}
              onChange={(e) =>
                setSettings({ ...settings, shadow: Number(e.target.value) })
              }
              className="range range-sm range-primary"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Radius {settings.radius}</span>
            </div>
            <input
              type="range"
              min={0}
              max="99"
              value={settings.radius}
              onChange={(e) =>
                setSettings({ ...settings, radius: Number(e.target.value) })
              }
              className="range range-sm range-primary"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
