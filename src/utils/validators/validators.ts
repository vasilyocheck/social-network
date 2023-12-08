import { ValuesType } from "components/common/TextInputForm/TextInputForm";

type ErrorType = {
  newText?: string;
};

export const validatePost = (values: ValuesType) => {
  const errors: ErrorType = {};

  if (values.newText.length < 1) {
    errors.newText = "min message length is 5 bytes";
  }

  return errors;
};
