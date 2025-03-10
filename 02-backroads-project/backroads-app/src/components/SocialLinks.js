import React from "react";
import { socialLinks } from "../data";
const SocialLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className={itemClass}
              rel="noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
