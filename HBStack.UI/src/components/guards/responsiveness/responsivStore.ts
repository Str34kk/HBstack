import { defineStore } from "pinia";
import { ref } from "vue";

export const useResponsivenessStore = defineStore("responsiveness", () => {
  const isVertical = ref(false);
  function setIsVertical(newValue: boolean) {
    isVertical.value = newValue;
  }

  return { isVertical, setIsVertical };
});
