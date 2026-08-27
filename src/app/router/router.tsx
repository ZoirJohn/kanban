import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { LoginPage } from "../../pages/index";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "",
				element: <div>main</div>,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "register",
				element: <div>register</div>,
			},
			{
				path: "projects",
				element: <div>projects</div>,
			},
			{
				path: "projects/:id",
				element: <div>projects:id</div>,
			},
		],
	},
]);
