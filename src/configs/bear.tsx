import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "About Us",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "Brian",
        title: "Brian",
        file: "markdown/about-brian.md",
        icon: "i-la:dragon",
        excerpt: "I am Brian and I like to do stuff..."
      },
      {
        id: "Bryant",
        title: "Bryant",
        file: "markdown/about-bryant.md",
        icon: "i-fa-solid:horse-head",
        excerpt: "Hey there! I'm Bryant, I enjoy things"
      },
      {
        id: "Yuki",
        title: "Yuki",
        file: "markdown/about-yuki.md",
        icon: "i-fa-solid:cat",
        excerpt: "Meowww"
      },
      {
        id: "Tobio",
        title: "Tobio",
        file: "markdown/about-tobio.md",
        icon: "i-la:cat",
        excerpt: "MAAAAWWWWWWWWWW"
      }
    ]
  }
];

export default bear;
