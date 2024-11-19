import { useState } from "react";
import styles from "./visitPage.module.scss";
import { Select, Input, Radio, Space, Button, Flex } from "antd";
import type { RadioChangeEvent } from "antd";
import Institutes from "stores/DB/Institutes.json";
import Courses from "stores/DB/Courses.json";
import Groups from "stores/DB/Groups.json";
import Students from "stores/DB/Students.json";
import Disciplines from "stores/DB/Disciplines.json";

export const VisitPage = () => {
  const [selectedItems, setSelectedItems] = useState();
  const [value, setValue] = useState(1);
  const [group, setGroup] = useState();
  const [stud, setStud] = useState();

  const filteredOptions = Institutes.institutes;
  const courses = Courses.courses;
  const groups = Groups.groups;
  const students = Students.students;
  const disciplines = Disciplines.disciplines;

  const groupId = (item) => {
    setGroup(item);
    setStud(null);
  };

  const studId = (newItem) => {
    setStud(newItem);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const groupCourses = groups.filter(
    (g) => g.course === value && g.institute_id === selectedItems
  );
  const groupStudents = students.filter((st) => st.group_id === stud);
  const groupDisciplines = disciplines.filter(
    (discipline) => discipline.group_id === group
  );
  const selectedGroup = groups.find((g) => g.id === group);

  return (
    <div className={styles.visitPage}>
      <h3>Посещаемость</h3>
      <Select
        placeholder="Выберите институт"
        value={selectedItems}
        onChange={setSelectedItems}
        style={{ width: "50%", marginTop: "20px" }}
        options={filteredOptions.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
      <Radio.Group
        onChange={onChange}
        value={value}
        style={{ marginTop: "20px" }}
      >
        <Space direction="horizontal">
          {courses.map((item) => (
            <Radio key={item.id} value={item.id}>
              {item.name}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      <Flex gap="small" wrap style={{ marginTop: "20px" }}>
        {groupCourses.map((gr) => (
          <Button key={gr.id} onClick={() => groupId(gr.id)}>
            {gr.name}
          </Button>
        ))}
      </Flex>
      <Flex
        gap="small"
        style={{
          width: "50%",
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {groupDisciplines.map((disc) => (
          <Button
            key={disc.id}
            onClick={() => studId(disc.group_id)}
            type="primary"
          >
            {disc.name}
          </Button>
        ))}
      </Flex>
      {stud && (
        <table>
          <tr>
            <th className={styles.num}>№</th>
            <th className={styles.fio}>ФИО</th>
            {selectedGroup?.date.map((d) => (
              <th>{d}</th>
            ))}
          </tr>
          {groupStudents.map((stud, i) => (
            <tr>
              <td className={styles.num}>{i + 1}</td>
              <td className={styles.fio}>{stud.name}</td>
              {stud.visit.map((vis) => (
                <td style={vis === "+" ? { color: "green" } : { color: "red" }}>
                  {vis}
                </td>
              ))}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};
