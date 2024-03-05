<template>
	<div>
		<label for="last_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>First name</label
		>
		<input
			@input="$emit('wilfried', $event.target.value)"
			:value="value"
			type="text"
			id="last_name"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			placeholder="John"
			required
		/>
		<p v-if="error" class="text-red-500">{{ error }}</p>
	</div>
</template>

<script>
export default {
	name: "MyInput",
	props: {
		inputName: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			error: null,
		};
	},
	watch: {
		value(value) {
			if (value.length <= 3) {
				this.error = `${this.inputName} must be at least 3 characters`;
			} else {
				this.error = null;
			}
		},
	},
};
</script>
