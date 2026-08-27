import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { LoginPage, RegisterPage } from "@/pages/index";
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
				element: <div>projects</div>,
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
