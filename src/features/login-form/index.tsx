import { useAuth } from "@/context/auth.context";
import { SignIn } from "@/services/auth/sign-in";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import { useForm } from "react-hook-form";

type Login = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Login>();

  async function handleLogin({ email, password }: Login) {
    if (!email) {
      setError("email", {
        type: "required",
        message: "O campo email é obrigatório",
      });
      return;
    }
    if (!password) {
      setError("password", {
        type: "required",
        message: "O campo senha é obrigatório",
      });
      return;
    }

    const { token, user } = await SignIn({
      email,
      password,
    });

    login({
      token,
      user,
    });
  }

  return (
    <Stack spacing={4} as="form">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...register("email")} />
        {errors?.email && (
          <FormErrorMessage>{errors?.email.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Senha</FormLabel>
        <Input type="password" {...register("password")} />
        {errors?.password ? (
          <FormErrorMessage>{errors?.password.message}</FormErrorMessage>
        ) : (
          <FormHelperText
            _hover={{
              color: "teal.400",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Esqueci minha senha
          </FormHelperText>
        )}
      </FormControl>
      <Button
        variant="solid"
        colorScheme="teal"
        bg="teal.400"
        color="white"
        mt={2}
        onClick={handleSubmit(handleLogin)}
      >
        Login
      </Button>
      <Link href={"/auth/sign-up"}>
        <Text
          fontSize={14}
          color="gray.300"
          _hover={{
            color: "teal.400",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          align="center"
          mt={2}
        >
          Ainda não possui uma conta? Cadastre-se
        </Text>
      </Link>
    </Stack>
  );
}
