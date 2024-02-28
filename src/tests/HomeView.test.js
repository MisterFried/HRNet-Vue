import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";

describe("Given the Home View component", () => {
	test("The component should render", () => {
		const wrapper = mount(HomeView);

		expect(wrapper.text()).toContain("View Employees");
	});
});
