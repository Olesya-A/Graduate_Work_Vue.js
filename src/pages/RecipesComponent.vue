<template>
  <div>
    <div class="top">
      <HeaderComponent />
      <div class="banner"></div>
      <div class="container">
        <section class="categories__content">
          <h2 class="categories__content_title">{{ content_title }}</h2>
          <article class="categories">
            <CategoryCardComponent
              v-for="category in categories"
              :key="category.id"
              :category="category"
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
import CategoryCardComponent from "@/components/CategoryCardComponent.vue";

export default {
  data() {
    return {
      content_title: "Categories of dishes.",
      api_url_categories:
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      categories: [],
      category: {
        idCategory: "",
        strCategoryThumb: "",
        strCategory: "",
        strCategoryDescription: "",
      },
    };
  },
  mounted() {
    this.getCategories(this.api_url_categories);
  },
  methods: {
    async getCategories(url) {
      const response = await fetch(url);
      const respData = await response.json();
      this.showCategories(respData);
    },
    showCategories(data) {
      data.categories.forEach((category) => {
        this.idCategory = category.idCategory;
        this.strCategoryThumb = category.strCategoryThumb;
        this.strCategory = category.strCategory;
        this.strCategoryDescription = category.strCategoryDescription;
        this.categories.push(category);
      });
    },
  },
  components: { HeaderComponent, FooterComponent, CategoryCardComponent },
};
</script>
