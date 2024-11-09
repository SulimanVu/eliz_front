import { useState } from "react";
import { CommentList } from "widgets/CommentList/CommentList";
import { CommentPageHeader } from "widgets/CommentPageHeader";
import Comments from "stores/DB/Comments.json";
import styles from "./commentPage.module.scss";
import Groups from "stores/DB/Groups.json";

export const CommentPage = () => {
  const [filteredTeacher, setFilteredTeacher] = useState(null);
  const [filteredDate, setFilteredDate] = useState(null);
  const [filteredGroup, setFilteredGroup] = useState(null);

  // Получаем массив ID групп, частично совпадающих с введенным названием группы
  const matchingGroupIds = Groups.groups
    .filter((item) =>
      filteredGroup
        ? item.name.toLowerCase().includes(filteredGroup.toLowerCase())
        : true
    )
    .map((item) => item.id);

  const items = Comments.comments.filter((item) => {
    const matchesTeacher = filteredTeacher
      ? item.teacher_id === filteredTeacher
      : true;

    const matchesDate = filteredDate
      ? new Date(item.date).toLocaleDateString() ===
        new Date(filteredDate).toLocaleDateString()
      : true;

    const matchesGroup = filteredGroup
      ? matchingGroupIds.includes(item.group_id)
      : true;

    return matchesTeacher && matchesDate && matchesGroup;
  });

  return (
    <div className={styles.commentPage}>
      <CommentPageHeader
        filteredTeacher={filteredTeacher}
        setFilteredTeacher={setFilteredTeacher}
        filteredDate={filteredDate}
        setFilteredDate={setFilteredDate}
        filteredGroup={filteredGroup}
        setFilteredGroup={setFilteredGroup}
      />
      <CommentList items={items} />
    </div>
  );
};
