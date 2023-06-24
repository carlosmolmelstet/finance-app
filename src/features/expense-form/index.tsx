import { InputMask } from "@/components/InputMask/InputMask.component";
import { useAuth } from "@/context/auth.context";
import { SignIn } from "@/services/auth/sign-in";
import {
  ExpenseCategoryDTO,
  getAllExpenseCategories,
} from "@/services/expense_categories/get-all";
import { currencyFormat, stringToNumber } from "@/utils/currency.helper";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateSchema } from "@/utils/date.helper";
import { z } from "zod";
import { createExpense } from "@/services/expenses/create";
import { updateExpense } from "@/services/expenses/update";
import { ExpenseDTO, getExpenseById } from "@/services/expenses/get-by-id";
import moment from "moment";

type Expense = {
  amount: string;
  categoryId: string;
  date: Date;
};

export const expenseSchema = z.object({
  amount: z.union([
    z.string({
      required_error: "Informe o Valor",
      invalid_type_error: "Informe o Valor",
    }),
    z
      .number({
        required_error: "Informe o Valor",
        invalid_type_error: "Informe o Valor",
      })
      .min(1, { message: "O Valor minimo da despesa é de R$: 1,00" }),
  ]),
  date: dateSchema,
  categoryId: z
    .string({
      required_error: "Informe a Categoria",
      invalid_type_error: "Informe a Categoria",
    })
    .nonempty({ message: "Informe a categoria" }),
});

interface ExpenseFormProps {
  id?: string;
}

export default function ExpenseForm({ id }: ExpenseFormProps) {
  const toast = useToast();
  const [expenseCategories, setExpenseCategories] = useState<
    ExpenseCategoryDTO[]
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Expense>({
    resolver: zodResolver(expenseSchema),
  });

  async function handleExpense(data: Expense) {
    if (id) {
      try {
        await updateExpense({ ...data, id });
        toast({
          title: "Despesa atualizada com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      } catch (error) {
        toast({
          title: "Erro ao atualizar despesa",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } else {
      try {
        await createExpense(data);
        toast({
          title: "Despesa criada com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      } catch (error) {
        toast({
          title: "Erro ao criar despesa",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    }
  }

  async function fetchExpenseCategories() {
    const response = await getAllExpenseCategories();
    setExpenseCategories(response);
  }

  async function fetchExpense(expenseId: string) {
    const response = await getExpenseById(expenseId);
    setValue("amount", currencyFormat.format(response.amount as number));
    setValue("categoryId", response.categoryId);
    setValue("date", response.date);
  }

  useEffect(() => {
    fetchExpenseCategories();

    if (id) {
      fetchExpense(id);
    }
  }, []);

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit(handleExpense)}>
      <FormControl isInvalid={errors.amount != null}>
        <FormLabel>Valor</FormLabel>
        <InputMask
          mask="currency"
          {...register("amount", {
            setValueAs: (value) => {
              return stringToNumber(value);
            },
          })}
        />
        <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.categoryId != null}>
        <FormLabel>Categoria</FormLabel>
        <Select
          {...register("categoryId")}
          placeholder="Selecione uma categoria"
        >
          {expenseCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        {errors?.categoryId && (
          <FormErrorMessage>{errors?.categoryId.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.date != null}>
        <FormLabel>Data</FormLabel>
        <Input type="date" {...register("date")} />
        {errors?.date && (
          <FormErrorMessage>{errors?.date.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button
        variant="solid"
        colorScheme="teal"
        bg="teal.400"
        color="white"
        mt={8}
        type="submit"
      >
        {id ? "Editar" : "Criar"}
      </Button>
    </Stack>
  );
}
