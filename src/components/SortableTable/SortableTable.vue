<script lang="ts">
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";
import filterTableItems from "@/utils/filterTableItems";
import sortTableItems from "@/utils/sortTableItems";
import type { ItemInterface, headerInterface } from "@/types/types";

export default {
	name: "SortableTable",
	props: {
		items: {
			type: Array<ItemInterface>,
			required: true,
		},
		headers: {
			type: Array<headerInterface>,
			required: true,
		},
		filterFields: {
			type: Array<string>,
			required: true,
		},
		perPageInterval: {
			type: Array<number>,
			required: true,
		},
	},
	components: {
		TableHeader,
		TableRow,
	},
	data() {
		return {
			initialItems: [] as Array<ItemInterface>,
			filterValue: "",
			perPage: this.perPageInterval[0],
			page: 1,
			sortKey: {
				key: this.headers[0].key,
				order: "asc",
			},
		};
	},
	computed: {
		filteredItems() {
			return filterTableItems(this.initialItems, this.filterValue, this.filterFields);
		},
		isFiltered() {
			return this.initialItems.length !== this.filteredItems.length;
		},
		totalPages() {
			const totalPagesValue = Math.ceil(this.filteredItems.length / this.perPage);
			return totalPagesValue < 1 ? 1 : totalPagesValue;
		},
		displayedItemsInterval() {
			if (this.filteredItems.length === 0) return [0, 0];

			const start = (this.page - 1) * this.perPage + 1;
			const end = Math.min(this.page * this.perPage, this.filteredItems.length);
			return [start, end];
		},
		paginatedItems() {
			return this.filteredItems.slice(
				this.displayedItemsInterval[0] - 1,
				this.displayedItemsInterval[1],
			);
		},
	},
	emits: ["handleAction"],
	mounted() {
		this.initialItems = [...this.items];
		// Trigger a re-sorting
		this.sortKey = {
			key: this.sortKey.key,
			order: this.sortKey.order,
		};
	},
	watch: {
		items: {
			handler() {
				this.initialItems = [...this.items];
				// Trigger a re-sorting
				this.sortKey = {
					key: this.sortKey.key,
					order: this.sortKey.order,
				};
			},
		},
		totalPages: {
			handler() {
				if (this.page > this.totalPages) this.page = this.totalPages;
			},
		},
		sortKey: {
			deep: true,
			handler() {
				this.initialItems = sortTableItems(this.initialItems, this.sortKey);
			},
		},
	},
};
</script>

<template>
	<div class="flex w-full justify-between">
		<div>
			Show
			<select
				name="perPage"
				id="perPageSelect"
				class="mx-2 rounded-md p-2"
				:value="perPage"
				@change="perPage = Number(($event.target as HTMLSelectElement).value)"
			>
				<option v-for="perPage in perPageInterval" :key="perPage" :value="perPage">
					{{ String(perPage) }}
				</option>
			</select>
			items
		</div>
		<div>
			<input
				type="text"
				placeholder="Search"
				id="searchInput"
				class="rounded-md border border-gray-300 p-2"
				@input="filterValue = ($event.target as HTMLInputElement).value"
			/>
		</div>
	</div>
	<table>
		<TableHeader :headers="headers" @handleSort="sortKey = $event" />
		<tbody>
			<tr v-if="paginatedItems.length === 0">
				<td
					class="border border-gray-300 px-4 py-2 text-center"
					:colspan="headers.length + 1"
				>
					No items found
				</td>
			</tr>
			<TableRow
				v-else
				:paginatedItems="paginatedItems"
				:headers="headers"
				@handleAction="$emit('handleAction', $event)"
			/>
		</tbody>
	</table>
	<div class="flex w-full justify-between">
		<div>
			Showing {{ displayedItemsInterval[0] }} to {{ displayedItemsInterval[1] }} of
			{{ filteredItems.length }} items
			{{ isFiltered ? "(filtered)" : "" }}
		</div>
		<div class="flex items-center justify-center gap-2">
			Page {{ page }} of {{ totalPages }}
			<button
				id="tablePreviousPage"
				class="rounded-md border border-gray-400 bg-gray-200 px-2 py-1 transition-all hover:bg-gray-300 focus:bg-gray-300"
				v-if="page > 1"
				@click="page--"
			>
				Previous page
			</button>
			<button
				id="tableNextPage"
				class="rounded-md border border-gray-400 bg-gray-200 px-2 py-1 transition-all hover:bg-gray-300 focus:bg-gray-300"
				v-if="page < totalPages"
				@click="page++"
			>
				Next Page
			</button>
		</div>
	</div>
</template>
