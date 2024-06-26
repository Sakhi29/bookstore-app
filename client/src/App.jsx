import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import { AuthContextProvider } from "./context/AuthProvider";
import Protected from "./context/Protected";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/main"
            element={
              <Protected>
                <Main />
              </Protected>
            }
          />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
