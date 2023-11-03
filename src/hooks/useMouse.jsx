import { useContext } from "react";
import { PositionContext } from "../contexts/position.context";

export const useHandleMouseDown = () => {
  const { position, setStartPosition, setDragging } =
    useContext(PositionContext);
  return (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };
};

export const useHandleMouseMove = () => {
  const { setPosition, dragging, startPositon } = useContext(PositionContext);
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
  const { setDragging } = useContext(PositionContext);
  return () => {
    setDragging(false);
  };
};
