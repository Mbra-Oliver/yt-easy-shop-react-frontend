const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

export const emailIsValid = (value) => {
  return emailRegex.test(value);
};

export const isPasswordValid = (value) => {
  //return passwordRegex.test(value);

  return value.trim() !== "";
};
