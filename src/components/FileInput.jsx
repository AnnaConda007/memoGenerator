import { useImageReader } from "../hooks/useImageReader";

export const FileInput = () => {
  const handleImageLoad = useImageReader();
  return <input type="file" accept="image/*" onChange={handleImageLoad} />;
};
