import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticated(true);
    try {
      await login(email, password);
    } catch {
      Alert.alert("Authentication failed", "Could not log you in");
    }
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
