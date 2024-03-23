<template>
  <div>
    <article class="card">
      <div class="card__cover_inner">
        <img
          :src="category.strCategoryThumb"
          class="card__cover"
          alt="Meal image"
        />
        <div class="card__cover_darkened"></div>
      </div>
      <div class="card__title">{{ category.strCategory }}</div>
      <div class="card__desc">
        {{ category.strCategoryDescription.slice(0, 70) }}...
      </div>
      <div class="card__button">
        <router-link
          class="card__button_btn"
          :to="{ name: 'CategRecipes', params: { name: category.strCategory } }"
        >
          {{ category_card_btn }}
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category_card_btn: "View recipes",
    };
  },
  methods: {},
  props: {
    category: Object,
  },
};
</script>
