<template>
  <div class="bankist-app">
    <NavBar :user="currentUser" @logout="handleLogout" />
    <div v-if="isLoggedIn" class="container py-4">
      {{ "hello" }}
      <BalanceSection :balance="balance" :username="currentUser?.owner" />
      <MovementsList :movements="movements" />
      <SummarySection :summary="summary" />
      <TransferForm @transfer="handleTransfer" />
      <LoanForm @loan="handleLoan" />
      <CloseAccountForm @close="handleCloseAccount" />
      <Timer :timeLeft="timer" @tick="tickTimer" />
    </div>

    <div v-else class="login-screen">
      <h2>Welcome to Bankist</h2>
      <TextInput label="Username" v-model="loginUser" />
      <TextInput label="PIN" v-model="loginPin" type="password" />
      <CommonButton label="Login" @click="handleLogin" />
    </div>
  </div>
</template>

<script>
import {
  computeSummary,
  findAccount,
  transferMoney,
  requestLoan,
  closeAccount,
} from "./BankistApp.js";
import NavBar from "./SubComponents/NavBar.vue";
import BalanceSection from "./SubComponents/BalanceSection.vue";
import MovementsList from "./SubComponents/MovementsList.vue";
import SummarySection from "./SubComponents/SummarySection.vue";
import TransferForm from "./SubComponents/TransferForm.vue";
import LoanForm from "./SubComponents/LoanForm.vue";
import CloseAccountForm from "./SubComponents/CloseAccountForm.vue";
import CommonButton from "./SubComponents/CommonButton.vue";
import TextInput from "./SubComponents/TextInput.vue";
import Timer from "./SubComponents/AutoLogoutTimer.vue";

export default {
  name: "BankistApp",
  components: {
    NavBar,
    BalanceSection,
    MovementsList,
    SummarySection,
    TransferForm,
    LoanForm,
    CloseAccountForm,
    CommonButton,
    TextInput,
    Timer,
  },
  data() {
    return {
      loginUser: "",
      loginPin: "",
      currentUser: null,
      isLoggedIn: false,
      timer: 300,
    };
  },
  computed: {
    movements() {
      return this.currentUser?.movements || [];
    },
    balance() {
      return this.movements.reduce((acc, mov) => acc + mov, 0);
    },
    summary() {
      return computeSummary(this.movements);
    },
  },
  methods: {
    handleLogin() {
      const user = findAccount(this.loginUser, +this.loginPin);
      if (user) {
        this.currentUser = user;
        this.isLoggedIn = true;
      } else {
        alert("Invalid credentials!");
      }
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.currentUser = null;
    },
    handleTransfer({ to, amount }) {
      transferMoney(this.currentUser, to, amount);
    },
    handleLoan(amount) {
      requestLoan(this.currentUser, amount);
    },
    handleCloseAccount({ username, pin }) {
      closeAccount(username, pin);
      this.handleLogout();
    },
    tickTimer() {
      if (this.timer > 0) this.timer--;
      else this.handleLogout();
    },
  },
};
</script>

<style scoped src="./style.css"></style>
