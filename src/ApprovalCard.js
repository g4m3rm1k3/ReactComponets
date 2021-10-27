import React from "react";

const ApprovalCard = ({ detail }) => {
  return (
    <div className="ui card">
      <div className="content">{detail}</div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
