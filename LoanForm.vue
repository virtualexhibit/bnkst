<template>
  <div class="card mb-3 p-3 shadow-sm">
    <h5>Request Loan</h5>
    <TextInput label="Amount" v-model="amount" type="number" />
    <CommonButton label="Request" @click="submitLoan" />
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import CommonButton from "./CommonButton.vue";

export default {
  components: { TextInput, CommonButton },
  data() {
    return { amount: "" };
  },
  methods: {
    submitLoan() {
      if (!this.amount) return alert("Enter amount!");
      this.$emit("loan", +this.amount);
      this.amount = "";
    },
  },
};
</script>
