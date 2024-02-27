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
		class="rounded-md border border-main-400 bg-main-50 p-2 shadow-md transition-all hover:bg-main-400 hover:text-main-50 focus:bg-main-400 focus:text-main-50"
	>
		{{ title }}</RouterLink
	>
</template>
