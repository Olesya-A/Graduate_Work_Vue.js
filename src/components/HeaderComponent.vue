<template>
  <div>
    <div class="container">
      <header class="header">
        <router-link class="header__left" :to="headerComponent.links[0].url">
          <img :src="headerComponent.icon" alt="icon" />
          <h3 class="header__left_title">{{ headerComponent.title }}</h3>
        </router-link>
        <nav class="header__right">
          <router-link
            class="header__right_nav"
            v-for="link in headerComponent.links"
            :key="link.id"
            :to="link.url"
            >{{ link.name }}</router-link
          >
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      /* links: [
        {
          id: 0,
          name: "Main",
          url: "/",
        },
        {
          id: 1,
          name: "Recipes",
          url: "/recipes",
        },
        {
          id: 2,
          name: "About",
          url: "/about",
        },
      ],
      icon: require("@/assets/image/icon.png"),
      title: "TastyMeal",*/
    };
  },
  computed: {
    ...mapState(["headerComponent"]),
  },
};
</script>
