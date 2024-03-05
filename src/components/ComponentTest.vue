<template>
	<div id="testApp">
		<MyInput
			inputName="firstName"
			:value="employee.firstName"
			@wilfried="employee.firstName = $event"
		/>
		<MyInput
			inputName="lastName"
			:value="employee.lastName"
			@wilfried="employee.lastName = $event"
		/>

		<button @click="onSubmit">Ajouter</button>
	</div>
</template>

<script>
import MyInput from "./MyInput.vue";

export default {
	name: "ComponentTest",
	components: {
		MyInput,
	},
	data() {
		return {
			employee: {
				firstName: "",
				lastName: "",
			},
		};
	},
	methods: {
		onSubmit() {
			console.log({
				firstName: this.employee.firstName,
				lastName: this.employee.lastName,
			});
		},
	},
};
</script>

<style>
/* Ajoutez ici du CSS pour votre App.vue si nécessaire */
</style>
./Myinput.vue
