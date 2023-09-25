<template>
  <div class="modal-footer">
    <button @click="cancel" class="gray-button">Retornar a edição</button>
    <button @click="reject" class="blue-button">Reprovar</button>
    <button @click="approve" class="blue-background-button" >Aprovar</button>
  </div>
</template>

<script>
export default {
  methods: {
    cancel() {
      this.$emit('closeModal')
    },
    approve() {
      this.$emit('createPurchaseOrder')
    },
    reject() {
      this.$emit('openRepprovalModal')
      this.$emit('closeModal')
    },
  },
};
</script>

<style scoped>
.modal-footer {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.modal-footer button {
  margin-left: 10px;
}
</style>
