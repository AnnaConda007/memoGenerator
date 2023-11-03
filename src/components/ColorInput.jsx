import { useContext } from "react";
import { TextContext } from "../contexts/text.context";

export const ColorInput = () => {
  const { color, setColor } = useContext(TextContext);
  return (
    <div>
      <label>Цвет:</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};
