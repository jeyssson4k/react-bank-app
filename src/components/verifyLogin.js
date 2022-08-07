const { users } = require("../users/users.json");

const logIntoAccount = ({ email, password }) => {
  const filtered = users.filter(
    (e) => e.email === email && e.password === password
  );
  if (filtered.length === 0) {
    return false;
  } else {
    return filtered;
  }
};

export default logIntoAccount;
