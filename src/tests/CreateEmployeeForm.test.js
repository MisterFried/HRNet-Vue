import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CreateEmployeeForm from "../components/CreateEmployeeForm.vue";

describe("Given the Create Employee Form component", () => {
	test("onSubmit function should set a new employee if all fields are filled", async () => {
		const wrapper = mount(CreateEmployeeForm);
		localStorage.clear();

		const firstName = wrapper.find("#firstName");
		await firstName.setValue("John");

		const lastName = wrapper.find("#lastName");
		await lastName.setValue("Doe");

		const dateOfBirth = wrapper.find("#dateOfBirth");
		await dateOfBirth.setValue("2022-01-01");

		const startDate = wrapper.find("#startDate");
		await startDate.setValue("2022-01-01");

		const street = wrapper.find("#street");
		await street.setValue("123 Main St");

		const city = wrapper.find("#city");
		await city.setValue("Anytown");

		const state = wrapper.find("#state");
		await state.setValue("California");

		const zip = wrapper.find("#zipCode");
		await zip.setValue("12345");

		const department = wrapper.find("#department");
		await department.setValue("Design");

		const form = wrapper.find("form");
		await form.trigger("submit");

		const localStorageMock = JSON.parse(localStorage.getItem("employees") || "[]");
		expect(localStorageMock.length).toBe(1);
	});
	test("onSubmit function should not set a new employee if some fields are missing", async () => {
		const wrapper = mount(CreateEmployeeForm);
		localStorage.clear();

		const firstName = wrapper.find("#firstName");
		await firstName.setValue("John");

		const lastName = wrapper.find("#lastName");
		await lastName.setValue("Doe");

		const startDate = wrapper.find("#startDate");
		await startDate.setValue("2022-01-01");

		const street = wrapper.find("#street");
		await street.setValue("123 Main St");

		const city = wrapper.find("#city");
		await city.setValue("Anytown");

		const state = wrapper.find("#state");
		await state.setValue("California");

		const form = wrapper.find("form");
		await form.trigger("submit");

		const localStorageMock = JSON.parse(localStorage.getItem("employees") || "[]");
		expect(localStorageMock.length).toBe(0);
	});
	test("An error message should be displayed if the fields are incorrect", async () => {
		const wrapper = mount(CreateEmployeeForm);

		const firstName = wrapper.find("#firstName");
		await firstName.setValue("123");
		const firstNameErrorMessage = wrapper.find("#firstNameError");
		expect(firstNameErrorMessage.exists()).toBe(true);

		const lastName = wrapper.find("#lastName");
		await lastName.setValue("123");
		const lastNameErrorMessage = wrapper.find("#lastNameError");
		expect(lastNameErrorMessage.exists()).toBe(true);

		const dateOfBirth = wrapper.find("#dateOfBirth");
		await dateOfBirth.setValue("3000-01-01");
		const dateOfBirthErrorMessage = wrapper.find("#dateOfBirthError");
		expect(dateOfBirthErrorMessage.exists()).toBe(true);

		const startDate = wrapper.find("#startDate");
		await startDate.setValue("3000-01-01");
		const startDateErrorMessage = wrapper.find("#startDateError");
		expect(startDateErrorMessage.exists()).toBe(true);

		const city = wrapper.find("#city");
		await city.setValue("123");
		const cityErrorMessage = wrapper.find("#cityError");
		expect(cityErrorMessage.exists()).toBe(true);

		const zip = wrapper.find("#zipCode");
		await zip.setValue("zipCode");
		const zipErrorMessage = wrapper.find("#zipCodeError");
		expect(zipErrorMessage.exists()).toBe(true);
	});
	test("An error message should be displayed if some fields are empty", () => {
		const wrapper = mount(CreateEmployeeForm);

		const form = wrapper.find("form");
		form.trigger("submit");

		expect(wrapper.vm.errors.firstName).toBe("First name is required");
		expect(wrapper.vm.errors.lastName).toBe("Last name is required");
		expect(wrapper.vm.errors.dateOfBirth).toBe("Date of birth is required");
		expect(wrapper.vm.errors.startDate).toBe("Start date is required");
		expect(wrapper.vm.errors.street).toBe("Street is required");
		expect(wrapper.vm.errors.city).toBe("City is required");
		expect(wrapper.vm.errors.zipCode).toBe("Zip code is required");
	});
	//TODO Add tests for the other error messages (required after input)
});
