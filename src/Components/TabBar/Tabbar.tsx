import React, { useState } from "react";
import Style from "./Tabbar.module.css";
import text from "../../assets/lan/persian.json";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tabs, Tab, Box, createTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { persianDateGenerator } from "../../utils/DateFormat";
interface item {
  label: string;
  value: string;
}
interface Props {
  changeDate: (Date: string) => void;
}

const league_item: item[] = [
  { label: "لیبل اول", value: "one" },
  { label: "لیبل اول", value: "two" },
  { label: "لیبل اول", value: "three" },
  { label: "لیبل اول", value: "four" },
  { label: "لیبل اول", value: "five" },
];

const SX_STYLE = {
  fontSize: "1.2rem",
  position: "absolute",
  right: "0.6rem",
  transform: "rotateY(3.142rad)",
  color: "#adb5bd",
};

export const TabBar = ({ changeDate }: Props) => {
  const [value, setValue] = useState<number>(1);
  const DATES = persianDateGenerator();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const leagueMapHandler = (item: any) => (
    <Tab
      label={item.label}
      key={item.id}
      sx={{ fontSize: "0.7rem" }}
      onClick={() => changeDate(item.id)}
    />
  );
  return (
    <nav className={`${Style.dFlex} ${Style.navbar}`}>
      <div className={`${Style.dFlex} ${Style.titleSection}`}>
        <h5>{text.NAVIGATION.LIVE_RESULTS}</h5>
        <AccessTimeIcon />
      </div>
      <div className={`${Style.dFlex} ${Style.inputBox}`}>
        <SearchIcon sx={SX_STYLE} />
        <input type="text" placeholder={text.NAVIGATION.SEARCH_PLACEHOLDER} />
      </div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#5B9A3F",
              height: "0.15rem",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            },
          }}
          aria-label="secondary tabs example"
          scrollButtons={false}
        >
          {DATES.map(leagueMapHandler)}
        </Tabs>
      </Box>
    </nav>
  );
};
