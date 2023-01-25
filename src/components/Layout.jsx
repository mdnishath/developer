import React from "react";
import Info from "./Info";

const Layout = ({ children }) => {
  return (
    <div className=" bg-cover bg-no-repeat px-4 dark:bg-bg sm:px-0">
      <div className="flex h-screen items-center"> {children}</div>
      <Info />
    </div>
  );
};

export default Layout;
