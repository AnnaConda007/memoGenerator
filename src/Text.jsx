import { useHandleMouseDown } from "./hooks/useMouse";
import { useContext } from "react";
import { PositionContext } from "./contexts/position.context";

export const Text = () => {
  const { position, text, color, fontSize } = useContext(PositionContext);

  const handleMouseDown = useHandleMouseDown();

  return (
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
  );
};
