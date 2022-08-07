const verifyPassword = (password) => {
  const letters = /^[a-zA-Z]+$/g;
  const numbers = /^\d+$/;

  const p = password.split("");
  const hasLetters = p.filter((e) => letters.test(e)).length;
  const hasNumbers = p.filter((e) => numbers.test(Number(e))).length;
  if (hasLetters > 0 && hasNumbers > 0) {
    return true;
  } else {
    return false;
  }
};

export default verifyPassword;
