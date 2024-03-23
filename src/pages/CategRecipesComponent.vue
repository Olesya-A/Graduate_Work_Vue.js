<template>
  <div>
    <div class="top">
      <HeaderComponent />
      <div class="banner"></div>
      <div class="container">
        <section class="recipes__content">
          <h2 class="recipes__content_title">
            {{ meals_content_title }}{{ $route.params.name }}
          </h2>
          <article class="recipes">
            <RecipeCardComponent
              v-for="meal in meals"
              :key="meal.id"
              :meal="meal"
            />
          </article>
        </section>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import RecipeCardComponent from "@/components/RecipeCardComponent.vue";

export default {
  data() {
    return {
      meals_content_title: "Recipes of the category - ",
      api_url_category_recipes:
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
      meals: [],
      meal: {
        idMeal: "",
        strMealThumb: "",
        strMeal: "",
      },
    };
  },
  mounted() {
    this.getRecipes(this.$route.params.name);
  },
  methods: {
    async getRecipes(name) {
      const response = await fetch(this.api_url_category_recipes + name);
      const respData = await response.json();
      this.showRecipes(respData);
    },
    showRecipes(data) {
      data.meals.forEach((meal) => {
        this.idMeal = meal.idMeal;
        this.strMealThumb = meal.strMealThumb;
        this.strMeal = meal.strMeal;
        this.meals.push(meal);
      });
    },
  },
  components: { HeaderComponent, FooterComponent, RecipeCardComponent },
};
</script>
