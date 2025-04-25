import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import AppRoutes from "./routes";

const App = () => (
  <LanguageProvider>
    <AppRoutes />
  </LanguageProvider>
);

export default App;