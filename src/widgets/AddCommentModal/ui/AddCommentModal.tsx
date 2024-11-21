import { DatePicker, Flex, Modal, ModalProps, Select, Form } from "antd";
import Teachers from "stores/DB/Teachers.json";
import Groups from "stores/DB/Groups.json";
import Disciplines from "stores/DB/Disciplines.json";
import styles from "./addCommentModal.module.scss";
import { FC, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { ItemProps } from "widgets/CommentPageHeader/ui/CommentPageHeader";
import dayjs from "dayjs";

interface AddCommentModalProps extends ModalProps {
  setCurrentItems: (e: ItemProps) => void;
  seICommentModalToggle: ()=>void
}

const Item = Form.Item;

export const AddCommentModal: FC<AddCommentModalProps> = ({
  open,
  seICommentModalToggle,
  setCurrentItems,
}) => {
  const [currentTeacher, setCurrentTeacher] = useState();
  const [comment, seIComment] = useState("");
  const [group, setGroup] = useState();
  const [discipline, setDiscipline] = useState();
  const [date, setDate] = useState(undefined);

  const teachers = Teachers.teachers;
  const groups = Groups.groups;
  const disciplines = Disciplines.disciplines.filter((item) => {
    return item.group_id === group;
  });

  const buttonDisabled =
    currentTeacher && comment && group && discipline && date;

  const handleSubmit = () => {
    setCurrentItems({
      id: Math.random() * 100,
      group_id: group,
      discipline_id: discipline,
      teacher_id: currentTeacher,
      date,
      reason: comment,
    });
    seICommentModalToggle();
  };

  return (
    <Modal
      width={380}
      open={open}
      onCancel={seICommentModalToggle}
      onClose={seICommentModalToggle}
      title="Добавить замечание"
      className={styles.modal}
      okButtonProps={{ disabled: !buttonDisabled }}
      onOk={handleSubmit}
    >
      <Flex vertical gap={10}>
        <Item
          layout="vertical"
          label="Преподаватель"
          name="vertical"
          rules={[{ required: !currentTeacher }]}
        >
          <Select
            allowClear
            value={currentTeacher}
            onChange={(e) => setCurrentTeacher(e)}
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={teachers.map((item) => {
              return { value: item.id, label: item.name };
            })}
            className={styles.select}
          />
        </Item>
        <Item
          layout="vertical"
          label="Замечание"
          name="vertical"
          rules={[{ required: !comment }]}
        >
          <TextArea
            value={comment}
            onChange={(e) => seIComment(e.target.value)}
            className={styles.textArea}
          />
        </Item>
        <Item
          layout="vertical"
          label="Группа"
          name="vertical"
          rules={[{ required: !group }]}
        >
          <Select
            allowClear
            value={group}
            onChange={(e) => {
              setGroup(e);
              setDiscipline(null);
            }}
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={groups.map((item) => {
              return { value: item.id, label: item.name };
            })}
            className={styles.select}
          />
        </Item>
        <Item
          layout="vertical"
          label="Дисциплина"
          name="vertical"
          rules={[{ required: !discipline }]}
        >
          <Select
            allowClear
            value={discipline}
            onChange={(e) => setDiscipline(e)}
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={disciplines.map((item) => {
              return { value: item.id, label: item.name };
            })}
            className={styles.select}
          />
        </Item>
        <Item
          layout="vertical"
          label="Дата"
          name="vertical"
          rules={[{ required: !date }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            value={date ? dayjs(date) : null}
            onChange={(date, dateString) => setDate(dateString)}
            format="YYYY-MM-DD"
            placeholder=""
          />
        </Item>
      </Flex>
    </Modal>
  );
};
