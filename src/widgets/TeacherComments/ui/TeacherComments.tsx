import { IComment, IOldTeacher, ITeacher } from "shared/types/comment";
import styles from "./teacherComments.module.scss";
import Groups from "stores/DB/Groups.json";
import Disciplines from "stores/DB/Disciplines.json";
import { Title } from "shared/Text/Text";
import { Text } from "shared/Title/Title";
import cn from "classnames";
import { Button } from "antd";
import { useState } from "react";
import { AnswerModal } from "widgets/AnswerModal";

export const TeacherComments = ({
  teacher,
  currentComments,
}: {
  teacher: ITeacher | IOldTeacher;
  currentComments: IComment[];
}) => {
  const [openModal, setOpenModal] = useState(false);
  const disciplines = Disciplines.disciplines;
  const groups = Groups.groups;

  return (
    <div className={styles.teacherComments}>
      <Title level={4} className={styles.title}>
        {teacher?.name}
      </Title>
      <div className={styles.list}>
        {currentComments.map((item) => (
          <div
            className={cn(styles.info, {
              [styles.notAns]: !item.answer,
              [styles.err]: item.breakdown,
            })}
          >
            <div>
              <Text className={styles.blue}>Заметка:</Text>
              <Text>{item.reason}</Text>
            </div>
            <div>
              <Text className={styles.blue}> Дисциплина:</Text>
              <Text>
                {" "}
                {
                  disciplines.find((disc) => disc.id === item.discipline_id)
                    .name
                }
              </Text>
            </div>
            <div>
              <Text className={styles.blue}>Группа:</Text>{" "}
              <Text>
                {groups.find((group) => group.id === item.group_id).name}
              </Text>
            </div>
            <div>
              <Text className={styles.blue}>Дата:</Text>{" "}
              <Text>{item.date}</Text>
            </div>
            {item.breakdown && <Text className={styles.break}>Срыв</Text>}
            {!item.breakdown && !item.answer && (
              <Text className={styles.notAnswer}>Нет ответа</Text>
            )}
            {!item.breakdown && item.answer && (
              <Button onClick={() => setOpenModal(true)}>
                Посмотреть объяснительное
              </Button>
            )}
            {openModal && (
              <AnswerModal
                open={item.answer}
                text={item.answerText}
                closeModal={() => setOpenModal(false)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
