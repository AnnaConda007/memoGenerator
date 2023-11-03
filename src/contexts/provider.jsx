import { PositionProvider } from "./position.context";
import { ImageProvider } from "./image.context";
export const Providers = ({ children }) => {
  return (
    <ImageProvider>
      <PositionProvider>{children}</PositionProvider>
    </ImageProvider>
  );
};
