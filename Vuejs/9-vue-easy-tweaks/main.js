Vue.config.devtools = true;

Vue.component('tasks', {
	props: ['list'],

	template: '#tasks-template',

	computed: {
		remaining: function() {
			return this.list.filter(this.inProgress).length;
		},
		clearAllComplated: function () {
			return this.list.filter(this.isCompleted).length;
		}
	},
	methods: {
		isCompleted: function(task) {
			return task.complated;
		},
		inProgress: function(task) {
			return ! this.isCompleted(task);
		},
		deleteTask: function(task) {
			this.list.$remove(task);
		},
		clearComplated: function() {
			this.list = this.list.filter(this.inProgress);
		}
	}
});

new Vue({
	el: '#app',
	data: {
		tasks: [
			{ body:'Go to the store', complated: false },
			{ body:'Go to the back', complated: false },
			{ body:'Go to the doctor', complated: false },
		]
	}
});