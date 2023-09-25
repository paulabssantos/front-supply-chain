<template>
  <div class="breadcrumbs">
    <router-link
      v-for="(crumb, index) in breadcrumbs"
      :to="crumb.to"
      :key="index"
    >
      {{ crumb.label }}
      <span v-if="index < breadcrumbs.length - 1"> > </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array,
  },
};
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
}

.breadcrumbs a {
  font: normal normal normal 11px/12px Helvetica;
  color: #939393;
  text-decoration: none;
}

.breadcrumbs span {
  font: normal normal normal 11px/12px Helvetica;
  margin: 0 5px;
  color: #939393;
}
</style>
