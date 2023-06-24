import { currencyFormat } from "../../utils/currency.helper";

export function cep(element: React.FormEvent<HTMLInputElement>) {
  element.currentTarget.maxLength = 9;
  let value = element.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  element.currentTarget.value = value;
  return element;
}

export function cpf(element: React.FormEvent<HTMLInputElement>) {
  element.currentTarget.maxLength = 14;
  let value = element.currentTarget.value;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    element.currentTarget.value = value;
  }
  return element;
}

export function cnpj(element: React.FormEvent<HTMLInputElement>) {
  element.currentTarget.maxLength = 18;
  let value = element.currentTarget.value;
  if (!value.match(/^(\d{2}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
    element.currentTarget.value = value;
  }
  return element;
}

export function phone(element: React.FormEvent<HTMLInputElement>) {
  element.currentTarget.maxLength = 15;
  let value = element.currentTarget.value;
  if (!value.match(/^(\d{2}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})/, "$1-$2");
    element.currentTarget.value = value;
  }
  return element;
}

export function currency(element: React.FormEvent<HTMLInputElement>) {
  const value = Number(element.currentTarget.value.replace(/\D/g, "")) / 100;
  const sada = currencyFormat.format(value);
  element.currentTarget.value = sada;
  return element;
}
