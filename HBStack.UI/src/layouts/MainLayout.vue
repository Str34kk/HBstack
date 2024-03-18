<script setup lang="ts">
import { useResponsivenessStore } from "../components/guards/responsiveness/responsivStore";

const responsivenessStore = useResponsivenessStore();
</script>

<template>
  <v-row> top </v-row>
  <v-row class="spacer"></v-row>
  <v-row>
    <v-col cols="3"> </v-col>
    <v-col cols="4">
      <v-row class="d-flex align-center">
        <v-col cols="3">
          <img src="/logo.png" class="logo" alt="logo" width="144" />
        </v-col>
        <v-col> hbstack </v-col>
      </v-row>
    </v-col>
    <v-col cols="5"> </v-col>

    <v-col cols="4"> </v-col>
    <v-col cols="4">
      <v-row v-for="n in 13" :key="n">
        <v-col cols="12"> category title lorem ipsum des emore asater </v-col>
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
