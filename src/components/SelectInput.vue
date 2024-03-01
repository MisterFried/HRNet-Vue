<script setup lang="ts">
import type { PropType } from "vue";

const { label, name, options } = defineProps({
	label: {
		type: String,
		required: true,
		default: "Label",
	},
	name: {
		type: String,
		required: true,
		default: "selectName",
	},
	options: {
		type: Array as PropType<string[]>,
		required: true,
		default: () => ["Option 1", "Option 2", "Option 3"],
	},
	modelValue: {
		type: String,
		required: true,
		default: "Select an option",
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
		<select
			:id="name"
			:value="modelValue"
			@input="updateValue($event)"
			class="rounded-md border-[1px] border-gray-300 bg-white p-2"
		>
			<option value="" disabled selected>Select an option</option>
			<option v-for="option in options" :value="option" :key="option">
				{{ option }}
			</option>
		</select>
		<p v-if="errors" class="text-red-500">{{ errors }}</p>
	</div>
</template>
