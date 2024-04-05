<script setup lang="ts">
/**
 * Render a navigation button. When clicked, navigate to the provided route.
 *
 * @param {string} title - The displayed text
 * @param {string} to - The route to navigate to
 */
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
		class="rounded-md border border-main-200 bg-white px-2 py-1 text-sm shadow-md transition-all hover:bg-main-200 focus:bg-main-200 sm:px-4 sm:py-2 sm:text-base"
	>
		{{ title }}</RouterLink
	>
</template>
