<script setup lang="ts">
import DateInput from "@/components/DateInput.vue";
import TextInput from "@/components/TextInput.vue";
import SelectInput from "@/components/SelectInput.vue";

import states from "@/data/states.ts";
import departments from "@/data/departments";
import ComponentTest from "@/components/ComponentTest.vue";

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { useNotification } from "@kyvg/vue3-notification";

// TODO : Add validation
const schema = toTypedSchema(
	yup.object({
		firstName: yup
			.string()
			.min(3, "First name must be at least 3 characters")
			.required("First name is required"),
		lastName: yup
			.string()
			.min(3, "Last name must be at least 3 characters")
			.required("Last name is required"),
		dateOfBirth: yup.string().required("Date of birth is required"),
		startDate: yup.string().required("Start date is required"),
		street: yup.string().required("Street is required"),
		city: yup.string().required("City is required"),
		state: yup.string().required("State is required"),
		zipCode: yup
			.string()
			.min(5, "Zip code must be 5 characters")
			.max(5, "Zip code must be 5 characters")
			.required("Zip code is required"),
		department: yup.string().required("Department is required"),
	}),
);

const { values, errors, defineField, handleSubmit } = useForm({
	validationSchema: schema,
});

const { notify } = useNotification();

// const [firstName, firstNameProps] = defineField("firstName");
// const [lastName, lastNameProps] = defineField("lastName");
// const [dateOfBirth, dateOfBirthProps] = defineField("dateOfBirth");
// const [startDate, startDateProps] = defineField("startDate");
// const [street, streetProps] = defineField("street");
// const [city, cityProps] = defineField("city");
// const [state, stateProps] = defineField("state");
// const [zipCode, zipCodeProps] = defineField("zipCode");
// const [department, departmentProps] = defineField("department");

const employee = {
	firstName: "",
	lastName: "",
	dateOfBirth: "",
	startDate: "",
	street: "",
	city: "",
	state: "",
	zipCode: "",
	department: "",
};

function onSubmitWithoutValidation() {
	const employee = {
		firstName: values.firstName,
		lastName: values.lastName,
		dateOfBirth: values.dateOfBirth,
		startDate: values.startDate,
		street: values.street,
		city: values.city,
		state: values.state,
		zipCode: values.zipCode,
		department: values.department,
	};

	const employeeList = JSON.parse(localStorage.getItem("employees") || "[]");
	employeeList.push(employee);
	localStorage.setItem("employees", JSON.stringify(employeeList));
	notify({
		title: "Employee created",
		text: "Employee created successfully",
		type: "success",
		duration: 3000,
	});
}

const onSubmit = handleSubmit(() => {
	const employeeList = JSON.parse(localStorage.getItem("employees") || "[]");
	employeeList.push(employee);
	localStorage.setItem("employees", JSON.stringify(employeeList));
	notify({
		title: "Employee created",
		text: "Employee created successfully",
		type: "success",
		duration: 3000,
	});
});
</script>

<template>
	<ComponentTest />
	<form
		@submit.prevent="onSubmitWithoutValidation"
		class="flex flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-md"
	>
	<InputText />
		<!-- <TextInput
			label="First name"
			name="firstName"
			v-model="employee.firstName"
		/>
		<TextInput
			label="Last name"
			name="lastName"
			v-model="employee.lastName"
		/> -->
		<!-- <DateInput
			label="Date of birth"
			name="dateOfBirth"
			v-model="dateOfBirth"
			v-bind="dateOfBirthProps"
			:errors="errors.dateOfBirth"
		/>
		<DateInput
			label="Start date"
			name="startDate"
			v-model="startDate"
			v-bind="startDateProps"
			:errors="errors.startDate"
		/>
		<fieldset className="flex flex-col gap-2 rounded-md border-[1px] border-gray-200 p-4">
			<legend className="px-2">Address</legend>
			<TextInput
				label="Street"
				name="street"
				v-model="street"
				v-bind="streetProps"
				:errors="errors.street"
			/>
			<TextInput
				label="City"
				name="city"
				v-model="city"
				v-bind="cityProps"
				:errors="errors.city"
			/>
			<SelectInput
				label="State"
				name="state"
				v-model="state"
				v-bind="stateProps"
				:errors="errors.state"
				:options="states"
			/>
			<TextInput
				label="Zip code"
				name="zipCode"
				v-model="zipCode"
				v-bind="zipCodeProps"
				:errors="errors.zipCode"
			/>
		</fieldset>
		<SelectInput
			label="Department"
			name="department"
			v-model="department"
			v-bind="departmentProps"
			:errors="errors.department"
			:options="departments"
		/> -->
		<button
			class="mt-4 rounded-md border border-main-200 bg-white p-2 shadow-sm transition-all hover:bg-main-200 focus:bg-main-200"
		>
			Create
		</button>
	</form>
</template>
