import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";

import app from "../../../firebase.config";
import { Button } from "@nextui-org/button";
import { VerifyJwt } from "../utils/VerifyJwt";
import { setUserInfo } from "../../redux/features/auth/authSlice";
import { useSignUpUserMutation } from "../../redux/features/user/User.api";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
// main component
const GoogleLogin = () => {
  const [register, { isLoading }] = useSignUpUserMutation();

  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    console.log("clicked");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const loggedUser = result.user;
      // console.log(loggedUser, "after sign up");
      const userData = {
        displayName: loggedUser.displayName,
        photoURL: loggedUser.photoURL,
        email: loggedUser.email,
        coin: 50,
      };

      const res = await register(userData).unwrap();
      console.log(res, "user data after save into db");
      const token = res.data.token;
      console.log(token, "token from res");

      const user = VerifyJwt(token);

      // in redux state

      dispatch(setUserInfo({ user: user, token: token }));
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div>
      <Button onClick={handleGoogleSignIn} color="primary">
        Login
      </Button>
    </div>
  );
};

export default GoogleLogin;
