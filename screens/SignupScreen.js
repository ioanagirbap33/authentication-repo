import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticated(true);
    try {
      await createUser(email, password);
    } catch {
      Alert.alert("Authentication failed", "Could not create user");
    }
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
