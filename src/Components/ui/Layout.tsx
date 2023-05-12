import React, { useState, FC, PropsWithChildren } from "react";
import data from "../../assets/lan/persian.json";
import Style from "./Layout.module.css";
import { TabBar } from "../TabBar/Tabbar";
import { Navbar } from "../Navbar/Navbar";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "./card/Card";
import { Skeleton, Stack } from "@mui/material";
import { DateFormatter, get_all_dates } from "../../utils/DateFormat";
import moment from "moment";
export interface apiModel {
  api_id: string;
  fixtures: any;
  id: string;
  logo: string;
  name: string;
  season: string;
}
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  let irDate = new Date("2023-5-12").toLocaleDateString("fa-IR");
  // const arraye = today.split("/");
  console.log(irDate);

  const { data, isLoading, error } = useFetch();
  const leagueMapHandler = (league: apiModel, index: any) => (
    <Card leagueInfo={league} key={index} />
  );

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <TabBar />
      <div className={`${Style.dFlex} ${Style.contentContainer}`}>
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rectangular" width={370} height={60} />
          </Stack>
        ) : (
          <>{data?.map(leagueMapHandler)}</>
        )}
      </div>
      <Navbar />
    </div>
  );
};
