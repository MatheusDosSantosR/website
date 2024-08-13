import { BotMessageSquare } from "lucide-react";
import { AppWindow } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import project01 from "../assets/projects/project_01.png"
import cyLogo from "../assets/logos/cypress.svg"
import postmanLogo from "../assets/logos/postman.svg"
import k6Logo from "../assets/logos/k6.svg"
import reactLogo from "../assets/logos/react.svg"
import tsLogo from "../assets/logos/ts.svg"
import dockerLogo from "../assets/logos/docker.svg"
import jenkinsLogo from "../assets/logos/jenkins.svg"

export const navItems = [
  { label: "Sobre mim", href: "about" },
  { label: "Projetos", href: "#project" },
  { label: "Contatos", href: "contact" }
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
    text: "Gerador de pessoa",
    description: "Criação de um projeto para geracao de pessoa, para utilizar em testes manuais. Tecnolias utilizadas React, TypeScript.",
    image: project01
  }, {
    icon: <AppWindow />,
    text: "WebSite BlueCount",
    description:
      "Criação do website da BlueCount utilizando React, TypeScript é Tailwind.",
    image: project01
  },
  {
    icon: <AppWindow />,
    text: "Landing page para BlueCount para Profissionais da saude",
    description: "Landing page com foco em pessoas da area de saude utilizando wordpress",
    image: project01
  }
];


export const abilitys = [
  {
    title: "Cypress",
    img: cyLogo,
  },
  {
    title: "Postman",
    img: postmanLogo,
  },
  {
    title: "K6",
    img: k6Logo,
  },
  {
    title: "React",
    img: reactLogo,
  },
  {
    title: "TypeScript",
    img: tsLogo,
  },
  {
    title: "Docker",
    img: dockerLogo,
  },
  {
    title: "Jenkins",
    img: jenkinsLogo,
  }
];