import React, { FC } from "react";

interface CommentItemProps {
  text: string;
}
export const CommentItem: FC<CommentItemProps> = ({ text }) => {
  return <div>{text}</div>;
};
