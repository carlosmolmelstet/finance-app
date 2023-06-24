export const currencyFormat = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
const compactFormat = Intl.NumberFormat("en", { notation: "compact" });

export function stringToNumber(value: string): number {
  return Number((parseInt(value.replace(/\D/g, "")) / 100).toFixed(2));
}

export function compactCurrency(value: number | string): string {
  return compactFormat.format(Number(value));
}
