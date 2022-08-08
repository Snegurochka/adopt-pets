import { FC, memo, useState } from "react";
import { User } from "firebase/auth";
import { IAnimal } from "../../interfaces/interfaces";

import styles from "./PetDetails.module.css";

import Button from "../UI/Button/Button";
import Modal from "../../components/Modal/Modal";
import PopUpAdoption from "../PopUpAdoption/PopUpAdoption";

interface IProps {
  user: User | null;
  petInfo: IAnimal;
}

const PetDetails: FC<IProps> = memo(({ user, petInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const { type, breeds, description, name } = petInfo;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{`${type} — ${breeds?.primary}`}</h2>
      <div className={styles.addopt_wrapp}>
        {user ? (
          <Button
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Adopt {name}
          </Button>
        ) : (
          <span>If you want to adopt this pet, please log in</span>
        )}
      </div>
      <p>{description}</p>
      {showModal ? (
        <Modal>
          <PopUpAdoption
            name={name}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </Modal>
      ) : null}
    </div>
  );
});

export default PetDetails;
