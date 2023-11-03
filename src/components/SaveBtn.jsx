import { useContext } from "react";
import { ImageContext } from "../contexts/image.context"; 
import { TextContext } from "../contexts/text.context";
export const SaveBtn = () => {
  const { image } = useContext(ImageContext);
  const { position, text, color } = useContext(TextContext);
  const handleSave = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = color;
      ctx.fillText(text, position.x, position.y);
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };

  return <button onClick={handleSave}>Сохранить мем</button>;
};
