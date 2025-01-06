import { TextInput } from "@mantine/core";
import "@mantine/core/styles/Input.css";

import { type StringFieldProps } from "~/types/common.types";

export const TextField = ({
  name,
  label,
  error,
  placeholder,
  ...rest
}: StringFieldProps) => {
  return (
    <div>
      <TextInput
        name={name}
        label={label}
        placeholder={placeholder}
        error={error}
        size="md"
        styles={{
          wrapper: { marginBottom: 2 },
        }}
        {...rest}
      />
    </div>
  );
};
