<template>
  <div>
    <div class="container">
      <div class="notfound">
        <div class="notfound-content">
          <h1 class="notfound-content__header">404</h1>
          <div class="notfound-content__text">
            We are sorry, but the page you requested was not found
          </div>
          <div class="notfound-content__button">
            <router-link class="button-link" :to="link.url"
              >Back To Main
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                  stroke="#CDA274"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                /></svg
            ></router-link>
          </div>
        </div>
        <div class="notfound__cover"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "Main",
        url: "/",
      },
    };
  },
};
</script>
