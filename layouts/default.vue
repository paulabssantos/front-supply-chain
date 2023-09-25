<template>
  <div class="app">
    <Header />
    <div class="sidebar">
      <Sidebar />
      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/organisms/Header.vue"; // Importe o componente Header
import Sidebar from "~/components/organisms/SideBar.vue"; // Importe o componente Sidebar

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>
<style scoped>
.app {
  display: flex;
  flex-direction: column;
}

.sidebar {
  display: flex;
}

.content {
  width: 100%;
}
</style>