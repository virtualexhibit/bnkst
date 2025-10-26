<template>
  <button class="btn btn-primary w-100 mt-2" @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
  props: { label: String },
};
</script>
