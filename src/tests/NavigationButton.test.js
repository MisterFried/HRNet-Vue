import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavigationButton from "../components/NavigationButton.vue";
import routes from "../router/routes.ts";
import { RouterLink, createRouter, createWebHistory } from "vue-router";

describe("Given the Navigation Button component", () => {
	test("The component should have the correct title and href attribute", async () => {
		const title = "Create employee";
		const to = "/create";

		const router = createRouter({
			history: createWebHistory(),
			routes: routes,
		});
		router.push("/");
		await router.isReady();

		const wrapper = mount(NavigationButton, {
			props: {
				title: title,
				to: to,
			},
			global: {
				plugins: [router],
			},
		});
		const routerLink = wrapper.findComponent(RouterLink);

		expect(routerLink.exists()).toBeTruthy();
		expect(routerLink.text()).toBe(title);
		expect(routerLink.attributes("href")).toBe(to);
	});
});
