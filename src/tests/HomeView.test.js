import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";
import employees from "../data/employees.ts";

describe("Given the Home View component", () => {
	test("The component should render", () => {
		const wrapper = mount(HomeView);

		expect(wrapper.text()).toContain("View Employees");
	});
	test("The deleteEmployee function should remove a given employee from the component's data and localStorage", () => {
		localStorage.setItem("employees", JSON.stringify(employees));
		const wrapper = mount(HomeView);

		expect(wrapper.vm.employees.length).toBe(employees.length);

		const employeeID = employees[0].id;
		wrapper.vm.deleteEmployee(employeeID);

		const componentEmployees = wrapper.vm.employees;
		const componentDeletedEmployee = componentEmployees.find(
			(employee) => employee.id === employeeID,
		);
		const localStorageEmployees = JSON.parse(localStorage.getItem("employees"));
		const localStorageDeletedEmployee = localStorageEmployees.find(
			(employee) => employee.id === employeeID,
		);

		expect(componentEmployees.length).toBe(employees.length - 1);
		expect(localStorageEmployees.length).toBe(employees.length - 1);
		expect(componentDeletedEmployee).toBe(undefined);
		expect(localStorageDeletedEmployee).toBe(undefined);
	});
});
