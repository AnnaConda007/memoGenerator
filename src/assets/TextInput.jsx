import { useContext } from "react";
import { TextContext } from "../contexts/text.context";

export const TextInput = () => {
  const { setText, text } = useContext(TextContext);
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст мема"
      />
    </div>
  );
};
