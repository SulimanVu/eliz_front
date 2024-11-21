import { AnaliticCommentTeacherItem } from "widgets/AnaliticCommentTeacherItem";
import styles from "./analiticCommentPage.module.scss";
import Teachers from "stores/DB/Teachers.json";
import Comments from "stores/DB/Comments.json";
import { useState, useEffect } from "react";
import { TeacherComments } from "widgets/TeacherComments";
import { Text } from "shared/Title/Title";
import { Flex, Select } from "antd";

export const AnaliticCommentPage = () => {
  const [teachers, setTeachers] = useState(Teachers.teachers); // Все преподаватели
  const [filteredTeachers, setFilteredTeachers] = useState([]); // Отфильтрованные преподаватели
  const [currentTeacher, setCurrentTeacher] = useState(null); // Текущий выбранный преподаватель
  const [currentComments, setCurrentComments] = useState(null); // Текущие комментарии
  const [selectedTeacher, setSelectedTeacher] = useState(); // Выбранный преподаватель
  const [sortOrder, setSortOrder] = useState("desc"); // Порядок сортировки: "desc" или "asc"

  // Считаем количество замечаний для каждого преподавателя
  const calculateTeacherComments = (teachers) => {
    return teachers.map((teacher) => {
      const comments = Comments.comments.filter(
        (comment) => comment.teacher_id === teacher.id
      );
      return {
        ...teacher,
        totalComments: comments.length,
      };
    });
  };

  // Обновление списка преподавателей при изменении сортировки
  useEffect(() => {
    const sortedTeachers = [...calculateTeacherComments(teachers)].sort(
      (a, b) =>
        sortOrder === "desc"
          ? b.totalComments - a.totalComments
          : a.totalComments - b.totalComments
    );
    setFilteredTeachers(sortedTeachers);
  }, [teachers, sortOrder]);

  // Функция для фильтрации
  const handleFilter = (selectedTeacherId) => {
    let result = calculateTeacherComments(teachers);

    if (selectedTeacherId) {
      result = result.filter((teacher) => teacher.id === selectedTeacherId);
    }

    result.sort((a, b) =>
      sortOrder === "desc"
        ? b.totalComments - a.totalComments
        : a.totalComments - b.totalComments
    );

    setFilteredTeachers(result);
  };

  return (
    <div className={styles.analiticCommentPage}>
      <div className={styles.left}>
        <Flex className={styles.filters} gap={8} align="center">
          <Text>Фильтрация: </Text>

          {/* Фильтр по преподавателю */}
          <Select
            allowClear
            value={selectedTeacher}
            onChange={(value) => {
              setSelectedTeacher(value);
              handleFilter(value);
            }}
            showSearch
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={teachers.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            className={styles.select}
            placeholder="ФИО преподавателя"
          />

          {/* Фильтр по порядку сортировки */}
          <Select
            value={sortOrder}
            onChange={(value) => setSortOrder(value)}
            options={[
              { value: "desc", label: "От большего к меньшему" },
              { value: "asc", label: "От меньшего к большему" },
            ]}
            className={styles.select}
            placeholder="Порядок сортировки"
          />
        </Flex>
        <div className={styles.tableContainer}>
          {/* Таблица преподавателей */}
          <table>
            <thead>
              <tr className={styles.header}>
                <th>Преподаватель</th>
                <th className={styles.commentLength}>Замечания</th>
                <th className={styles.commentLength}>Срывы</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers?.map((teacher) => (
                <AnaliticCommentTeacherItem
                  key={teacher.id}
                  props={teacher}
                  currentTeacher={currentTeacher}
                  setCurrentTeacher={(e) => setCurrentTeacher(e)}
                  setCurrentComments={(e) => setCurrentComments(e)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Комментарии преподавателя */}
      <div className={styles.comment}>
        {currentTeacher && (
          <TeacherComments
            teacher={currentTeacher}
            currentComments={currentComments}
          />
        )}
      </div>
    </div>
  );
};
