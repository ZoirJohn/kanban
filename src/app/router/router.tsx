import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { LoginPage, RegisterPage } from "@/pages";
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
				element: <RegisterPage />,
			},
			{
				path: "project",
				element: <div>main</div>,
			},
			{
				path: "project/:id",
				element: <div>projects:id</div>,
			},
			{
				path: "project/new",
				element: <div>projects:id</div>,
			},

			{
				path: "project/:slug/timeline",
				element: <div>projects:id</div>,
			},
		],
	},
]);
