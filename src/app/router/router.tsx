import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {
	CreateNewProjectPage,
	CreateProjectPage,
	HomePage,
	LoginPage,
	ProjectsPage,
	RegisterPage,
	TasksPage,
} from "@/pages";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
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
				path: "projects",
				element: <ProjectsPage />,
			},
			{
				path: "project/:id",
				element: <div>projects:id</div>,
			},
			{
				path: "projects/new",
				element: <CreateProjectPage />,
			},
			{
				path: "projects/new/kanban",
				element: <CreateNewProjectPage />,
			},
			{
				path: "project/:slug/timeline",
				element: <div>projects:id</div>,
			},
			{
				path: "tasks",
				element: <TasksPage />,
			},
		],
	},
]);
