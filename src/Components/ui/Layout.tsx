import React, { useState, FC, PropsWithChildren } from "react";
import data from "../../assets/lan/persian.json";
import Style from "./Layout.module.css";
import { TabBar } from "../TabBar/Tabbar";
import { Navbar } from "../Navbar/Navbar";
import { error } from "console";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "./card/Card";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { data, isLoading, error } = useFetch();
  if (isLoading) return <p>...</p>;
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <TabBar />
      <div className={`${Style.dFlex} ${Style.contentContainer}`}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Navbar />
    </div>
  );
};
