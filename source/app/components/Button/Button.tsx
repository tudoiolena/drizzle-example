import { Button } from "@mantine/core";

import type { BaseButtonProps } from "./BaseButton.types";

export const BaseButton = ({ children, ...rest }: BaseButtonProps) => {
  return (
    <Button size="md" {...rest}>
      {children}
    </Button>
  );
};
