import "./blogItem.scss";

import React from "react";

export const BlogItem = ({ date, title }) => {
  return (
    <>
      <div className="blog-item">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
      </div>
    </>
  );
};
