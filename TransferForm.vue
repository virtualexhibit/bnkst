<template>
  <div class="card mb-3 p-3 shadow-sm">
    <h5>Transfer Money</h5>
    <TextInput label="To (username)" v-model="to" />
    <TextInput label="Amount" v-model="amount" type="number" />
    <CommonButton label="Transfer" @click="submitTransfer" />
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import CommonButton from "./CommonButton.vue";

export default {
  components: { TextInput, CommonButton },
  data() {
    return {
      to: "",
      amount: "",
    };
  },
  methods: {
    submitTransfer() {
      if (!this.to || !this.amount) return alert("Complete all fields!");
      this.$emit("transfer", { to: this.to, amount: +this.amount });
      this.to = "";
      this.amount = "";
    },
  },
};
</script>
