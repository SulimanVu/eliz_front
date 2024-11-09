import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";
import { CommentPage } from "pages/CommentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/comments",
    element: <CommentPage />,
    errorElement: <ErrorPage />,
  },
]);
