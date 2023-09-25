<template>
  <div class="header">
    <Logo></Logo>
    <div class="items">
      <img
        class="item"
        src="~/assets/baseline-notifications-24px.svg"
        width="24"
        height="24"
      />
      <p class="item">Administrador</p>
      <img
        class="item"
        src="~/assets/baseline-exit_to_app-24px.svg"
        width="24"
        height="24"
      />
    </div>
  </div>
</template>
<script>
import Logo from '~/components/atoms/Logo.vue'; 
export default {
  components: {
    Logo
  },
};
</script>
<style scoped>

.header {
  height: 64px;
  display: flex;
  justify-content: space-between;
  background: #fbfbfb;
  opacity: 1;
}

.items {
  display: flex;
  align-items: center;
}

.item {
  margin-right: 20px;
}

.items p {
  text-align: left;
  font: normal normal normal 15px/20px Roboto;
  color: #000000;
}
</style>