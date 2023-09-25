<template>
  <div class="sidebar">
    <nuxt-link to="/">
      <img
        class="item"
        src="~/assets/baseline-home-24px.svg"
        width="24"
        height="24"
      />
    </nuxt-link>
    <img
      class="item"
      src="~/assets/baseline-note_add-24px.svg"
      width="24"
      height="24"
    />
    <img
      class="item"
      src="~/assets/baseline-description-24px.svg"
      width="24"
      height="24"
    />
    <img
      class="item"
      src="~/assets/assignment_turned_in-24px.svg"
      width="24"
      height="24"
    />
    <img
      class="item"
      src="~/assets/baseline-assignment-24px.svg"
      width="24"
      height="24"
    />
    <img
      class="item"
      src="~/assets/baseline-file_copy-24px.svg"
      width="24"
      height="24"
    />
  </div>
</template>
<style scoped>
.sidebar {
  width: 66px;
  background: #606062;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.sidebar img {
  margin-top: 50px;
}
</style>
