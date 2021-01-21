<template>
  <span :class="['badge', className]">{{ statusName }}</span>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    type: String,
  },

  setup(props) {
    const store = useStore();
    const classList = {
      active: 'primary',
      done: 'primary',
      cancelled: 'danger',
      pending: 'warning',
    };

    return {
      type: props.type,
      className: classList[props.type],
      statusName: store.state.tasks.statusList[props.type],
    };
  },
};
</script>
