export function formattingCurrency(value: number | string) {
  const currencyFormate = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
    // }).format(Number(value));
  }).formatToParts(Number(value));

  return currencyFormate;
}
