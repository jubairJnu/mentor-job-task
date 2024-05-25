import { Button } from "@nextui-org/button";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/auth/authSlice";

const auth = getAuth();
const LogOut = () => {

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await signOut(auth);
    await dispatch(logOut());
  };

  return (
    <div>
      <Button onClick={handleLogOut} color="danger" size="md" >
        Logout
      </Button>
    </div>
  );
};

export default LogOut;
