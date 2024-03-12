import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import SortableTable from "../components/SortableTable/SortableTable.vue";
import employees from "../data/employees.ts";
import sortTableItems from "../utils/sortTableItems.ts";
import filterTableItems from "../utils/filterTableItems.ts";

const headers = [
	{
		name: "First name",
		key: "firstName",
	},
	{
		name: "Last name",
		key: "lastName",
	},
	{
		name: "Date of birth",
		key: "dateOfBirth",
	},
	{
		name: "Start date",
		key: "startDate",
	},
	{
		name: "Street",
		key: "street",
	},
	{
		name: "City",
		key: "city",
	},
	{
		name: "State",
		key: "state",
	},
	{
		name: "Zip code",
		key: "zip",
	},
	{
		name: "Department",
		key: "department",
	},
];

const filterFields = [
	"firstName",
	"lastName",
	"dateOfBirth",
	"startDate",
	"street",
	"city",
	"state",
	"zip",
	"department",
];

const perPageInterval = [5, 10, 15];

describe("Given the SortableTable component", () => {
	beforeEach(() => localStorage.setItem("employees", JSON.stringify(employees)));
	afterEach(() => localStorage.clear());

	test("The component should render the correct number of items on the first page", async () => {
		const wrapper = mount(SortableTable, {
			propsData: {
				items: employees,
				headers: headers,
				filterFields: filterFields,
				perPageInterval: perPageInterval,
			},
		});
		await wrapper.vm.$nextTick();

		const tableRows = wrapper.findAll("#tableRow");
		expect(tableRows.length).toBe(Math.min(perPageInterval[0], employees.length));
	});
	test("The component should order the provided items based on the first given field", async () => {
		const wrapper = mount(SortableTable, {
			propsData: {
				items: employees,
				headers: headers,
				filterFields: filterFields,
				perPageInterval: perPageInterval,
			},
		});
		await wrapper.vm.$nextTick();

		const sortedItems = sortTableItems(employees, { key: headers[0].key, order: "asc" });
		expect(wrapper.vm.initialItems).toEqual(sortedItems);
	});
	test("The component should reorder the items when the user changes the sort order", async () => {
		const wrapper = mount(SortableTable, {
			propsData: {
				items: employees,
				headers: headers,
				filterFields: filterFields,
				perPageInterval: perPageInterval,
			},
		});
		await wrapper.vm.$nextTick();

		// Reorder ascending items based on the second column
		const reorderAscButton = wrapper.find(`#reorder-${headers[1].key}-asc`);
		await reorderAscButton.trigger("click");
		const ascReorderedItems = sortTableItems(employees, { key: headers[1].key, order: "asc" });
		expect(wrapper.vm.initialItems).toEqual(ascReorderedItems);

		// Reorder descending items based on the third column
		const reorderDescButton = wrapper.find(`#reorder-${headers[2].key}-desc`);
		await reorderDescButton.trigger("click");
		const descReorderedItems = sortTableItems(employees, {
			key: headers[2].key,
			order: "desc",
		});
		expect(wrapper.vm.initialItems).toEqual(descReorderedItems);
	});
	test("The component should filter the items based on the search input field", async () => {
		const wrapper = mount(SortableTable, {
			propsData: {
				items: employees,
				headers: headers,
				filterFields: filterFields,
				perPageInterval: perPageInterval,
			},
		});
		await wrapper.vm.$nextTick();

		const searchValue = "John";

		const searchInput = wrapper.find("#searchInput");
		await searchInput.setValue(searchValue);

		const sortedItems = sortTableItems(employees, { key: headers[0].key, order: "asc" });
		const filteredItems = filterTableItems(sortedItems, searchValue, filterFields);
		expect(wrapper.vm.filteredItems).toEqual(filteredItems);
	});
	test("The component should switch to the next page when the user clicks the next button", async () => {
		const wrapper = mount(SortableTable, {
			propsData: {
				items: employees,
				headers: headers,
				filterFields: filterFields,
				perPageInterval: perPageInterval,
			},
		});
		await wrapper.vm.$nextTick();

		const pageToTest = 2;

		const nextPageButton = wrapper.find("#tableNextPage");
		for (let currentPage = 1; currentPage < pageToTest; currentPage++) {
			await nextPageButton.trigger("click");
		}

		const sortedItems = sortTableItems(employees, { key: headers[0].key, order: "asc" });

		const start = (pageToTest - 1) * perPageInterval[0];
		const end = pageToTest * perPageInterval[0];

		const paginatedEmployees = sortedItems.slice(start, end);
		expect(wrapper.vm.paginatedItems).toEqual(paginatedEmployees);
		expect(wrapper.vm.page).toBe(pageToTest);
	});
	test("The component should switch to the previous page when the user clicks the previous button", async () => {
		const wrapper = mount(SortableTable, {
			propsData: {
				items: employees,
				headers: headers,
				filterFields: filterFields,
				perPageInterval: perPageInterval,
			},
		});
		await wrapper.vm.$nextTick();

		const nextPageButton = wrapper.find("#tableNextPage");
		await nextPageButton.trigger("click");

		const previousPageButton = wrapper.find("#tablePreviousPage");
		await previousPageButton.trigger("click");

		const sortedItems = sortTableItems(employees, { key: headers[0].key, order: "asc" });

		const start = 0 * perPageInterval[0];
		const end = 1 * perPageInterval[0];

		const paginatedEmployees = sortedItems.slice(start, end);
		expect(wrapper.vm.paginatedItems).toEqual(paginatedEmployees);
		expect(wrapper.vm.page).toBe(1);
	});
	test("The component should update the table when the number of items per page changes", async () => {
		const wrapper = mount(SortableTable, {
			propsData: {
				items: employees,
				headers: headers,
				filterFields: filterFields,
				perPageInterval: perPageInterval,
			},
		});
		await wrapper.vm.$nextTick();

		const selectInput = wrapper.find("#perPageSelect");
		await selectInput.setValue(perPageInterval[1]);

		const tableRows = wrapper.findAll("#tableRow");
		expect(tableRows.length).toBe(perPageInterval[1]);
	});
});
