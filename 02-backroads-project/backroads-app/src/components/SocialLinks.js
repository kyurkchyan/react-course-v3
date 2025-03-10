import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";
const SocialLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <SocialLink
            key={link.id}
            itemClass={itemClass}
            href={link.href}
            icon={link.icon}
          />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
