type valueInput = "email" | "caracterEspecial" | "caracterNumber" | "caracterUpper";

export const validateRegex = (regex: valueInput, value: any) => {
  const validate = getProps(regex).test(value);
  return validate
}

const getProps = (props: valueInput) => (
  {
    "email": RegExp(/^[a-z0-9.]+@[\w-]+\.[a-z]+(\.[a-z]+)?$/),
    "caracterEspecial": RegExp(/[^a-zA-Z0-9]+/),
    "caracterNumber": RegExp(/^(?=.*?[0-9]).{1,}$/),
    "caracterUpper": RegExp(/^(?=.*?[A-Z]).{1,}$/),
  }
)[props];