export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const isValidPhone = (value) => /^[6-9]\d{9}$/.test(value.trim());

export const validateWaitlist = (values) => {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!isValidPhone(values.phone)) errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!values.classLevel) errors.classLevel = "Select a class.";
  if (!values.state.trim()) errors.state = "State is required.";
  if (!values.language) errors.language = "Select a preferred language.";

  return errors;
};
