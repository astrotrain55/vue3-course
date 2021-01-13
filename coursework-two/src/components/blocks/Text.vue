<template>
  <p>{{ content }}</p>
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
