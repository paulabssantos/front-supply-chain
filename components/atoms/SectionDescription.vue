<template>
  <div>
    <p>{{ description }}</p>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    description: {
      default: "",
      required: true,
      type: String,
    },
  },
};
</script>
<style scoped>
p {
  font: normal normal normal 12px/14px Helvetica;
  letter-spacing: 0px;
  color: #939393;
}
</style>
