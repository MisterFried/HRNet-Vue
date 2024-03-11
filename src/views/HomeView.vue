<script lang="ts">
import SortableTable from "../components/SortableTable/SortableTable.vue";
import { notify } from "@kyvg/vue3-notification";
import type { employeeInterface } from "@/types/types";

export default {
	name: "HomeView",
	components: {
		SortableTable,
	},
	data() {
		return {
			employees: [] as Array<employeeInterface>,
			headers: [
				{
					name: "First name",
					key: "firstName",
				},
				{
					name: "Last name",
					key: "lastName",
				},
				{
					name: "Date of birth",
					key: "dateOfBirth",
				},
				{
					name: "Start date",
					key: "startDate",
				},
				{
					name: "Street",
					key: "street",
				},
				{
					name: "City",
					key: "city",
				},
				{
					name: "State",
					key: "state",
				},
				{
					name: "Zip code",
					key: "zip",
				},
				{
					name: "Department",
					key: "department",
				},
			],
			filterFields: [
				"firstName",
				"lastName",
				"dateOfBirth",
				"startDate",
				"street",
				"city",
				"state",
				"zip",
				"department",
			],
		};
	},
	methods: {
		deleteEmployee(id: string) {
			this.employees = this.employees.filter((employee) => employee.id !== id);
			localStorage.setItem("employees", JSON.stringify(this.employees));
			notify({
				title: "Employee deleted",
				text: "Employee deleted successfully",
				type: "success",
				duration: 3000,
			});
		},
	},
	mounted() {
		this.employees = JSON.parse(localStorage.getItem("employees") || "[]");
	},
};
</script>

<template>
	<main class="mx-auto flex w-fit grow flex-col items-center justify-start gap-4 p-4">
		<h2 class="text-semibold mb-8 text-2xl font-bold">View Employees</h2>
		<p class="w-full">View the list of all employees</p>
		<SortableTable
			:items="employees"
			:headers="headers"
			:filterFields="filterFields"
			:perPageInterval="[5, 10, 15]"
			@handleAction="deleteEmployee($event)"
		/>
	</main>
</template>
