import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout";
import UserHome from "./pages/home";
import UserServices from "./pages/services";
import AccountPage from "./pages/account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to="/user/home"/>}></Route>
        <Route path="/" element={<UserLayout />}>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/services" element={<UserServices />} />
          <Route path="/user/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
