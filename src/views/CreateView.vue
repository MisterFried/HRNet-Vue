<script setup lang="ts">
// ** Components
import CreateEmployeeForm from "@/components/CreateEmployeeForm.vue";

// ** Data
import employees from "@/data/employees";

// ** Third party
import { Notifications, useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

/**
 * Log employee list
 */
function logEmployeeList() {
	console.log(JSON.parse(localStorage.getItem("employees") || "[]"));
}

/**
 * Reset employee list from localStorage and display a confirmation notification
 */
function resetEmployeeList() {
	localStorage.removeItem("employees");
	console.log("Employee list reset");
	notify({
		title: "Employee list reset",
		text: "Employee list reset successfully",
		type: "success",
		duration: 3000,
	});
}

/**
 * Set dummy employee list in localStorage and display a confirmation notification
 */
function setDummyEmployeeList() {
	localStorage.setItem("employees", JSON.stringify(employees));
	console.log("Dummy employee list set");
	notify({
		title: "Dummy employee list set",
		text: "Dummy employee list set successfully",
		type: "success",
		duration: 3000,
	});
}
</script>

<template>
	<main
		class="mx-auto flex w-full grow flex-col items-center justify-center gap-4 p-4 sm:w-fit sm:max-w-2xl"
	>
		<h2 class="text-semibold text-2xl font-bold sm:mb-8">Create employee</h2>
		<p class="w-full">Create a record for a new employee</p>
		<CreateEmployeeForm />
		<button
			class="w-full rounded-md border border-gray-400 bg-white p-2 shadow-sm transition-all hover:bg-gray-200 focus:bg-gray-200"
			@click="logEmployeeList()"
		>
			Log employee list
		</button>
		<button
			@click="resetEmployeeList()"
			class="w-full rounded-md border border-gray-400 bg-white p-2 shadow-sm transition-all hover:bg-gray-200 focus:bg-gray-200"
		>
			Reset employee list
		</button>
		<button
			@click="setDummyEmployeeList()"
			class="w-full rounded-md border border-gray-400 bg-white p-2 shadow-sm transition-all hover:bg-gray-200 focus:bg-gray-200"
		>
			Set dummy employee list
		</button>
		<notifications position="bottom center" />
	</main>
</template>
