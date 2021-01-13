<template>
  <div>
    <p>
      <strong>{{ email }}</strong>
    </p>
    <small>{{ text }}</small>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>
