import { Modal } from "antd";

export const AnswerModal = ({ text, closeModal, open }) => {
  return (
    <Modal
      title="Объяснительная"
      open={open}
      onClose={() => closeModal()}
      onCancel={() => closeModal()}
    >
      <div style={{ whiteSpace: "pre-line" }}>{text}</div>
    </Modal>
  );
};
