console.log('ciao')

const { createApp } = Vue
// console.log(axios)
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            emails: [],
        }
    
    },
    methods: {
        repeatEmail() {
          axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                        this.emails.push(res.data.response)
                })
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
           this.repeatEmail()
        }
    },
}).mount('#app')
const lunghezza = this.emails
// console.log(lunghezza)

