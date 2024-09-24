<template>
  <button class="hp-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "hp-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`hp-button--${buttonProps.type}`]: buttonProps.type };
});
</script>


