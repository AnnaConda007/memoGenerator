import { useHandleMouseMove, useHandleMouseUp } from "../hooks/useMouse";
import { useContext } from "react";
import { ImageContext } from "../contexts/image.context";
import { Text } from "./Text";

export const MemContainer = () => {
  const { image } = useContext(ImageContext);
  const handleMouseMove = useHandleMouseMove();
  const handleMouseUp = useHandleMouseUp();
  return (
    <div
      className="mem-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {image && (
        <div style={{ position: "relative" }}>
          <img src={image} alt="meme" style={{ maxWidth: "100%" }} />
          <Text />
        </div>
      )}
    </div>
  );
};
