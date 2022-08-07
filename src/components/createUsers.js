const { users } = require('../users/users.json');

const createUser = ({ name, id, email, password }) => {
  const accounts = users.map(e => e.account);
  let accountId = Math.floor(Math.random() * 10000000000);
  while(accounts.includes(accountId)){
    accountId = Math.floor(Math.random() * 10000000000);
  }  
  const user = {
    name: name,
    id: id,
    email: email,
    password: password,
    balance: 1000000,
    account: accountId
  };
  return user;
};

export default createUser;
