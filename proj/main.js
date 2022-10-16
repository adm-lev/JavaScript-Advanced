'use strict';

const app = new Vue({
    el: '#app',
    data: {
        name: 'Oleg',
        name2: 'Igor'
    },
    methods: {
        info (age) {
            alert(`year of birth: ${new Date().getFullYear() - age}`);
        }
    }
})