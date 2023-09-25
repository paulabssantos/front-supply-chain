<template>
  <div class="modal-footer">
    <button class="gray-button" @click="cancel">Cancelar</button>
    <button class="blue-background-button" @click="approve">Confirmar</button>
  </div>
</template>

<script>
export default {
  methods: {
    cancel() {
      this.$emit('closeRepprovalModal')
    },
    approve() {
      this.$emit('repprove-purchase-order')
    },
  },
};
</script>

<style scoped>
.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-right: 30px;
}
.modal-footer button {
  margin-left: 10px;
}
</style>
