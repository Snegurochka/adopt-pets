import { FC } from "react";
import Button from "../UI/Button/Button";

interface IProps {
  name: string;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const PopUpAdoption: FC<IProps> = ({ name, showModal, setShowModal }) => {
  const adopt = () => {
    console.log("ok adopted");
    setShowModal(!showModal);
  };
  return (
    <div>
      <h1>Would you like to adopt {name}?</h1>
      <div className="buttons">
        <Button onClick={adopt}>Yes</Button>
        <Button onClick={() => setShowModal(!showModal)}>No</Button>
      </div>
    </div>
  );
};

export default PopUpAdoption;
