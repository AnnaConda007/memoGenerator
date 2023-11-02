import { useState } from "react";
import "./styles.css";

function MemeGenerator() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [color, setColor] = useState("#000000");
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      });
    }
  };

  const handleSave = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = color;
      ctx.fillText(text, position.x, position.y);
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };

  return (
    <div className="meme-generator">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите текст мема"
        />
      </div>
      <div>
        <label>Размер шрифта:</label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>
      <div>
        <label>Цвет:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div
        className="meme-preview"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {image && (
          <div style={{ position: "relative" }}>
            <img src={image} alt="meme" style={{ maxWidth: "100%" }} />
            <div
              style={{
                position: "absolute",
                top: `${position.y}px`,
                left: `${position.x}px`,
                fontSize: `${fontSize}px`,
                color: color,
                cursor: "move",
              }}
              onMouseDown={handleMouseDown}
            >
              {text}
            </div>
          </div>
        )}
      </div>
      <button onClick={handleSave}>Сохранить мем</button>
    </div>
  );
}

export default MemeGenerator;
