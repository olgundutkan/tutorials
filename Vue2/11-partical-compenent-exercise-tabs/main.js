Vue.component('tabs',{

    template: `
    <div>
        <div class="tabs">
            <ul>
                <li class="is-active"><a>About Us</a></li>
                <li><a>About Our Culture</a></li>
                <li><a>About Our Vision</a></li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
        `,
    mounted() {
        console.log(this.$children);
    }
});

Vue.component('tab', {
    template: 
    `
        <div><slot></slot></div>
    `
});

new Vue({
    el:'#app',
});