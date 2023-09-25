<template>
  <div class="modal-overlay">
    <div class="modal">
      <ModalHeader :title="'Reprovar'"></ModalHeader>
      <Divider></Divider>
      <div class="cards">
        <CardInfo :label="'Código'" :value="code" class="card-info"></CardInfo>
        <CardInfo
          :label="'Descrição'"
          :value="description"
          class="card-info"
        ></CardInfo>
        <CardInfo :label="'Tipo'" :value="type" class="card-info"></CardInfo>
      </div>
      <div class="content">
        <label for="justification">Justificativa</label>
        <input
          id="justification"
          type="text"
          v-model="justification"
          placeholder="Descreva a justificativa"
        />
      </div>
      <RepprovalModalFooter
        @closeRepprovalModal="closeRepprovalModal"
        @repprove-purchase-order="repprovePurchaseOrder"
      ></RepprovalModalFooter>
    </div>
  </div>
</template>
<script>
import ModalHeader from "~/components/atoms/ModalHeader.vue";
import Divider from "~/components/atoms/Divider.vue";
import RepprovalModalFooter from "~/components/molecules/RepprovalModalFooter.vue";
import CardInfo from "~/components/atoms/CardInfo.vue";

export default {
  props: {
    code: String,
    description: String,
    type: String,
    justification: {
      default: null,
      type: String
    },
  },
  components: {
    ModalHeader,
    Divider,
    RepprovalModalFooter,
    CardInfo,
  },
  methods: {
    closeRepprovalModal() {
      this.$emit("show-repproval-modal", false);
    },
    repprovePurchaseOrder() {
      this.$emit("repprove-purchase-order", { status: 2, justification: this.justification });
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

.cards {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
}

.modal {
  width: 40%;
  height: 60%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  margin-left: 30px;
  margin-top: 40px;
  text-align: left;
  font: normal normal normal 16px Helvetica Neue;
  color: #707070;
}

input {
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 6px;
}
</style>