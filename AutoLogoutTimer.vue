<template>
  <div class="card p-2 mt-3 text-center">
    <small class="text-muted">Auto logout in {{ formattedTime }}</small>
  </div>
</template>

<script>
export default {
  props: {
    timeLeft: Number,
  },
  computed: {
    formattedTime() {
      const min = String(Math.floor(this.timeLeft / 60)).padStart(2, "0");
      const sec = String(this.timeLeft % 60).padStart(2, "0");
      return `${min}:${sec}`;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$emit("tick");
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
