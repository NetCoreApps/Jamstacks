<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
</script>

<template>
  <main class="text-gray-700 dark:bg-gray-900">
    <NavHeader />
    <router-view></router-view>
    <NavFooter />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
