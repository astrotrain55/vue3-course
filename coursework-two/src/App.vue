<template>
  <div class="container column">
    <app-form @create="create"/>
    <app-resume :list-blocks="listBlocks"/>
  </div>
  <app-comments/>
</template>

<script>
import AppForm from './components/Form';
import AppResume from './components/Resume';
import AppComments from './components/Comments';

export default {
  data: () => ({
    listBlocks: [],
  }),

  methods: {
    create(block) {
      this.listBlocks.push(block);
    },
  },

  components: {
    AppForm,
    AppResume,
    AppComments,
  },
};
</script>

<style lang="stylus">
.avatar
  display flex
  justify-content center
  img
    width 150px
    height auto
    border-radius 50%
</style>
