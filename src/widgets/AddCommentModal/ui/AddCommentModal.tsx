import { Flex, Modal, ModalProps, Select } from "antd";
import Teachers from "stores/DB/Teachers.json";
import styles from "./addCommentModal.module.scss";
import { FC, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface AddCommentModalProps extends ModalProps {}

export const AddCommentModal: FC<AddCommentModalProps> = ({
  open,
  onClose,
}) => {
  const teachers = Teachers.teachers;
  const [currentTeacher, setCurrentTeacher] = useState();
  const [comment, setComment] = useState("");

  return (
    <Modal
      width={350}
      open={open}
      onCancel={onClose}
      onClose={onClose}
      title="Добавить замечание"
      className={styles.modal}
    >
      <Flex vertical gap={12}>
        <Select
          allowClear
          value={currentTeacher}
          onChange={(e) => setCurrentTeacher(e)}
          showSearch
          placeholder="Введите ФИО преподавателя"
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
        <TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.textArea}
        />
      </Flex>
    </Modal>
  );
};
