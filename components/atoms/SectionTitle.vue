<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      default: "",
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  font: normal normal bold 15px/17px Helvetica;
  letter-spacing: 0px;
  color: #707070;
}
</style>
