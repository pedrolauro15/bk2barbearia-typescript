import React from "react";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/authContext"; //first commit

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
