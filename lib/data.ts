import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import cvBuilderImg from "@/public/cv-builder.png";
import primaImg from "@/public/primaenergia.png";
import hitelImg from "@/public/hitel.png";
import bmiImg from "@/public/bmi.png";
import smartImg from "@/public/smart.png";
import fkImg from "@/public/fk.png";
import chefImg from "@/public/chef.png";
import suImg from "@/public/su.png";
import otImg from "@/public/ot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer, Technical Team Lead",
    location: "MX Net (HU)",
    description:
      "Databases · Representational State Transfer (REST) · Front-End Development · Software Development",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "Full-Stack Developer",
    location: "KayakFirst (HU)",
    description:
      "Angular · Symfony · Doctrine · PostgreSQL · InfluxDB · Firebase · Swift · Agile",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Senior Software Engineer, BA",
    location: "Zengo (HU)",
    description: "ReactJs · Angular · Laravel · PyroCMS · MSSql · MySQL · Agile",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Senior Software Engineer",
    location: "Adroit Group (HU)",
    description: "Angular · Symfony · Doctrine · MySQL",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Senior Software Engineer",
    location: "EPAM Systems (INT)",
    description: "ReactJs · Drupal · PostgreSQL · Figma · Sketch · AdobeXD · Agile · TDD",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Senior Software Engineer",
    location: "AionHill (HU)",
    description: "Magento2 · KnockoutJs · Figma · Agile",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Senior Software Engineer",
    location: "Rackhost Zrt. (HU)",
    description: "Yii2 · MySQL",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Senior Software Engineer",
    location: "3ev (UK)",
    description: "Typo3 · WordPress · Elasticsearch · Laravel · Docker · Salesforce · Docker · PhpUnit",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Technical Team Lead, DM",
    location: "Voodoo Park (UK)",
    description: "ReactJs · MSAzure · Agile · .Net · PHP · Drupal · Figma · Adobe XD · Zeplin · Agile · TDD · Cypress · Jest · Docker",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "SA",
    location: "MBH (HU)",
    description: "SAS AML · Agile",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Tech Lead",
    location: "Heureka (CZ)",
    description: "ReactJs · GCP · Terraform · RabbitMQ · PHP · Laravel · Agile · GitLab CI · TDD · Cypress · PhpUnit · Miro · Kubernetes · Docker",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CV Builder",
    description:
      "I created this side project to easily build and customize my own CV when needed.",
    tags: ["React", "Next.js", "Firebase", "Tailwind"],
    imageUrl: cvBuilderImg,
  },
  {
    title: "My Sous Chef",
    description:
      "My own project that helps anybody to schedule their meal plans and shopping sprees.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Nest.js", "Express", "Zustand", "PostgreSQL"],
    imageUrl: chefImg,
  },
  {
    title: "Smart Home Doctor",
    description:
      "My own project that helps anybody to build their own dream smart home.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Strapi", "Express", "Zustand", "PostgreSQL"],
    imageUrl: smartImg,
  },
  {
    title: "Primaenergia",
    description:
      "A project I helped design and build from the ground up.",
    tags: ["React", "Laravel", "PyroCMS", "MySQL"],
    imageUrl: primaImg,
  },
  {
    title: "KabiCare",
    description:
      "A project I helped design and build from the ground up.",
    tags: ["React", "Redux", "Drupal", "MaterialUI", "MySQL"],
    imageUrl: fkImg,
  },
  {
    title: "Hitel",
    description:
      "A project I helped design and build from the ground up.",
    tags: ["React", "Laravel", "MySQL"],
    imageUrl: hitelImg,
  },
  {
    title: "BMI",
    description:
      "A project I helped design and build from the ground up.",
    tags: ["React", "Drupal", "PostgreSQL"],
    imageUrl: bmiImg,
  },
  {
    title: "Sing Up",
    description:
      "A project I helped design and build from the ground up.",
    tags: ["React", "Drupal", "PostgreSQL", "Vue.js", "Docker"],
    imageUrl: suImg,
  },
  {
    title: "Oliver's Travels",
    description:
      "A project I helped design and build from the ground up.",
    tags: ["Laravel", "Typo3", "PostgreSQL", "Vue.js", "Docker"],
    imageUrl: otImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Nest.js",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "PHP",
  "Drupal",
  "Wordpress",
  "Typo3",
  "Laravel",
  "Symfony",
  "Doctrine",
  "RabbitMQ",
  "MsAzure",
  "GCP",
  "Terraform",
  "Yii2",
  "Salesforce",
  "Kubernetes",
  "Docker",
  "Framer Motion",
] as const;