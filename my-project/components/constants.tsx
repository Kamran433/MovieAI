import { Icon } from "@iconify/react";
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Movies",
    path: "/Movies",
    icon: <Icon icon="lucide:popcorn" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Director", path: "/Director" },
      { title: "Cast", path: "/Cast" },
      { title: "Country", path: "/Country" },
    ],
  },
  {
    title: "TV-Shows",
    path: "/TV-Shows",
    icon: <Icon icon="lucide:tv" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Director", path: "/Director" },
      { title: "Cast", path: "/Cast" },
      { title: "Country", path: "/Country" },
    ],
  },
  {
    title: "Cartoons",
    path: "/Cartoons",
    icon: <Icon icon="lucide:baby" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Director", path: "/Director" },
      { title: "Cast", path: "/Cast" },
      { title: "Country", path: "/Country" },
    ],
  },
  {
    title: "Anime",
    path: "/Anime",
    icon: <Icon icon="lucide:sword" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Director", path: "/Director" },
      { title: "Cast", path: "/Cast" },
      { title: "Country", path: "/Country" },
    ],
  },
];
