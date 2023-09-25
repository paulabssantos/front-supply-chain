<template>
  <div class="main-buttons">
    <CancelButton></CancelButton>
    <DraftSaveButton></DraftSaveButton>
    <FinishButton @click="showModal"></FinishButton>

  </div>
</template>
<script>
import CancelButton from "~/components/atoms/CancelButton.vue";
import DraftSaveButton from "~/components/atoms/DraftSaveButton.vue";
import FinishButton from "~/components/atoms/FinishButton.vue";

export default {
  props: {
    favoriteSuppliers: {
      default: [],
      type: Array,
    },
  },
  components: {
    CancelButton,
    DraftSaveButton,
    FinishButton,
  },
  methods: {
    showModal(){
      this.$emit('show-modal',true)
    }
  }
};
</script>

<style scoped>
.main-buttons {
  display: flex;
  justify-content: flex-end;
  margin-right: 80px;
}
</style>
