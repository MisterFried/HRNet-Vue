import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import AppFooter from "../components/AppFooter.vue";

describe("Given the App Footer component", () => {
	test("The component should render", () => {
		const wrapper = mount(AppFooter);

		expect(wrapper.text()).toContain("HR Net");
	});
});
