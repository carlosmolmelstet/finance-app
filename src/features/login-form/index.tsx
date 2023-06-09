import { useAuth } from "@/context/auth.context";
import { Button } from "@chakra-ui/react";

export default function LoginForm() {
  const { login } = useAuth();

  function handleLogin() {
    alert("Login");

    login({
      token: "token",
      user: {
        name: "name",
        email: "email",
        avatar_url: "avatar_url",
        id: "id",
      },
    });
  }

  return <Button onClick={handleLogin}>10 K</Button>;
}
