<script lang="ts">
/**
 * Render a select input field with the provided options. Whenever the selected option
 * changes, emit an event to notify the parent component (inputChange) with the new value.
 *
 * @param {string} inputName - The name of the input
 * @param {string} label - The label displayed above the input
 * @param {array} options - The array of possible options
 * @param {string} value - The value of the input
 * @param {string} error - The error, if any
 */
export default {
	name: "TextInput",
	props: {
		inputName: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		options: {
			type: Array<string>,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
		error: {
			type: String,
			required: true,
		},
	},
};
</script>

<template>
	<div class="flex flex-col gap-1">
		<label :for="inputName" class="text-sm font-medium"> {{ label }}</label>
		<select
			:name="inputName"
			:id="inputName"
			:value="value"
			@change="$emit('inputChange', ($event.target as HTMLSelectElement).value)"
			class="rounded-md border-[1px] border-gray-300 bg-white p-2"
			required
		>
			<option v-for="option in options" :key="option" :value="option">
				{{ option }}
			</option>
		</select>
		<p v-if="error" class="max-w-full text-red-500">{{ error }}</p>
	</div>
</template>
