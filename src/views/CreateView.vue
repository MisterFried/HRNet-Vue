<script setup lang="ts">
import CreateEmployeeForm from "@/components/CreateEmployeeForm.vue";
import employees from "@/data/employees";

import { Notifications, useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

function logEmployeeList() {
	console.log("Employee list :");
	console.log(JSON.parse(localStorage.getItem("employees") || "[]"));
}

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
	<main class="mx-auto flex w-fit grow flex-col items-center justify-center gap-4 p-4">
		<h2 class="text-semibold mb-8 text-2xl font-bold">Create employee</h2>
		<p class="w-full">Create a record for a new employee</p>
		<CreateEmployeeForm />
		<button
			class="w-full rounded-md border border-gray-400 bg-white p-2 shadow-sm transition-all hover:bg-gray-200 focus:bg-gray-200"
			@click="logEmployeeList"
		>
			Log employee list
		</button>
		<button
			@click="resetEmployeeList"
			class="w-full rounded-md border border-gray-400 bg-white p-2 shadow-sm transition-all hover:bg-gray-200 focus:bg-gray-200"
		>
			Reset employee list
		</button>
		<button
			@click="setDummyEmployeeList"
			class="w-full rounded-md border border-gray-400 bg-white p-2 shadow-sm transition-all hover:bg-gray-200 focus:bg-gray-200"
		>
			Set dummy employee list
		</button>
		<notifications position="bottom center" />
	</main>
</template>
