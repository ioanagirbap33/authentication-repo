import { useContext, useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticated(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch {
      Alert.alert("Authentication failed", "Could not create user");
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
