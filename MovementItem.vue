<template>
  <div
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="amount > 0 ? 'text-success' : 'text-danger'"
  >
    <span>{{ index }}. {{ amount > 0 ? 'Deposit' : 'Withdrawal' }}</span>
    <strong>{{ amount > 0 ? '+' : '' }}₱{{ amount.toFixed(2) }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    amount: Number,
    index: Number,
  },
};
</script>
