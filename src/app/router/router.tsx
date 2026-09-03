import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import {
	CreateNewProjectPage,
	CreateProjectPage,
	HomePage,
	KanbanPage,
	KanbanTask,
	LoginPage,
	ProjectsPage,
	RegisterPage,
	Team,
	TimeLine,
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
				path: "projects/:id",
				element: <KanbanPage />,
				children: [
					{
						path: "timeline",
						element: <TimeLine />,
					},
					{
						path: "kanban",
						element: <KanbanTask />,
					},
					{
						path: "team",
						element: <Team />,
					},
				],
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
		],
	},
]);
