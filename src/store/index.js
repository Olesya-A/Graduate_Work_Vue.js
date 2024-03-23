import { createStore } from "vuex";

export default createStore({
  state: {
    headerComponent: {
      icon: require("@/assets/image/icon.png"),
      title: "TastyMeal",
      links: [
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
    },
    footerComponent: {
      footerDate: `© ${new Date().getFullYear()} All rights reserved`,
    },
    recipeCardComponent: {
      meal_card_btn: "View recipe",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
