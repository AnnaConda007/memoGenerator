import { createContext, useState } from "react";

export const ImageContext = createContext({
  image: null,
  setImage: () => {},
});

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  const value = {
    image,
    setImage,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
