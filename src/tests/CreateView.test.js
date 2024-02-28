import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CreateView from "../views/CreateView.vue";
import employees from "../data/employees.ts";

describe("Given the Create View component", () => {
	test("SetDummyEmployeeList() function should set a new employee list", () => {
		const wrapper = mount(CreateView);

		localStorage.clear();

		wrapper.vm.setDummyEmployeeList();
		const localStorageMock = JSON.parse(localStorage.getItem("employees"));

		expect(localStorageMock.length).toBe(employees.length);
	});
	test("resetEmployeeList() should clear the stored employee list", () => {
		localStorage.setItem("employees", JSON.stringify(employees));

		const wrapper = mount(CreateView);

		wrapper.vm.resetEmployeeList();

		const localStorageMock = JSON.parse(localStorage.getItem("employees") || "[]");

		expect(localStorageMock.length).toBe(0);
	});
	test("logEmployeeList() should log the employee list", () => {
		const wrapper = mount(CreateView);
		const consoleLogSpy = vi.spyOn(console, "log");

		wrapper.vm.logEmployeeList();

		expect(consoleLogSpy).toHaveBeenCalled();
	});
});
