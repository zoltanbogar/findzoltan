"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import {useTranslations} from "next-intl";
import cvBuilderImg from "@/public/cv-builder.png";
import chefImg from "@/public/chef.png";
import smartImg from "@/public/smart.png";
import primaImg from "@/public/primaenergia.png";
import fkImg from "@/public/fk.png";
import hitelImg from "@/public/hitel.png";
import bmiImg from "@/public/bmi.png";
import suImg from "@/public/su.png";
import otImg from "@/public/ot.png";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const t = useTranslations('Projects');

  const projectsData = [
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

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t('title')}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}