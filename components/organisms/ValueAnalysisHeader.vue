<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <h2>Análise de Valores</h2>

    <div class="cards-container">
      <CardInfo :label="'Código'" :value="code" />
      <CardInfo :label="'Descrição'" :value="description" />
      <CardInfo :label="'Tipo'" :value="type" />
    </div>
  </div>
</template>
<script lang="ts">
import Breadcrumb from "~/components/atoms/BreadCrumb.vue";
import CardInfo from "~/components/atoms/CardInfo.vue";

export default {
  props: {
    code: String,
    description: String,
    type: String
  },
  layout: "default",
  components: {
    Breadcrumb,
    CardInfo,
  },
  created(){
    this;
  },
  computed: {
    breadcrumbs() {
      return [
        { label: "Cotação", to: "/" },
        { label: "Análise de Valores", to: "/" },
      ];
    },
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
}

h2 {
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
  font: normal normal bold 20px/23px Helvetica;
  letter-spacing: 0px;
  color: #000000;
}
</style>
