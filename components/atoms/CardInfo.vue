<template>
  <div class="card-info">
    <label>{{ label }}</label>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
  },
};
</script>

<style scoped>
.card-info {
  display: flex;
  align-items: center;
  border: 1px solid #cccccc;
  padding: 20px;
  border-radius: 10px;
  margin-right: 10px;
}

label {
  margin-right: 10px;
  color: #707070;
  font: normal normal medium 14px/16px Helvetica Neue;
}

p {
  color: #000000;
  font: normal normal normal 14px/16px Helvetica Neue;
}
</style>
