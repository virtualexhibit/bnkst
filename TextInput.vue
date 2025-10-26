<template>
  <div class="mb-2">
    <label>{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      v-model="internalValue"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String,
    type: { type: String, default: "text" },
    modelValue: { type: [String, Number], default: "" },
  },
  computed: {
    internalValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit("update:modelValue", val)
      },
    },
  },
}
</script>
