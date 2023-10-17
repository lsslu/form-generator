import { createContext, useEffect, useState, FC } from "react";
import { initialFormState } from "../store";
import { Form } from "../config/types";

const FormContext = createContext({});

interface Props {
  config: Form;
}

const FormContainer: FC<Props> = ({ config }) => {
  const [formState, setFormState] = useState({});

  useEffect(() => {
    setFormState(initialFormState(config));
  }, []);
  return (
    <FormContext.Provider
      value={{
        values: formState,
      }}
    >
      <div></div>
    </FormContext.Provider>
  );
};

export default FormContainer;
