import "../styles.css";
import { SaveBtn } from "../components/SaveBtn";
import { MemContainer } from "../components/MemContainer";
import { FileInput } from "../components/FileInput";
import { ColorInput } from "../components/ColorInput";
import { FontSize } from "../components/FontSize";
import { TextInput } from "../assets/TextInput";

const MemeGenerator = () => {
  return (
    <>
      <h1>Создайте свой мем</h1>
      <div className="meme-generator">
        <FileInput></FileInput>
        <TextInput></TextInput>
        <FontSize></FontSize>
        <ColorInput></ColorInput>
        <MemContainer></MemContainer>
        <SaveBtn />
      </div>
    </>
  );
};

export default MemeGenerator;
