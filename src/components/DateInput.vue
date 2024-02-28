<script setup lang="ts">
const { label, name } = defineProps({
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
});
</script>

<template>
	<div class="flex flex-col gap-1">
		<label :for="name" class="text-sm font-medium">
			{{ label }}
		</label>
		<input
			type="date"
			:id="name"
			:name="name"
			class="rounded-md border-[1px] border-gray-300 px-2 py-1"
		/>
	</div>
</template>
