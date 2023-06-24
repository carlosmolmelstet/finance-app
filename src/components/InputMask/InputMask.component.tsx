import React, { forwardRef, useCallback } from "react";

import { Input, InputProps } from "@chakra-ui/react";

import { cep, cnpj, cpf, currency, phone } from "./InputMask.format";

interface InputMaskProps extends InputProps {
  mask: "CEP" | "CPF" | "CNPJ" | "phone" | "currency";
}

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  ({ mask, placeholder, ...props }, ref) => {
    const handleKeyUp = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
        switch (mask) {
          case "CEP": {
            cep(e);
            break;
          }
          case "CPF": {
            cpf(e);

            break;
          }
          case "CNPJ": {
            cnpj(e);

            break;
          }
          case "phone": {
            phone(e);
            break;
          }
          case "currency": {
            currency(e);
            break;
          }
          default: {
            e;
            break;
          }
        }
      },
      [mask]
    );

    if (!placeholder) {
      switch (mask) {
        case "CEP": {
          placeholder = "00.000-000";
          break;
        }
        case "CPF": {
          placeholder = "000.000.000-00";
          break;
        }
        case "CNPJ": {
          placeholder = "00.000.000/0000-00";
          break;
        }
        case "phone": {
          placeholder = "(00) 00000-0000";
          break;
        }
        case "currency": {
          placeholder = "R$: 00,00";
          break;
        }
      }
    }

    return (
      <Input
        ref={ref}
        onKeyUp={handleKeyUp}
        type="tel"
        placeholder={placeholder}
        {...props}
      />
    );
  }
);
