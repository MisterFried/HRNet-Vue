const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/HomeView.vue"),
	},
	{
		path: "/create",
		name: "create",
		component: () => import("../views/CreateView.vue"),
	},
];

export default routes;
