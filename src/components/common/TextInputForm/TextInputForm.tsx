import React, { FC } from "react";
import { useFormik } from "formik";
import s from "./TextInputForm.module.css";
import { validatePost } from "utils/validators/validators";

type NewPostInputFormType = {
  initialPostText: string;
  onAddPost: (newPostText: string) => void;
};

export type ValuesType = {
  newText: string;
};

export const TextInputForm: FC<NewPostInputFormType> = ({ onAddPost, initialPostText }) => {
  const formik = useFormik({
    initialValues: {
      newText: initialPostText,
    },
    validate: (values) => validatePost(values),
    onSubmit: (values) => {
      onAddPost(values.newText);
      formik.handleReset(values.newText);
    },
  });
  const addPostStatus = !!formik.errors.newText;
  return (
    <form onSubmit={formik.handleSubmit} className={s.inputForm}>
      <textarea id="newText" name="newText" onChange={formik.handleChange} value={formik.values.newText} />
      <button type="submit" disabled={addPostStatus}>
        add post
      </button>
    </form>
  );
};
