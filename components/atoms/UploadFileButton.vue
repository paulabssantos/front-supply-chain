<template>
  <div>
    <button @click="upload" class="blue-button">Upload</button>
  </div>
</template>
<script >
export default{
  methods: {
    upload(){
      this.$emit('upload')
    }
  }
}
</script>
