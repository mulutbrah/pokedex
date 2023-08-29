import React from "react";

import "./style.scss";

interface ITag {
  text: string;
  className: string
}

const Tag: React.FC<ITag> = ({ text, className }) => {
  return (
    <div className={`tag ${className}`}>
      { text }
    </div>
  );
};

export default Tag;
