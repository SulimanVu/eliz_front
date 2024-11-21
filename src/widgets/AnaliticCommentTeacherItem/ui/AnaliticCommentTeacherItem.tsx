import { IComment, IOldTeacher, ITeacher } from "shared/types/comment";
import styles from "./analiticCommentTeacherItem.module.scss";
import Comments from "stores/DB/Comments.json";
import classNames from "classnames";

export const AnaliticCommentTeacherItem = ({
  props,
  currentTeacher,
  setCurrentTeacher,
  setCurrentComments,
}: {
  props: ITeacher | IOldTeacher;
  currentTeacher: ITeacher | IOldTeacher;
  setCurrentTeacher: (e: ITeacher | IOldTeacher) => void;
  setCurrentComments: (e: IComment[]) => void;
}) => {
  const comment = Comments.comments.filter(
    (item) => item.teacher_id === props.id
  );

  const handleClick = () => {
    setCurrentTeacher(props);
    setCurrentComments(comment);
  };
  return (
    <tr
      className={classNames(styles.item, {
        [styles.active]: currentTeacher?.id === props.id,
      })}
      onClick={handleClick}
    >
      <td>{props.name}</td>
      <td className={styles.commentLength}>{comment.length}</td>
      <td className={styles.commentLength}>
        {comment.filter((item) => item.breakdown).length}
      </td>
    </tr>
  );
};
