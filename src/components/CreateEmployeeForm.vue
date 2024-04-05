<script lang="ts">
/**
 * Render a form for creating a new employee. Whenever the form is valid and submitted,
 * a new record for the employee will be created in the localStorage.
 */

// ** Components
import TextInput from "./TextInput.vue";
import DateInput from "./DateInput.vue";
import SelectInput from "./SelectInput.vue";

// ** Data
import states from "@/data/states";
import departments from "@/data/departments";

// ** Third party
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const nameRegex = /^(?:[A-Za-z]+(?:[' -][A-Za-z]+)?){3,}$/; // Only allow letters, apostrophes, hyphens and spaces with a min length of 3
const cityRegex = /^[A-Za-z\s-]+$/; // Only allow letters, hyphens and spaces
const zipCodeRegex = /^[0-9]{5}$/; // Only allow numbers with a length of 5

export default {
	name: "CreateEmployeeForm",
	components: {
		TextInput,
		DateInput,
		SelectInput,
	},
	data() {
		return {
			employee: {
				firstName: "",
				lastName: "",
				dateOfBirth: "",
				startDate: "",
				street: "",
				city: "",
				state: "",
				zipCode: "",
				department: "",
			},
			errors: {
				firstName: "",
				lastName: "",
				dateOfBirth: "",
				startDate: "",
				street: "",
				city: "",
				state: "",
				zipCode: "",
				department: "",
			},
			states: states,
			departments: departments,
		};
	},
	computed: {
		isValid() {
			return (
				this.errors.firstName === "" &&
				this.errors.lastName === "" &&
				this.errors.dateOfBirth === "" &&
				this.errors.startDate === "" &&
				this.errors.street === "" &&
				this.errors.city === "" &&
				this.errors.state === "" &&
				this.errors.zipCode === "" &&
				this.errors.department === ""
			);
		},
	},
	methods: {
		/**
		 * Perform some data validation (in case it was submitted without touching any field), then
		 * if the form is valid, create a new employee, save it to local storage and display a
		 * confirmation notification
		 */
		onSubmit() {
			// Prevent submitting without touching any fields, the rest of the validation is handled
			// by the watchers
			if (this.employee.firstName === "") this.errors.firstName = "First name is required";
			if (this.employee.lastName === "") this.errors.lastName = "Last name is required";
			if (this.employee.dateOfBirth === "")
				this.errors.dateOfBirth = "Date of birth is required";
			if (this.employee.startDate === "") this.errors.startDate = "Start date is required";
			if (this.employee.street === "") this.errors.street = "Street is required";
			if (this.employee.city === "") this.errors.city = "City is required";
			if (this.employee.state === "") this.errors.state = "State is required";
			if (this.employee.zipCode === "") this.errors.zipCode = "Zip code is required";
			if (this.employee.department === "") this.errors.department = "Department is required";

			if (!this.isValid) return;

			const newEmployee = {
				firstName: this.employee.firstName,
				lastName: this.employee.lastName,
				dateOfBirth: this.employee.dateOfBirth,
				startDate: this.employee.startDate,
				street: this.employee.street,
				city: this.employee.city,
				state: this.employee.state,
				zipCode: this.employee.zipCode,
				department: this.employee.department,
			};

			const employeeList = JSON.parse(localStorage.getItem("employees") || "[]");
			employeeList.push({ ...newEmployee, id: String(employeeList.length + 1) });
			localStorage.setItem("employees", JSON.stringify(employeeList));

			notify({
				title: "Employee created",
				text: "Employee created successfully",
				type: "success",
				duration: 3000,
			});
		},
	},
	// Watch changes in any of the input fields to (in)validate them
	watch: {
		"employee.firstName": {
			handler() {
				if (this.employee.firstName === "") {
					this.errors.firstName = "First name is required";
				} else if (!nameRegex.test(this.employee.firstName)) {
					this.errors.firstName =
						"First name can only contain letters and hyphens and must be at least 3 characters long";
				} else {
					this.errors.firstName = "";
				}
			},
		},
		"employee.lastName": {
			handler() {
				if (this.employee.lastName === "") {
					this.errors.lastName = "Last name is required";
				} else if (!nameRegex.test(this.employee.lastName)) {
					this.errors.lastName =
						"Last name can only contain letters and hyphens and must be at least 3 characters long";
				} else {
					this.errors.lastName = "";
				}
			},
		},
		"employee.dateOfBirth": {
			handler() {
				if (this.employee.dateOfBirth === "") {
					this.errors.dateOfBirth = "Date of birth is required";
				} else if (new Date(this.employee.dateOfBirth) > new Date()) {
					this.errors.dateOfBirth = "Date of birth cannot be in the future";
				} else {
					this.errors.dateOfBirth = "";
				}
			},
		},
		"employee.startDate": {
			handler() {
				if (this.employee.startDate === "") {
					this.errors.startDate = "Start date is required";
				} else if (new Date(this.employee.startDate) > new Date()) {
					this.errors.startDate = "Start date cannot be in the future";
				} else {
					this.errors.startDate = "";
				}
			},
		},
		"employee.street": {
			handler() {
				if (this.employee.street === "") {
					this.errors.street = "Street is required";
				} else {
					this.errors.street = "";
				}
			},
		},
		"employee.city": {
			handler() {
				if (this.employee.city === "") {
					this.errors.city = "City is required";
				} else if (!cityRegex.test(this.employee.city)) {
					this.errors.city = "City can only contain letters and hyphens";
				} else {
					this.errors.city = "";
				}
			},
		},
		"employee.state": {
			handler() {
				if (this.employee.state === "") {
					this.errors.state = "State is required";
				} else {
					this.errors.state = "";
				}
			},
		},
		"employee.zipCode": {
			handler() {
				if (this.employee.zipCode === "") {
					this.errors.zipCode = "Zip code is required";
				} else if (!zipCodeRegex.test(this.employee.zipCode)) {
					this.errors.zipCode = "Zip code must be 5 digits";
				} else {
					this.errors.zipCode = "";
				}
			},
		},
		"employee.department": {
			handler() {
				if (this.employee.department === "") {
					this.errors.department = "Department is required";
				} else {
					this.errors.department = "";
				}
			},
		},
	},
};
</script>

<template>
	<form
		@submit.prevent="onSubmit()"
		class="flex w-full flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-md"
	>
		<TextInput
			inputName="firstName"
			label="First name"
			:value="employee.firstName"
			:error="errors.firstName"
			@inputChange="employee.firstName = $event"
		/>
		<TextInput
			inputName="lastName"
			label="Last name"
			:value="employee.lastName"
			:error="errors.lastName"
			@inputChange="employee.lastName = $event"
		/>
		<DateInput
			inputName="dateOfBirth"
			label="Date of birth"
			:value="employee.dateOfBirth"
			:error="errors.dateOfBirth"
			@inputChange="employee.dateOfBirth = $event"
		/>
		<DateInput
			inputName="startDate"
			label="Start date"
			:value="employee.startDate"
			:error="errors.startDate"
			@inputChange="employee.startDate = $event"
		/>
		<fieldset class="flex flex-col gap-2 rounded-md border-[1px] border-gray-200 p-4">
			<legend class="px-2">Address</legend>
			<TextInput
				inputName="street"
				label="Street"
				:value="employee.street"
				:error="errors.street"
				@inputChange="employee.street = $event"
			/>
			<TextInput
				inputName="city"
				label="City"
				:value="employee.city"
				:error="errors.city"
				@inputChange="employee.city = $event"
			/>
			<SelectInput
				inputName="state"
				label="State"
				:value="employee.state"
				:error="errors.state"
				@inputChange="employee.state = $event"
				:options="states"
			/>
			<TextInput
				inputName="zipCode"
				label="Zip code"
				:value="employee.zipCode"
				:error="errors.zipCode"
				@inputChange="employee.zipCode = $event"
			/>
		</fieldset>
		<SelectInput
			inputName="department"
			label="Department"
			:value="employee.department"
			:error="errors.department"
			@inputChange="employee.department = $event"
			:options="departments"
		/>
		<button
			type="submit"
			class="mt-4 rounded-md border border-main-200 bg-white p-2 shadow-sm transition-all hover:bg-main-200 focus:bg-main-200"
		>
			Create
		</button>
	</form>
</template>
