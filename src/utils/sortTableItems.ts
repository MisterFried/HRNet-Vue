import type { ItemInterface } from "@/types/types";

export default function sortTableItems(
	items: Array<ItemInterface>,
	sortKey: { key: string; order: string },
) {
	if (items.length === 0) {
		return items;
	}

	if (sortKey.order === "asc") {
		return items.sort((a, b) => (a[sortKey.key] > b[sortKey.key] ? 1 : -1));
	} else {
		return items.sort((a, b) => (a[sortKey.key] > b[sortKey.key] ? -1 : 1));
	}
}
