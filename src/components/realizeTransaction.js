const { users } = require("../users/users.json");

const realizeTransaction = (transactionCode, user, { account, amount }) => {
  let isOK = false;
  if (transactionCode === 1) {
    users.forEach((e) => {
      if (e.account === account) {
        e.balance += amount;
        user.balance -= amount;
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
        return true;
      }
    });
  }
};

export default realizeTransaction;

