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
});
</script>

<template>
	<div class="flex flex-col gap-1">
		<label :for="name" class="text-sm font-medium">{{ label }}</label>
		<select
			:name="name"
			:id="name"
			class="rounded-md border-[1px] border-gray-300 bg-white p-2"
		>
			<option v-for="option in options" :value="option" :key="option">
				{{ option }}
			</option>
		</select>
	</div>
</template>
