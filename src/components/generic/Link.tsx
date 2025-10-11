import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  imgSrc?: string;
  imgAlt?: string;
  title: string;
};

const Link: React.FC<LinkProps> = ({ imgSrc, imgAlt, title, ...props }) => {
  return (
    <a {...props} className="btn-secondary">
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-5 h-5" />}
      {title}
    </a>
  );
};
export default Link;
