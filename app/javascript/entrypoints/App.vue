<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
