console.log('ciao')

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            emails: [],
            emailsObjs: {},
        }
    },
    methods:{
        repeatName() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((res)=> {
                console,log(res)
            })
        }
    }
}).mount('#app')

