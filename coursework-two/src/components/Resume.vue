<template>
  <div class="card card-w70">
    <h3 v-if="!listBlocks.length">Добавьте первый блок, чтобы увидеть результат</h3>
    <component v-for="block in listBlocks" :is="block.component" v-bind="{ content: block.content }"></component>
  </div>
</template>

<script>
export default {
  props: {
    listBlocks: {
      type: Array,
      required: true,
    },
  },
}
</script>
