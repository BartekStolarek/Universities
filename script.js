var app = new Vue({
  el: '#center',
  data: {
    name: '',
    country: '',
    universities : [],
    countries: '',
    dataToLoad: 26,
    scrolled: false,
    loaded: false
  },
  methods: {
    getData: function() {
      var self = this;
      $.get('http://universities.hipolabs.com/search?name=' + this.name + '&&country=' + this.country, function(data) {
        self.universities = data;
      });
      this.dataToLoad = 26;
      this.loaded = true;
    },
    getFlagUrl: function(countryCode) {
      return "http://www.countryflags.io/" + countryCode + "/flat/64.png";
    },
    handleScroll () {
      if (window.scrollY >= $("#results").height()-400) {
        this.dataToLoad += 27;
      }
    }
  },
  created: function() {
      window.addEventListener('scroll', this.handleScroll);
    },
  destroyed: function() {
    window.removeEventListener('scroll', this.handleScroll);
  }
});
