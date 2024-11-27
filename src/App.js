import React, { useState } from "react";

const BASE_IMG_URL = "https://picsum.photos/seed/sameimage/300";

function App() {
  return <CustomBlur />;
}

const CustomBlur = () => {
  const [blur, setBlur] = useState(0); 

  const handleSliderChange = (e) => {
    setBlur(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Custom Blur Image</h1>
      <img
        src={`${BASE_IMG_URL}?blur=${blur}`}
        alt="Blurred"
        style={{
          border: "2px solid #ccc",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />
      <div>
        <label>
          Blur Level: {blur}
          <input
            type="range"
            min="0"
            max="10"
            value={blur}
            onChange={handleSliderChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
