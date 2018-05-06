new Vue({
	el: '#app',
	data: {
		tasks: [
			{ body:'Go to the store', complated: false },
			{ body:'Go to the back', complated: false },
			{ body:'Go to the doctor', complated: true },
		]
	},
	methods: {
		toggleComplatedFor: function(task) {
			task.complated = ! task.complated;
		}
	}
});