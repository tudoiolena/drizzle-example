import type { ButtonProps } from "@mantine/core";
import type { ReactNode } from "react";

export interface BaseButtonProps extends ButtonProps {
  children: ReactNode;
  type: "button" | "submit";
  onClick?: () => void;
}
