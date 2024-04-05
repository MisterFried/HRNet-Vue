<script lang="ts">
import NavigationButton from "./NavigationButton.vue";

export default {
	name: "AppHeader",
	components: {
		NavigationButton,
	},
};
</script>

<template>
	<header
		class="flex flex-row items-center justify-between gap-2 border-b border-b-main-200 bg-main-50 px-2 py-4 shadow-md sm:px-4"
	>
		<h1 class="text-lg font-bold sm:text-3xl">HR Net</h1>
		<menu class="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
			<NavigationButton title="View employees" to="/" />
			<NavigationButton title="Create employees" to="/create" />
		</menu>
	</header>
</template>
