<script setup lang="ts">
import { RouterView } from "vue-router";
import ResponsivenessGuard from "./components/guards/responsiveness/ResponsivenessGuard.vue";
</script>

<template>
  <ResponsivenessGuard />
  <RouterView />
</template>
