import { create } from "zustand";
import comments from "stores/DB/Comments.json";

//Интерфейс описывающий наше хранилище
interface CommentsState {
  comments: any[];
}

//Создание хранилища
export const useComments = create<CommentsState>((set, get) => ({
  //Присваиваем дефолтные значения
  comments: null,
  loadComments: async () => {
    set({ comments: comments.comments });
  },
  addComment: async (comment) => {
    const { comments: prevComments } = get();
    set({ comments: [prevComments, comment] });
  },
  deleteComment: async (comment) => {
    const { comments: prevComments } = get();
    set({ comments: [prevComments, comment] });
  },
}));
