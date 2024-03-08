<script>
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
			type: Array,
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
			@change="$emit('inputChange', $event.target.value)"
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
