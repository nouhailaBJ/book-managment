import React from "react";
import Information from "../components/Profile/Information";
import HeaderUser from "../components/Profile/HeaderUser";
import EditProfile from "../components/Profile/EditProfile";

function Profile({editibale}) {
  return (
    <section className="section-padding gray">
      <div className="container">
        <div className="row">
					<HeaderUser editibale={editibale} />
					{editibale ?
					(
						<EditProfile />
					)
					: (
						<Information />
					)
					}
					
        </div>
      </div>
    </section>
  );
}

export default Profile;
