import React from "react";
import Title from "../Title";

function Information() {
  return (
    <div className="col-md-12 mt-5">
      <div className="profile-edit">
        <Title
          title="Manage your profile and your informations"
          desc="You can change your information any time you want from settings"
        />
        <dl className="dl-horizontal">
          <dt>
            <strong>Your name </strong>
          </dt>
          <dd>John Doe</dd>
          <dt>
            <strong>Email Address </strong>
          </dt>
          <dd>contact@scriptsbundle.com</dd>
          <dt>
            <strong>Phone Number </strong>
          </dt>
          <dd>(0423) 12-2345-789</dd>
          <dt>
            <strong>Bio </strong>
          </dt>
          <dd>England</dd>
        </dl>
      </div>
    </div>
  );
}

export default Information;
