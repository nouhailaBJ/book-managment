import React from "react";
import Title from "../Title";

function Information({userData}) {
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
          <dd>{userData.name}</dd>
          <dt>
            <strong>Email Address </strong>
          </dt>
          <dd>{userData.email}</dd>
          <dt>
            <strong>Phone Number </strong>
          </dt>
          <dd>(212) {userData.number} </dd>
          <dt>
            <strong>Bio </strong>
          </dt>
          <dd>{userData.bio ? userData.bio : '-----'}</dd>
        </dl>
      </div>
    </div>
  );
}

export default Information;
