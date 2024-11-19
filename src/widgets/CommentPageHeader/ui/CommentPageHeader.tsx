import { Button, DatePicker, Input, Select } from "antd";
import { FC, useState } from "react";
import { Text } from "shared/Title/Title";
import teachers from "stores/DB/Teachers.json";
import styles from "./commentPageHeader.module.scss";
import { AddCommentModal } from "widgets/AddCommentModal";

export interface ItemProps {
  id: number;
  group_id: number;
  discipline_id: number;
  teacher_id: number;
  date: string;
  reason: string;
}

interface CommentPageHeaderProps {
  filteredTeacher: string;
  setFilteredTeacher: (e: string) => void;
  filteredDate: string;
  setFilteredDate: (e: string) => void;
  filteredGroup: string;
  setFilteredGroup: (e: string) => void;
  setCurrentItems: (e: ItemProps) => void;
}

export const CommentPageHeader: FC<CommentPageHeaderProps> = ({
  filteredTeacher,
  setFilteredTeacher,
  filteredDate,
  setFilteredDate,
  filteredGroup,
  setFilteredGroup,
  setCurrentItems
}) => {
  const [commentModalToggle, setCommentModalToggle] = useState(false);

  return (
    <div className={styles.commentPageHeader}>
      <Button
        className={styles.addComment}
        onClick={() => setCommentModalToggle(true)}
      >
        Добавить замечание
      </Button>
      <div className={styles.filters}>
        <Text>Фильтрация списка:</Text>
        <Select
          allowClear
          value={filteredTeacher}
          onChange={(e) => setFilteredTeacher(e)}
          showSearch
          placeholder="Введите ФИО преподавателя"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={teachers.teachers.map((item) => {
            return { value: item.id, label: item.name };
          })}
          className={styles.select}
        />
        <DatePicker
          lang="ru"
          placeholder="Выбрать дату"
          value={filteredDate}
          onChange={(e) => setFilteredDate(e)}
        />
        <Input
          className={styles.groupSearch}
          value={filteredGroup}
          placeholder="Название группы"
          onChange={(e) => setFilteredGroup(e.target.value)}
        />
        <AddCommentModal
          open={commentModalToggle}
          setCommentModalToggle={() => setCommentModalToggle(false)}
          setCurrentItems={(e)=>setCurrentItems(e)}
        />
      </div>
    </div>
  );
};
