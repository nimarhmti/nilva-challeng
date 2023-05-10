import React, { useState } from "react";
import Style from "./Tabbar.module.css";
import text from "../../assets/lan/persian.json";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Typography,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Box,
  createTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
interface item {
  label: string;
  value: string;
}

const league_item: item[] = [
  { label: "لیبل اول", value: "one" },
  { label: "لیبل اول", value: "two" },
  { label: "لیبل اول", value: "three" },
  { label: "لیبل اول", value: "four" },
  { label: "لیبل اول", value: "five" },
];

// let theme = createTheme({
//   components: {
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           "&.Mui-selected": {
//             backgroundColor: "#fff",
//             color: "#000",
//           },
//         },
//       },
//     },
//   },
// });
export const TabBar = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const leagueMapHandler = (item: any, index: any) => (
    <Tab
      label={item.label}
      key={index}
      value={item.value}
      sx={{ fontSize: "0.7rem" }}
    />
  );
  return (
    <nav className={`${Style.dFlex} ${Style.navbar}`}>
      <div className={`${Style.dFlex} ${Style.titleSection}`}>
        <h5>{text.NAVIGATION.LIVE_RESULTS}</h5>
        <AccessTimeIcon />
      </div>
      <TextField
        placeholder={text.NAVIGATION.SEARCH_PLACEHOLDER}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: "1rem" }} />
            </InputAdornment>
          ),
          style: {
            height: "1.5rem",
            margin: "0 0.5rem",
          },
        }}
      />
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
              display: "flex",
              width: "20px",
            },
          }}
          aria-label="secondary tabs example"
          scrollButtons={false}
        >
          {league_item.map(leagueMapHandler)}
        </Tabs>
      </Box>
    </nav>
  );
};
