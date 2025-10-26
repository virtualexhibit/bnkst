<template>
  <div class="card mb-3 p-3 shadow-sm">
    <h5>Transactions</h5>
    <div class="list-group mt-2" style="max-height: 250px; overflow-y: auto;">
      <MovementItem
        v-for="(mov, i) in movements"
        :key="i"
        :amount="mov"
        :index="i + 1"
      />
    </div>
  </div>
</template>

<script>
import MovementItem from "./MovementItem.vue";

export default {
  props: {
    movements: Array,
  },
  components: { MovementItem },
};
</script>
