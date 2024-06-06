const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
        }
    },
    methods: {
        getRandomEmail () {
            for(let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    const result = response.data;
                    console.log(result);
                    this.mailList.push(result.response);
                });
            }
            console.log(this.mailList);
        }
    },
    created() {
        this.getRandomEmail();
    }
}).mount('#app')