import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		element: <ProtectedRoute />,
		children: [
			{
				path: "/dashboard",
				element: <DashboardLayout />,
				children: [
					{
						path: "",
						element: <Dashboard />,
					},
					{
						path: "clientes",
						element: <Dashboard />, // Placeholder
					},
					{
						path: "financeiro",
						element: <Dashboard />, // Placeholder
					},
					{
						path: "arquivos",
						element: <Dashboard />, // Placeholder
					},
				],
			},
		],
	},
]);
