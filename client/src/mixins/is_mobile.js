export default {
  data() {
    return {
      isMobile: false
    };
  },

  created()
  {
    if (window.innerWidth < 769) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
  },

  methods: {
    onResize() {
      if (window.innerWidth < 769) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
};
