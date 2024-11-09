import { Typography } from "antd";
import { FC } from "react";

export interface TextProps
  extends React.ComponentProps<typeof Typography.Text> {}

export const Text: FC<TextProps> = ({ children, ...antdProps }) => {
  return <Typography.Text {...antdProps}> {children}</Typography.Text>;
};
