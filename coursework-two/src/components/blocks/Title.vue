<template>
  <h1>{{ content }}</h1>
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
