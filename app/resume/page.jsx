"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import {
  SiMysql,
  SiMongodb,
  SiTypeorm,
  SiApachekafka,
  SiSwagger,
  SiJira,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss, SiNextdotjs, SiNestjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const ResumePage = () => {
  const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
      "With a proven track record, I have contributed to key projects, enhancing my expertise in full stack development, backend architecture, and API integrations.",
    items: [
      {
        company: "ConvexTech",
        position: "Backend Developer",
        duration: "Feb 2024 - Present",
      },
      {
        company: "Systems Limited",
        position: "Nodejs Internship",
        duration: "Jun 2023 - Aug 2023",
      },
      {
        company: "Computer Friends IT Services Ltd",
        position: "Remote Reactjs Developer",
        duration: "Nov 2022 - May 2023",
      },
      {
        company: "LimeCircles",
        position: "MERN Stack Developer",
        duration: "Feb 2022 - Oct 2022",
      },
    ],
  };

  const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
      "With a strong academic foundation, I have gained the knowledge and skills necessary to excel in full stack development and modern web technologies.",
    items: [
      {
        institution: "University of Gujrat",
        degree: "Bachelor of Computer Science",
        duration: "2018 - 2022",
      },
      {
        institution: "Punjab College Wazirabad",
        degree: "FSC (Pre-Engineering)",
        duration: "2016 - 2018",
      },
      {
        institution: "Sir Syed Pilot High School",
        degree: "Matriculation",
        duration: "2016",
      },
    ],
  };

  const skills = {
    title: "My Skills",
    description:
      "Below are the technical skills I have mastered and apply to deliver high-quality, scalable web solutions.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind css",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <TbBrandRedux />,
        name: "redux",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <BiLogoTypescript />,
        name: "typecript",
      },
      {
        icon: <SiNestjs />,
        name: "nestjs",
      },
      {
        icon: <FaGithub />,
        name: "github",
      },
      {
        icon: <SiApachekafka />,
        name: "kafka",
      },
      {
        icon: <SiSwagger />,
        name: "swagger",
      },
      {
        icon: <SiJira />,
        name: "jira",
      },
      {
        icon: <SiMysql />,
        name: "mysql",
      },
      {
        icon: <BiLogoPostgresql />,
        name: "postgres",
      },
      {
        icon: <SiMongodb />,
        name: "mongoDB",
      },
      {
        icon: <SiTypeorm />,
        name: "typeorm",
      },
      {
        icon: <FaWordpress />,
        name: "wordpress",
      },
      {
        icon: <FaShopify />,
        name: "shopify",
      },
    ],
  };

  const about = {
    title: "About me",
    description:
      "As a dedicated Full Stack Developer, here are my personal details for your reference.",
    info: [
      { fieldName: "Name", fieldValue: "Ahmad Siddiqui" },
      { fieldName: "Phone", fieldValue: "+92 3097890103" },
      { fieldName: "Experience", fieldValue: "2+ Years" },
      { fieldName: "Skype", fieldValue: "live:.cid.aceb7e8d928e1874" },
      { fieldName: "Nationality", fieldValue: "Pakistani" },
      { fieldName: "Email", fieldValue: "reachahmadsiddiqui@gmail.com" },
      { fieldName: "On Site Job", fieldValue: "Available" },
      { fieldName: "Languages", fieldValue: "English, Urdu" },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent className="w-full" value="education">
              <TabsContent className="w-full" value="education">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 ">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </TabsContent>
            {/* Skills */}
            <TabsContent className="w-full h-full" value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              className="w-full text-center xl:text-left"
              value="about"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
