import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "@/context/contextFile.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <ContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
