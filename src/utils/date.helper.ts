import { z } from "zod";

export const dateSchema = z.preprocess(
  (arg) => {
    if (arg === "") return null;
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
  },
  z
    .date({
      required_error: "Informe a Data",
      invalid_type_error: "Informe a Data",
      description: "Informe a Data",
    })
    .min(new Date(2001, 1, 1), {
      message: "A data minima é 01/01/2001",
    })
    .max(new Date(2999, 12, 31), {
      message: "A data maxima é 31/12/2999",
    })
);
