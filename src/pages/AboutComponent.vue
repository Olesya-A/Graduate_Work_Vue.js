<template>
  <div>
    <div class="top">
      <HeaderComponent />
      <div class="banner"></div>
      <div class="container">
        <div class="about__content">
          This site was designed and made by Ashastina Olesya, the student of
          GeekBrains, as a graduate work. The recipes are taken from the open
          database of recipes -
          <a href="https://www.themealdb.com/">TheMealDB</a>.
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
  components: { HeaderComponent, FooterComponent },
};
</script>
