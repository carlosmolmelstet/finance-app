import LoginForm from "@/features/login-form";
import AuthenticatedLayout from "../_layout/Authenticated/Authenticated.layout";
import { AuthContextProvider } from "@/context/auth.context";

export default function LoginPage() {
  return <LoginForm />;
}
