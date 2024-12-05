"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AhmadSiddiquiHub" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ahmad-siddiqui-38609323a/",
  },
  { icon: <FaTwitter />, path: "https://x.com/AHMADSI80716803" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
