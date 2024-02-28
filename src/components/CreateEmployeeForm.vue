<script setup lang="ts">
import DateInput from "@/components/DateInput.vue";
import TextInput from "@/components/TextInput.vue";
import SelectInput from "@/components/SelectInput.vue";

import states from "@/data/states.ts";
import departments from "@/data/departments";
</script>

<template>
	<form class="flex flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-md">
		<TextInput label="First Name" name="firstName" placeholder="Peter" />
		<TextInput label="Last Name" name="lastName" placeholder="Parker" />
		<DateInput label="Date of Birth" name="dateOfBirth" />
		<DateInput label="Start Date" name="startDate" />
		<fieldset class="flex flex-col gap-2 rounded-md border border-gray-300 p-2">
			<legend class="mx-2 px-2">Address</legend>
			<TextInput label="Street" name="street" placeholder="123 Main St" />
			<TextInput label="City" name="city" placeholder="New York" />
			<SelectInput label="State" name="state" :options="states" />
			<TextInput label="Zip" name="zip" placeholder="10001" />
		</fieldset>
		<SelectInput label="Department" name="department" :options="departments" />
		<button
			class="mt-4 rounded-md border border-main-200 bg-white p-2 shadow-sm transition-all hover:bg-main-200 focus:bg-main-200"
		>
			Create
		</button>
	</form>
</template>
