import { createContext, useState } from "react";

export const PositionContext = createContext({
  position: { x: 50, y: 50 },
  setPosition: () => {},
  startPositon: { x: 0, y: 0 },
  setStartPosition: () => {},
  dragging: false,
  setDragging: () => {},
  text: "",
  setText: () => {},
  color: "black",
  setColor: () => {},
  fontSize: "20",
  setFontSize: () => {},
});

export const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [startPositon, setStartPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("");

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

  return (
    <PositionContext.Provider value={value}>
      {children}
    </PositionContext.Provider>
  );
};
