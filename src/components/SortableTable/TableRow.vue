<script lang="ts">
import type { ItemInterface, headerInterface } from "@/types/types";

export default {
	name: "TableRow",
	props: {
		paginatedItems: {
			type: Array<ItemInterface>,
			required: true,
		},
		headers: {
			type: Array<headerInterface>,
			required: true,
		},
	},
	emits: ["handleAction"],
};
</script>

<template>
	<tr
		v-for="item in paginatedItems"
		:key="`item_${item.id}`"
		class="odd:bg-main-50 even:bg-main-100 hover:bg-green-200"
	>
		<td
			v-for="header in headers"
			:key="`item_${item.id}_${header.key}`"
			class="border border-gray-300 px-4 py-2"
		>
			{{ item[header.key] }}
		</td>
		<td class="border border-gray-300 px-4 py-2">
			<button
				@click="$emit('handleAction', item.id)"
				class="rounded-md border border-gray-400 bg-gray-200 px-2 py-1 transition-all hover:bg-gray-300 focus:bg-gray-300"
			>
				Delete
			</button>
		</td>
	</tr>
</template>
