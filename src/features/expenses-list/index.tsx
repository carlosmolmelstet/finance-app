import { ExpenseDTO, getAllExpenses } from "@/services/expenses/get-all";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import ExpenseForm from "../expense-form";
import moment from "moment";
import { currencyFormat } from "@/utils/currency.helper";
import {
  ExpenseCategoryDTO,
  getAllExpenseCategories,
} from "@/services/expense_categories/get-all";
import { MdModeEditOutline } from "react-icons/md";

type Login = {
  email: string;
  password: string;
};

export default function ExpensesList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [expenseEditId, setExpenseEditId] = useState<string | undefined>();
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [expenseCategories, setExpenseCategories] = useState<
    ExpenseCategoryDTO[]
  >([]);

  useEffect(() => {
    async function loadExpenses() {
      const expenses = await getAllExpenses();
      expenses
        .sort((a: ExpenseDTO, b: ExpenseDTO) => {
          return a.createdAt.valueOf() + b.createdAt.valueOf();
        })
        .reverse();
      setExpenses(expenses);
    }
    fetchExpenseCategories();
    loadExpenses();
  }, []);

  function handleEditExpense(id: string) {
    setExpenseEditId(id);
    onOpen();
  }

  async function fetchExpenseCategories() {
    const response = await getAllExpenseCategories();
    setExpenseCategories(response);
  }

  return (
    <Card borderRadius={16}>
      <CardBody>
        <Heading size="md" mb={8}>
          Ultimas despesas
        </Heading>
        <Stack spacing={4}>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Categoria</Th>
                  <Th>Valor</Th>
                  <Th>Data</Th>
                  <Th>Criado em</Th>
                  <Th w="100px">Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {expenses.map((expense) => (
                  <Tr key={expense.id}>
                    <Td>
                      {expenseCategories.find(
                        (categoty) => categoty.id === expense.categoryId
                      )?.name || "---"}
                    </Td>
                    <Td>{currencyFormat.format(expense.amount)}</Td>
                    <Td>{moment(expense.date).format("DD/MM/YYYY")}</Td>
                    <Td>
                      {moment(expense.createdAt).format("DD/MM/YYYY HH:mm")}
                    </Td>
                    <Td textAlign="center">
                      <IconButton
                        variant="outline"
                        aria-label="Editar despesa"
                        icon={<MdModeEditOutline />}
                        onClick={() => handleEditExpense(expense.id)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Editar de despesa</ModalHeader>
              <ModalCloseButton />
              <ModalBody p={8}>
                <ExpenseForm id={expenseEditId} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Stack>
      </CardBody>
    </Card>
  );
}
