import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticated(true);
    await createUser(email, password);
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
