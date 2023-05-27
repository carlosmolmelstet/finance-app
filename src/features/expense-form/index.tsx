"use client";

import { Button } from "@/components/button";
import {
  ExpenseCategories,
  GetAllExpenseCategories,
} from "@/services/expense-categories/get-all";
import { GetByIdxpense } from "@/services/expenses/get-by-id";
import { ExpensesRequest, InsertExpense } from "@/services/expenses/insert";
import { UpdateExpense } from "@/services/expenses/update";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface ExpenseFormProps {
  id?: string;
}

export default function ExpenseForm({ id }: ExpenseFormProps) {
  const [categories, setCategories] = useState<ExpenseCategories[]>([]);
  const { register, handleSubmit, setValue } = useForm<ExpensesRequest>();

  const onSubmit = async (data: ExpensesRequest) => {
    data.amount = Number(data.amount);
    data.date = new Date(data.date);

    const response = id
      ? await UpdateExpense({ id, ...data })
      : await InsertExpense(data);
    if (response) {
      alert("Lançamento salvo com sucesso!");
    } else {
      alert("Erro ao salvar o lançamento!");
    }
  };

  async function fetchCategories() {
    const response = await GetAllExpenseCategories();
    setCategories(response);
  }

  async function fetchExpense(id: string) {
    const response = await GetByIdxpense(id);
    setValue("amount", response.amount);
    setValue("categoryId", response.categoryId);
    setValue("date", moment(response.date).format("YYYY-MM-DD"));
  }

  useEffect(() => {
    fetchCategories();
    if (id) {
      fetchExpense(id);
    }
  }, [id]);

  return (
    <form
      className="flex flex-col max-w-xl w-full mt-8 shadow-sm space-y-4 border border-gray-200 py-4 px-4 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full">
        <p className="font-extrabold text-gray-900">
          {id ? "Editar Lançamento" : "Novo Lançamento"}
        </p>
      </div>
      <div className="flex flex-col w-full">
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          Valor
        </label>
        <input
          className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
          type="number"
          placeholder="R$ 0,00"
          {...register("amount")}
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          Categoria
        </label>
        <select
          className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
          {...register("categoryId")}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-full">
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          Data
        </label>
        <input
          className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
          type="date"
          {...register("date")}
        />{" "}
      </div>

      <div className="flex flex-col w-full">
        <Button
          className="px-4 py-2 mt-2 text-lg font-bold text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          type="submit"
        >
          {id ? "Editar" : "Criar"}
        </Button>
      </div>
    </form>
  );
}
