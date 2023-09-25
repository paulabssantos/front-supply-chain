<template>
  <div>
    <input
      type="file"
      ref="fileInput"
      style="display: none"
      multiple
      @change="handleFileChange"
    />
    <button @click="openFileInput" class="blue-background-button">Adicionar</button>
  </div>
</template>

<script>
import UploadList from "~/components/molecules/UploadsList.vue";
export default {
  components: {
    UploadList
  },
  data() {
    return {
      selectedFiles: [],
    };
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          this.selectedFiles.push(files[i]);
        }
      }
      this.$emit('files',this.selectedFiles)
    },
  },
};
</script>

