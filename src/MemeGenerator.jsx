import { useContext } from "react";
import "./styles.css";
import { PositionContext } from "./contexts/position.context";
import { useImageReader } from "./hooks/useImageReader";
import { SaveBtn } from "./SaveBtn";
import { MemContainer } from "./MemContainer";

const MemeGenerator = () => {
  const handleImageLoad = useImageReader();

  const { text, setText, fontSize, setFontSize, color, setColor } =
    useContext(PositionContext);

  return (
    <div className="meme-generator">
      <input type="file" accept="image/*" onChange={handleImageLoad} />
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
      <MemContainer></MemContainer>
      <SaveBtn />{" "}
    </div>
  );
};

export default MemeGenerator;
