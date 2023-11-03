import { useContext } from "react";
import { TextContext } from "../contexts/text.context";
export const useHandleMouseDown = () => {
  const { position, setStartPosition, setDragging } = useContext(TextContext);
  return (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };
};

export const useHandleMouseMove = () => {
  const { setPosition, dragging, startPositon } = useContext(TextContext);
  return (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - startPositon.x,
        y: e.clientY - startPositon.y,
      });
    }
  };
};

export const useHandleMouseUp = () => {
  const { setDragging } = useContext(TextContext);
  return () => {
    setDragging(false);
  };
};
