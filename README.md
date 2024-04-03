# HR Net - Vue

[![Netlify Status](https://api.netlify.com/api/v1/badges/666deaff-b3fe-4935-9cf3-dd200a3930a5/deploy-status)](https://app.netlify.com/sites/hrnet-vue/deploys)

_This project is the Vue.js adaptation of [this](https://github.com/MisterFried/HRNet) application_

HR Net is a web app made to manage employee data. It is composed of two pages "Create employee" and "Display employees".

Access the live version here [HRNet](https://hrnet-vue.netlify.app/)

Below are detailed descriptions of the application's key features.

## Features

The primary objective of this project was to transition from [an outdated JQuery based](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) version of the application to a more modern Vue-based solution.
A second aim was to create modular components that could be reused on any other application. Notably a paginated table component, used to display data with functionality to paginate, filter and sort data.

### Create employee

The "Create employee" page features a form with data validation. Upon successful form submission, a new employee record will be saved in the user's localStorage (to prevent data loss caused by page refresh / closure).

### Display employees

The "Display employees" page retrieves all employee records stored in the localStorage and display them using a custom table component.
This table component includes several features:

-   Pagination functionality enabling users to select the number of records displayed per page.
-   Sorting options allowing records the be arranged in ascending or descending order based on any field.
-   Filtering capability based on user-input text.
-   Action section enabling employee deletion from localStorage.

## Run locally

To run the application locally, follow these steps:

Clone the project:

```bash
  git clone https://github.com/MisterFried/HRNet-Vue
```

Go to the project directory:

```bash
  cd HRNet-Vue
```

Install dependencies:

```bash
  npm install
```

Start the server:

```bash
  npm run dev
```

## Related

As mentioned above, this project is the Vue.js adaptation of an existing application made during my "_Software developer - React_"" training program.
The React version can be found here :

-   [GitHub](https://github.com/MisterFried/HRNet)
-   [Live](https://hrnet-oc.netlify.app/)
