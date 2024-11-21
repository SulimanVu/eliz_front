export interface IComment {
  id: number;
  group_id: number;
  discipline_id: number;
  teacher_id: number;
  date: string;
  reason: string;
  breakdown?: boolean;
  answer?: boolean;
  answerText?: string;
}

export interface ITeacher {
  id: number;
  name: string;
  position: string;
  disciplines: string[];
  department_id: number;
  avatar: string;
}

export interface IOldTeacher {
  id: number;
  name: string;
  position: string;
  disciplines: string[];
  department_id: number;
  avatar?: undefined;
}
