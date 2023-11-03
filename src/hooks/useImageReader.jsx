import { ImageContext } from "../contexts/image.context";
import { useContext } from "react";

export const useImageReader = () => {
  const { setImage } = useContext(ImageContext);
  return (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
};
