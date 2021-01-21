export default {
  namespaced: true,

  state() {
    return {
      tasksList: [
        {
          id: '1',
          title: 'Ла-ла-ла',
          description: 'Хорошо !!',
          status: 'active',
          date: new Date().toLocaleDateString(),
        },
        {
          id: '2',
          title: 'Тарам-пам-пам!',
          description: 'Ыыы!',
          status: 'done',
          date: new Date().toLocaleDateString(),
        },
      ],

      statusList: {
        active: 'Активен',
        done: 'Завершён',
        cancelled: 'Отменён',
        pending: 'Выполняется',
      },
    };
  },

  getters: {
    activeTasksCount(state) {
      return state.tasksList.filter((task) => task.status === 'active').length;
    },

    task: (state) => (id) => state.tasksList.find((task) => task.id === id),
  },

  mutations: {
    setTask(state, newTask) {
      state.tasksList.push(newTask);
    },

    changeStatus(state, { idTask, status }) {
      state.tasksList = state.tasksList.map((task) => {
        if (task.id === idTask) task.status = status;
        return task;
      });

      console.log(state.tasksList);
    },
  },

  actions: {
  },
};
