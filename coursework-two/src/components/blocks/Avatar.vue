<template>
  <div class="avatar">
    <img :src="content" alt="avatar"/>
  </div>
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
