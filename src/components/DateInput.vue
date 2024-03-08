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
		<input
			type="date"
			:name="inputName"
			:id="inputName"
			:value="value"
			:placeholder="label"
			@input="$emit('inputChange', $event.target.value)"
			class="rounded-md border-[1px] border-gray-300 px-2 py-1"
			required
		/>
		<p v-if="error" :id="`${inputName}Error`" class="max-w-full text-red-500">{{ error }}</p>
	</div>
</template>
