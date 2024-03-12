import { describe, expect, test } from "vitest";
import filterTableItems from "../utils/filterTableItems";

describe("Given the filterTableItems function", () => {
	test("The function should correctly filter the items", () => {
		const emptyItems = [];
		const items = [
			{ id: 1, name: "John", lastName: "Doe" },
			{ id: 2, name: "Jane", lastName: "Smith" },
			{ id: 3, name: "Bob", lastName: "Builder" },
			{ id: 4, name: "Patrick", lastName: "Builder" },
		];
		const searchValue = "John";
		const searchField = ["name"];

		// Filter on name
		expect(filterTableItems(emptyItems, searchValue, searchField)).toEqual([]);
		expect(filterTableItems(items, searchValue, searchField)).toEqual([
			{ id: 1, name: "John", lastName: "Doe" },
		]);

		// Filter with no match
		const searchValue3 = "Peter";
		const searchField3 = ["name", "lastName"];
		expect(filterTableItems(items, searchValue3, searchField3)).toEqual([]);

		// Filter on multiple fields
		const searchValue4 = "Builder";
		const searchField4 = ["name", "lastName"];
		expect(filterTableItems(items, searchValue4, searchField4)).toEqual([
			{ id: 3, name: "Bob", lastName: "Builder" },
			{ id: 4, name: "Patrick", lastName: "Builder" },
		]);
	});
});
