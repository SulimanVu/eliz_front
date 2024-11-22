import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";
import { VisitPage } from "pages/VisitPage";
import PageLayout from "widgets/PageLayout/PageLayout";
import { CommentPage } from "pages/CommentPage";
import { TeacherPage } from "pages/TeacherPage";
import { AnalyticVisitPage } from "pages/AnalyticVisitPage";
import { AnaliticCommentPage } from "pages/AnaliticCommentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout children={<MainPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/monitoring/visit",
    element: <PageLayout children={<VisitPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/monitoring/comments",
    element: <PageLayout children={<CommentPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/analitic/analyticvisit",
    element: <PageLayout children={<AnalyticVisitPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:id",
    element: <PageLayout children={<TeacherPage />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/analitic/comments",
    element: <PageLayout children={<AnaliticCommentPage />} />,
    errorElement: <ErrorPage />,
  },
]);
