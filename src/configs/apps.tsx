import Bear from "~/components/apps/Bear";
import Quicktime from "~/components/apps/Quicktime";
import VSCode from "~/components/apps/VSCode";
import Photos from "~/components/apps/Photos";
import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "bear",
    title: "About",
    desktop: true,
    width: 860,
    height: 500,
    show: true,
    y: -40,
    img: "img/icons/cat_icon.png",
    content: <Bear />
  },
  {
    id: "vscode",
    title: "Spotify",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/Spotify_App_Logo.png",
    content: <VSCode />
  },
  {
    id: "quicktime",
    title: "QuickTime",
    desktop: true,
    width: 540,
    height: 310,
    x: 80,
    y: -30,
    img: "img/icons/quicktime.png",
    content: <Quicktime />
  },
  {
    id: "photos",
    title: "Photos",
    desktop: true,
    width: 900,
    height: 600,
    x: 80,
    y: -30,
    img: "img/icons/apple-photos.png",
    content: <Photos />
  }
];

export default apps;
