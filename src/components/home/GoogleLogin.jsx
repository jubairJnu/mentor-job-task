import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../redux/slices/authSlice';
import app from "../../../firebase.config";
import { Button } from "@nextui-org/button";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const GoogleLogin = () => {
  // const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    console.log("clicked");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user, "after sign up");
      const userData = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        coin: 50,
      };

      const response = await fetch("http://localhost:3000/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const data = await response.json();
      console.log(data, "user data after save into db");
      const { token } = data;

      localStorage.setItem("token", token);
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
