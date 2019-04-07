let app = new Vue({
  el: '#app',
  data: {
    navExpanded: false
  },
  methods: {
    toggleNav: function() {
      this.navExpanded = !this.navExpanded
    }
  }
});