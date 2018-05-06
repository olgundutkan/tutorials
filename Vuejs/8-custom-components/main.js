Vue.component('tasks', {
	props: ['list'],

	template: '#tasks-template',
});

new Vue({
	el: '#app',
	data: {
		tasks: [
			{ body:'Go to the store', complated: false },
			{ body:'Go to the back', complated: false },
			{ body:'Go to the doctor', complated: true },
		]
	}
});