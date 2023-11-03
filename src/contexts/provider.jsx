 import { TextProvider } from "./text.context";
import { ImageProvider } from "./image.context";
export const Providers = ({ children }) => {
  return (
    <ImageProvider>
      <TextProvider>{children}</TextProvider>
    </ImageProvider>
  );
};
