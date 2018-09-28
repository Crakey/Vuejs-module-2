new Vue({
    el: '#app',
    data: {
        title: 'Becoming a vue ninja',
        name: 'Jacob'
    },
    methods: {
        updateName(e){
           // console.log(e.target.value)
           this.name = e.target.value
        }

    }
})