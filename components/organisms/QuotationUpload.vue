<template>
  <div>
    <div class="buttons">
      <AddFileButton
        @files="
          (payload) => {
            selectedFiles = payload;
          }
        "
      ></AddFileButton>
      <UploadFileButton @upload="upload"></UploadFileButton>
      <CancelButton></CancelButton>
    </div>
    <div class="files">
      <UploadList :selectedFiles="selectedFiles"></UploadList>
    </div>
  </div>
</template>

<script>
import AddFileButton from "~/components/molecules/AddFileButton.vue";
import UploadFileButton from "~/components/atoms/UploadFileButton.vue";
import CancelButton from "~/components/atoms/CancelButton.vue";
import UploadList from "~/components/molecules/UploadsList.vue";
import CreateQuotationFile from "~/services/quotationFile/index";

export default {
  data() {
    return {
      selectedFiles: [],
    };
  },
  methods: {
    async upload() {
      try {
        for (const file of this.selectedFiles) {
          const formData = new FormData();

          formData.append("file", file);

          await CreateQuotationFile.CreateQuotationFile(formData);
        }
      } catch (error) {
        console.error("Erro ao enviar os arquivos:", error);
      }
    },
  },
  components: {
    AddFileButton,
    UploadFileButton,
    CancelButton,
    UploadList,
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  padding: 20px;
  margin-top: 20px;
  margin-right: 150px;
  background: #f7f7f7 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 6px 6px 0px 0px;
  opacity: 1;
}

.files {
  padding: 10px;
  border: 1px solid #939393;
  margin-right: 150px;
}

.files * {
  border: none;
}
</style>