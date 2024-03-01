<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
		default: "Label",
	},
	name: {
		type: String,
		required: true,
		default: "inputName",
	},
	placeholder: {
		type: String,
		default: "",
	},
	modelValue: {
		type: String,
		required: true,
		default: "",
	},
	errors: {
		type: String,
	},
});

const emit = defineEmits(["update:modelValue"]);
function updateValue(event: Event) {
	const target = event.target as HTMLInputElement;
	emit("update:modelValue", target.value);
}
</script>

<template>
	<div class="flex flex-col gap-1">
		<label :for="name" class="text-sm font-medium">{{ label }}</label>
		<input
			:id="name"
			:value="modelValue"
			@input="updateValue($event)"
			:placeholder="placeholder"
			class="rounded-md border-[1px] border-gray-300 px-2 py-1"
		/>
		<p v-if="errors" class="text-red-500">{{ errors }}</p>
	</div>
</template>
