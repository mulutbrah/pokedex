import React from "react";

import "./style.scss";
import { capitalize } from "../../utils/helpers";

interface ITag {
  text: string;
  className: string
}

const Tag: React.FC<ITag> = ({ text, className }) => {
  return (
    <div className={`tag ${className}`}>
      { capitalize(text) }
    </div>
  );
};

export default Tag;
