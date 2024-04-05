<script lang="ts">
/**
 * Render all the table headers. Each header can trigger a sorting order change when clicked.
 * The sorting order change is emitted to the parent component (handleSorting).
 *
 * @param headers - An array of objects defining the displayed column. Each object must contains a name
 * field for the displayed name and a key field for the associated employee records property (used for
 * sorting and filtering).
 * @param activeSorting - The currently active sorting order (e.g. "name-asc")
 */
import { ChevronDown, ChevronUp } from "lucide-vue-next";
import type { headerInterface } from "@/types/types";

export default {
	name: "TableHeader",
	props: {
		headers: {
			type: Array<headerInterface>,
			required: true,
		},
		activeSorting: {
			type: String,
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
					:class="`absolute right-2 top-1/2 -translate-y-full ${activeSorting === `${header.key}-asc` ? 'opacity-100' : 'opacity-50'}`"
					:id="`reorder-${header.key}-asc`"
					@click="$emit('handleSort', { key: header.key, order: 'asc' })"
				>
					<ChevronUp />
				</button>
				<button
					:aria-label="`Sort by ${header.name} in descending order`"
					:class="`absolute bottom-1/2 right-2 translate-y-full ${activeSorting === `${header.key}-desc` ? 'opacity-100' : 'opacity-50'}`"
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
