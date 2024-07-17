import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import ApplicationForm from "./pages/ApplicationForm.js";
import LoginForm from "./pages/Login";
import { useState } from "react";
import {
  credentailContext,
  userContext,
  sidebarContext,
} from "./context/context.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "./components/ErrorBoundary.js";

function App() {
  const [credentail, setCredentail] = useState(null);
  const [user, setUser] = useState(null);
  const queryClient = new QueryClient();

  const setValue = (value) => {
    setCredentail(value);
  };

  const setuser = (value) => {
    setUser(value);
  };

  const [sidebaropen, setSidebaropen] = useState(false);

  const dropdown = () => {
    console.log("YUgvh");
    setSidebaropen(!sidebaropen);
  };

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <credentailContext.Provider value={{ credentail, setValue }}>
          <userContext.Provider value={{ user, setuser }}>
            {" "}
            <div className="App">
              <Navbar props={dropdown} />
              <div className="sm:flex">
                <div
                  className={` sm:block ${sidebaropen ? "block" : "hidden"}`}
                >
                  <Sidebar props={dropdown} className="sm:h-screen" />
                </div>
                <Outlet className="justify-center" />
              </div>
            </div>
          </userContext.Provider>
        </credentailContext.Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
