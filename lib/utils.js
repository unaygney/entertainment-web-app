export const checkEmail = (email) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
};
