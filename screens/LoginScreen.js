import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";

function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticated(true);
    await login(email, password);
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
