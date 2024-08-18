// About.tsx
"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";
import { Tabs } from "../components/ui/tabs";
import { IconBrandLinkedin, IconBrandGithub, IconBrandX, IconBrandInstagram, IconPhone, IconMail } from "@tabler/icons-react";

export const aboutme = [
  {
    name: "MERAJUL HAQUE",
    description:
      "My name is Merajul Haque and I am a UI Designer, and I'm very passionate and dedicated to my work. With 3 years experience as a UI designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration."
  },
  {
    // title: "Socials",
    socials: [
      {
        id: 1,
        name: "LinkedIn",
        icon: (
          <IconBrandLinkedin className="text-sky-500 text-sky-500 h-8 w-8" />),
        href: "https://www.linkedin.com/in/haque/",
      },
      {
        id: 2,
        name: "GitHub",
        icon: (
          <IconBrandGithub className="text-neutral-500 text-neutral-300  h-8 w-8" />),
        href: "#",
      },
      {
        id: 3,
        name: "Twitter",
        icon: (
          <IconBrandX className="text-sky-500 text-sky-500 h-8 w-8" />),
        href: "https://twitter.com/haquedot",
      },
      {
        id: 4,
        name: "Instagram",
        icon: (
          <IconBrandInstagram className="text-red-500 text-red-300 h-8 w-8" />),
        href: "https://www.instagram.com/haquedot/",
      },
      {
        id: 5,
        name: "Phone",
        icon: (
          <IconPhone className="text-neutral-500 text-neutral-300 h-8 w-8" />
        ),
        href: "tel:+91 1234567890"
      },
      {
        id: 6,
        name: "Email",
        icon: (
          <IconMail className="text-neutral-500 text-neutral-300 h-8 w-8" />
        ),
        href: "mailto:haquedot@gmail.com",
      },
      // ...other socials

    ]
  },
];

export const experience = [
  {
    title: "Intern",
    company: "MeitY Project MANUU",
    duration: "Mar 2024 – Jun 2024",
    description:
      "Worked as a frontend developer to develop the CMS dashboard of www.edeekshaam.in...",
  },
  {
    title: "Intern",
    company: "MeitY Project MANUU",
    duration: "Mar 2024 – Jun 2024",
    description:
      "Worked as a frontend developer to develop the CMS dashboard of www.edeekshaam.in...",
  }
  // ...other experience details
];


export const education = [
  {
    title: "B.tech(LE) Computer Science",
    company: "Maulana Azad National Urdu University, Hyderabad",
    duration: "Oct 2022 - May 2025",
    cgpa: "8.67/10 (Till 6th semesters)",
    description: "Currently pursuing.",
  },
  {
    title: "Diploma in Computer Science",
    company: "Maulana Azad National Urdu University, Hyderabad",
    duration: "Aug 2019 - Aug 2022",
    cgpa: "9.78/10",
    description: "Secured 1st position in the university.",
  }
  // ...other education details
];

export function About() {
  const tabs = [
    {
      title: "About Me",
      value: "About Me",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-3 md:p-10 text-white bg-neutral-900">
          <AboutMe />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "Experience",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-3 md:p-10 text-white bg-neutral-900">
          <Experience />
        </div>
      ),
    },
    {
      title: "Education",
      value: "Education",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-3 md:p-10 text-white bg-neutral-900">
          <Education />
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start py-4 md:py-12 px-4">
      <Tabs tabs={tabs} />
    </div>
  );
}

export function AboutMe() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={aboutme} />
    </div>
  );
}
export function Experience() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={experience} />
    </div>
  );
}
export function Education() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={education} />
    </div>
  );
}