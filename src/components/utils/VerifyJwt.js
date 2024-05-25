import { jwtDecode } from "jwt-decode";

export const VerifyJwt = (token) => {
  return jwtDecode(token);
};