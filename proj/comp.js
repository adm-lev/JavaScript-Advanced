'use strict';

Vue.component('test', {
    props: ['name'],
    data() {
        return {
            name: 'Ivan',
            age: 25,
        }
    },
    template: `<div>
                    <div>Welcome {{ name }} and {{ $data.name }}! Age of user is {{ age }}</div>
                    <div>hello {{ name2 }}</div>
                    <inner-comp></inner-comp>
                </div>`,
});


Vue.component('inner-comp', {
    template: `<button @click="$root.info($parent.age)">Get birth year</button>`
    // template: `<button @click="$parent.$parent.info($parent.age)">Get birth year</button>`
});

Vue.component('filter', {
    template: ` <form action="#" class="search-form" @submit.prevent="$parent.filter">
                    <input type="text" class="search-field" v-model="$parent.userSearch">
                    <button type="submit" class="btn-search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`
});

// Vue.component('inner-comp', {
//     data(){
//         return {
//             counter: 0,
//         }
//     },
//     methods: {
//         increase (x) {
//             this.counter += x;
//         }
//     },
//     template: `<div>
//                 <button @click="increase($parent.age)">OK</button>
//                 <span>counter is: {{ counter }}</span>
//                 </div>`,
// })