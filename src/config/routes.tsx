import text from "../assets/lan/persian.json";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsOutlinedIcon from "@mui/icons-material/SportsOutlined";
export interface routesModel {
  label: string;
  id: string;
  path: string;
  icon: React.ReactNode | string;
}

const Style = {
  fontSize: "1.15rem",
};

export const routes: routesModel[] = [
  {
    label: text.ROUTES.PROFILE,
    id: "4",
    path: "#",
    icon: <PersonOutlineIcon sx={Style} />,
  },
  {
    label: text.ROUTES.LEAGUE,
    id: "3",
    path: "#",
    icon: <EmojiEventsIcon sx={Style} />,
  },
  {
    label: text.ROUTES.SOCCER,
    id: "2",
    path: "#",
    icon: <SportsSoccerIcon sx={Style} />,
  },
  {
    label: text.ROUTES.DISCOVERIES,
    id: "1",
    path: "#",
    icon: <ExploreIcon sx={Style} />,
  },
  {
    label: text.ROUTES.COMPETITIONS,
    id: "0",
    path: "#",
    icon: <SportsOutlinedIcon sx={Style} />,
  },
];
