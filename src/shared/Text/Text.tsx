import { Typography } from "antd";
import { FC } from "react";

export interface TitleProps
  extends React.ComponentProps<typeof Typography.Title> {}

export const Title: FC<TitleProps> = ({ children, ...antdProps }) => {
  return <Typography.Title {...antdProps}> {children}</Typography.Title>;
};
