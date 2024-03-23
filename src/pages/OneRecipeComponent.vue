<template>
  <div>
    <div class="top">
      <HeaderComponent />
      <div class="banner"></div>
      <div class="container">
        <div class="random">
          <h3 class="random__title">{{ strMeal }}</h3>
          <div class="random__block">
            <div class="random__block_img">
              <img
                height="500px"
                width="500px"
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
      api_url_one_recipe:
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
      idMeal: "",
      strMealThumb: "",
      strMeal: "",
      strInstructions: "",
      ingredients: {},
    };
  },
  mounted() {
    this.loadRandom(this.$route.params.name);
  },
  methods: {
    async fetchRandom(id) {
      const response = await fetch(this.api_url_one_recipe + id);
      const respData = await response.json();
      return respData;
    },
    async loadRandom(id) {
      const data = await this.fetchRandom(id);
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
      this.idMeal = random.idMeal;
    },
  },
  components: { HeaderComponent, FooterComponent },
};
</script>
