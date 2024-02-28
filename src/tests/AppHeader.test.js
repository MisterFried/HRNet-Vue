import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import AppHeader from "../components/AppHeader.vue";

describe("Given the App Header component", () => {
	test("The component should render", () => {
		const wrapper = mount(AppHeader, {
			shallow: true,
		});

		expect(wrapper.text()).toContain("HR Net");
	});
});
