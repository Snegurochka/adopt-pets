import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AppRoute } from "../../../const";
import classes from "./NewCommentForm.module.css";

import Button from "../../UI/Button/Button";
import FormInput from "../../UI/FormInput/FormInput";
import FormTextArea from "../../UI/FormTextarea/FormTextArea";

interface IProps {
  petId: string;
}

const defaultFields = {
  name: "",
  comment: "",
};

const NewCommentForm: FC<IProps> = ({ petId }) => {
  const [fields, setFields] = useState(defaultFields);
  const { name, comment } = fields;
  const history = useHistory();
  const dispatch = useDispatch();

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    //dispatch(addComment(name, comment));
    
    history.replace(`${AppRoute.DETAILS_INDEX}${petId}`);
  };

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <FormInput
        label="Your name"
        name="name"
        value={name}
        onChange={changeHandler}
      />
      <FormTextArea
        label="Your comment or question"
        name="comment"
        value={comment}
        onChange={changeHandler}
      />
      <div className={classes.actions}>
        <Button>Add a comment...</Button>
      </div>
    </form>
  );
};

export default NewCommentForm;
