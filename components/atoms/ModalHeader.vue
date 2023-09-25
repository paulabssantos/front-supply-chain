<template>
  <div class="modal-header">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default{
  props: {
    title: ''
  }
}
</script>

<style scoped>
.modal-header {
  margin-left: 40px;
  margin-top: 30px;
  text-align: left;
  font: normal normal bold 17px/20px Helvetica;
  letter-spacing: 0px;
  color: #707070;
}
</style>