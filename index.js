let app = new Vue({
  el: '#app',
  data: {
    navExpanded: false,
    content: '',
    page: 'home'
  },
  methods: {
    toggleNav: function() {
      this.navExpanded = !this.navExpanded
    }
  },
  mounted() {
    axios.get('content/' + this.page + '.html').then(res => this.content = res.data );
  }
});