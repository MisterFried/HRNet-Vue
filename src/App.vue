<script lang="ts">
import { RouterView } from "vue-router";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
	name: "App",
	components: {
		RouterView,
		AppHeader,
		AppFooter,
	},
};
</script>

<template>
	<AppHeader />
	<RouterView />
	<AppFooter />
</template>
