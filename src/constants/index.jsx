import { BotMessageSquare } from "lucide-react";
import { AppWindow } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import projectImg1 from "../assets/project_01.png"
import cypressImg from "../assets/image-cypress.jpg"

export const navItems = [
  { label: "Sobre mim", href: "#" },
  { label: "Projetos", href: "#" },
  { label: "Contatos", href: "#" }
];

export const contacts = [
  {
    icon: <BotMessageSquare />,
    text: "E-mail",
    description:
      "matheus2050@gmail.com",
  },
  {
    icon: <BotMessageSquare />,
    text: "WhatsApp",
    description:
      "(62)98167-8333",
  },
  {
    icon: <BotMessageSquare />,
    text: "Github",
    description:
      "https://github.com/MatheusDosSantosR",
  },
];

export const projects = [
  {
    icon: <AppWindow />,
    id:"project",
    text: "Landing page",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    image: projectImg1
  }, {
    icon: <AppWindow />,
    text: "Landing page 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    image: projectImg1
  },
  {
    icon: <AppWindow />,
    text: "Landing page 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    image: projectImg1
  }
];


export const abilitys = [
  {
    title: "Cypress",
    img: cypressImg,
  },
  {
    title: "Cypress",
    img: cypressImg,
  },
  {
    title: "Cypress",
    img: cypressImg,
  },
  {
    title: "Cypress",
    img: cypressImg,
  },
  {
    title: "Cypress",
    img: cypressImg,
  },
  {
    title: "Cypress",
    img: cypressImg,
  },
  {
    title: "Cypress",
    img: cypressImg,
  }
];