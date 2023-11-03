import { useContext } from "react";
import { TextContext } from "../contexts/text.context";

export const FontSize = () => {
  const { setFontSize, fontSize } = useContext(TextContext);
  return (
    <div>
      <label>Размер шрифта:</label>
      <input
        type="number"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />
    </div>
  );
};
