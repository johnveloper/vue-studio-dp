let app = new Vue({
  el: '#app',
  data: {
    navExpanded: false,
    content: ''
  },
  methods: {
    toggleNav: function() {
      this.navExpanded = !this.navExpanded
    }
  },
  mounted() {
    axios.get('content/home.html').then(res => this.content = res.data );
  }
});