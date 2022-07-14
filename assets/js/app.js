const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api') // 'res' is short for 'response'
            const { results } = await res.json() // FYI: The right side of this line returns: {results: Array(1), info: {…}}. So, we're using 'destructuring assignment' on the left. The applicable syntax rule from MDN is just below.
            console.log(results)
            /*
            ({ a, b } = { a: 10, b: 20 })
            console.log(a); // 10
            console.log(b); // 20
            */
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')