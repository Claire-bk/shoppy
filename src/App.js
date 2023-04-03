import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {/* <QueryClientProvider client={queryClient}> */}
        <Outlet />
        {/* </QueryClientProvider> */}
      </AuthContextProvider>
    </>
  );
}

export default App;
