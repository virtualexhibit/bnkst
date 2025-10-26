export const accounts = [
  {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2,
    pin: 1111,
    username: "js",
  },
  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    username: "jd",
  },
];

export const findAccount = (username, pin) =>
  accounts.find(acc => acc.username === username && acc.pin === pin);

export const computeSummary = movs => {
  const incomes = movs.filter(mov => mov > 0).reduce((acc, m) => acc + m, 0);
  const out = movs.filter(mov => mov < 0).reduce((acc, m) => acc + m, 0);
  const interest = movs
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .reduce((acc, int) => acc + int, 0);
  return { incomes, out, interest };
};

export const transferMoney = (from, toUser, amount) => {
  const receiverAcc = accounts.find(acc => acc.username === toUser);
  const fromBalance = from.movements.reduce((acc, mov) => acc + mov, 0);

  if (!receiverAcc) return alert("Receiver not found!");
  if (receiverAcc.username === from.username) return alert("Cannot transfer to yourself!");
  if (amount <= 0) return alert("Enter a valid amount!");
  if (fromBalance < amount) return alert("Insufficient balance!");

  from.movements.push(-amount);
  receiverAcc.movements.push(amount);
  alert(`Transferred ₱${amount} to ${receiverAcc.owner}`);
};

export const requestLoan = (acc, amount) => {
  if (amount > 0 && acc.movements.some(mov => mov >= amount * 0.1)) {
    acc.movements.push(amount);
    alert(`Loan approved for ₱${amount}!`);
  } else alert("Loan denied!");
};

export const closeAccount = (username, pin) => {
  const index = accounts.findIndex(acc => acc.username === username && acc.pin === pin);
  if (index >= 0) {
    accounts.splice(index, 1);
    alert("Account closed!");
  } else alert("Invalid account details!");
};
