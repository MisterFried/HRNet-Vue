import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CreateEmployeeForm from "../components/CreateEmployeeForm.vue";

// Test OK si la fonction onSubmitWithoutValidation est appelée (direct)
// Test NOK si la fonction onSubmit est appelée (indirect, utilise le handleSubmit de VeeValidation)

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

		const localStorageMock = JSON.parse(localStorage.getItem("employees"));
		console.log(localStorageMock);

		expect(localStorageMock.length).toBe(1);
	});
});
