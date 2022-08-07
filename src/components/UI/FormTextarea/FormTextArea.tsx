import { ChangeEvent, FC, TextareaHTMLAttributes } from "react";
import styles from "./FormTextArea.module.scss";

type FormInputProps = TextareaHTMLAttributes<HTMLInputElement> & {
  value: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const FormTextArea: FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  ...otherParams
}) => {
  return (
    <div className={styles.group}>
      <textarea
        className={styles.formInput}
        name={name}
        cols={20}
        rows={4}
        defaultValue={value}
        onChange={onChange}
      />
      {label && (
        <label
          className={`${value && value.length ? styles.shrink : ""} ${
            styles.label
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormTextArea;
