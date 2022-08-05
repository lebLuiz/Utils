type valueInput =
  "email" |
  "caracterEspecial" |
  "caracterNumber" |
  "caracterUpper" |
  "spaceEmpty" |
  "minCaracter" |
  "maxCaracter";

interface ValidateInputProps {
  name: string,
  valueInput: string,
  validateOptions: string[],
  min?: number,
  max?: number
}

interface ReturnProps {
  hasError: boolean,
  objValidate: any
}

interface ReturnInputProps {
  name: string
  isValidated: boolean
  typeError: []
  valueInput: string
  valueLength: number
}

export const isValidatedInput = (itensValues: ValidateInputProps[]): ReturnProps => {

  const regexValidation = (itemValidation: any[], value: string, min?: number, max?: number) => {
    const isError: any = [];
    const typeError: any = [];

    itemValidation.forEach((item, index) => {
      const regexItem = getRegexOption(item, min, max);
      let isRegexValidate = regexItem ? RegExp(regexItem).test(value) : true;

      if (!isRegexValidate) {
        typeError.push(itemValidation[index])
      }

      isError.push(isRegexValidate);
    })

    return [isError, typeError];
  }

  const objValidate = itensValues.map(item => {
    const minCaracter = item.min;
    const maxCaracter = item.max;
    const isRegexValidation = regexValidation(item.validateOptions, item.valueInput, minCaracter, maxCaracter);
    const valueLngth = item.valueInput ? item.valueInput.length : 0
    const valueItem = item.valueInput ? item.valueInput : ""
    const [isError, typeError] = isRegexValidation;
    let objComplet = {}

    objComplet = {
      [item.name]: {
        name: item.name,
        valueInput: valueItem,
        valueLength: valueLngth,
        isValidated: !isError.some((item: boolean) => item === false),
        typeError: typeError
      }
    }

    return objComplet

  })

  const assingObj = Object.assign({}, ...objValidate);
  const arrError = []

  for (var [key] of Object.entries(assingObj)) {
    arrError.push(assingObj[key].isValidated)
  }

  return {
    hasError: arrError.some((bool: any) => bool === false),
    objValidate: assingObj,
  };
}

const getRegexOption = (props: valueInput, min?: number, max?: number) => (
  {
    "email": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "caracterEspecial": /[^a-zA-Z0-9]+/,
    "caracterNumber": /^(?=.*?[0-9]).{1,}$/,
    "caracterUpper": /^(?=.*?[A-Z]).{1,}$/,
    "spaceEmpty": /^\S+$/,
    "minCaracter": `^.{${min},}$`,
    "maxCaracter": `^.{0,${max}}$`,
    "zipcode": `[0-9]{5}-[0-9]{3}`,
  }
)[props] || null;