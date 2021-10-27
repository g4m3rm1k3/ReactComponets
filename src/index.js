import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard
        detail={
          <CommentDetail
            key={1}
            name={"mike"}
            title={"Hello blog"}
            img={faker.image.avatar()}
            date={new Date().toDateString()}
          />
        }
      />

      <CommentDetail
        key={1}
        name={"Sam"}
        title={"My comment"}
        img={faker.image.avatar()}
        date={new Date().toDateString()}
      />
      <CommentDetail
        key={1}
        name={"Jane"}
        title={"You're comment"}
        img={faker.image.avatar()}
        date={new Date().toDateString()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
