<script setup lang="ts">
const { title, to } = defineProps({
	title: {
		type: String,
		required: true,
		default: "View employees",
	},

	to: {
		type: String,
		required: true,
		default: "/",
	},
});
</script>

<template>
	<RouterLink
		:to="to"
		class="rounded-md border border-main-200 bg-white p-2 shadow-md transition-all hover:bg-main-200 focus:bg-main-200"
	>
		{{ title }}</RouterLink
	>
</template>
