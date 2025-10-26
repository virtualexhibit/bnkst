<template>
  <div class="card my-3 p-3 shadow-sm">
    <h5>Current Balance</h5>
    <h2 class="fw-bold">₱{{ balance.toFixed(2) }}</h2>
    <small class="text-muted">User: {{ username }}</small>
  </div>
</template>

<script>
export default {
  props: {
    balance: Number,
    username: String,
  },
};
</script>
