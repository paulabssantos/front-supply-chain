<template>
  <div v-if="selectedFiles.length > 0" class="files">
    <div
      v-for="(file, index) in selectedFiles"
      :key="file.name"
      class="file-item"
    >
      <span class="file-name">{{ file.name }}</span>
      <span class="file-size">{{ file.size }}kb</span>
      <button @click="removeFile(index)" class="remove-button">
        <img src="@/assets/cancel-24px.svg" alt="Remover" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedFiles: {
      default: [],
      type: Array,
    },
  },
  methods: {
    removeFile(index) {
      this.selectedFiles.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.file-item {
  display: flex;
  color: #939393;
  justify-content: space-between;
}

.file-name {
  margin-right: 10px;
}
</style>
