export const emailValidate = (email) => {
  const isEmailValid = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isEmailValid) {
    return "Email Id is not valid";
  }
  return null;
};
export const passwordValidate = (password) => {
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  return null;
};
