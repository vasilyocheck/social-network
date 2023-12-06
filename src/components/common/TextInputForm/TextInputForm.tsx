import React, { FC } from "react";
import { useFormik } from "formik";
import s from "./TextInputForm.module.css";

type NewPostInputFormType = {
  initialPostText: string;
  onAddPost: (newPostText: string) => void;
};

export const TextInputForm: FC<NewPostInputFormType> = ({ onAddPost, initialPostText }) => {
  const formik = useFormik({
    initialValues: {
      newText: initialPostText,
    },
    onSubmit: (values) => {
      onAddPost(values.newText);
      formik.handleReset(values.newText);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={s.inputForm}>
      <textarea id="newText" name="newText" onChange={formik.handleChange} value={formik.values.newText} />
      <button type="submit">add post</button>
    </form>
  );
};
