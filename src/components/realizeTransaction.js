const { users } = require("../users/users.json");

const realizeTransaction = (transactionCode, user, { account, amount }) => {
  let isTransactionOK = false;
  if (transactionCode === 1) {
    users.forEach((e) => {
      if (e.account === account) {
        e.balance += amount;
        user.balance -= amount;
        isTransactionOK = true;
      }
    });
  } else if (transactionCode === 2) {
    users.forEach((e) => {
      if (e.account === account) {
        e.balance -= amount;
        isTransactionOK = true;
      }
    });
  }
  return isTransactionOK;
};

export default realizeTransaction;
