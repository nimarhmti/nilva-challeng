import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import Style from "./Card.module.css";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { DateFormatter } from "../../../utils/DateFormat";

export interface Props {
  api_id: string;
  fixtures: any;
  id: string;
  logo: string;
  name: string;
  season: string;
}

const subStringLimitation = (text: string) => {
  if (text.length > 10) return text.substring(1, 10) + "...";
  else return text;
};

export const Card = ({ leagueInfo }: any) => {
  const [open, setOpen] = React.useState(true);
  // data destructuring
  const { id, logo, name, fixtures: matches } = leagueInfo;
  const handleClick = () => {
    setOpen(!open);
  };
  //useMap item
  const matchListHandler = (item: any) => (
    <ListItemButton
      sx={{
        height: "1.7rem",
        justifyContent: "center",
        gap: "0.4rem",
        alignItems: "center",
        padding: "0.4rem 0.4rem",
        position: "relative",
      }}
      key={item.id}
    >
      <span className={`${Style.teamTitle} ${Style.homeTeamTitle}`}>
        {subStringLimitation(item.home.name)}
      </span>
      <img
        src={item.home.logo}
        className={`${Style.teamIcon} ${Style.absPositionCenter} ${Style.homeTeamIcon}`}
      />

      <p className={`${Style.time} ${Style.absPositionCenter}`}>
        {DateFormatter(String(item.start_time))}
      </p>

      <img
        src={item.away.logo}
        className={`${Style.teamIcon} ${Style.absPositionCenter} ${Style.awayTeamIcon}`}
      />
      <span className={`${Style.awayTeamTitle} ${Style.teamTitle}`}>
        {subStringLimitation(item.away.name)}
      </span>
    </ListItemButton>
  );

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
      component="div"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        onClick={handleClick}
        sx={{
          justifyContent: "space-between",
          borderBottom: "1px solid #495057",
        }}
      >
        <div className={`${Style.dFlex}`}>
          <img src={logo} className={Style.teamIcon} />
          <h6 style={{ color: "#4c6ef5", fontSize: "0.5rem" }}>{name}</h6>
        </div>
        {open ? (
          <ExpandLess sx={{ fontSize: "1rem" }} color="action" />
        ) : (
          <ExpandMore sx={{ fontSize: "1rem" }} color="action" />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List
          component="div"
          disablePadding
          sx={{
            maxHeight: 200,
            overflow: "auto",
            padding: "0 0.4rem",
          }}
        >
          {matches.map(matchListHandler)}
        </List>
      </Collapse>
    </List>
  );
};
