import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";
import App from "./routes/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader }, // yaha pe postLoader dene ka logic ye hai ki jab bhi aap postlist ko render kare usse pehle postLoader ko laod krle
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      }, // is component mei jab bhi action call hoga ya koi submission hoga tab ye action method call ho jayega uar kuch kuch karega
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
