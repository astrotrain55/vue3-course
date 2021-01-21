<template>
  <form class="card" @submit.prevent="setTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const title = ref('');
    const date = ref('');
    const description = ref('');

    function setTask() {
      const newTask = {
        id: String(Date.now()),
        title: title.value,
        date: date.value,
        description: description.value,
        status: 'active',
      };

      console.log(newTask);

      store.commit('tasks/setTask', newTask);
    }

    return {
      title,
      date,
      description,
      setTask,
    };
  },
};
</script>
