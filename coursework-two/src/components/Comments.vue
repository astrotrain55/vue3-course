<template>
  <div class="container">
    <p v-if="!list.length">
      <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
    </p>
    <div v-if="loading" class="loader"></div>
    <div v-else-if="list.length" class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="comment in list">
          <app-comment :text="comment.body" :email="comment.email"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppComment from './Comment';

export default {
  props: {
    limit: {
      type: Number,
      default: 42,
    },
  },

  data: () => ({
    loading: false,
    commentsUrl: 'https://jsonplaceholder.typicode.com/comments',
    list: [],
  }),

  computed: {
    url() {
      return `${this.commentsUrl}?_limit=${this.limit}`;
    },
  },

  methods: {
    loadComments() {
      this.loading = true;

      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          this.list = data.map(({ body, email }) => ({ body, email }));
          this.loading = false;
        });
    },
  },

  components: {
    AppComment,
  },
};
</script>
