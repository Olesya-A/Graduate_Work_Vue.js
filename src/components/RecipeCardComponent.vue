<template>
  <div>
    <article class="card">
      <div class="card__cover_inner card_recipe">
        <img :src="meal.strMealThumb" class="card__cover" alt="Meal image" />
      </div>
      <div class="card__subtitle">{{ meal.strMeal.slice(0, 50) }}</div>
      <div class="card__button">
        <router-link
          class="card__button_btn"
          :to="{ name: 'OneRecipe', params: { name: meal.idMeal } }"
        >
          {{ recipeCardComponent.meal_card_btn }}
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      /* meal_card_btn: "View recipe", */
    };
  },
  computed: {
    ...mapState(["recipeCardComponent"]),
  },
  methods: {},
  props: {
    meal: Object,
  },
};
</script>
