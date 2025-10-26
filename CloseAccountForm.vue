<template>
  <div class="card mb-3 p-3 shadow-sm">
    <h5>Close Account</h5>
    <TextInput label="Username" v-model="username" />
    <TextInput label="PIN" v-model="pin" type="password" />
    <CommonButton label="Close Account" @click="submitClose" />
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import CommonButton from "./CommonButton.vue";

export default {
  components: { TextInput, CommonButton },
  data() {
    return {
      username: "",
      pin: "",
    };
  },
  methods: {
    submitClose() {
      if (!this.username || !this.pin) return alert("Fill all fields!");
      this.$emit("close", { username: this.username, pin: +this.pin });
      this.username = "";
      this.pin = "";
    },
  },
};
</script>
