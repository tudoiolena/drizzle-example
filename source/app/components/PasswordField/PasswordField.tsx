import { useId } from "react";
import { useField } from "@rvf/react-router";
import { PasswordInput } from "@mantine/core";
import "@mantine/core/styles/PasswordInput.css";

import { type StringFieldProps } from "~/types/common.types";

export const PasswordField = ({
  label,
  // scope,
  placeholder,
  error,
  name,
}: StringFieldProps) => {
  // const field = useField(scope);
  const inputId = useId();
  const errorId = useId();

  return (
    <div>
      <PasswordInput
        label={label}
        placeholder={placeholder}
        name={name}
        // {...field.getInputProps({
        //   id: inputId,
        //   "aria-describedby": errorId,
        //   "aria-invalid": !!field.error(),
        // })}
        size="md"
        // error={field.error()}
        error={error}
        styles={{
          wrapper: { marginBottom: 2 },
          input: {
            boxShadow:
              "0 0px 1px hsla(0, 0%, 0%, 0.1), 0 1px 2px hsla(0, 0%, 0%, 0.1)",
          },
        }}
      />
    </div>
  );
};
