<template>
  <div class="card mb-3 p-3 shadow-sm">
    <h5>Summary</h5>
    <div class="d-flex justify-content-between">
      <span>Incomes:</span> <strong class="text-success">₱{{ summary.incomes.toFixed(2) }}</strong>
    </div>
    <div class="d-flex justify-content-between">
      <span>Out:</span> <strong class="text-danger">₱{{ summary.out.toFixed(2) }}</strong>
    </div>
    <div class="d-flex justify-content-between">
      <span>Interest:</span> <strong>₱{{ summary.interest.toFixed(2) }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    summary: Object,
  },
};
</script>
