<template>
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/layout1.vue";
</script>

<style scoped lang="scss">

</style>
