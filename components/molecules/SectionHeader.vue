<template>
  <div>
    <SectionTitle :title="title"></SectionTitle>
    <SectionDescription :description="description"></SectionDescription>
  </div>
</template>

<script lang="ts">
import SectionTitle from "~/components/atoms/SectionTitle.vue";
import SectionDescription from "~/components/atoms/SectionDescription.vue";
export default {
  props: {
    title: {
      default: "",
      type: String,
      required: true,
    },
    description: {
      default: "",
      required: true,
      type: String,
    },
  },
  components: {
    SectionTitle,
    SectionDescription,
  },
};
</script>
