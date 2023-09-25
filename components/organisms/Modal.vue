<template>
  <div class="modal-overlay" v-if="showModal">
    <div class="modal">
      <ModalHeader :title="'Enviar cotação'"></ModalHeader>
      <Divider></Divider>
      <ModalContent></ModalContent>
      <ModalFooter
        @createPurchaseOrder="createPurchaseOrder"
        @closeModal="closeModal"
        @openRepprovalModal="openRepprovalModal"
      ></ModalFooter>
    </div>
  </div>
</template>

<script>
import ModalHeader from "~/components/atoms/ModalHeader.vue";
import ModalContent from "~/components/atoms/ModalContent.vue";
import ModalFooter from "~/components/molecules/ModalFooter.vue";
import Divider from "~/components/atoms/Divider.vue";

export default {
  data() {
    return {
      showModal: true,
    };
  },
  components: {
    ModalHeader,
    ModalContent,
    ModalFooter,
    Divider,
  },
  methods: {
    closeModal() {
      this.$emit("show-modal", false);
    },
    openRepprovalModal() {
      this.$emit("show-repproval-modal", true);
    },
    createPurchaseOrder() {
      this.$emit("create-purchase-order",{status: 1});
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 50%;
  height: 40%;
  background: #ffffff;
  opacity: 1;
  display: flex;
  flex-direction: column;
}
</style>
