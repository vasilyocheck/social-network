export type ValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type FormikErrorType = {
  email?: string;
  password?: string;
  rememberMe?: string;
};

export const validate = (values: ValuesType) => {
  const errors: FormikErrorType = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (values.email.length > 15) {
    errors.email = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
