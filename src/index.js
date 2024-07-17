import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./contexts/UserContext";

import "./styles.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <App />
            </UserProvider>
        </QueryClientProvider>
    </ErrorBoundary>
);