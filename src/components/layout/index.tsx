import Header from "./Header";
import { Outlet } from "react-router-dom";

const UserLayout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
