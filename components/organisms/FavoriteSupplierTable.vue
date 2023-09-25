<template>
  <div class="analysis-table-container">
    <table class="analysis-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th>Fornecedor</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="favoriteSupplier in favoriteSuppliers"
          :key="favoriteSupplier.productId"
        >
          <td>{{ favoriteSupplier.productId }}</td>
          <td>{{ favoriteSupplier.productName }}</td>
          <td>{{ favoriteSupplier.productDescription }}</td>
          <td>{{ favoriteSupplier.quantity }}</td>
          <td>{{ favoriteSupplier.price }}</td>
          <td>{{ favoriteSupplier.supplierName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  </div>
</template>

<script lang="ts">
export default {
  props: {
    favoriteSuppliers: {
      default: [],
      type: Array,
    },
  },
};
</script>


<style scoped>
.analysis-table-container {
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
}
.analysis-table {
  width: 100%;
  border-collapse: collapse;
}

.analysis-table th {
  background: #606062;
  color: #ffffff;
  opacity: 1;
  padding: 10px;
  text-align: center;
}
.analysis-table td {
  border-top: 2px solid #ccc;
  padding: 10px;
  text-align: left;
}
</style>
