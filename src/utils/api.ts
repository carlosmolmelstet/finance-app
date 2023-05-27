import Cookies from "js-cookie";

interface ApiProps {
  route: string;
  method: "POST" | "GET" | "PUT" | "DELETE";
  data?: object;
}

type FetchError = {
  message: string;
  statusCode: number;
};
export interface ApiResult<T> {
  succsses: boolean;
  data?: T;
  error?: FetchError;
}

export async function api<T>({
  route,
  method,
  data,
}: ApiProps): Promise<ApiResult<T>> {
  const token = Cookies.get("finance_token");
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  };

  const result = await fetch(`http://localhost:3333/${route}`, options);

  if (result.ok) {
    return {
      succsses: true,
      data: await result.json(),
    };
  } else {
    return {
      succsses: false,
      error: await result.json(),
    };
  }
}
