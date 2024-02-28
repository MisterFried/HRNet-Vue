<script setup lang="ts">
import NavigationButton from "./NavigationButton.vue";
</script>

<template>
	<header
		class="flex items-center justify-between border-b border-b-main-200 bg-main-50 p-4 shadow-md"
	>
		<h1 class="text-3xl font-bold">HR Net</h1>
		<menu class="flex gap-4">
			<NavigationButton title="View employees" to="/" />
			<NavigationButton title="Create employees" to="/create" />
		</menu>
	</header>
</template>
