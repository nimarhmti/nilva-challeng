import React, { useState, FC, PropsWithChildren } from "react";
import data from "../../assets/lan/persian.json";
import { TabBar } from "../TabBar/Tabbar";
import { Navbar } from "../Navbar/Navbar";
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <TabBar />
      <div>content</div>
      <Navbar />
    </div>
  );
};
