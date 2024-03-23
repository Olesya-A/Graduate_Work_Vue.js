import { createRouter, createWebHistory } from "vue-router";

import Main from "@/pages/MainComponent";
import Recipes from "@/pages/RecipesComponent";
import About from "@/pages/AboutComponent";
import NotFound from "@/pages/NotFoundComponent";
import CategRecipes from "@/pages/CategRecipesComponent";
import OneRecipe from "@/pages/OneRecipeComponent";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/categ-recipes/:name?",
    name: "CategRecipes",
    component: CategRecipes,
  },
  {
    path: "/one-recipe/:name?",
    name: "OneRecipe",
    component: OneRecipe,
  },
  {
    path: "/:CatchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
