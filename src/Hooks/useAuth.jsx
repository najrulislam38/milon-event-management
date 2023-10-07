import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

// custom hook
const useAuth = () => {
  // use context api and set all authentication value into variable allAuthentications
  const allAuthentications = useContext(AuthContext);
  return allAuthentications;
};

export default useAuth;
