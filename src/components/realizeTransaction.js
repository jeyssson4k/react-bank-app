const { users } = require("../users/users.json");

const realizeTransaction = (transactionCode, user, { account, amount }) => {
  console.log(account, users);
  let isOK = false;
  if (transactionCode === 1) {
    users.forEach((e) => {
      if (e.account === account) {
        e.balance += amount;
        user.balance -= amount;
        console.log(users);
        alert("Transacción exitosa");
        isOK = true;
      }
    });
    if (isOK === false)
      alert("Transacción fallida. El número de cuenta es inválido.");
  } else if (transactionCode === 2) {
    users.forEach((e) => {
      if (e.account === account) {
        e.balance -= amount;
        console.log(users);
        return true;
      }
    });
  }
};

export default realizeTransaction;

