export const currencyFormat = (amount: string) => {
  const number = parseFloat(amount.replace(/,/g, ""))
  return `$${number.toFixed(2)}`
}
