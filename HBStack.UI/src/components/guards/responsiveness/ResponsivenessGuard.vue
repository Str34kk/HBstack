<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { useResponsivenessStore } from "./ResponsivenessStore";

const responsivenessStore = useResponsivenessStore();

const updateLayout = () => {
  responsivenessStore.setIsVertical(window.innerWidth / window.innerHeight < 1);
};

onMounted(() => {
  updateLayout();
  window.addEventListener("resize", updateLayout);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateLayout);
});
</script>

<template></template>
./responsivenessStore
