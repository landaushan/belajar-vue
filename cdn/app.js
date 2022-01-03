// DECLARATIVE RENDERING : https://v3.vuejs.org/guide/introduction.html#declarative-rendering

const app = Vue.createApp({
  // template: '<div>Hello world</div>'
  data() {
    return {
      title: 'What is Vue.js',
      description: 'The Progressive JavaScript Framework',
      image: 'https://v3.vuejs.org/logo.png',
      users: []
    };
  },
  methods: {
    getName() {
      alert(`Vue.Js\n${this.description}`);
    },
    async getRandomUsers() {
      console.log('Fetching...');
      let res = await fetch('https://randomuser.me/api');

      let { results } = await res.json();

      console.log(results);
      this.users = results;
    }
  }
});

app.mount('#app');
