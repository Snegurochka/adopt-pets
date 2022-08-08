import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCurrentUser } from "../../../store/selectors/user";
import { addCommentThunk } from "../../../store/AC/comments";

import classes from "./NewCommentForm.module.css";

import Button from "../../UI/Button/Button";
import FormInput from "../../UI/FormInput/FormInput";
import FormTextArea from "../../UI/FormTextarea/FormTextArea";

interface IProps {
  petId: string;
}

const defaultFields = {
  title: "",
  commentText: "",
};

const NewCommentForm: FC<IProps> = ({ petId }) => {
  const [fields, setFields] = useState(defaultFields);
  const { title, commentText } = fields;
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!user) return;
    const comment = {
      uid: user.uid,
      petId,
      title,
      text: commentText,
    };
    dispatch(addCommentThunk(comment, history));
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
        label="Title"
        name="title"
        value={title}
        onChange={changeHandler}
      />
      <FormTextArea
        label="Your comment or question"
        name="commentText"
        value={commentText}
        onChange={changeHandler}
      />
      <div className={classes.actions}>
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default NewCommentForm;
