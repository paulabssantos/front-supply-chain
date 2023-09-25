<template>
  <div class="analysis-table-container" v-if="areDataLoaded">
    <table class="analysis-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th v-for="supplier in suppliers" :key="supplier.id">
            {{ supplier.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="productAnalisys in productAnalisysValueRequest"
          :key="productAnalisys.product.id"
        >
          <td>{{ productAnalisys.product.id }}</td>
          <td>{{ productAnalisys.product.name }}</td>
          <td>{{ productAnalisys.product.description }}</td>
          <td>{{ productAnalisys.quantity }}</td>
          <td v-for="supplier in suppliers" :key="supplier.id">
            <input
              id="quantity-input"
              v-model="supplierValues[productAnalisys.product.id][supplier.id]"
              type="number"
            />
            <input
              v-on:change="
                toggleFavoriteSupplier(
                  productAnalisys,
                  supplier,
                  $event.target.checked
                )
              "
              type="checkbox"
              :value="supplier.id"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  </div>
</template>

<script>
export default {
  props: {
    productAnalisysValueRequest: {
      default: [],
      type: Array,
      required: true,
    },
    suppliers: {
      default: [],
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      favoriteSuppliers: [],
      supplierValues: {},
      valueAnalysis: [],
    };
  },
  computed: {
    areDataLoaded() {
      return (
        this.productAnalisysValueRequest.length > 0 && this.suppliers.length > 0
      );
    },
  },
  watch: {
    areDataLoaded(newValue) {
      if (newValue) {
        this.initializeSupplierValues();
      }
    },
  },
  methods: {
    initializeSupplierValues() {
      this.productAnalisysValueRequest.forEach((productAnalisys) => {
        this.supplierValues[productAnalisys.product.id] = {};
        this.suppliers.forEach((supplier) => {
          this.supplierValues[productAnalisys.product.id][supplier.id] = "";
        });
      });
    },
    toggleFavoriteSupplier(productAnalisys, supplier, isChecked) {
      const productId = productAnalisys.product.id;
      const supplierId = supplier.id;
      if (isChecked) {
        if (this.supplierValues[productId][supplierId]) {
          const existingFavorite = this.favoriteSuppliers.find(
            (favorite) => favorite.productId === productId
          );

          if (existingFavorite) {
            this.$toast.error(
              `O produto "${existingFavorite.productName}" já tem um fornecedor favorito: "${existingFavorite.supplierName}"`
            );
          } else {
            this.valueAnalysis.push({
              productAnalisysValueRequestId: productAnalisys.id,
              supplierId: supplierId,
              price: Number(this.supplierValues[productId][supplierId]),
            });
            this.favoriteSuppliers.push({
              productAnalisysRequestId: productAnalisys.id,
              productId: productId,
              productName: productAnalisys.product.name,
              productDescription: productAnalisys.product.description,
              quantity: productAnalisys.quantity,
              price: this.supplierValues[productId][supplierId],
              supplierId: supplierId,
              supplierName: supplier.name,
            });
          }
          console.log(this.valueAnalysis)
        } else {
          this.$toast.error(
            "Você só pode adicionar o fornecedor como favorito depois de preencher o preço"
          );
        }
      } else {
        const index = this.favoriteSuppliers.findIndex(
          (favorite) =>
            favorite.productId === productId &&
            favorite.supplierId === supplierId
        );

        const indexValueAnalysis = this.valueAnalysis.findIndex(
          (valueAnalysis) =>
            valueAnalysis.productAnalisysValueRequestId == productAnalisys.id
        );

        if (indexValueAnalysis !== -1) {
          this.valueAnalysis.splice(indexValueAnalysis, 1);
        }

        if (index !== -1) {
          this.favoriteSuppliers.splice(index, 1);
          this.$toast.info(
            `Forncedor ${supplier.name} removido dos favoritos para o produto ${productAnalisys.product.name}`
          );
        }
      }
      this.$emit("valueAnalysis", this.valueAnalysis);
      this.$emit("favoriteSuppliers", this.favoriteSuppliers);
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
#quantity-input {
  border: 1px solid #000000;
  border-radius: 5px;
}

#quantity-input::-webkit-outer-spin-button,
#quantity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
