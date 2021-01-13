<template>
  <h2>{{ content }}</h2>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$attrs.content;
    },
  },
};
</script>
