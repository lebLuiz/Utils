export function formattingOnlyNumber(value: number | string) {
  let clearWords = String(value).replace(/\D+/g, '');
  let transformValue = clearWords.replace(/(.)(?=(\d{3})+$)/g, '$1.');

  return transformValue === undefined || !transformValue ? "" : transformValue;

}

export function formattingOnlyNumberDecimal(value: number | string) {
  let clearWords = String(value).replace(/\D+/g, '');
  let transformValue = clearWords.replace(/^(\d+)(?=(\d{2})+$)/g, "$1.");

  return transformValue === undefined || !transformValue ? "" : transformValue;
}