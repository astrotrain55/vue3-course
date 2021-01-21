<template>
  <form class="card card-w30" @submit.prevent="submit">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="currentType">
        <option
          v-for="({ name }, type) in typesBlocks"
          :value="type"
        >{{ name }}</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="content"></textarea>
    </div>

    <button class="btn primary" :disabled="submitDisabled">Добавить</button>
  </form>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import firebase from '@/firebase-db';

export default {
  props: {
    limitContent: {
      type: Number,
      default: 4,
    },
  },

  emits: {
    create: (block) => {
      const { component, content } = block;
      return component && content;
    },
  },

  created() {
    firebase.connect((blockList) => {
      if (!blockList) return;

      blockList.forEach((block) => {
        this.$emit('create', {
          content: block.name,
          component: this.typesBlocks[block.key].component,
        });
      });
    });
  },

  data: () => ({
    typesBlocks: {
      title: {
        name: 'Заголовок',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "title" */ './blocks/Title')),
      },
      subtitle: {
        name: 'Подзаголовок',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "subtitle" */ './blocks/Subtitle')),
      },
      avatar: {
        name: 'Аватар',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "avatar" */ './blocks/Avatar')),
      },
      text: {
        name: 'Текст',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "text" */ './blocks/Text')),
      },
    },
    currentType: 'title',
    content: '',
  }),

  computed: {
    submitDisabled() {
      return this.content.length < this.limitContent;
    },
  },

  methods: {
    submit() {
      this.$emit('create', {
        content: this.content,
        component: this.typesBlocks[this.currentType].component,
      });

      this.content = '';
      this.currentType = 'title';
    },
  },
};
</script>
