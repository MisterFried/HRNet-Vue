import type { ItemInterface } from "@/types/types";

export default function filterTableItems(
	items: Array<ItemInterface>,
	searchText: string,
	searchFields: Array<string>,
) {
	if (items.length === 0 || searchText === "" || searchFields.length === 0) {
		return items;
	}

	const filteredItems = items.filter((item) => {
		let isMatch = false;

		searchFields.forEach((searchField) => {
			if (item[searchField].toLowerCase().includes(searchText.toLowerCase())) {
				isMatch = true;
				return;
			}
		});
		return isMatch;
	});
	return filteredItems;
}
