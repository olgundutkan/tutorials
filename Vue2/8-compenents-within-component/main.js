Vue.config.devtools = true;

Vue.component('task-list', {
    template: '<div><task v-for="task in tasks" v-text="task.description" :key="task.id"></task></div>',
    data() {
        return {
            tasks: [
                {description:"Complate lesson 6", complated: true},
                {description:"Complate lesson 7", complated: false},
                {description:"Complate lesson 8", complated: false},
                {description:"Complate lesson 9", complated: false},
                {description:"Complate lesson 10", complated: false},
                {description:"Complate lesson 11", complated: false},
            ]
        }
    },
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '#app'
});