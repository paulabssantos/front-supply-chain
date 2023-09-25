<template>
  <div>
    <button class="blue-background-button" @click="handleClick">Finalizar</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>