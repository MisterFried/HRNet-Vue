import { describe, expect, test } from "vitest";
import sortTableItems from "../utils/sortTableItems";

describe("Given the sortTableItems function", () => {
	test("The function should correctly reorder items", () => {
		const items = [
			{ id: 1, name: "John", lastName: "Doe" },
			{ id: 2, name: "Jane", lastName: "Smith" },
			{ id: 3, name: "Bob", lastName: "Builder" },
		];

		// Ascending sort
		const ascSortedItems = sortTableItems(items, { key: "name", order: "asc" });
		expect(ascSortedItems[0].name).toBe("Bob");
		expect(ascSortedItems[1].name).toBe("Jane");
		expect(ascSortedItems[2].name).toBe("John");

		// Descending sort
		const descSortedItems = sortTableItems(items, { key: "lastName", order: "desc" });
		expect(descSortedItems[0].lastName).toBe("Smith");
		expect(descSortedItems[1].lastName).toBe("Doe");
		expect(descSortedItems[2].lastName).toBe("Builder");

		// Empty sort
		const emptyItems = [];
		const emptySortedItems = sortTableItems(emptyItems, { key: "name", order: "asc" });
		expect(emptySortedItems.length).toBe(0);
	});
});
