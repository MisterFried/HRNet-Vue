<script lang="ts">
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import type { headerInterface } from "@/types/types";

export default {
	name: "TableHeader",
	props: {
		headers: {
			type: Array<headerInterface>,
			required: true,
		},
	},
	components: {
		ChevronDown,
		ChevronUp,
	},
};
</script>

<template>
	<thead>
		<tr class="bg-main-500 text-white">
			<th
				v-for="header in headers"
				:key="header.key"
				class="relative border border-gray-300 px-4 py-4 pr-12"
			>
				{{ header.name }}
				<button
					:aria-label="`Sort by ${header.name} in ascending order`"
					class="absolute right-2 top-1/2 -translate-y-full"
					:id="`reorder-${header.key}-asc`"
					@click="$emit('handleSort', { key: header.key, order: 'asc' })"
				>
					<ChevronUp />
				</button>
				<button
					:aria-label="`Sort by ${header.name} in descending order`"
					class="absolute bottom-1/2 right-2 translate-y-full"
					:id="`reorder-${header.key}-desc`"
					@click="$emit('handleSort', { key: header.key, order: 'desc' })"
				>
					<ChevronDown />
				</button>
			</th>
			<th class="border border-gray-300 px-4 py-2">Action</th>
		</tr>
	</thead>
</template>
