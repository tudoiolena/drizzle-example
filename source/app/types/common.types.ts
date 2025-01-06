import type { TextInputProps } from "@mantine/core";
import type { FormScope } from "@rvf/react-router";

export interface StringFieldProps extends TextInputProps {
  name: string;
  label: string;
  // scope: FormScope<string>;
  placeholder?: string;
}
