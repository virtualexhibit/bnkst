<template>
  <nav class="navbar navbar-dark bg-dark px-3">
    <h3 class="text-light m-0">🏦 Bankist</h3>
    <div v-if="user" class="d-flex align-items-center gap-2">
      <span class="text-light">Hi, {{ user.owner.split(' ')[0] }}</span>
      <button class="btn btn-outline-light btn-sm" @click="$emit('logout')">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>
