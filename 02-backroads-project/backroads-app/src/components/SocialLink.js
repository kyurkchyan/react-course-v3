import React from "react";

const SocialLink = (props) => {
  const { id, itemClass, href, icon } = props;
  return (
    <li key={id}>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
