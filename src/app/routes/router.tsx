import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";
import { VisitPage } from "pages/VisitPage";
import PageLayout from "widgets/PageLayout/PageLayout";
import { CommentPage } from "pages/CommentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout children={<MainPage/>}/> ,
    errorElement: <ErrorPage />,
  },
  {
    path: "/visit",
    element: <PageLayout children={<VisitPage />}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/comments",
    element: <CommentPage />,
    errorElement: <ErrorPage />,
  },
]);
