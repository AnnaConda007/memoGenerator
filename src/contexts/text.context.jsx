import { createContext, useState } from "react";

export const TextContext = createContext({
  position: { x: 50, y: 50 },
  setPosition: () => {},
  startPositon: { x: 0, y: 0 },
  setStartPosition: () => {},
  dragging: false,
  setDragging: () => {},
  text: "",
  setText: () => {},
  color: "#000000",
  setColor: () => {},
  fontSize: "20",
  setFontSize: () => {},
});

export const TextProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [startPositon, setStartPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("20");

  const value = {
    position,
    setPosition,
    startPositon,
    setStartPosition,
    dragging,
    setDragging,
    text,
    setText,
    color,
    setColor,
    fontSize,
    setFontSize,
  };

  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};
