<template>
  <div>
    <footer class="footer">
      <div class="container footer__container">
        <p class="footer__left">{{ footerComponent.footerDate }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      /* footerDate: `© ${new Date().getFullYear()} All rights reserved`, */
    };
  },
  computed: {
    ...mapState(["footerComponent"]),
  },
};
</script>
