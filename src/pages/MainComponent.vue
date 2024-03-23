<template>
  <div>
    <div class="top">
      <HeaderComponent />
      <div class="container">
        <div class="main_banner">
          <div class="main_banner__cover">
            <h1 class="main_banner__cover_header">
              {{ banner_title }}
            </h1>
            <p class="main_banner__cover_text">
              {{ banner_text }}
            </p>
            <div class="main_banner__cover_button">
              <router-link class="main_banner__cover_btn" :to="link.url">{{
                banner_btn
              }}</router-link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                  stroke="#CDA274"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h3 class="random__header">{{ random_title }}</h3>
      <div class="container">
        <div class="random">
          <h3 class="random__title">{{ strMeal }}</h3>
          <div class="random__block">
            <div class="random__block_img">
              <img
                :src="strMealThumb"
                class="category__cover"
                alt="Meal image"
              />
            </div>
            <ul class="random__block_list">
              <li v-for="(key, value) in ingredients">
                {{ value }} - {{ key }}
              </li>
            </ul>
          </div>
          <div class="random__instruction">{{ strInstructions }}</div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  data() {
    return {
      link: {
        name: "Recipes",
        url: "/recipes",
      },
      banner_title: "Let Your Meal Be Delicious and Varied",
      banner_text:
        "Here you will find more then 300 recipes from all over the world.",
      banner_btn: "View recipes",
      api_url: "https://www.themealdb.com/api/json/v1/1/",
      currentDate: new Date(),
      random_title: "The dish of the day:",
      strMealThumb: "",
      strMeal: "",
      strInstructions: "",
      ingredients: {},
    };
  },
  mounted() {
    const data = JSON.parse(window.localStorage.getItem("meal"));
    if (
      data === null ||
      data.day !== this.currentDate.getDate() ||
      data.month !== this.currentDate.getMonth()
    ) {
      this.loadRandom();
    } else {
      this.strMealThumb = data.strMealThumb;
      this.strMeal = data.strMeal;
      this.strInstructions = data.strInstructions;
      this.ingredients = data.ingred;
    }
  },
  methods: {
    async fetchRandom() {
      const response = await fetch(this.api_url + "random.php");
      const respData = await response.json();
      return respData;
    },
    async loadRandom() {
      const data = await this.fetchRandom();
      const random = data.meals[0];
      const ingrValues = Object.values(random).slice(9, 29);
      const measurValues = Object.values(random).slice(29, 49);
      const ingred = ingrValues.reduce((acc, element, index) => {
        return { ...acc, [element]: measurValues[index] };
      }, {});
      this.strMealThumb = random.strMealThumb;
      this.strMeal = random.strMeal;
      this.strInstructions = random.strInstructions;
      this.ingredients = ingred;

      window.localStorage.setItem(
        "meal",
        JSON.stringify({
          day: this.currentDate.getDate(),
          month: this.currentDate.getMonth(),
          strMealThumb: random.strMealThumb,
          strMeal: random.strMeal,
          strInstructions: random.strInstructions,
          ingred: ingred,
        })
      );
    },
  },
  components: { HeaderComponent, FooterComponent },
};
</script>
