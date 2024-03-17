<script setup lang="ts">
import { useResponsivenessStore } from "../components/guards/responsiveness/responsivStore";

const responsivenessStore = useResponsivenessStore();
</script>

<template>
  <v-row> top </v-row>
  <v-row class="spacer"></v-row>
  <v-row>
    <v-col cols="4"> </v-col>
    <v-col cols="4">
      hbstack

      <v-row>
        <v-col v-for="n in 10" :key="n" cols="12">
          category title lorem ipsum des emore asater
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4"> </v-col>
  </v-row>
</template>

<style scoped>
.spacer {
  height: 20vh;
}
</style>
