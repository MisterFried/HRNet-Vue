import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("Given the App component", () => {
	test("The component should render", () => {
		const wrapper = mount(App, {
			shallow: true,
		});

		expect(wrapper.exists()).toBeTruthy();
	});
});
