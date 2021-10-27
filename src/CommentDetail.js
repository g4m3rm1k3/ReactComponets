import React from "react";

const CommentDetail = ({ name, title, date, img }) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={img} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
