import { ILoginResponse } from "@/services/finance-api/auth/sign-in";
import { ApiResult } from "./api";
import { ISignUpResponse } from "@/services/finance-api/auth/sign-up";
import Cookies from "js-cookie";

export function login(result: ApiResult<ILoginResponse | ISignUpResponse>) {
  if (result.succsses) {
    if (result.data?.token) {
      Cookies.set("finance_token", result.data?.token, { expires: 7 });
      window.location.href = "/dashboard";
    }
  } else {
    console.log(result.error?.statusCode);
    alert("erro");
  }
}
