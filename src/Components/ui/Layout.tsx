import React, { useState, FC, PropsWithChildren } from "react";

import Style from "./Layout.module.css";
import { TabBar } from "../TabBar/Tabbar";
import { Navbar } from "../Navbar/Navbar";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "./card/Card";
import { Skeleton, Stack } from "@mui/material";
import { formatDateToY_M_D } from "../../utils/DateFormat";
export interface apiModel {
  api_id: string;
  fixtures: any;
  id: string;
  logo: string;
  name: string;
  season: string;
}
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  //first of all get current date
  const toDay = new Date();
  const [searchInput, setSearchInput] = useState<string>("");
  const [date, setDate] = useState<string>(formatDateToY_M_D(toDay));

  const changDateHandler = (Date: string) => {
    setDate(Date);
  };
  const { data, isLoading, error } = useFetch("/api/football/fixtures/", date);
  const leagueMapHandler = (league: apiModel, index: any) => (
    <Card leagueInfo={league} key={index} />
  );

  return (
    <div style={{ width: "100%" }}>
      <TabBar changeDate={changDateHandler} />
      <div className={`${Style.dFlex} ${Style.contentContainer}`}>
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rectangular" width={370} height={60} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rectangular" width={370} height={60} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rectangular" width={370} height={60} />
            <Skeleton variant="rectangular" width={370} height={60} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="rectangular" width={370} height={60} />
            <Skeleton variant="rectangular" width={370} height={60} />
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
